const express = require("express");
const router = express.Router();
const columnController = require("../controllers/column.controller");

// get all columns by board
router.get("/board/:boardId", columnController.getColumnsByBoard);

// create a column
router.post("/", columnController.createColumn);

// update column
router.put("/:id", columnController.updateColumn);

// remove column
router.delete("/:id", columnController.deleteColumn);

module.exports = router;
