require( [ "jquery", "text!notes/dummyText.txt", "text!templates/gridTemplate.html", "text!gridCss", "text!layoutTemplate!strip", "text!personSchema" ], function ( $, txt, html, grid, layout, json) {
	var str = "";

		str += "<h1>Loading Non Js Assets.js using !text</h1>";

		str += "<h2>Data from dummyText.txt:</h2>";
		str += "<p>";
		str += txt;
		str += "</p>";

		str += "<h2>Data from gridTemplate.html:</h2>";
		str += "<p>";
		str += html;
		str += "</p>";

		str += "<h2>Data from grid.css:</h2>";
		str += "<p>";
		str += grid;
		str += "</p>";

		str += "<h2>Data from layout.html using !strip:</h2>";
		str += layout;

		str += "<br />";

		str += "<h2>Data from person.json:</h2>";
		var profile = JSON.parse( json );
		if( profile && profile.profile) {
			for(i in profile.profile) {
				str += i + "<br />";
			}
		}

		$("body").append(
			str
		);
} );