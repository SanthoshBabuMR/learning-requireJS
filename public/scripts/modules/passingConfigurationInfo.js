require( [ "jquery", "getAuthor" ], function( $, author ) {

	var str = "";
		str += "<h1>Module Author</h1>";
		str += "<p>";
		str += "name : " + author.name;
		str += "</p>";

	$("body").append(
		str
	);	
});