define(["moduleA", "exports"], function( a, exports ) {

	var A = a;
	var B = {
 		name: "moduleB"
 	};
	exports.moduleB = function() { 
		return {
			  moduleA: A.name
			, moduleB: B.name 
		}
	};

});

// define( function( require, exports, module ) { 
// 	var A = require("moduleA");
// 	var B = {
// 		name: "moduleB"
// 	};
// 	exports.moduleB = function( ) {
// 		return [A.name, B.name];
// 	};
// } );