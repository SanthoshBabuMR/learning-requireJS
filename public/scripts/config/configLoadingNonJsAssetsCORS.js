require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		"text": "lib/plugins/text",
		
		// require modules
		"loadingNonJsAssetsCORS": "modules/loadingNonJsAssetsCORS",

        // CORS Server request
        "corstxt" : "http://localhost:4234/public/notes",
        "corshtml" : "http://localhost:4234/public/templates",
        "corscss" : "http://localhost:4234/public/css",

        // Non-CORS server request
        "noncorstxt" : "http://localhost:5234/public/notes",
        "noncorshtml" : "http://localhost:5234/public/templates",
        "noncorscss" : "http://localhost:5234/public/css"

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


                // The module is just for testing.
                // It makes to possible to enable/disable ajax requests within same domain
                // It makes to possible to enable/disable CORS across domains
                // To simply enable CORS without the module below, simply return true from this function

                url = window.encodeURI( urlArg );
                if ( url.match(/http|https/).length > 0 ) {
                	// The path name resolves to valid URL
                    var protocol = url.match(/http|https/)[0];
                    var hostname = url.match(/(?:http|https)\:\/\/(.+):/) && url.match(/(?:http|https)\:\/\/(.+):/)[1];
                    var port = url.match(/(?:http|https)\:\/\/.+\:(\d+)/) && url.match(/(?:http|https)\:\/\/.+\:(\d+)/)[1]
                    if( protocol === protocolArg && hostname === hostnameArg && port === portArg) {
                		// the url being requested and the current page is off the same domain
                		return true;
                	}	
                	else {
                        // CORS request - set return value to "true", to enable CORS, set return value to "false", to disable CORS
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