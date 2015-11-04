jQuery(document).ready(function(){
// .match(/\d+/)

$('#prompt').keypress(function() {
	var purseValue = 10000;
	var whatMyUserTyped = $('#prompt').val();
	if (event.keyCode == 13) {
		if (whatMyUserTyped === 'purse'){
			$('#log li:last').text('ShylockBot pulls out his purse containing '+ purseValue+ ' ducats');	
		} else {
			var subtractValue = parseInt(whatMyUserTyped.match(/\d+/));
			purseValue = (purseValue - subtractValue); //This Part is getting stuck on the first defined value.
			$('#log li:last').text('ShylockBot gives SOMEONE '+ subtractValue+ ' ducats');
		}
	}
});










});
