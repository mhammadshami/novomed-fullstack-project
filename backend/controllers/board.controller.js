const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all boards
exports.getAllBoards = async (req, res) => {
  try {
    const boards = await prisma.board.findMany({
      include: { columns: true },
    });
    res.json(boards);
  } catch (error) {
    req.status(500).json({
      error: error.message,
    });
  }
};

// Create new board
exports.createBoard = async (req, res) => {
  const { name } = req.body;
  try {
    const board = await prisma.board.create({
      data: {
        name,
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
  const { name } = req.body;
  try {
    const board = await prisma.board.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.json(board);
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
