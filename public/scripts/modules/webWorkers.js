require( ["jquery"], function( $ ) {

	var str = "";

	var myWorker = new Worker("/public/scripts/modules/reporter.js");

	myWorker.postMessage ( JSON.stringify( {
			activity: "compute version"
		} )
	);

	myWorker.addEventListener( "message", function ( e ) {
		str = "";
		var output = JSON.parse( e.data );
		str += "<p>" + output.message + "</p>" ;
		$("body").append(
			str
		);
	} );	
} );
