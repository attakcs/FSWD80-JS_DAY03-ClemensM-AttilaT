var temperature =55;

if (temperature <= 10){
	console.log ("fresh in here");
}
else {
	console.log ("not so fresh");
}
// temperature = 5;

var highVal = [1,7,-3,9];

document.write (Math.max.apply(undefined, highVal));
document.write (Math.max.apply(null, highVal));
document.write (Math.max.apply(Math, highVal));

var multis = [1,3,7,10,2];
function multiplication (a) {
	for (i=0; i<a.length; i++) {
		b = a[i];
		b = parseInt(b)*parseInt(a[i+1]);
		return a; }
	}
	multiplication(multis);
	console.log(b);