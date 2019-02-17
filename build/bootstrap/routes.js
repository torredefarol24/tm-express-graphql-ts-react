"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("../routes/"));
var setupRoutes = function (app) {
    app.use("/check", routes_1.default.check);
};
exports.default = setupRoutes;
//# sourceMappingURL=routes.js.map