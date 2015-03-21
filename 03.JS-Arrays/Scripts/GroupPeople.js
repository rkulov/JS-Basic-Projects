
function groupBy(criteria){
    function Person( firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    var person = [
        new Person("Scott", "Guthrie", 38),
        new Person("Scott", "Johns", 36),
        new Person("Scott", "Hanselman", 39),
        new Person("Jesse", "Liberty", 57),
        new Person("Jon", "Skeet", 38)
    ];


    console.log(person);
}
var criteria;
groupBy(criteria);