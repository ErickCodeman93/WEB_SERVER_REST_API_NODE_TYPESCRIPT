"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Controllers Web Routes
const users_1 = __importDefault(require("./users"));
class ConfigWebRoutes {
    static startRoute(app) {
        const webPaths = {
            users: '/api/users',
        };
        app.use(webPaths.users, users_1.default);
    } //end constuctor
} //end class
exports.default = ConfigWebRoutes;
//# sourceMappingURL=ConfigApiRoutes.js.map