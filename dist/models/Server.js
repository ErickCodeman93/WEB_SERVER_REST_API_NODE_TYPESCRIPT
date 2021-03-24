"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const hbs_1 = __importDefault(require("hbs"));
const landing_1 = __importDefault(require("../routes/web/landing"));
class Server {
    constructor() {
        this.webPaths = {
            inicio: '/'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || '8000';
        this.dirWebPage = process.cwd();
        //Handlebars
        this.app.set('view engine', 'hbs');
        hbs_1.default.registerPartials(this.dirWebPage + '/views/share');
        hbs_1.default.registerPartials(this.dirWebPage + '/views/content');
        //Ejecutar middlewares
        this.middlewares();
        //Ejecutar rutas
        this.routes();
    } //end contructor
    middlewares() {
        //Cors
        this.app.use(cors_1.default());
        //Lectura del body
        this.app.use(express_1.default.json());
        //Carpeta publica
        this.app.use(express_1.default.static('public'));
    } //end method
    routes() {
        this.app.use(this.webPaths.inicio, landing_1.default);
    } //end method
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server online in port ${this.port}`);
        });
    } //end method
} //end class 
exports.default = Server;
//# sourceMappingURL=Server.js.map