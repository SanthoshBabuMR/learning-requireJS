require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		"text": "lib/text",
		
		// require modules
		"loadingNonJsAssetsCORS": "modules/loadingNonJsAssetsCORS",

        // CORS
        "corstxt" : "http://localhost:4234/public/notes",
        "corshtml" : "http://localhost:4234/public/templates",
        "corscss" : "http://localhost:4234/public/css"

	},
	config: { // taken from https://github.com/requirejs/text
        text: {
            useXhr: function (urlArg, protocolArg, hostnameArg, portArg) {
                //Override function for determining if XHR should be used.
                //url: the URL being requested
                //protocol: protocol of page text.js is running on
                //hostname: hostname of page text.js is running on
                //port: port of page text.js is running on
                //Use protocol, hostname, and port to compare against the url
                //being requested.
                //Return true or false. true means "use xhr", false means
                //"fetch the .js version of this resource".

                url = window.encodeURI( urlArg );
                if ( url.protocol === "http" || url.protocol === "https" ) {
                	// The path name resolves to valid URL
                	if( url.protocol === protocolArg && url.hostname === hostnameArg && url.port === portArg) {
                		// the url being requested and the current page is off the same domain
                		return true;
                	}	
                	else {
                		// CORS request - set return value to "true", to enable CORS
                		return true;
                	}
                }
                else {
                	// The path remains on the same domain
                	return true;
                }
            }
        }
    }
})