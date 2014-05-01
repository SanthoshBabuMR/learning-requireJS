require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery":	[
					  "//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min",
					,  "lib/jquery-2.1.0"
					],

		// require modules
		"pathFallbacks": "modules/pathFallbacks"
	}
})