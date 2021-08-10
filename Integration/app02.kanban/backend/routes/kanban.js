const express = require("express");
const controller = require("../controllers/kanban");

const router = express.Router();

router.route("/cards").get(controller.readAllCards);
router.route("/card/:cardNo/task").get(controller.createTask);

module.exports = router;
