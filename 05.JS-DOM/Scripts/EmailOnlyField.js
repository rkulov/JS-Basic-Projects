function validate(){

    var emailV= document.getElementById("email").value;
    document.getElementById("validation").innerHTML=emailV;
    var check =/@[a-zA-Z]+.[a-zA-z]+/g;
    if(check.test(emailV)){
        document.getElementById("validation").style.visibility="visible";
        document.getElementById("validation").style.background="green";
    }
    else{
        document.getElementById("validation").style.visibility="visible";
        document.getElementById("validation").style.background="red";
    }
}