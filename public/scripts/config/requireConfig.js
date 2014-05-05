require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		"moment": "lib/moment-with-langs",
		"requireLib": "lib/require",

		// plugins
		"text": "lib/plugins/text",
		"async": "lib/plugins/async",
		"domReady": "lib/plugins/domReady",
		"i18n": "lib/plugins/i18n",

		// locale
		"local": "../locale",

		// define modules
		"colorsv1": "modules/colors",
		"colorsv2": "modules/colors.0.0.2",
		"aSimpleObjectDefinition": "modules/aSimpleObjectDefinition",
		"aSimpleFunctionDefinition": "modules/aSimpleFunctionDefinition",
		"moduleObjectAnalyser" : "modules/moduleObjectAnalyser",
		"moduleA": "modules/moduleA",
		"moduleB": "modules/moduleB",
		"dataType": "modules/dataType",
		"typeCheck": "modules/typeCheck",		
		"oldModule": "modules/oldModule",
		"newModule": "modules/newModule",
		"getAuthor": "modules/getAuthor",
		"jqueryPrivate": "modules/jqueryPrivate",

		// require modules
		"helloWorld": "modules/helloWorld",
		"requireJsPathsConvention": "modules/requireJsPathsConvention",
		"loadLegacyScript": "modules/loadLegacyScript",
		"loadLegacyScript2": "modules/loadLegacyScript2",
		"relativePathLoading": "modules/relativePathLoading",
		"circularDependency": "modules/circularDependency",
		"namedModule": "modules/namedModule",
		"jsonCall": "modules/jsonCall",
		"jsonpCall": "modules/jsonpCall",
		"exploringBundles": "modules/exploringBundles",
		"notesPlugin": "modules/notesPlugin",
		"passingConfigurationInfo": "modules/passingConfigurationInfo",
		"webWorkers": "modules/webWorkers",
		"errorCallbacks": "modules/errorCallbacks",
		"loadingNonJsAssets": "modules/loadingNonJsAssets",
		"loadingNonJsAssetsCORS": "modules/loadingNonJsAssetsCORS",
		"domReadyWithRequireJS": "modules/domReadyWithRequireJS",
		"exploringLocale": "modules/exploringLocale",
		"pathFallbacks": "modules/pathFallbacks",
		"exploringEnforceDefine": "modules/exploringEnforceDefine",
		"jqueryNoconflict": "modules/jqueryNoconflict",
		"googleMapApiCall": "modules/googleMapApiCall",

		// non-AMD Modules
		"maths": "legacyModules/maths",
		"underscore": "legacyModules/underscore",
		"backbone": "legacyModules/jquery-1.7",

		// non js assets folder
		"notes": "../notes",
		"templates": "../templates",
		"css": "../css",

		// non js asset modules
		"gridCss": "../css/modules",
		"layoutTemplate": "../templates",
		"personSchema": "data/schema",

		// CORS Server request
        "corstxt" : "http://localhost:4234/public/notes",
        "corshtml" : "http://localhost:4234/public/templates",
        "corscss" : "http://localhost:4234/public/css",
        "corsjson" : "http://localhost:4234/public/scripts/data/schema",

        // Non-CORS server request
        "noncorstxt" : "http://localhost:5234/public/notes",
        "noncorshtml" : "http://localhost:5234/public/templates",
        "noncorscss" : "http://localhost:5234/public/css",
        "noncorsjson" : "http://localhost:5234/public/scripts/data/schema",
	},
	shim: {
		"maths": {
			exports: "simpleMATH",
			init: function () {
				simpleMATH = this.maths;
			}
		},
		"underscore" : {
			exports: "_"
		},
		"backbone": {
			deps: [ "jquery", "underscore" ],
			exports: "bb"
		}
	},
	map : {
		"*" : {
			"colors": "modules/colors",
		},
		"newModule" : {
			"colors": "modules/colors.0.0.2",
		}
	},
	config: {
		"getAuthor": {
			name: "santhosh babu"
		},
		"helloWorld": {
			greetBye: "bye world"
		}
	},
	urlArgs : "bust=" + (new Date()).getTime(),
	waitSeconds: 15
	
} );
