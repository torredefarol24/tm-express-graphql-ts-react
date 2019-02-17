"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __importDefault(require("./app/main"));
var port = 4000;
var listenCallBack = function () { return console.log("Listening on port: ", port); };
var server = main_1.default.listen(port, listenCallBack);
//# sourceMappingURL=server.js.map