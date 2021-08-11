const models = require("../models/Guestbook");

module.exports = {
  create: async function (req, res, next) {
    try {
      const data = await models.create(req.body);
      res.status(200).send({
        // default가 200임
        data: Object.assign(data, {
          password: "", // password는 가려야지
        }),
      });
    } catch (error) {
      next(error);
    }
  },
  read: async function (req, res, next) {
    try {
      const no = req.query.no;
      let results = await models.findAll(no);
      res.status(200).send({
        result: "success",
        data: results,
        message: null,
      });
    } catch (error) {
      next(error);
    }
  },
  delete: async function (req, res, next) {
    try {
      const no = req.params.no;
      const password = req.body.password;
      const result = await models.destroy({
        where: {
          no,
          password,
        },
      });
      if (result == false) {
        res.status(200).send({
          result: "fail",
          data: null,
          message: null,
        });
        return;
      }
      res.status(200).send({
        result: "success",
        data: no,
        message: null,
      });
    } catch (error) {
      next(error);
    }
  },
};
