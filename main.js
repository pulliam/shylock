jQuery(document).ready(function(){
// .match(/\d+/)
var allLoans = [];
var purseValue = 10000;

$('#prompt').keypress(function() {
	var whatMyUserTyped = $('#prompt').val();
	if (event.keyCode == 13) {
		if (whatMyUserTyped === 'purse'){
			$('#log li:last').text('ShylockBot pulls out his purse containing '+ purseValue+ ' ducats');	
		} else {
			this.subtractValue = subtractValue;
			var subtractValue = parseInt(whatMyUserTyped.match(/\d+/));
			purseValue = (purseValue - subtractValue); 
			$('#log li:last').text('ShylockBot gives SOMEONE '+ subtractValue + ' ducats');
			allLoans.push(subtractValue);
		}
	}
});










});
