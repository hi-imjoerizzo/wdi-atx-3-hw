
$(function(){
	var count = 1;
	function button1(){
		$("#button1").html(count);
		count++;
	}
	function button2(){
		$("#button2").html(count);
		count+=5;
		button1();
	}
	function button3(){
		$("#button3").html(count);
		count -= 3;
		button2();
	}


	$("#button1").click(function(){
		console.log('clicked1');
		button1();
	});
	$("#button2").click(function(){
		console.log('clicked2');
		button2();
		$(this).toggleClass("hello");
	});
	$("#button3").click(function(){
		console.log('clicked3');
		button3();
	});


});


