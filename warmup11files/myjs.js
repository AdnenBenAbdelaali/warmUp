// Write a jQuery function that creates a new element
 //in the left unordered list if the “left” button 
 //was pressed before the “create” button and to the right
 // unordered list if the “right” button was pressed 
  //before the “create” button 
/* left <ul></ul> */

	$('#createButton').click(function() {
	var $left = false;
	var $right = false;
	var $clicker = true;
	alert('clicker = ' + $clicker + '\n' + "left = " + $left + '\n' + "right = " + $right);


$('#rightButton').click(function() {
  $right = true;
   alert('right = ' + $right);

    if($clicker === true && $right === true) {
			$('#right').append('<li>right button clicked</li>')
			$clciker = false;
			$right = false;	
			
		}
	alert('clicker = ' + $clicker + '\n' + "left = " + $left + '\n' + "right = " + $right);
	})
		
$('#leftButton').click(function() {		
  $left = true;
  alert('left = ' + $left);

  if($clicker === true && $left === true) {
		$('ul#left').append('<li>left button clicked</li>');
		$clciker = false;
		$left = false;
	}

	alert('clicker = ' + $clicker + '\n' + "left = " + $left + '\n' + "right = " + $right);
	
  }) 
	

	})

		


		





