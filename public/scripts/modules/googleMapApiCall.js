require( ["jquery", "async!http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9832601,80.2202&sensor=false"], function( $ ) {
	
	var str = "";

	// var jqGmap = $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9832601,80.2202&sensor=false", function( res ) {
	// 	console.log( res );	
	// });
	
	//var gmap = require("async!http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9832601,80.2202&sensor=false");
	
	$("body").append(
		str	
	);
})