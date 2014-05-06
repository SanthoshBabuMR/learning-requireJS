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

	// Checkout the diff between skipModuleInsertion TRUE and FALSE, by alternatively commenting the below config and executing it

	// ** for Single File Build with skipModuleInsertion : false
	, name : "legacyModules/maths"
	, out : "../buildSingleFile/mathsSkipModuleInsertionFALSE.js"
	, skipModuleInsertion: false

	// ** for Single File Build with skipModuleInsertion : true
	// , name : "legacyModules/maths"
	// , out : "../buildSingleFile/mathsorldSkipModuleInsertionTRUE.js"
	// , skipModuleInsertion: true

	// ** for Dir Build with skipModuleInsertion : false
	// , dir: "../buildDir/"
	// , modules: [
	// 	  {
	// 		name: "maths"
	// 	  }
	// 	, {
	// 		name: "colorsv1"
	// 	  }
	// 	, {
	// 		name: "aSimpleFunctionDefinition"
	// 	  }
	// ]
	// , skipModuleInsertion: false

	// ** for Dir Build with skipModuleInsertion : true
	// , dir: "../buildDir/"
	// , modules: [
	// 	  {
	// 		name: "maths"
	// 	  }
	// 	, {
	// 		name: "colorsv1"
	// 	  }
	// 	, {
	// 		name: "aSimpleFunctionDefinition"
	// 	  }
	// ]
	// , skipModuleInsertion: true
	
	
})