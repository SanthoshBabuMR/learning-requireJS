require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		"moment": "lib/moment-with-langs",
		"text": "lib/text",
		"async": "lib/async",

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
		"requireJSConfiguration": "modules/requireJSConfiguration",
		"passingConfigurationInfo": "modules/passingConfigurationInfo",
		"webWorkers": "modules/webWorkers",
		"errorCallbacks": "modules/errorCallbacks",

		// non-AMD Modules
		"maths": "legacyModules/maths",
		"underscore": "legacyModules/underscore",
		"backbone": "legacyModules/jquery-1.7"
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
	urlArgs : "bust=" + (new Date()).getTime()
})