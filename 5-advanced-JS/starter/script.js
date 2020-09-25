// function constructor

// var john = {
//   name: "John",
//   yearOfBirth: 1990,
//   job: "teacher",
// };

// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };
// Person.prototype.lastName = "pk";
// var john = new Person("John", 1998, "teacher");
// var Jane = new Person("Jane", 2000, "student");
// var Mary = new Person("Mary", 2000, "teacher");
// john.calculateAge();
// console.log(john.lastName);
// Jane.calculateAge();
// Mary.calculateAge();
// console.log(john);

// objects create

// var obj = {
//   calculateAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   },
// };

// // var john = Object.create(obj);
// // john.yearOfBirth = 1998;

// var john = Object.create(obj, {
//   name: { value: "John" },
// });
// console.log(john);
// john.calculateAge();

// // Primitives vs objects

// var a = 23;
// var b = a;
// console.log(a);
// console.log(b);

// var obj1 = {
//   name: "John",
//   age: 26,
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //function calculateAge

// var age = 27;

// var obj = {
//   name: "Jonas",
//   city: "san Francisco",
// };

// function ob(a, b) {
//   a.name = "prince";
//   b.city = "Delhi";
// }

// ob(obj, obj);
// console.log(obj);

//function

// var arr = [1998, 1999, 2000, 2001, 2002, 2008];

// function calculateAge(arr, fn) {
//   var arrRes = [];

//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }

//   return arrRes;
// }

// function calcAge(el) {
//   return 2020 - el;
// }

// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   return Math.round(206.9 - 0.67 * el);
// }

// var ages = calculateAge(arr, calcAge);
// var fullAges = calculateAge(ages, isFullAge);
// var heartRate = calculateAge(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(heartRate);

// function interviewQuestion(job) {
//   if (job === "designer") {
//     return function (name) {
//       console.log(`Hello ${name} can you explain what is ux desiger ?`);
//     };
//   } else if (job === "teacher") {
//     return function (name) {
//       console.log(` What subject do you teach ${name}`);
//     };
//   } else {
//     console.log(`Hello ${name} what do yoy do?`);
//   }
// }

// var teacherQuestion = interviewQuestion("teacher");
// var designerQuestion = interviewQuestion("designer");

// teacherQuestion("john");
// designerQuestion("Mark");

// interviewQuestion("teacher")("Prince");

//IIFE

// function score() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// score();

// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

// call bind  apply method

// var john = {
//   name: "John",
//   age: 26,
//   job: "teacher",
//   presentation: function (style, timeOfDay) {
//     console.log(this);
//     if (style === "formal") {
//       console.log(
//         "Good " +
//           timeOfDay +
//           ", Ladies and gentlemen! I'm " +
//           this.name +
//           ", I'm a " +
//           this.job +
//           " and I'm " +
//           this.age +
//           " years old."
//       );
//     } else if (style === "friendly") {
//       console.log(
//         "Hey! What's up? I'm " +
//           this.name +
//           ", I'm a " +
//           this.job +
//           " and I'm " +
//           this.age +
//           " years old. Have a nice " +
//           timeOfDay +
//           "."
//       );
//     }
//   },
// };

// var emily = {
//   name: "Emily",
//   age: 35,
//   job: "designer",
// };

// var mark = {
//   name: "Mark",
//   age: 21,
//   job: "Frontend",
// };
// // john.presentation("formal", "morning");

// // call method and apply method workd same except apply take argument in [] array
// // call method copy the method to emily object and set this key to emily object
// // john.presentation.call(emily, "friendly", "afternoon");

// // john.presentation.apply(mark, ["friendly", "afternoon"]);

// var markFun = john.presentation.bind(mark);

// markFun("friendly", "evenning");

// var arr = [1998, 1999, 2000, 2001, 2002, 2008];

// function calculateAge(arr, fn) {
//   var arrRes = [];

//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }

//   return arrRes;
// }

// function calcAge(el) {
//   return 2020 - el;
// }

// function isFullAge(limit, el) {
//   return el >= limit;
// }

// function maxHeartRate(el) {
//   return Math.round(206.9 - 0.67 * el);
// }

// let ages = calculateAge(arr, calcAge);
// let fullage = calculateAge(ages, isFullAge.bind(this, 19));
// console.log(ages);
// console.log(fullage);

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    this.answers.forEach((value, index) => {
      console.log(`${index}: ${value}`);
    });
  };
  Question.prototype.checkAnswer = function (userAnswer, score) {
    let sc = 0;
    if (userAnswer === this.correct) {
      console.log(`Your Answer   is  correct`);
      sc = score(true);
      this.displayScore(sc);
    } else {
      console.log(" Your answer is wrong");
      sc = score(false);
      this.displayScore(sc);
    }
  };

  Question.prototype.displayScore = function (sc) {
    console.log(`Your current score is ${sc}`);
    console.log("------------------------------------");
  };

  var q1 = new Question(
    "Is JavaScript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );
  var q2 = new Question(
    "What is the name of this course's teacher?",
    ["mosh", "brad", "jonas"],
    2
  );
  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tediuos"],
    3
  );

  function score() {
    let sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var displayScore = score();

  var questions = [q1, q2, q3];
  function nextQuestion() {
    var random = Math.floor(Math.random() * questions.length);
    questions[random].displayQuestion();

    // console.log(`${questions[random].question}  `);
    // questions[random].answers.forEach((value, index) => {
    //   console.log(`${index}: ${value}`);
    // });

    var prom = prompt("Choose your answer?");

    if (prom !== "exit") {
      questions[random].checkAnswer(parseInt(prom), displayScore);

      nextQuestion();
    }
  }
  nextQuestion();
  // function checkAnswer(userAnswer, correctAnswer) {
  //   if (userAnswer === `${correctAnswer}`) {
  //     console.log(`Your Answer is ${correctAnswer} correct`);
  //   } else {
  //     console.log(" Your answer is wrong");
  //   }
  // }

  // checkAnswer(prom, questions[random].correct);
})();
