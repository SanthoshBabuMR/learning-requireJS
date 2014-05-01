requirejs.onError = function (err) {

	console.log("onError Called: ");
    console.log(err.requireType + " : " + err.requireModules);
    //throw err;
};

require( [ "jquery", "text!corstxt/dummyText.txt", "text!corshtml/gridTemplate.html", "text!corscss/modules/grid.css", "text!corsjson/profile.json", "text!noncorstxt/dummyText.txt", "text!noncorshtml/gridTemplate.html", "text!noncorscss/modules/grid.css", "text!noncorsjson/profile.json" ], function ( $, txt, html, css, json, noncorstxt, noncorshtml, noncorscss, noncorsjson) {
	
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

		str += "<h2>Data from person.json:</h2>";
		var profile = JSON.parse( json );
		if( profile && profile.profile) {
			for(i in profile.profile) {
				str += i + "<br />";
			}
		}

		str += "<hr />";

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

		str += "<h2>Data from person.json:</h2>";
		var nonCorsProfile = ( noncorsjson && JSON.parse( noncorsjson ) ) || "unable to load json ( server doesn't support CORS / server may not be started - check console tab in debugger )";
		if( nonCorsProfile && nonCorsProfile.profile) {
			for(i in nonCorsProfile.profile) {
				str += i + "<br />";
			}
		}
		else {
			str += nonCorsProfile;
		}

		$(".error-info").remove();
		$(".cors-notes").show();

		$("body").prepend(
			str
		);
} );
