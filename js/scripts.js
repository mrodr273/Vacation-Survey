$(document).ready(function() {
  $('img#tropical').click(function() {
    alert("Great choice!")
    $(".tropical").show();
  });

  $('img#outdoors').click(function() {
    alert("Ready for a new adventure?")
    $(".outdoors").show();
  });

  $('img#roadtrip').click(function() {
    alert("Let's do it!")
    $(".roadtrip").show();
  });
});
  /*$("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });*/


/*$(".my-class").show();
$(".my-class").hide();
$(".my-class").toggle();*/

/*Add a CSS class to an element:
$("body").addClass("my-class");*/

/*var add = function(number1, number2) {
  return number1 + number2;
};*/

/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(add(number1, number2));*/



/*Test that you've selected the correct DOM element:
$('.element-to-select').css('background-color', 'green');*/

/*.clickable {
  cursor: pointer;
  color: #0088cc;
.clickable:hover {
  text-decoration: underline;
}*/
