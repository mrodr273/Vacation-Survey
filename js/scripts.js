$(document).ready(function() {

  $('img#tropical').click(function() {
    alert("Great choice!")
    $(".tropical").show();
    window.location = 'Vacation-Website.html#jumpHere';
    $("form").submit(function(event) {
      event.preventDefault();
      var Q1value = parseInt($("input:radio[name=Q1]:checked").val());
      var Q2value = parseInt($("input:radio[name=Q2]:checked").val());
      var Q3value = parseInt($("input:radio[name=Q3]:checked").val());
      var Q4value = parseInt($("input:radio[name=Q4]:checked").val());
      var Q5value = parseInt($("input:radio[name=Q5]:checked").val());
      var result= Q1value + Q2value + Q3value + Q4value + Q5value;
      alert(result)
      /*logic will go here*/
    });
  });

  /*$("form").submit(function(event) {
    event.preventDefault();
    var Q1value = parseInt($("input:radio[name=Q1]:checked").val(););
    var Q2value = parseInt($("input:radio[name=Q2]:checked").val(););
    var Q3value = parseInt($("input:radio[name=Q3]:checked").val(););
    var Q4value = parseInt($("input:radio[name=Q4]:checked").val(););
    var Q5value = parseInt($("input:radio[name=Q5]:checked").val(););
    var result= Q1value + Q2value + Q3value + Q4value + Q5value;
    alert(result)
    $("#output").text(result);
  });*/

  $('img#outdoors').click(function() {
    alert("Ready for a new adventure?")
    $(".outdoors").show();
  });

  $('img#roadtrip').click(function() {
    alert("Let's do it!")
    $(".roadtrip").show();
  });

  /*$("form").submit(function(event) {
    event.preventDefault();
    var Q1value = parseInt($("input:radio[name=Q1]:checked").val(););
    var Q2value = parseInt($("input:radio[name=Q2]:checked").val(););
    var Q3value = parseInt($("input:radio[name=Q3]:checked").val(););
    var Q4value = parseInt($("input:radio[name=Q4]:checked").val(););
    var Q5value = parseInt($("input:radio[name=Q5]:checked").val(););
    var result= Q1value + Q2value + Q3value + Q4value + Q5value;
    alert(result)
    $("#output").text(result);
  });*/

});



/*$(".my-class").show();
$(".my-class").hide();
$(".my-class").toggle();*/

/*Add a CSS class to an element:
$("body").addClass("my-class");*/


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
