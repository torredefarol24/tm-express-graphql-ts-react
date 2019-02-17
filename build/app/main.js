"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyparser_1 = __importDefault(require("../bootstrap/bodyparser"));
var routes_1 = __importDefault(require("../bootstrap/routes"));
var ExpressGraphqlApp = /** @class */ (function () {
    function ExpressGraphqlApp() {
        this.apiApp = express_1.default();
        this.bodyParserSetup(this.apiApp);
        this.routeSetup(this.apiApp);
    }
    ExpressGraphqlApp.prototype.bodyParserSetup = function (app) {
        bodyparser_1.default(app);
    };
    ExpressGraphqlApp.prototype.routeSetup = function (app) {
        routes_1.default(app);
    };
    return ExpressGraphqlApp;
}());
var backend_instance = new ExpressGraphqlApp();
exports.default = backend_instance.apiApp;
//# sourceMappingURL=main.js.map