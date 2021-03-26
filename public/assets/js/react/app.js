const { useState } = React;

const App = () => {

	const [ usuario, cambiarUsuario ] = useState( {
		campo: '',
		valido: null
	} );

	const [ nombre, cambiarNombre ] = useState( {
		campo: '',
		valido: null
	} );

	const [ password, cambiarPassword ] = useState( {
		campo: '',
		valido: null
	} );

	const [ password2, cambiarPassword2 ] = useState( {
		campo: '',
		valido: null
	} );

	const [ correo, cambiarCorreo ] = useState( {
		campo: '',
		valido: null
	} );

	const [ telefono, cambiarTelefono ] = useState( {
		campo: '',
		valido: null
	} );

	const [ terminos, cambiarTerminos ] = useState( true );


	const expresiones = {
		usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const validarPassword2 = () => {

		let value = false;

		if( password.campo.length > 0 ){

			if( password.campo !== password2.campo )
				cambiarPassword2( ( prevState ) => {
					return { ... prevState, valido:'false' }
				} );
			else {
				cambiarPassword2( ( prevState ) => {
					return { ... prevState, valido:'true' }
				} );

				value = true;
			} //end else
		} //end if

		return value;

	} //end function

	const onChangeTerminos = ( e ) => {

		cambiarTerminos( e.target.checked )
	} //end function

	return (
		<main>
			<Formulario action="">
				
				<InputComponent
					myState={ usuario }
					myChangeState={ cambiarUsuario }
					type="text"
					label="Usuario: *"
					placeholder="Usuario"
					name="usuario"
					msgError="El usuario debe tener de 4 a 6 dígitos y solo puede contener números, letras y guiones."
					regex={ expresiones.usuario }
				/>

				<InputComponent
					myState={ nombre }
					myChangeState={ cambiarNombre }
					type="text"
					label="Nombre: *"
					placeholder="Nombre"
					name="nombre"
					msgError="El nombre debe tener solo letras."
					regex={ expresiones.nombre }
				/>

				<InputComponent
					myState={ correo }
					myChangeState={ cambiarCorreo }
					type="text"
					label="Email: *"
					placeholder="Email"
					name="email"
					msgError="No es un formato válido de correo."
					regex={ expresiones.correo }
				/>

				<InputComponent
					myState={ telefono }
					myChangeState={ cambiarTelefono }
					type="text"
					label="Teléfono: *"
					placeholder="Teléfono"
					name="telefono"
					msgError="No es un formato válido de teléfono."
					regex={ expresiones.telefono }
				/>

				<InputComponent
					myState={ password }
					myChangeState={ cambiarPassword }
					type="password"
					label="Password: *"
					placeholder="Password"
					name="password"
					msgError="El contraseña debe tener un mínimo de 4 dígitos, números, letras y guiones"
					regex={ expresiones.password }
				/>

				<InputComponent
					myState={ password2 }
					myChangeState={ cambiarPassword2 }
					type="password"
					label="Confirmar Password: *"
					placeholder="Confirmar Password"
					name="password2	"
					msgError="El contraseña no es igual."
					myFuncion={validarPassword2}
				/>

				<ContenedorTerminos>
					<Label>
						<input 
							type="checkbox" 
							name="terminos" 
							id="terminos" 
							checked={ terminos }
							onChange={ onChangeTerminos } />
						Acepto los Terminos y condiciones
					</Label>
				</ContenedorTerminos>

				{ false && <MensajeError>
					<p>
					<i class="fas fa-exclamation-circle"></i> <b>Error:</b> Todos los campos son obligatorios.
					</p>
				</MensajeError> }

				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
					<MensajeExito>Enviado exitosamente!</MensajeExito>
				</ContenedorBotonCentrado>

			</Formulario>
		</main>
	)
}