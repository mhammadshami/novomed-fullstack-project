const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all boards
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await prisma.board.findMany({
      include: { columns: false, createdAt: false, updatedAt: false },
    });
    res.json(boards);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Create new board
exports.createBoard = async (req, res) => {
  const { name, columns } = req.body;
  try {
    const board = await prisma.board.create({
      data: {
        name,
        columns: {
          create: columns.map((col, index) => ({
            name: col.name,
            order: index,
          })),
        },
      },
      include: {
        columns: true,
      },
    });
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get single board
exports.getBoardById = async (req, res) => {
  const { id } = req.params;
  try {
    const board = await prisma.board.findUnique({
      where: { id: parseInt(id) },
      include: { columns: true },
    });
    if (!board)
      return res.status(404).json({
        error: "Board not found",
      });
    res.json(board);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.updateBoard = async (req, res) => {
  const { id } = req.params;
  const { name, columns } = req.body;

  try {
    const boardId = parseInt(id);

    // get current columns
    const existingColumns = await prisma.column.findMany({
      where: { boardId },
    });

    const incomingIds = columns.filter((col) => col.id).map((col) => col.id);
    const deletedIds = existingColumns
      .filter((col) => !incomingIds.includes(col.id))
      .map((col) => col.id);

    // delete removed columns
    await prisma.column.deleteMany({
      where: {
        id: { in: deletedIds },
      },
    });

    // update existing + create new
    await Promise.all(
      columns.map(async (col, index) => {
        if (col.id) {
          await prisma.column.update({
            where: { id: col.id },
            data: {
              name: col.name,
              order: index,
            },
          });
        } else {
          // create
          await prisma.column.create({
            data: {
              name: col.name,
              order: index,
              boardId,
            },
          });
        }
      })
    );

    // update board name
    const updatedBoard = await prisma.board.update({
      where: { id: boardId },
      data: {
        name,
      },
      include: {
        columns: true,
      },
    });

    res.json(updatedBoard);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteBoard = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.board.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Board deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
