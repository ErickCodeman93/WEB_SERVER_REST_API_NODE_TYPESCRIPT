import { Request, Response } from "express";

export const getUsuarios = ( req:Request, res: Response ) => {

	return res.json({
		msg: 'GET',
	});
} //end function

export const postUsuario = ( req:Request, res: Response ) => {


	const { body:data } = req;

	return res.status( 201 ).json({
		msg: 'POST',
		data

	});
} //end function

export const getUsuario = ( req:Request, res: Response ) => {

	const { id } = req.params;

	return res.json({
		msg: 'SHOW',
		id
	});
} //end function

export const putUsuario = ( req:Request, res: Response ) => {

	const { id } = req.params;
	const { body:data } = req

	return res.status( 201 ).json({
		msg: 'PUT',
		id,
		data
	});
} //end function

export const deleteUsuario = ( req:Request, res: Response ) => {

	const { id } = req.params;

	return res.json({
		msg: 'DELETE',
		id
	});
} //end function
