const personProtoype = {
  firstName: 'Leonardo',
  lastName: 'Henrique',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personProtoype);
console.log(anotherPerson.firstName);
