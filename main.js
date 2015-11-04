jQuery(document).ready(function( ){

$('body').keypress(function() {
	if (event.keyCode == 13) {
		console.log( "Handler for .keypress() called." );
  		$('#log').append('<li>').append($('#prompt').val());
  	}
});

});
