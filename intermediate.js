var grades = [76,85,65,93,81];
// parseInt(array) = 0;
average = 0;
for (i=0; i<grades.length; i++){
	average = (average + grades[i]);
	// average = average * 1/(grades.length+1);
	aver = average / grades.length;
}

document.write (average);
console.log (aver);