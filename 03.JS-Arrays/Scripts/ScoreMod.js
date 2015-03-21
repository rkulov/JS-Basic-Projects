

function solve(input){

    var grades = input.filter(function(a){return(a>0&&a<400);});
    for ( var i in grades){
        grades[i]-=grades[i]*0.2;
    }
    grades.sort(function(a,b){return a-b;});
    console.log(grades);
}

input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
solve(input);