const mysql = require("mysql2");
const util = require("util");

const dbconn = require("./dbconn");

module.exports = {
  findAll: async function (no) {
    console.log("findAll Called");
    const conn = dbconn();
    const query = util.promisify(conn.query).bind(conn);
    try {
      return no > 0
        ? await query(
            `select no, name, message, date_format(reg_date, '%Y/%m/%d %H:%i:%s') as regDate from guestbook where no<${no} order by reg_date desc limit 0,3`,
            [no]
          )
        : await query(
            "select no, name, message, date_format(reg_date, '%Y/%m/%d %H:%i:%s') as regDate from guestbook order by reg_date desc limit 0,3",
            []
          );
    } catch (err) {
      console.error(err);
    } finally {
      conn.end();
    }
  },
  insert: async function (guestbook) {
    console.log(guestbook);
    console.log(Object.values(guestbook));
    const conn = dbconn();
    const query = util.promisify(conn.query).bind(conn);
    try {
      return await query("insert into guestbook values(null,?,?,?,sysdate())", [
        guestbook.name,
        guestbook.password,
        guestbook.message,
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      conn.end();
    }
  },
};
