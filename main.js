jQuery(document).ready(function( ){
	
var $input = $('#input');
var $chat = $('#prompt');

var newText = $input.val();

var letsAppend = function(){
$chat.append('<li>').append(newText);
}

document.addEventListener('keypress', letsAppend);

});