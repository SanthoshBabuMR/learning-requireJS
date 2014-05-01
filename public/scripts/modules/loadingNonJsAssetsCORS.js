requirejs.onError = function (err) {

    console.log(err.requireType + " : " + err.requireModules);
    //throw err;
};

require( [ "jquery", "text!corstxt/dummyText.txt", "text!corshtml/gridTemplate.html", "text!corscss/modules/grid.css", "text!noncorstxt/dummyText.txt", "text!noncorshtml/gridTemplate.html", "text!noncorscss/modules/grid.css" ], function ( $, txt, html, css, noncorstxt, noncorshtml, noncorscss) {
	var str = "";

		str += "<h1>Loading Assets with across domains with CORS supporting server</h1>";

		str += "<h2>Data from dummyText.txt:</h2>";
		str += "<p>";
		str += txt || "unable to load text ( server may not be started )";
		str += "</p>";

		str += "<h2>Data from gridTemplate.html:</h2>";
		str += "<p>";
		str += html || "unable to load html ( server may not be started )";
		str += "</p>";

		str += "<h2>Data from grid.css:</h2>";
		str += "<p>";
		str += css || "unable to load css ( server may not be started )";
		str += "</p>";

		str += "<h1>Loading Assets with across domains with non-CORS supporting server</h1>";

		str += "<h2>Data from dummyText.txt:</h2>";
		str += "<p>";
		str += noncorstxt || "unable to load text ( server doesn't support CORS / server may not be started - check console tab in debugger )";
		str += "</p>";

		str += "<h2>Data from gridTemplate.html:</h2>";
		str += "<p>";
		str += noncorshtml || "unable to load html ( server doesn't support CORS / server may not be started - check console tab in debugger )";
		str += "</p>";

		str += "<h2>Data from grid.css:</h2>";
		str += "<p>";
		str += noncorscss || "unable to load css ( server doesn't support CORS / server may not be started - check console tab in debugger )";
		str += "</p>";

		$("body").prepend(
			str
		);
} );
