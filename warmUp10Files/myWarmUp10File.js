
$('document').ready(function() {
	$('body#dd').append('<ul></ul>');
	var randClass = 0;
	$('button#firstButton').click(function() {
	var input = $('#text').val();
	alert(input);
	
	
	var theId = "liId" + randClass;
	alert("the id is :  " + theId)
	$('ul').append("<li class='' id=" + theId +"></li>")
	var theIdDisplay = "#" + theId;
	if(randClass % 2 === 0 ) {
		$(theIdDisplay).attr("class","classOne");
	}else if(randClass % 2 !== 0) {
		$(theIdDisplay).attr("class","classTwo");
	}
	randClass++;
	$(theIdDisplay).text(input);

});

	
	
	

	


	


});

