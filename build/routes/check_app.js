"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var sayHello = function (request, response) {
    var message = new String("Hey There! " + request.hostname);
    var context = {
        success: true,
        message: message
    };
    return response.status(200).json(context);
};
router.get("/health", sayHello);
exports.default = router;
//# sourceMappingURL=check_app.js.map