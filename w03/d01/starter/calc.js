$(function(){


 // $('.operator').on('click', function(){
 //   var leftNum = $('#1').val();
 //   var rightNum = $('#2').val();
 //   leftNum =parseInt(leftNum);
 //   rightNum =parseInt(rightNum);

 //   if (isNaN(leftNum,rightNum) || (leftNum==="" || rightNum ==="" )){
 //   alert("Nice try, we thought of every user input possible");
 //  }

   $('#addition').on('click',function (){
     var leftNum = $('#1').val();
     var rightNum = $('#2').val();
     leftNum =parseInt(leftNum);
     rightNum =parseInt(rightNum);

     if (isNaN(leftNum,rightNum) || (leftNum==="" || rightNum ==="" )){
     alert("Nice try, we thought of every user input possible");
     }

     var calcResult = add(leftNum, rightNum);
     $('.result').html(calcResult);
     $("#hisResults").append(calcResult + " ");

   });

   $('#subtraction').on('click',function (){
     var leftNum = $('#1').val();
     var rightNum = $('#2').val();
     leftNum =parseInt(leftNum);
     rightNum =parseInt(rightNum);

     if (isNaN(leftNum,rightNum) || (leftNum==="" || rightNum ==="" )){
     alert("Nice try, we thought of every user input possible");
     }
     var calcResult = minus(leftNum, rightNum);
     $('.result').html(calcResult);
     $("#hisResults").append(calcResult + " ");
   });

   $('#multiply').on('click',function (){
     var leftNum = $('#1').val();
     var rightNum = $('#2').val();
     leftNum =parseInt(leftNum);
     rightNum =parseInt(rightNum);

     if (isNaN(leftNum,rightNum) || (leftNum==="" || rightNum ==="" )){
     alert("Nice try, we thought of every user input possible");
     }
     var calcResult = multiply(leftNum, rightNum);
     $('.result').html(calcResult);
     $("#hisResults").append(calcResult + " ");
   });

   $('#divide').on('click',function (){
     var leftNum = $('#1').val();
     var rightNum = $('#2').val();
     leftNum =parseInt(leftNum);
     rightNum =parseInt(rightNum);

     if (isNaN(leftNum,rightNum) || (leftNum==="" || rightNum ==="" )){
     alert("Nice try, we thought of every user input possible");
     }
     var calcResult = divide(leftNum, rightNum);
     $('.result').html(calcResult);
     $("#hisResults").append(calcResult + " ");
   });
 // });

   $('#clear').on('click',function(){
   $('.result').html('<p>All clear</p>');
   $('#1').val("");
   $('#2').val("");
   $('#hisResults').empty();
 })


function add(num1,num2){
 return (num1 + num2)
}

function minus(num1,num2){
 return (num1 - num2)
}

function multiply(num1,num2){
 return (num1 * num2)
}

function divide(num1,num2){
 return (num1 / num2)
}

/*
function localStorage.result('hisResults'){

//set item
}

if(typeof(result) == "number") {

  localStorage.setItem('number');

  document.getElementById('hisResults').innerHTML=

  localStorage.getItem('number');
    // Code for localStorage/sessionStorage.
}

//myStorage=localStorage;
//localStorage.setItem();

*/








})
