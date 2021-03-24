import { Router } from 'express';
import { 
	deleteUsuario, 
	getUsuario, 
	getUsuarios, 
	postUsuario, 
	putUsuario } from '../../controllers/API/UserController';

const routerApi = Router();

routerApi.get( '/', getUsuarios );
routerApi.post( '/', postUsuario );
routerApi.get( '/:id', getUsuario );
routerApi.put( '/:id', putUsuario );
routerApi.delete( '/:id', deleteUsuario );

export default routerApi;
