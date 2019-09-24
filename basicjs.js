// var temperature =55;

// if (temperature <= 10){
// 	console.log ("fresh in here");
// }
// else {
// 	console.log ("not so fresh");
// }
// // temperature = 5;

// var highVal = [1,7,-3,9];

// document.write (Math.max.apply(undefined, highVal));
// document.write (Math.max.apply(null, highVal));
// document.write (Math.max.apply(Math, highVal));

// var multis = [1,3,7,10,2];
// function multiplication (a) {
// 	multi = a[0];
// 	for (i=1; i<parseInt(a.length); i++) {
// 		multi = multi * a[i];
// 	}
// }
// 	multiplication(multis);
// 	console.log(multi);

var usertemp = prompt("enter the hotness");
console.log (usertemp);

if (parseInt(usertemp)<25){
	document.body.style.backgroundColor = "blue";
}
else {
	document.body.style.backgroundColor = "salmon";
}

