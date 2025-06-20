const express = require("express");
const router = express.Router();
const subtaskController = require("../controllers/subtask.controller");

// get subtasks by task
router.get("/task/:taskId", subtaskController.getSubtasksByTask);

// Create subtask
router.post("/", subtaskController.createSubtask);

// update subtask
router.put("/:id", subtaskController.updateTask);

// delete subtask
router.delete("/:id", subtaskController.deleteTask);

module.exports = router;
