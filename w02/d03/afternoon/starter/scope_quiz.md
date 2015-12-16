```js
// What is the console output?
(function() {
  var n = 5;

  function a() {
    var n = 6;
  }

  function b() {
    console.log(n);
  }

  a();
  b();
})();



// What is the console output?
(function() {
  var n = 5;

  function a() {
    n = 6;
  }

  function b() {
    console.log(n);
  }

  a();
  b();
})();



// What is the return value?
(function() {

  function f() {
    return 1;
  }

  return f();
  
  function f() {
    return 2;
  }

})();


// What is the console output?
var x = 10;

function foo(x) {
  x += 5;

  return function(y) {
    return x + y;
  };
}

var bar = foo(10);
var no8 = bar(23);

console.log(no8);



// What is the console output?
var x = 6;
var y = 4;

function a(b) {
  return function(c) {
    return y + b + c;
  };
}

x = 2;
y = 5;
var fn = a(x);

x = 1;
y = 3;
console.log(fn(5));
```
