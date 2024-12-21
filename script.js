// distructing

const numbers = [10, 20, 30, 40, 50, 60, 70];

//old way
const num1 = numbers[0];
const num2 = numbers[1];

//new way

const [a, b, c, d, e, f, g] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

// destructuring assignment syntax is a  javascript expression
// that makes it possible to unpack values from arrays,
//  or properties from objects, into distinct variables.

//destructuring with spread operator

const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120];

const [x, y, z, ...nums] = array1;
console.log(x);
console.log(y);
console.log(y);
console.log(nums);

//destructing of objects

const person = {
  name: "john",
  age: 30,
  city: "New York",
};

//old way
//const name = person.name;
//const age = person.age;

//new way

const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

// hoisting ?
