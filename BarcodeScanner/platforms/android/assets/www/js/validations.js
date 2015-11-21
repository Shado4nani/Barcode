function valid(){
	var user = document.getElementById("username").value;
	var pas = document.getElementById("password").value;
	
	if(user == ''){
		alert("Please your Email address");
	}else if(pas == ''){
			alert("Please your Password");
	}else{
		window.location="https://www.google.co.za";
	}
}
