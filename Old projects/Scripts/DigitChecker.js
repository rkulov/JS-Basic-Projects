function digitChecker(a){
    if (Math.floor(a/100)%10===3){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
digitChecker(1235);
digitChecker(25368);
digitChecker(123456);