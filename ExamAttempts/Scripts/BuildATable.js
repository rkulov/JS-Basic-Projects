function BuildATable(arr){

    var result ='\<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>\n';
    function isFib(x){
        function isSQ(y){
            var s = Math.sqrt(y);
            return s=== Math.round(s);

        }
        if(isSQ(5*x*x+4)||isSQ(5*x*x-4)){
            return 'yes';
        }
        else{
            return 'no';
        }
    }
    for (var i=arr[0]; i<=arr[1];i++){
        result+='\<tr><td>'+i+'\</td><td>'+i*i+'\</td><td>'+isFib(i)+'\</td></tr>'+'\n';
    }
    result+='\</table>';

    console.log(result);

}
BuildATable([55,56]);