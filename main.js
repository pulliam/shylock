// $('body').keypress(function() {
// 	if (event.keyCode == 13) {
// 		console.log( "Handler for .keypress() called." );
//   		$('#log').append('<li>').append($('#prompt').val());
//   	}
// });
jQuery(document).ready(function( ){

var $command = $('.command');
var $action = $('.action');
var $quote = $('.quote');

$('body').keypress(function() {
	if (event.keyCode == 13) {
		$command.text('Command: ' + $('#prompt').val());  
		$action.text('Action: ' + $('#prompt').val());  
		$quote.text('Quote: ' + $('#prompt').val());  	
	}
});










});
