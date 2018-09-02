export default function randomInt(min, max) {
	if ( !min || !max ) {
		console.error( 'missing parameters: randomInt() call' );
	}
	return parseInt( Math.floor(Math.random() * (max - min + 1)) + min );
}