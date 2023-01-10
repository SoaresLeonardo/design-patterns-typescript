function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personProtoype = {
  firstName: 'Leonardo',
  lastName: 'Henrique',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personProtoype);

const person1 = new Person('leonardo', 'henrique', 15);
console.log(person1.fullName());
