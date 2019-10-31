/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '15 6 8 14 12 9 11 10 13 7';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */ 

 function mysteryRange(str, numberOfElements) {
 	
 	var array = [];
 	var arrayFinal = [];
 	array = str.split(' ');
 	var check = true;

 	if(array.length > 100 || numberOfElements !== array.length){
 		return "Please  try again later !";
 	} 



 	for(var i = 0; i < array.length; i++) {
 		arrayFinal.push(parseInt(array[i]));
 	};

 	while(check === true) {
 			check = false;
 			for(var j = 0; j < arrayFinal.length-1; j++) {
 				if( (arrayFinal[j] < 0) || (arrayFinal[j] > 100) ) {
 					return "One of your numbers is out of range .Try again later !"
 				}

 				for(var h = j+1; h < arrayFinal.length; h++) {
 					if(arrayFinal[j] < arrayFinal[h]) {
 						var vexel = arrayFinal[j];
 						arrayFinal[j] = arrayFinal[h]; 
 						arrayFinal[h] = vexel;
 						check = true;
 				}
 			}
 		}
 	}
 	
 	return 'the range of numbers is from ' + arrayFinal[arrayFinal.length - 1] + ' to ' + arrayFinal[0];

 };