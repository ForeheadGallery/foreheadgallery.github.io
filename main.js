$(function(){
	var $simp_sketch = $("#simple_sketch");
	var ctx = $simp_sketch[0].getContext("2d");
	ctx.imageSmoothingEnabled = false;
	ctx.scale( 2, 2 );
	$.each([1,3, 5, 10, 15], function() {
		$('.tools').append("<a href='#simple_sketch' data-size='" + this + "' class='button'>" + this + "</a> ");
	});
	$('#simple_sketch').sketch({defaultSize: 1});
	$("#submit_btn").click(function(){
		document.getElementById('my_hidden').value = $simp_sketch[0].toDataURL('image/png');
		$.post("http://ecstaticpessimist.in/sendsubmission",{author: $("#author")[0].value, filestr: $("#my_hidden")[0].value}).done(function(data){
			console.log("submitted", data);
		});
		
	});
});