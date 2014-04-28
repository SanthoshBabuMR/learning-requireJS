require( ["jquery"], function( $ ){

	var eleViewNotes = "view-notes"
	  , eleNotesSection = "notes"
	  , eleCloseNotes = "close-notes"
	  ;

	var toggleNote = function( notes ) {
		notes.slideToggle();
	}

	var findNote = function( eleArg, actFrom  ) {
		var Ele = eleArg;
		if ( actFrom === "view" ) {
			return Ele.parents(".row").next().find("."+eleNotesSection);	
		}
		else if ( actFrom === "close" ) {
			return Ele.parents("."+eleNotesSection);	
		}		
	}
	
	var attachEvents = function() {
		$( "." + eleViewNotes ).on("click keypress", function(e) {
			if( e.type === "keypress" && e.which !== 13 ) {
				return;
			}
			toggleNote( findNote( $(this), "view" ) );
		});

		$( "." + eleCloseNotes ).on("click keypress", function(e) {
			if( e.type === "keypress" && e.which !== 13 ) {
				return;
			}
			toggleNote( findNote( $(this), "close" ) );
		});
	}
	
	var init = function() {
		attachEvents();
	}

	// invoke script
	init();

});