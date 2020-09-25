// let a;
// console.log(a);

// Blocks and IIFE

//es6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3;
// }

// console.log(c);

// // ES5

// (function () {
//   let c = 3;
// })();

// console.log(c);

// ES5

// let firstName = "John";
// let lastName = "Smith";
// let year = 1998;
// function yearOfBirth(year) {
//   return Math.abs(year - 2020);
// }

// console.log(
//   "This is" +
//     firstName +
//     " " +
//     lastName +
//     "today he is " +
//     " " +
//     yearOfBirth(year) +
//     "year old"
// );

// //ES6

// console.log(
//   `This is  ${firstName} ${lastName}. He was born in ${year}.Today, he is ${yearOfBirth(
//     year
//   )} years old.`
// );

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith("J"));
// console.log(n.endsWith("th"));
// console.log(n.includes("m"));
// console.log(`${firstName} `.repeat(5));

// ES5

// var box5 = {
//   color: "green",
//   position: 1,
//   clickme: function () {
//     var self = this;
//     document.querySelector(".green").addEventListener("click", function () {
//       var str =
//         "This is box number" + self.position + " and it is " + self.color;
//       alert(str);
//     });
//   },
// };

// box5.clickme();
// //ES6
// const box6 = {
//   color: "green",
//   position: 1,
//   clickme: () => {
//     document.querySelector(".green").addEventListener("click", () => {
//       var str =
//         "This is box number " + this.position + " and it is " + this.color;
//       alert(str);
//     });
//   },
// };

// box6.clickme();

