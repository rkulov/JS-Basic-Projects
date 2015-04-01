function isPrime(a){
    var check=true;
    for (var i=2; i<=a; i++){
        if (a%2===0){
            check = false;
        }
    }
    console.log(check);
}
isPrime(7);
isPrime(254);
isPrime(587);