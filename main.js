// // console.log("It worked!");

//****FUNCTIONS*****/
// function sayHello() {
//   console.log("Hello");
// }

// sayHello();

// const sayHello = function() {
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello");
// }

// sayHello();

// *****FUNCTIONS WITH ARGUMENTS****

// function logsHello(name) {
//   console.log(`Hello ${name}`);
// }

// logsHello('Ellie');

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2; 
  console.log(sum);
  return sum;
}

addsTwoNumbers(6, 6);
console.log(addsTwoNumbers(6, 6));
