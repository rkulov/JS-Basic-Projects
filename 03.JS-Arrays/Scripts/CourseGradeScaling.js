

function solve(input){

   for( var i in input){
       input[i].score+=input[i].score*0.1;
       if ( input[i].score>100){
           input[i].hasPassed=true;
       }
       else{
           input[i].hasPassed=false;
       }
   }
    input.sort(function(a,b){return a.name> b.name;});
    var result=input.filter(function(a){if(a.hasPassed===true){return a;}});
    console.log(result);
}
var input=[
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];
solve(input);
