var count=1;
function winner(){
    if ((document.getElementById('i1').getAttribute("src")==document.getElementById('i2').getAttribute("src"))&&(document.getElementById('i2').getAttribute("src")==document.getElementById('i3').getAttribute("src"))&&(document.getElementById('i1').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i1").src="Ow.jpg";
                document.getElementById("i2").src="Ow.jpg";
                    document.getElementById("i3").src="Ow.jpg";
        }
        else{
            document.getElementById("i1").src=document.getElementById("i2").src=document.getElementById("i3").src="Xw.jpg";
        }
        count=10;

    }
    if ((document.getElementById('i4').getAttribute("src")==document.getElementById('i5').getAttribute("src"))&&(document.getElementById('i4').getAttribute("src")==document.getElementById('i6').getAttribute("src"))&&(document.getElementById('i4').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i4").src=document.getElementById("i5").src=document.getElementById("i6").src="Ow.jpg";
        }
        else{
            document.getElementById("i4").src=document.getElementById("i5").src=document.getElementById("i6").src="Xw.jpg";
        }
        count=10;
    }
    if ((document.getElementById('i7').getAttribute("src")==document.getElementById('i8').getAttribute("src"))&&(document.getElementById('i7').getAttribute("src")==document.getElementById('i9').getAttribute("src"))&&(document.getElementById('i7').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i7").src=document.getElementById("i8").src=document.getElementById("i9").src="Ow.jpg";
        }
        else{
            document.getElementById("i7").src=document.getElementById("i8").src=document.getElementById("i9").src="Xw.jpg";
        }
        count=10;
    }
    if ((document.getElementById('i1').getAttribute("src")==document.getElementById('i5').getAttribute("src"))&&(document.getElementById('i5').getAttribute("src")==document.getElementById('i9').getAttribute("src"))&&(document.getElementById('i1').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i1").src=document.getElementById("i5").src= document.getElementById("i9").src="Ow.jpg";
        }
        else{
            document.getElementById("i1").src=document.getElementById("i5").src= document.getElementById("i9").src="Xw.jpg";
        }
        count=10;
    }
    if ((document.getElementById('i7').getAttribute("src")==document.getElementById('i5').getAttribute("src"))&&(document.getElementById('i5').getAttribute("src")==document.getElementById('i3').getAttribute("src"))&&(document.getElementById('i3').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i7").src=document.getElementById("i5").src= document.getElementById("i3").src="Ow.jpg";
        }
        else{
            document.getElementById("i7").src=document.getElementById("i5").src= document.getElementById("i3").src="Xw.jpg";
        }
        count=10;
    }
    if ((document.getElementById('i1').getAttribute("src")==document.getElementById('i4').getAttribute("src"))&&(document.getElementById('i1').getAttribute("src")==document.getElementById('i7').getAttribute("src"))&&(document.getElementById('i1').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i1").src=document.getElementById("i4").src= document.getElementById("i7").src="Ow.jpg";
        }
        else{
            document.getElementById("i1").src=document.getElementById("i4").src= document.getElementById("i7").src="Xw.jpg";
        }
        count=10;
    }
    if ((document.getElementById('i2').getAttribute("src")==document.getElementById('i5').getAttribute("src"))&&(document.getElementById('i2').getAttribute("src")==document.getElementById('i8').getAttribute("src"))&&(document.getElementById('i2').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i2").src=document.getElementById("i5").src= document.getElementById("i8").src="Ow.jpg";
        }
        else{
            document.getElementById("i2").src=document.getElementById("i5").src= document.getElementById("i8").src="Xw.jpg";
        }
        count=10;
    }
    if ((document.getElementById('i3').getAttribute("src")==document.getElementById('i6').getAttribute("src"))&&(document.getElementById('i3').getAttribute("src")==document.getElementById('i9').getAttribute("src"))&&(document.getElementById('i3').getAttribute("src")!="White.jpg")){
        if (count%2!=0){
            document.getElementById("i3").src=document.getElementById("i6").src= document.getElementById("i9").src="Ow.jpg";
        }
        else{
            document.getElementById("i3").src=document.getElementById("i6").src= document.getElementById("i9").src="Xw.jpg";
        }
        count=10;
    }

}
function move(iclicked){
    var id = 'i'+iclicked;
    if((count!=10)&&(document.getElementById(id).getAttribute("src")=="White.jpg")) {
        if (count % 2 == 0) {
            document.getElementById(id).src ="O.jpg";
        }
        else {
            document.getElementById(id).src ="X.jpg";
        }
        count++;
    }
   winner();
}
