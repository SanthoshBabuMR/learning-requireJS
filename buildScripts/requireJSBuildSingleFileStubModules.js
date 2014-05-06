({

	  baseUrl: "../public/scripts"
	, mainConfigFile: "../public/scripts/config/requireConfig.js"
	, paths: {
		// CORS Server request
          "corstxt" : "empty:"
        , "corshtml" : "empty:"
        , "corscss" : "empty:"
        , "corsjson" : "empty:"

        // Non-CORS server request
        , "noncorstxt" : "empty:"
        , "noncorshtml" : "empty:"
        , "noncorscss" : "empty:"
        , "noncorsjson" : "empty:"
	}
	, optimize: "none"
	, skipDirOptimize: true

	// ** without stubModules
	// , name : "loadingNonJsAssets"
	// , out : "../buildSingleFile/loadingNonJsAssetsWithoutStubModules.js"

	// ** with stubModules
	// , name : "loadingNonJsAssets"
	// , out : "../buildSingleFile/loadingNonJsAssetsWithStubModules.js"
	// , stubModules: ["text", "jquery"]

})
