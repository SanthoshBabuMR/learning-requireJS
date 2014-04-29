require( ["jquery"], function( $ ) {

	var str = "";
	var count = 5;
	var processMsg = "processing in "
	var myWorker = new Worker("/public/scripts/modules/reporter.js");

	str = "<div id='disp'>"+processMsg+" ...</p>";

	$("body").append(
		str
	);

	var countInterval = count;
	var timer = window.setInterval( function() {
		$("#disp").html(processMsg + countInterval--);
		if( countInterval === -1 ) {
			$("#disp").remove();
			window.clearInterval( timer );
		}
	}, 1000 );

	window.setTimeout( function() {
		myWorker.postMessage ( JSON.stringify( {
				activity: "compute version"
			} )
		);
	}, ( count + 1 ) * 1000 );

	myWorker.addEventListener( "message", function ( e ) {
		str = "";
		var output = JSON.parse( e.data );
		str += "<p>" + output.message + "</p>" ;
		$("body").append(
			str
		);
	} );

} );
