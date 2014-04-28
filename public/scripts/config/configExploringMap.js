require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		
		// define modules

		// require modules
		"oldModule": "modules/oldModule",
		"newModule": "modules/newModule"
	},
	map : {
		"*" : {
			"colors": "modules/colors",
		},
		"newModule" : {
			"colors": "modules/colors.0.0.2",
		}
	}
})