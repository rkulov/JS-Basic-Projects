function onClickChB(){
    if (checkbox.checked==1) {
        var elements = document.querySelectorAll(".inv");
        for (var i in elements) {
            elements[i].style.visibility = "visible";
        }
    }
    else {
        var elements = document.querySelectorAll(".inv");
        for (var i in elements) {
            elements[i].style.visibility = "hidden";
        }
    }
}