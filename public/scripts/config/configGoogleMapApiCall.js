require.config({
	baseUrl: "/public/scripts/",
	paths: {
		// lib
		"jquery": "lib/jquery-2.1.0",

		// plugins
		"async": "lib/plugins/async",

		// define modules
		"gmap": "http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9832601,80.2202&sensor=false&callback=define",

		// require modules
		"googleMapApiCall": "modules/googleMapApiCall",
	},
	waitSeconds: 50
})