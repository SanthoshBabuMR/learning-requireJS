// "jquery" module is incorrectly coded as "jQuery" to simulate error callback
require( [ "TypeCHECK", "colors", "nonExistantModule" ], function( tc, colors, NEM ) {
	// do some stuff
	// replace "jQuery", "nonExistantModule" with "colors" to ensure the following block
	// of code gets executed
	var str = "";
		str += "<h1>Modules Status</h1>"
		str += "<p>";
  		str += ( tc !== "undefined" ) ? "Module TypeCHECK loaded" : "Module jQuery unloaded";
  		str += "</p>";
  		str += "<p>";
  		str += ( NEM !== "undefined" ) ? "Module NEM loaded" : "Module NEM unloaded";
  		str += "</p>";
  		str += "<p>";
  		str += ( colors !== "undefined" ) ? "Module colors loaded" : "Module colors unloaded";
  		str += "</p>";

  		var ele = document.createElement( "div" );
		ele.className = "module-info";
		ele.innerHTML =  str ;
		document.body.appendChild( ele );

}, function( err ){
	var str = "";
	str += "<h1>Error Info</h1>";

	if( err ) {
		var errType = err.requireType;
		var errModule = err.requireModules;
		str += "<p>error Type : " + errType + "</p>";
		str += "<p>module Name : " + errModule[0] + "</p>";
	}
	else {
		str = "<p>Oops!! tricky error.. unable to get the hold of it ...";
	}

	var ele = document.createElement( "div" );
	ele.className = "error-msg";
	ele.innerHTML =  str ;
	document.body.appendChild( ele );

	//Now try to load the modules again by defining new path
    requirejs.config({
    	baseUrl: "/public/scripts/",
        paths: {
            TypeCHECK: "modules/typeCheck",
            colors: "modules/colors",
            nonExistantModule: "modules/dataType"
        }
    });

	require( [ "TypeCHECK", "colors", "nonExistantModule" ], function( tc, colors, NEM ) { 
		// this should call the original functionality
	} );
	
});