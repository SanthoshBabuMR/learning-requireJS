require( ["jquery", "moduleA", "moduleB"], function( $, a, b ) {
	
	console.log( "moduleA : " );
	console.log( a.moduleA() );
	console.log( "moduleB : " );
	console.log( b.moduleB() );	

	var str = "";
	var moduleA = a;
	var moduleB = b;

		str += "<h1>Testing for module load during circular dependency</h1>";
		str += "<p>";
		str += (moduleA !== undefined)? "moduleA loaded" : "moduleA not loaded";
		str += "<br />";
		str += (moduleB !== undefined)? "moduleB loaded" : "moduleB not loaded";
		str += "</p>";

	$("body").append(
		str
	);
} )