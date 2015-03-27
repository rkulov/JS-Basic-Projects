Array.prototype.removeItem = function(value){
    var buffArr=[];
    for ( var i=0; i<this.length; i++){
        if (this[i]!==value){
            buffArr.push(this[i]);
        }

    }
    return buffArr;
};
var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
var result;
result=arr.removeItem(1);
console.log(result);