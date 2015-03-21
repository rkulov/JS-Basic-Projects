function calcSupply(age,maxAge,food,foodPerDay){
    var foodEaten = (maxAge-age)*365*foodPerDay;
    console.log(foodEaten+"kg"+" of "+food+" would be enough until I am "+maxAge+" years"+" old");
}
var age = 38;
var maxAge= 118;
var food= "chokolate";
var foodPerDay= 0.5;
calcSupply(age,maxAge,food,foodPerDay);