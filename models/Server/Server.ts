import express, { Application } from 'express';
import cors from 'cors';
import hbs from 'hbs';

//Config routes web
import ConfigWebRoutes from '../../routes/web/ConfigWebRoutes';

//Config routes API
import ConfigApiRoutes from '../../routes/api/ConfigApiRoutes';

class Server {

	private app: Application;
	private port: string;
	private dirWebPage: string;
	
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

		//Ejecutar rutas API
		ConfigApiRoutes.startRoute( this.app );
		
		//Ejecutar rutas WEB
		ConfigWebRoutes.startRoute( this.app );

	} //end contructor

	middlewares(){

		//Cors
		this.app.use( cors() );

		//Lectura del body
		this.app.use( express.json() );

		//Carpeta publica
		this.app.use( express.static( 'public' ) );
	} //end method

	listen(){

		this.app.listen( this.port, () => {
			console.log( `Server online in port ${ this.port }` );
		} );
	} //end method

} //end class 

export default Server;