//ES5

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.myFriends5 = function (friends) {
//   var arr = friends.map(
//     function (el) {
//       return this.name + " is " + el;
//     }.bind(this)
//   );
//   console.log(arr);
// };

// var fringe = ["Bob", "Jane", "Mark"];

// new Person("John").myFriends5(fringe);

// function Person6(name) {
//   this.name = name;
// }

// Person6.prototype.myFriends5 = function (friends) {
//   var arr = friends.map((el) => {
//     return this.name + " is " + el;
//   });
//   console.log(arr);
// };

// var fringe = ["Bob", "Jane", "Mark"];

// new Person6("John").myFriends5(fringe);

// ES6 Destructuring

// var john = ["John", 22];

// const [name, age] = john;

// console.log(name, age);

// const obj = {
//   firstName: "John",
//   age: 22,
// };

// const { firstName: a, age: b } = obj;

// console.log(a, b);

// function calcAgeRetirement(year) {
//   let age = new Date().getFullYear() - year;

//   return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1998);

// console.log(age);
// console.log(retirement);

// ES5

// var boxes = document.querySelectorAll(".box");
// // console.log(boxes)
// // var boxesArr5 = Array.prototype.slice.call(boxes);

// // boxes.forEach(function (box) {
// //   box.style.backgroundColor = "dodgerblue";
// // });ss

// ES6

// let boxesArr6 = Array.from(boxes);

// boxesArr6.forEach(function (box) {
//   box.style.background = "dodgerblue";
// });
// boxes.forEach(function (box) {
//   box.style.background = "dodgerblue";
// });

// for (let index = 0; index < boxes.length; index++) {
//   if (boxes[index].className === "box blue") {
//     continue;
//   }

//   boxes[index].textContent = "I changed to blue";
// }

// for (const cur of boxes) {
//   if (cur.className.includes("blue")) {
//     continue;
//   }

//   cur.textContent = "I changed to blue";
// }

// var ages = [12, 15, 17, 22, 9];
// // var full = ages.map((v) => {
// //   return v >= 18;
// // });
// // console.log(full);
// // var tr = full.indexOf(true);
// // console.log(tr);
// // var val = ages[full.indexOf(true)];
// // console.log(val);

// let tr = ages.findIndex((cur) => {
//   return cur >= 18;
// });

// console.log(tr);
// let v = ages.find((cur) => {
//   return cur >= 18;
// });

// console.log(v);

// Spread operator

// ES5

// function spreadOperator(a, b, c, d) {
//   return a + b + c + d;
// }

// console.log(spreadOperator(1, 2, 3, 4));

// let arr = [1, 2, 3, 4];

// let app = spreadOperator.apply(null, arr);
// console.log(app);

// // es6

// let spread = spreadOperator(...arr);
// console.log(spread);

// let h = document.querySelector("h1");
// let boxes = document.querySelectorAll(".box");

// const all = [h, ...boxes];
// // Array.from(all) change a nodelist into array
// all.forEach((cur) => {
//   cur.style.color = "blue";
// });

//rest parameters

// function isFullAge5(limit) {
//   //arguments is not an array
//   let argArr = Array.prototype.slice.call(arguments, 1);

//   argArr.forEach((cur) => {
//     console.log(limit - cur);
//   });
// }

// isFullAge5(2019, 2000, 1998, 1999);

// function isFullAge6(limit, ...years) {
//   //year is an array
//   years.forEach((cur) => console.log(limit - cur));
// }

// isFullAge6(2020, 1990, 1999, 1965, 2016, 1987);

// function Person(name, age) {
//   name === undefined ? (name = "Prince") : (name = name);
//   age === undefined ? (age = 21) : (age = age);
//   this.name = name;
//   this.age = age;
// }

// let p = new Person();

// function Person6(name = "Prince", age = 21) {
//   this.name = name;
//   this.age = age;
// }

// let p6 = new Person6();

//Maps

// const q = new Map();

// q.set("q", "What is your name");
// q.set(1, "pk");
// q.set(2, "nk");
// q.set(3, "ak");
// q.set("correct", "1");
// q.set(true, "correct");
// q.set(false, "incorrect");

// let ques = q.get("q");
// console.log(ques);
// console.log(q.size);

// if (q.has(2)) {
//   q.delete(2);
// }
// console.log(q);

// q.forEach((value, key) => {
//   console.log(value, key);
// });

// for (const k of q.keys()) {
//   console.log(k);
// }
// for (const v of q.values()) {
//   console.log(v);
// }

// for (const [k, v] of q.entries()) {
//   console.log(k, v);
// }

// for (const [k, v] of q.entries()) {
//   if (typeof k === "number") {
//     console.log(k + " : " + v);
//   }
// }

// const ans = parseInt(prompt("what is answer"));
// console.log(ans);
// let c = q.get(ans === parseInt(q.get("correct")));

// console.log(c);

// class

// function Person5(name, yearOfBirth) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
// }

// Person5.prototype.calculateAge = function () {
//   let age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(this.name + " " + age);
// };

// const john = new Person5("Prince", 1998);

// john.calculateAge();

// class Person6 {
//   constructor(name, yearOfBirth) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//   }

//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(this.name + " " + age);
//   }
//   static calculate() {
//     console.log("Calculate age");
//   }
// }

// const marry = new Person6("John", 1998);
// Person6.calculate();
// console.log(marry.calculateAge());

// ES5  passing object to other objects
// function Person5(name, yearOfBirth) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
// }

// Person5.prototype.calculateAge = function () {
//   let age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(this.name + " " + age);
// };

// function Athlete(name ,yearOfBirth,medals){
//   Person5.call(this,name,yearOfBirth,medals)

// }

// const john = new Person5("Prince", 1998);

// john.calculateAge();

// function Person5(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person5.prototype.calculate = function () {
//   var age = new Date().getFullYear() - this.age;
//   console.log(age);
// };

// let john = new Person5("John", 1998);
// john.calculate();

// class Person6 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   calculateAge() {
//     let age = new Date().getFullYear() - this.age;
//     console.log(age);
//   }
// }

// let marry = new Person6("John", 1998);
// marry.calculateAge();

// inherits function to another function

// function Person5(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person5.prototype.calculate = function () {
//   var age = new Date().getFullYear() - this.age;
//   console.log(age);
// };

// let john = new Person5("John", 1998);
// john.calculate();

// function Athlete5(name, age, medals, rank) {
//   Person5.call(this, name, age);
//   this.medals = medals;
//   this.rank = rank;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function () {
//   this.medals++;
//   console.log(this.medals);
// };

// let johnAthlete5 = new Athlete5("John", 1999, 3, 1);

// johnAthlete5.calculate();
// johnAthlete5.wonMedal();

// class Person6 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   calculateAge() {
//     let age = new Date().getFullYear() - this.age;
//     console.log(age);
//   }
// }

// let marry = new Person6("John", 1998);
// marry.calculateAge();

// class Athlete6 extends Person6 {
//   constructor(name, age, medals, rank) {
//     super(name, age);
//     this.medals = medals;
//     this.rank = rank;
//   }
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }

// const johnAthlete6 = new Athlete6("John", 1999, 3, 10);

// johnAthlete6.calculateAge();

/////////////////////////////
///////// coding challenge //////////////////////////

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  densityTree() {
    let density = this.numTrees / this.area;
    console.log(`${this.name} has density of ${density} tree per square km.`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949),
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevard", 1982, 2.5, 5),
];

function calc(arr) {
  let sum = arr.reduce((prev, cur, index) => prev + cur, 0);
  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("------ Park report ---");
  // density
  p.forEach((el) => el.densityTree());
  // average age

  let ages = p.map((el) => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  //  // Which park has more than 1000 trees

  let i = p.map((el) => el.numTrees);
  let f = i.findIndex((el) => el >= 1000);
  console.log(`${p[f].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log("-----STREETS REPORT-----");

  //Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map((el) => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );

  // CLassify sizes
  s.forEach((el) => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
