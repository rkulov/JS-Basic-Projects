function findYoungestPerson(array){
    var youngest = people[0];
    var i=1;
    while(youngest.hasSmartphone!==true){
        youngest=people[i];
        i++;
    }
    for(var j in people){
        if(people[j].hasSmartphone===true){
            if(people[j].age<youngest.age){
                youngest=people[j];
            }
        }
    }
    console.log('The youngest persoin is '+youngest.firstname+' '+youngest.lastname);
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];
findYoungestPerson(people);