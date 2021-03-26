//Request Post

const post = async ( endpoint, data ) => {

	const config = {
		method : 'POST',
		headers: { 'Content-Type' : 'application/json' },
		body: JSON.stringify( data )
	}

	const request = await fetch( endpoint, config );

	const dataResponse = await request.json();

	return dataResponse;

} //end function


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}