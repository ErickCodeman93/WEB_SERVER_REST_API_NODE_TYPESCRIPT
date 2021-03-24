"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../../controllers/API/UserController");
const routerApi = express_1.Router();
routerApi.get('/', UserController_1.getUsuarios);
routerApi.post('/', UserController_1.postUsuario);
routerApi.get('/:id', UserController_1.getUsuario);
routerApi.put('/:id', UserController_1.putUsuario);
routerApi.delete('/:id', UserController_1.deleteUsuario);
exports.default = routerApi;
//# sourceMappingURL=users.js.map