// Write a jQuery function that creates a new element
 //in the left unordered list if the “left” button 
 //was pressed before the “create” button and to the right
 // unordered list if the “right” button was pressed 
  //before the “create” button 
/* left <ul></ul> */
  $('#leftButton').on('click',function() {
  	$('ul#left').append('<li></li>');
  })