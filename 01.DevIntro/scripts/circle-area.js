function calcCircleArea(r){
    r = document.getElementById("radius").value;
    var area= Math.PI*r*r;
    document.getElementById("circle").innerHTML='r = '+r+'; area = '+area;
}