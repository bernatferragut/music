// scribble tune
console.log('Hi Guys');
console.log('///////////')

let person =  function( name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

   person.prototype.sayAge = function (age) {
       console.log('My age is' + ' ' + age);
   }
}

const person1 = new person('Bernat', 'Ferragut', 42);
const person2 = new person ('Llorenc', 'Ferragut', 36);
console.log(person1.name + ' ' + person1.surname);
person1.sayAge(42);
console.log('///////////')
console.log(person2.name + ' ' + person2.surname);
person2.sayAge(36);