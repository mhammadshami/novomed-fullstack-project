const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get Task by column
exports.getTasksByColumn = async (req, res) => {
  const { columnId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: { columnId: parseInt(columnId) },
      include: { subtasks: true },
      orderBy: { order: "asc" },
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a task
exports.createTask = async (req, res) => {
  const { title, description, columnId, order } = req.body;
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        order,
        columnId: parseInt(columnId),
      },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, columnId, order } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: {
        title,
        description,
        columnId: parseInt(columnId),
        order,
      },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
