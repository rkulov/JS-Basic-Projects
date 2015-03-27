function arrayObjectExtractor(input) {
    var newArr=[];
    function isObj(a){
        if (a.constructor===Object ){ return a;}
    }
    for ( var i=0 ;i< input.length;i++){
        if(isObj(input[i])){
            newArr.push(isObj(input[i]));
        }
    }
    console.log(newArr);
        }

var input =[
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];
arrayObjectExtractor(input);