$(document).ready(function(){
  $('.parallax').parallax();
  $('.modal').modal();
  $(".scrollspy").scrollSpy();
});

$(".submit-btn").on("click", function() {
  $("#first_name").val("");
  $("#email").val("");
  $("#textarea1").val("");
})

$('#textarea1').val('');
$('#textarea1').trigger('autoresize');