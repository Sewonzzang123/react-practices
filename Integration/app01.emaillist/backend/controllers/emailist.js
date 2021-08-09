const model = require("../models/emaillist");

module.exports = {
  readAll: async function (req, res, next) {
    try {
      const startNo = req.query.no || 0;
      const result = await models.Guestbook.findAll({});
      res.render("index", { list: results || [] });
      res.status(200).send({
        result: "success",
        data: result,
        message: null,
      });
    } catch (err) {
      next(err);
    }
  },
};
