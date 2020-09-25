// type coercion  boolean converted into string

// let job, isMarried;

// job = "developer";
// isMarried = false;

// console.log(job + isMarried);

// variable mutation

// let now, fullAge, yearJohn;

// now = 2020;
// fullAge = 18;
// yearJohn = 1998;

// let yourAge = now - yearJohn >= fullAge;

// console.log(yourAge);

// console.log((22 + 23) / 2);

// // multiple assignment

// let m = (3 + 5) * 4 - 6; // 5+3 = 8 // 8 * 4 = 32// 32 - 6 = 25//

// console.log(m);

//CODING CHALLENGE 1

// BMI (body mass Index)

// let johnHeight = 3; //meter
// let johnMass = 60; //kg

// let markHeight = 2.3; //meter
// let markMass = 70; //kg

// let johnBmi = johnMass / (johnHeight * johnHeight);
// let markBmi = markMass / (markHeight * markHeight);

// console.log(johnBmi, markBmi);

// let Bmi = johnBmi >= markBmi;

// console.log("john bmi is greater than mark bmi", Bmi);

// //switch statement

// let job = "driver";
// let firstName = "John";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teacher kids how to code");
//     break;
//   case "driver":
//     console.log(firstName + " Drive an uber car");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     breaks;
//   default:
//     console.log(firstName + " does something else.");
// }

//CODING CHALLENGE 2

// let johnPoints = 89 + 120 + 103;
// let johnAverage = johnPoints / 3;

// let markPoints = 109 + 109 + 103;
// let markAverage = markPoints / 3;

// let marryPoints = 97 + 234 + 100;
// let marryAverage = marryPoints / 3;

// markAverage > johnAverage
//   ? console.log(
//       "mark is the winner " +
//         "\n mark :" +
//         markAverage +
//         " \n john : " +
//         johnAverage
//     )
//   : markAverage === johnAverage
//   ? console.log("match is draw")
//   : console.log(
//       "john is draw" + "\n john :" + markAverage + " \n john : " + johnAverage
//     );

// if (markAverage > johnAverage && markAverage > marryAverage) {
//   console.log(
//     "mark is the winner " +
//       "\n mark :" +
//       markAverage +
//       " \n john : " +
//       johnAverage
//   );
// } else if (johnAverage > markAverage && johnAverage > marryAverage) {
//   console.log(
//     "john is the winner " +
//       "\n mark :" +
//       markAverage +
//       " \n john : " +
//       johnAverage
//   );
// } else if (marryAverage > johnAverage && marryAverage > markAverage) {
//   console.log(
//     "marry is the winner " +
//       "\n marry :" +
//       marryAverage +
//       " \n john : " +
//       johnAverage
//   );
// } else {
//   console.log("match is draw");
// }

//function declaration

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// function calculateRetirement(year, firstName) {
//   let age = calculateAge(year);
//   let retirement = 65 - age;

//   console.log(firstName + " retires in " + retirement + " years.");
// }

// calculateRetirement(1998, "prince kumar");

// // function expression

// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case "teacher":
//       return "teaches how to code.";
//     case " driver ":
//       return "driver how to drive";
//     case "designer":
//       return " designer how to";
//     default:
//       return "does nothing";
//   }
// };

// let does = whatDoYouDo("teacher", "prince kumar");

// console.log(does);

// initialize new array

// var names = ["pk ", "mark", "john", "designer"];

// var year = new Array(1980, 1990, 1998);

// names[names.length] = "nk";

// names.push("sandeep");
// names.pop();

// names.unshift("sandeep");
// names.shift();

// console.log(names);

// let isDesigner =
//   names.indexOf("designer") !== -1
//     ? "john is designer"
//     : "john is not designer";

// console.log(isDesigner);

// let bill = [124, 48, 268];

// coding challenge 3

// function billCalculator(bill) {
//   let percentage;
//   //   if (bill > 50 && bill < 200) {
//   //     percentage = 0.15;
//   //   } else if (bill < 50) {
//   //     percentage = 0.2;
//   //   }

//   switch (true) {
//     case bill > 50 && bill < 200:
//       percentage = 0.15;

//     case bill < 50:
//       percentage = 0.2;
//   }

//   return bill * percentage;
// }
// 2002;
// let bill2 = prompt("enter your bill");
// let tip = billCalculator(bill2);

// console.log(tip);

// object literal

// let jane = new Object();
// jane.name = "Jane";
// jane.age = 20;
// jane["job"] = "designer";

// console.log(jane);

// let john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1998,
//   calcAge: function() {
//     this.age = 2020 - this.birthYear;
//   }
// };

// john.calcAge();

// console.log(john);

// coding challenge 4

// let john = {
//   name: "John",
//   mass: 70,
//   height: 1.7,
//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// let mike = {
//   name: "Mike",
//   mass: 90,
//   height: 1.5,
//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// if (mike.calcBmi() > john.calcBmi()) {
//   console.log(mike.name + " is the highest BMI " + mike.bmi);
// } else if (john.calcBmi() > mike.calcBmi()) {
//   console.log(john.name + " is the highest BMI " + john.bmi);
// } else {
//   console.log("they have the same BMI");
// }

// for loop to

// var john = ["john", "smith", 1990, "designer"];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// countinue and break

// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") {
//     continue;
//   }

//   console.log(john[i]);
// }

// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") {
//     break;
//   }

//   console.log(john[i]);
// }

//looping backwards

// for (let i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }
var john = ["john", "smith", 1990, "designer"];

// let re = [];

// for (let i = 0; i < 4; i++) {
//   console.log(i);
//   re += john.pop();
// }

// console.log(re);

// reversing array

// for (let i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
