var input = Number(prompt("Enter a number"));
while (input<=0){
    input = prompt("Enter a number");
}
var hex = input.toString(16).toUpperCase();
alert(hex);