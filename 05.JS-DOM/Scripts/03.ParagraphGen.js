function createParagraph(a, b){

    var par= document.createElement('p');
    var text= document.createTextNode(b);
    par.appendChild(text);
    document.getElementById(a).appendChild(par);
}





