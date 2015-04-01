function divisionby3(a){
    var sum=0;
    while (a/10!==0) {
        if (a>10) {
            sum +=(a % 10);
        }
        else{
            sum+= Math.floor(a);
        }
        a = Math.floor(a / 10);
    }
        if (sum % 3 === 0) {
            console.log('the number is divided by 3 without remainder');
        }
        else {
            console.log('the number is not divided by 3 without remainder');
        }


}
divisionby3(12);
divisionby3(188);
divisionby3(591);