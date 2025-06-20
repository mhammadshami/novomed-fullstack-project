const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.get("/column/:columnId",taskController.getTasksByColumn)
router.post("/",taskController.createTask);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;