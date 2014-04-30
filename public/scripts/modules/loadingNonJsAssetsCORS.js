require( [ "jquery", "text!corstxt/dummyText.txt", "text!corshtml/gridTemplate.html", "text!corscss/modules/grid.css" ], function ( $, txt, html, css) {
	var str = "";
		str += "<h1>Loading Assets with CORS</h1>";

		str += "<h2>Data from dummyText.txt:</h2>";
		str += "<p>";
		str += txt || "unable to load text";
		str += "</p>";

		str += "<h2>Data from gridTemplate.html:</h2>";
		str += "<p>";
		str += html || "unable to load html";
		str += "</p>";

		str += "<h2>Data from grid.css:</h2>";
		str += "<p>";
		str += css || "unable to load css";
		str += "</p>";

		$("body").append(
			str
		);
} );
