require( ["jquery"], function( $ ) {

	var str = "";
		str += "<h1>Path Fallbacks</h1>";
		str += "<p>requireJS tries to load jquery module for the page, from CDN, and if it doesn't, it loads the local version.</p>";
		str += "<small>Checkout the network tab in debugger from where the library has been loaded.</small>";

	$("body").append(
		str
	);

});