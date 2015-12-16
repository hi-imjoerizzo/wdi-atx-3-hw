var name = "Sean";
var age = 28;

function greet() {
  var something = "asfvakhsdvalkshbljhrbk";

  function someAction() {
    console.log(something);
  }

  someAction("helloooo");
}

greet();

function goodbye() {

}

// function showAlert() {
//   alert("Hey there visitor!");
// }

// // Works
// setTimeout(showAlert, 3000);

// // Works
// setInterval(function() {
//   alert("Hey there visitor!");
// }, 3000);

// // Doesn't Work
// setTimeout( alert("Hey there visitor!"), 3000);



// var name = prompt("What is your name?");
// var leaving = confirm("Are you leaving?");

// console.log( saySomething(greeting, goodbye) );

// // Composition version
// function saySomething() {
//   if (leaving) {
//     greeting(name);
//   }
//   else {
//     goodbye(name);
//   }
// }

// // Callback version
// function saySomethingCB(callback1, callback2) {
//   if (leaving) {
//     return callback2(name);
//   }
//   else {
//     return callback1(name);
//   }
// }

// function greeting(personName) {
//   return "Hello " + personName + ", how are you?";
// }

// function goodbye(personName) {
//   return "Goodbye, " + personName;
// }
