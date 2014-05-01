require( ["jquery", "http://api.openweathermap.org/data/2.5/weather?q=Chennai,in&callback=define" ], function( $, jsonData ) {

	var str = "";
	var data =jsonData;

	if( data) {
		str += "<div class='grid-b'>";
			
			str += "<div class='row'>";
				str += "<div class='block-a'>";
					str += "weather : ";
				str += "</div>";
				str += "<div class='block-b'>";
					str += data.weather[0].main;
				str += "</div>";
			str += "</div>";

			str += "<div class='row'>";
				str += "<div class='block-a'>";
					str += "description : ";
				str += "</div>";
				str += "<div class='block-b'>";
					str += data.weather[0].description;
				str += "</div>";
			str += "</div>";

			str += "<div class='row'>";
				str += "<div class='block-a'>";
					str += "temperature : ";
				str += "</div>";
				str += "<div class='block-b'>";
					str += data.main.temp;
				str += "</div>";
			str += "</div>";
			
		str += "</div>";
	}
	else {
		str += "<p>Data Unavailable</p>";
	}

	$(".loading").remove();

	$("body").append(
		str	
	);	
});