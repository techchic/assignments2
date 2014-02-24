 var input = prompt ("Enter a number from 0 t0 15") 
 	input=parseInt(input)
 	
 	//check for valid input
 	while  (input < 0 ||input >15 || isNaN(input))
 	{ 
 		  input = prompt("Wrong input!Must be 0 to 15")
 		   input= parseInt(input)
 		}
//alert ("you have entered "+ input)

//Function defination
function converDectoHex (dec){

if (dec >=0 && dec<=9 ){
	return dec
}
else if (dec==10){
	return "A"
}
else if (dec==11){
	return "B"
}
else if (dec==12){
	return "C"
}
else if (dec==13){
	return "D"
}
else if (dec==14){
	return "E"
}
else if (dec==15){
	return "F"
}
}

var hex=converDectoHex(input);
alert(input+ "is"  +  hex  +  "in hex")

