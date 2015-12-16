<<<<<<< HEAD
$('document').ready(function(){
  $('div').css("background-color", "blue");
  $('div.hello').css('background-color', 'red');
  $('body').append("<p>Adding a new paragraph</p>");

  $('div. hello: first'). attr('class', 'goodbye')


})
=======
$("document").ready(function(){
	// $("div").css("background-color", "blue");
	// $("div.hello").css("background-color", "red");
	$("body").append("<p>Adding a new paragraph</p>");
	var div = $("div");
	div.click().addClass("newClass")

})

// $("document").ready(function() {
//      $("body").html("<p>The page just loaded!</p>");
// });

// window.addEventListener("DOMContentLoaded", function(evt) {
//             var elem = document.getElementsByTagName("body")[0];
//             var para = document.createElement("p");
//             var text = document.createTextNode("The page just loaded!");
//             para.appendChild(text);
//             elem.appendChild(para);
//         });
>>>>>>> e503d591fd0801dda3d83cae054311b7507c3b0c
