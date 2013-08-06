var user = document.getElementById('user');
var pass = document.getElementById('pass');

var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
	var out = pass.value;
	console.log('out');
	if(out == 'abc')  {
		window.location.href = "http://www.google.com";
<<<<<<< HEAD
		window.open('http://www.google.com');
=======
		window.open('http://www.google.com');
>>>>>>> 6d066bb60c77c979c64d3c6febe1c7a3c734bb5b
	}  
	else
	{
		alert("Incorrect Password");
	}
    
})
