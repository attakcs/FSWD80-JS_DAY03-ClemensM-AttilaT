// var grades = [76,85,65,93,81];
// average = 0;
// for (i=0; i<grades.length; i++){
// 	average = (average + grades[i]);
// 	aver = average / grades.length;
// }

// document.write (average);
// console.log (aver);

// switch (true) {
// 	case aver >=90:
// 	console.log("A");
// 	break;
// 	case aver >=80:
// 	console.log("B");
// 	break;
// }

var n = prompt("How many numbers would you like")
function fizzbuzz() {
	for (i=1; i<=n; i++) {
		if (i%15 == 0) {
			document.write("FizzBuzz" + "<br>");
		} else if (i%3 == 0) {
			document.write("Fizz" + "<br>");
		} else if (i%5 == 0) {
			document.write("Buzz" + "<br>");
		} else {
			document.write(i + "<br>")
		}
	}
}

fizzbuzz();