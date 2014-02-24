var today = new Date
today.getDay()
 //console.log(today)
 function checkWeekend(date){
 	//print is checkWeekend or
 	//is weekday
 	if(today.getDay == 6 || today.getDay == 0) {
 	   document.write("Weekend")
 	}
 	else {
 		document.write("weekday")
 	}
 }
checkWeekend()