console.log( React );
console.log( ReactDOM );

const App = () => {

	const nombre = 'Goku';
	return (
		<main>
			<form action="">
				<label for="">Usuario</label>
				<input type="text" placeholder="usuario" />
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</form>
		</main>
	)
}

ReactDOM.render( 
	<App/>,
	document.querySelector('#root')
 );

