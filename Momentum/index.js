// String
// const what = "Lim Min Seong";

// Boolean
// const result1 = true;
// const result2 = false;

// Number
// const wat = 666;

// Float
// const wat = 55.1;

/* Array
const something = "Something";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, something];

console.log(daysOfWeek);
*/

/*
const henryInfo = {
  name :"Henry",
  age : 25,
  gender : "Male",
  isHandsome : true,
  favColor : ["blue", "black", "red"],
  favFood : [
    {
      name : "Kimchi",
      fatty : false
    },
    {
      name : "Cheese burger",
      fatty : true
    },
    {
      test : "isItPossible?",
      test2 : "not Boolean"
    }
  ] 
}

console.log(henryInfo);

console.log(henryInfo.age);

henryInfo.age = 26;

console.log(henryInfo.age);
*/

/*
const henryInfo = {
  name : "Henry",
  age : 25,
  gender : "Male",
  isHandsome : true
}
// console is also a object as henryInfo
console.log(henryInfo, console);
*/

/*
function sayHello(name, age) {
  // console.log("Hello!", name, "you have", age, "years of age.");
  // console.log("Hello" + name + "you are" + age + "years old");
  // console.log(`Hello ${name} you are ${age} years old`);

  return `Hello ${name} you are ${age} years old`;
}

const greetHenry = sayHello("Henry", 25);

console.log(greetHenry);
*/


/*
const calculator = {
  plus : function(a, b) {
    return a + b;
  },
  minus : function(a, b) {
    return a - b;
  },
  divide : function(a, b) {
    return a / b;
  },
  powerOf : function(a, b) {
    return a ** b;
  },
  multiply : function(a, b) {
    return a * b;
  }
}

console.log(calculator.plus(5, 5));
console.log(calculator.minus(5, 5));
console.log(calculator.divide(5, 5));
console.log(calculator.powerOf(3, 3));
console.log(calculator.multiply(5, 5));
*/

/*
// const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = 'I own you now';
*/

/*
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = 'blue';
}

title.addEventListener("click", handleClick);
*/

/*
if ("10" === 10) {
  console.log('hi');
}
else if ("10" === "10") {
  console.log("lalala");
}
else {
  console.log('ho');
}

if (20 > 5 && "nicolas" === "nicolas") {
  console.log("yes");
}
if (20 > 5 || "nicolas" === "necolas") {
  console.log("yes2");
}

const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
  console.log("You can drink but you should not");
}
else if (age > 21) {
  console.log("Go ahed");
}
else {
  console.log("Too young");
}
*/


/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  }
  else {
    title.style.color = BASE_COLOR;
  }
}

function init()
{
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (!hasClass) {
  //   title.classList.add(CLICKED_CLASS);
  // }
  // else {
  //   title.classList.remove(CLICKED_CLASS);
  // }

  // Same thing as the above one
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();