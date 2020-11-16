let error=document.getElementById("error");
let email=document.getElementById("form-username");
let pwd=document.getElementById("form-password");

let re=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
function validate(){
	
	if(re.test(email.value)){
		alert("Login success");
		error.innerHTML="valid"
		error.style.color="green";
		return true;

	}
	else{
		alert("Invalid username and password");
		error.innerHTML="invalid";
		error.style.color="red";
		return false;

	}
}



