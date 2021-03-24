import express, { Application } from 'express';
import cors from 'cors';
import hbs from 'hbs';

import webRoutes from '../routes/web/landing';

class Server {

	private app: Application;
	private port: string;
	private dirWebPage: string;
	private webPaths = {
		inicio: '/'
	};

	constructor(){

		this.app = express();
		this.port = process.env.PORT || '8000';
		this.dirWebPage = process.cwd();

		//Handlebars
		this.app.set( 'view engine', 'hbs' );
		hbs.registerPartials( this.dirWebPage + '/views/share' );
		hbs.registerPartials( this.dirWebPage + '/views/content' );

		//Ejecutar middlewares
		this.middlewares();

		//Ejecutar rutas
		this.routes();
	} //end contructor

	middlewares(){

		//Cors
		this.app.use( cors() );

		//Lectura del body
		this.app.use( express.json() );

		//Carpeta publica
		this.app.use( express.static( 'public' ) );
	} //end method

	routes(){

		this.app.use( this.webPaths.inicio, webRoutes );
	} //end method

	listen(){

		this.app.listen( this.port, () => {
			console.log( `Server online in port ${ this.port }` );
		} );
	} //end method

} //end class 

export default Server;