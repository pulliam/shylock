jQuery(document).ready(function(){

var purseValue = 10000;  //I begin rich

// $('#prompt').keypress(function() {  //
// 	var whatMyUserTyped = $('#prompt').val();  //Input variable defined for future use.
// 	if (event.keyCode == 13) {  //If enter is pressed, 
// 		if (whatMyUserTyped === 'purse'){ //If used types "purse"
// 			$('#log li:last').text('ShylockBot pulls out his purse containing '+ purseValue+ ' ducats');	
// 		} else { //log the phrase with total amount in purse. 
// 			var subtractValue = parseInt(whatMyUserTyped.match(/\d+/));  //scan for the number in my string, then turn into a number.
// 			purseValue = (purseValue - subtractValue); //purse money minus the above sum equals current amount in purse.
// 			$('#log li:last').text('ShylockBot gives SOMEONE '+ subtractValue + ' ducats'); //log that into <li>
// 		}
// 	}
// });

//All right, now I want to find out who is the bastard borrowing money from Shylock. 
//I will try to use .split from it, and the only way I can find is if I have a 
// var str = "loan person 50 ducats";
// var res = str.split(" ");
// "loan/=, person, 50, ducats"
// ]
// var arrayOfInput = whatMyUserTyped.split(" ");
// output ---->  'ShylockBot gives ' + arrayOfInput[1] + ' ' + subtractValue + ' ducats';

//Lets try this crazy idea:
// $('#prompt').keypress(function() {  //
// 	var whatMyUserTyped = $('#prompt').val();  //Input variable defined for future use.
// 	if (event.keyCode == 13) {  //If enter is pressed, 
// 		if (whatMyUserTyped === 'purse'){ //If used types "purse"
// 			$('#log li:last').text('ShylockBot pulls out his purse containing '+ purseValue+ ' ducat(s)');	
// 		} else { //log the phrase with total amount in purse. 
// 			var subtractValue = parseInt(whatMyUserTyped.match(/\d+/));  //scan for the number in my string, then turn into a number.
// 			var arrayOfInput = whatMyUserTyped.split(" ");
// 			purseValue = (purseValue - subtractValue); //purse money minus the above sum equals current amount in purse.
// 			$('#log li:last').text('ShylockBot gives ' + arrayOfInput[1] + ' ' + subtractValue + ' ducat(s)'); //log that into <li>
// 		}
// 	}
// });

//Now I need to store the amount of money + person it was loan to.
var storePerson = [];
var storeAmount = [];


//Lets try:

$('#prompt').keypress(function() {  //
	//loans person 50 ducats
	var whatMyUserTyped = $('#prompt').val();  //Input variable defined for future use.
	var arrayOfInput = whatMyUserTyped.split(" ");
	if (event.keyCode == 13) {  //If enter is pressed, 
		if (whatMyUserTyped === 'purse'){ //If used types "purse"
			$('#log li:last').text('ShylockBot pulls out his purse containing '+ purseValue+ ' ducat(s)');	
		} else if (whatMyUserTyped === 'ledger'){
			$('#log li:last').text('hi');
		} else if (arrayOfInput[0] === 'loans' && arrayOfInput[3] === 'ducats'){ //log the phrase with total amount in purse. 
			var arrayOfInput = whatMyUserTyped.split(" ");
			var subtractValue = parseInt(whatMyUserTyped.match(/\d+/));  //scan for the number in my string, then turn into a number.
			storePerson.push(arrayOfInput[1]);
			storeAmount.push(arrayOfInput[2]);
			console.log(storePerson);
			console.log(subtractValue);
			purseValue = (purseValue - subtractValue); //purse money minus the above sum equals current amount in purse.
			$('#log li:last').text('ShylockBot gives ' + arrayOfInput[1] + ' ' + subtractValue + ' ducat(s)'); //log that into <li>
		} else {
			$('#log li:last').text("I'm confused");
		}
	}
});




});