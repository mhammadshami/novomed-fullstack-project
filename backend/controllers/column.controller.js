const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all columns for a board
exports.getColumnsByBoard = async (req, res) => {
  const { boardId } = req.params;

  try {
    const columns = await prisma.column.findMany({
      where: { boardId: parseInt(boardId) },
      include: { tasks: true },
      orderBy: { order: "asc" },
    });
    res.json(columns);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Create new column
exports.createColumn = async (req, res) => {
  const { name, boardId, order } = req.body;
  try {
    const column = await prisma.column.create({
      data: {
        name,
        boardId: parseInt(boardId),
        order,
      },
    });
    res.status(201).json(column);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Update column
exports.updateColumn = async (req, res) => {
  const { id } = req.params;
  const { name, order } = req.body;
  try {
    const column = await prisma.column.update({
      where: { id: parseInt(id) },
      data: { name, order },
    });
    res.json(column);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete column
exports.deleteColumn = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.column.delete({
      where: { id: parseInt(id) },
    });
    res.json({
      message: "Column deleted successfully!"
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
