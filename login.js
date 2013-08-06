var user = document.getElementById('user');
var pass = document.getElementById('pass');

var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
	var out = pass.value;
	console.log('out');
	if(out == 'abc')  {
		window.location.href = "http://www.google.com";
		window.open('http://www.google.com');
	}  
	else
	{
		alert("Incorrect Password");
	}
    
})
