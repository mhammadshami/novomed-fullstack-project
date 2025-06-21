const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get all subtasks
exports.getSubtasksByTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const subtasks = await prisma.subtask.findMany({
      where: {
        taskId: parseInt(taskId),
      },
    });
    res.json(subtasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a subtask
exports.createSubtask = async (req, res) => {
  const { title, taskId, isDone } = req.body;
  try {
    const subtask = await prisma.subtask.create({
      data: {
        title,
        taskId: parseInt(taskId),
        isDone: isDone ?? false,
      },
    });
    res.status(201).json(subtask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update subtask
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, isDone } = req.body;
  try {
    const subtask = await prisma.subtask.update({
      where: { id: parseInt(id) },
      data: { title, isDone },
    });
    res.json(subtask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.subtask.delete({
      where: { id: parseInt(id) },
    });
    res.json({
      message: "Subtask deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
