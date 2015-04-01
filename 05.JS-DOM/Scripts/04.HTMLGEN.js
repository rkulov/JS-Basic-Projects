var HTMLGen= {
    createParagraph: function(){
        var newP= document.createElement('p');
        var pText= document.createTextNode(arguments[1]);
        newP.appendChild(pText);
        document.getElementById(arguments[0]).appendChild(newP);
    },
    createDiv: function(){

        var newDiv= document.createElement('div');
        var newClass= newDiv.className=arguments[1];
        document.getElementById(arguments[0]).appendChild(newDiv);

    },
    createLink: function(){

        var newA= document.createElement('a');
        var aText= document.createTextNode(arguments[1]);
        newA.appendChild(aText);
        newA.href=arguments[2];
        document.getElementById(arguments[0]).appendChild(newA);

    }

};
