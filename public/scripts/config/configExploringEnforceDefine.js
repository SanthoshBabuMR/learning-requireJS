//define( [], function() {
	require.config({
		baseUrl: "/public/scripts/",
		paths: {
			// lib
			"jquery": "lib/jquery-2.1.0",

			// define/require modules
			"exploringEnforceDefine": "modules/exploringEnforceDefine"
		},
		enforceDefine: true
	})
//} );