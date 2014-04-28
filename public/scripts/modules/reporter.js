

onmessage = function( e ) {

	importScripts('/public/scripts/lib/require.js');
	require( [ "/public/scripts/config/requireConfig.js" ], function( config ) {
	    	require( ["colorsv2"], function( colors ) {
	    		var output = {};
	    		output.message = "computed version number for colors version : " + colors.version;
	        	postMessage( JSON.stringify( output ) );	
	    	});
	    }
	);
	
};
