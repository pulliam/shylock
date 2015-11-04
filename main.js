jQuery(document).ready(function( ){

var newValue = $('#prompt').val();

$('body').keypress(function() {
	if (event.keyCode == 13) {
		console.log( "Handler for .keypress() called." );
  		$('#log').append('<li>').append(newValue);
  	}
});

});

