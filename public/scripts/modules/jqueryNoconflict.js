require( ["jquery"], function( jqObj ) {

	var str = "";

	str += "<p>";
	str += "jQuery available within current module : " + ( typeof jqObj === "function" );
	str += "</p>";

	str += "<p>";
	str += "'jQuery' available in Global Scope : " + ( typeof window.jQuery === "function" );
	str += "</p>";

	str += "<p>";
	str += "'$' available in Global Scope : " + ( typeof window.jQuery === "function" );
	str += "</p>";

	jqObj("body").append(
		str
	);

} )