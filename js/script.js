const formcontrol= document.getElementByClass('form-control')

formcontrol.addEventListener('Sign-in',(e) -> {
    e.preventDefault()
}

function validateForm(){
    
    var userName = document.getElementByClass('form-control').value;
    var email=document.getElementById('inputEmail4').value;
    var passWord = document.getElementById('inputPassword4').value;
    var address = document.getElementById('inputAddress').value;

    if((username!= null) && (email!= null) &&(password!= null) && (address!= null)) {
        alert("Oops...", "Kindly ensure you have filled out the form correctly. ")
    }
    else{
        SVGFEDropShadowElement("Thank you for contacting us!", "We will get back to you as soon as possible", "SAFI,neat is our middle name.")
    }
}
