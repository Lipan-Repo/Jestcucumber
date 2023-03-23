"use strict";
exports.__esModule = true;
exports.app = void 0;
var express_1 = require("express");
exports.app = (0, express_1["default"])();
exports.app.use(express_1["default"].json());
var port = 3000;
exports.app.get('/hi', function (req, res) {
    res.send('hi i am lipan');
});
exports.app.listen(port, function () {
    console.log("server is running");
});
