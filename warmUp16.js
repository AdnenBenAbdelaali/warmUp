// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function makeBalloon(str) {
	var len = "baloon".length;
	var bal = "balloon";
	var count = 0;
	var found = false;
	if(str.length >= 10000) {
		return "too long input to deal with .Please try a shorter string."
	}
	for(let i = 0; i < str.length; i++) {
		if(str[i].toUpperCase() === str[i]) {
			return "Please input a string that contatins no capital letters and try again.";
		}
	}

	for(let j = 0; j < str.length; j++) {

			found = false;
			for(let h = 0; h < bal.length; h++) {
				if(str[j] === bal[h]) {
					found = true;
					
				}
				
			}
		
	}





}