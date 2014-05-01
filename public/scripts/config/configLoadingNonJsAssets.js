require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",
		"text": "lib/plugins/text",
		
		// require modules
		"loadingNonJsAssets": "modules/loadingNonJsAssets",

		// non js assets folder
		"notes": "../notes",
		"templates": "../templates",
		"css": "../css",
		"json": "data/schema",

		// non js asset modules
		"gridCss": "../css/modules/grid.css",
		"layoutTemplate": "../templates/layout.html",
		"personSchema": "data/schema/profile.json"
	}
})