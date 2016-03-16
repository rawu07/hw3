var X = {
  Street:'Main',
  Number:100,
  Apartment: {
    Floor:3,
    Number:301,
  }, //要加逗號
  num: function() {
    console.log(`${this.Number} ${this.Apartment.Number}`)
  }
}

var person = {
  firstname:'Irina',
  lastname:'Chen',
  greet: function() {
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
  }
}
person.greet();
console.log(person['firstname']);

X.num();
