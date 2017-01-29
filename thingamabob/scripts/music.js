$(document).ready(function() {
	var noplay = "&autoplay=0";
	var autoplay = "&autoplay=0";
	/*$('.page:target iframe').href().append(autoplay);*/
	var pname = $('#player').prop('value');
	console.log('noooo '+pname);
	$("#name").text(pname);

});