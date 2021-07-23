"use strict"; //블록 범위

var users = [
  {
    no: 0,
    name: "둘리",
    email: "dooly@gmail.com",
  },
  {
    no: 1,
    name: "마이콜",
    email: "michol@gmail.com",
  },
]; //객체분해 - 파라미터(ES6)

function print(_ref) {
  var { no, name, email } = _ref;
  // 템플릿 문자열 (ES6)
  console.log(
    "no: ".concat(no, " name: ").concat(name, " email: ").concat(email)
  );
}

for (var _i = 0, _users = users; _i < _users.length; _i++) {
  var user = _users[_i];
  print(user);
}
