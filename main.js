var purseValue = 10000;  
var storePerson = [];
var storeAmount = [];

jQuery(document).ready(function(){

	$('#prompt').keypress(function() {  
		//input should be:
		//1) purse
		//2) loans person 50 ducats
		//3) ledger
		var whatMyUserTyped = $('#prompt').val();  
		var arrayOfInput = whatMyUserTyped.split(" ");
		if (event.keyCode == 13) { 
			if (whatMyUserTyped === 'purse'){ 
				$('#log li:last').text('ShylockBot pulls out his purse containing '+ purseValue+ ' ducat(s)');	
			} else if (arrayOfInput[0] === 'loans' && arrayOfInput[3] === 'ducats'){ 
				var arrayOfInput = whatMyUserTyped.split(" ");
				var subtractValue = parseInt(whatMyUserTyped.match(/\d+/)); 
				storePerson.push(arrayOfInput[1]);
				storeAmount.push(arrayOfInput[2]);
				console.log(storePerson);
				console.log(subtractValue);
				purseValue = (purseValue - subtractValue); 
				$('#log li:last').text('ShylockBot gives ' + arrayOfInput[1] + ' ' + subtractValue + ' ducat(s)'); 
			} else if (whatMyUserTyped === 'ledger'){
				for (i =0; i < storePerson; i++){
					var personLoop = storePerson[i];
				}
				for (i =0; i < storeAmount; i++){
					var moneyLoop = storeAmount[i];
				}
				$('#log li:last').text(personLoop + ' owes me ' + moneyLoop +  ' ducats');
			} else {
				$('#log li:last').text("I'm confused");
			}

		}
	});

});