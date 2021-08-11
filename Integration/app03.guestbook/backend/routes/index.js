const errorRouter = require("./error");

const applicationRouter = {
  setup: async function (application) {
    try {
      application
        .all("*", function (req, res, next) {
          res.locals.req = req;
          res.locals.res = res;
          next();
        })

        .use("/api", require("./guestbook-api"))
        .use(errorRouter.error404)
        .use(errorRouter.error500);
    } catch (err) {
      console.error(err);
    }
  },
};

module.exports = { applicationRouter };
