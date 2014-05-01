require( ["jquery"], function( $ ) {

	var str = "";

	str += "<hr />";
	str += "Status : Modules have been loaded and executed";

	$(".module-not-loaded-info").hide();

	$("body").append(
		str
	);

} );