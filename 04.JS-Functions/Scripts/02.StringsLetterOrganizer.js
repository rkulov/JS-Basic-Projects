function sortLetters(input,bool){
    var buffArr=[];
    for ( var i=0; i<input.length; i++){
        buffArr.push(input.charAt(i));
    }
    buffArr.sort(function(a,b){return a.toLowerCase()> b.toLowerCase()});
    if(!bool){
        buffArr.reverse();
    }
    var result='';
    for(var j in buffArr){result+=buffArr[j]};
    console.log(result);
}

sortLetters('HelloWorld', false);

