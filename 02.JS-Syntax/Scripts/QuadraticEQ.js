var a= prompt("Input parameter a");
var b= prompt("Input parameter b");
var c= prompt("Input parameter c");
var x1 =(-b-Math.sqrt(b*b -4*a*c))/(2*a);
var x2 =(-b+Math.sqrt(b*b -4*a*c))/(2*a);

if(isNaN(x1)||isNaN(x2)){
    console.log("No real roots");
}
else if ( x1===x2){
    console.log("X = %d",x1);
}
else {
    console.log("X1 = %s",x1);
    console.log("X2 = %s",x2);
}