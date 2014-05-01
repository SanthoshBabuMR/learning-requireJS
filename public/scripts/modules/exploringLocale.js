require( ["jquery", "i18n!local/nls/planets"], function( $, planets ) {
	var str = "";

	str += "<h1>Exploring Locale</h1>";
	str += "<h2>Planet names in this locale</h2>";
	str += "<div class='grid-a'>";

	for( i in planets ) {
		str += "<div class='row'>";
			str += "<div class='block-a'>";
				str += "Planet[" + i.toLowerCase() + "]";
			str += "</div>";
			str += "<div class='block-b'>";
				str += planets[i];
			str += "</div>";
		str += "</div>";
	}
	str += "</div>";

	$("body").append(
		str
	);
});