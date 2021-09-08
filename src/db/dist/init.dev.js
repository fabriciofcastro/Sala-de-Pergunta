"use strict";

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var iniDb = {
  init: function init() {
    var db;
    return regeneratorRuntime.async(function init$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _config["default"])());

          case 2:
            db = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(db.exec("\n            CREATE TABLE rooms (\n                id INTERGER PRIMARY KEY,\n                pass TEXT\n            )\n        "));

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(db.exec("\n            CREATE TABLE questions (\n                id INTEGER PRIMARY KEY,\n                titulo TEXT,\n                read INT\n            )\n        "));

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(db.close());

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
initDb.init();