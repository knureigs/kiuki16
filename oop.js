// let person = {
//     age: 18,
//     name:"Vasya"
// }

function Person(age, name){
    this.age=age;
    this.name=name;

    var lastName="Petrovich";
    function getFullName() {
        return name + " " + lastName;
    }

    this.hi = function(){
        alert("Hi, " + getFullName());
    }
}
var person=new Person(18, "Vasya");
//person.hi();

function Student(institute) {
    Person.apply(this, [18, "Petya"]);
    this.institute = institute;
}
Student.prototype=person;

var stud = new Student("NURE");
console.log(stud.institute);
console.log(stud["name"]);


// console.log(typeof(person));
// console.dir(person);
// console.log(person.age);
// console.log(person["name"]);