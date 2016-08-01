$(document).ready(function(){
	$("#hideButton").click(function(){
		$("img").hide();	
});

$("#showButton").click(function(){
	$("img").show();
  });
$("#toggleButton").click(function(){
	$("img").toggle();
  });
});