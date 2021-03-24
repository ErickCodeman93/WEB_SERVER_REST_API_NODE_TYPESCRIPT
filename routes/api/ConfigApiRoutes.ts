import { Application } from 'express';

//Controllers Web Routes
import users from './users';

class ConfigWebRoutes {

	static startRoute( app:Application ){

		const webPaths = {
			users: '/api/users',
		};

		app.use( webPaths.users, users );

	} //end constuctor

} //end class

export default ConfigWebRoutes;

