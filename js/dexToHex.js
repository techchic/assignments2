 var input = prompt ("Enter a number from 0 t0 15") 
 	input=parseInt(input)
 	console.log
 		//check for valid input
 	while  (input < 0 ||input >15 || isNaN(input))
 	{ 
 		  input = prompt("Wrong input!Must be 0 to 15")
 		   input= parseInt(input)
 		}
alert ("you have entered "+ input)