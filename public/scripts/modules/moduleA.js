define(["moduleB", "exports"], function( b, exports ) {

	var B = b;
	var A = {
 		name: "moduleA"
 	};
	exports.moduleA = function() { 
		return {
			  moduleA: A.name
			, moduleB: B.name 
		}
	};

});

// define( function( require, exports, module ) { 
// 	var B = require("moduleB");
// 	var A = {
// 		name: "moduleA"
// 	};
// 	exports.moduleA = function( ) {
// 		return [A.name, B.name];
// 	};
// } );