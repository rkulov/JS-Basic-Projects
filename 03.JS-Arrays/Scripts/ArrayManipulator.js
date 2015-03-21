
function solve(input){
    var arr= input.filter(isFinite);
    arr.sort(function(a,b){return a-b;});
    var min = arr[0];
    var max = arr[arr.length-1];
    arr.reverse();
    var freq={};
    var maxF=0;
    var maxE=arr[0];
    for ( var i in arr){
        freq[arr[i]]=(freq[arr[i]]||0)+1;
        if (freq[arr[i]]>maxF){
            maxF=freq[arr[i]];
            maxE=arr[i];
        }
}

    console.log("Min number : "+min);
    console.log("Max number : "+max);
    console.log("Most frequent number: "+maxE);
    console.log(arr);

}
var input =["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
solve(input);