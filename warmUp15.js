// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverseString(str) {
	var arr = [];
	var firstWord = "";
	var i = 0;
	var h = 0;
	var stop = 0;
	while(i < str.length) {
		
		if(str[i + 1] === " ") {
			if(arr.length === 0 ) {
				var start = 0;
			}else {
				var start = i + 1;
				var stop = start;
				while(str[stop + 1] !== " ") {
					stop++ ;
				}
			}
			for(let j = start; j < stop; j++) {
				firstWord += str[j];
			
			}
			// var startCount = i + 2;
            arr[h]= firstWord;
			h++;
		}
		i++;
	
	}
	return arr;
}
