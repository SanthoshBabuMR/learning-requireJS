// require( ["jquery", "async!https://maps.google.com/maps/api/js?sensor=false"], function( $, gmap ) {
	
// 	var str = "";

// 	str = gmap;
// 	console.log( gmap )

// 	// var jqGmap = $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9832601,80.2202&sensor=false", function( res ) {
// 	// 	console.log( res );	
// 	// });
	
// 	//var gmap = require("async!http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9832601,80.2202&sensor=false");
	
// 	$("body").append(
// 		str	
// 	);
// })

console.log( (new Date()).getTime() )
require(['async!http://maps.google.com/maps/api/js?sensor=false'], function(){
	console.log( (new Date()).getTime() )
	console.log(arguments[0])
});