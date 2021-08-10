const model = require("../models/kanban");

module.exports = {
  readAllCards: async function (req, res, next) {
    try {
      const results = await model.findAllCards();
      res.status(200).send({
        result: "success",
        data: results,
        message: null,
      });
    } catch (err) {
      next(err);
    }
  },
  createTask: function (req, res, next) {
    try {
      const task = req.body;
      // const cardNo = req.params["cardNo"];
      // const result = await model.createTask();
      task.no = Date.now();

      res.status(200).send({
        result: "success",
        data: task,
        message: null,
      });
    } catch (err) {
      next(err);
    }
  },
};
