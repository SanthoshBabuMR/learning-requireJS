require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",

		// define modules
		"moduleA": "modules/moduleA",
		"moduleB": "modules/moduleB",

		// require modules
		"circularDependency": "modules/circularDependency"
	}
})