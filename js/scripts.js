$(document).ready(function() {

  $('img#tropical').click(function() {
    alert("Great choice!")
    $(".tropical").show();
    window.location = 'Vacation-Website.html#jumpHere';
    $("form").submit(function(event) {
      event.preventDefault();
      var Q1value = $("input:radio[name=Q1]:checked").val();
      var Q2value = $("input:radio[name=Q2]:checked").val();
      var Q3value = $("input:radio[name=Q3]:checked").val();
      var Q4value = $("input:radio[name=Q4]:checked").val();
      var Q5value = $("input:radio[name=Q5]:checked").val();

      /*var result= Q1value + Q2value + Q3value + Q4value + Q5value;
      alert(result)*/
      if (Q1value === "Cuba") {
      alert("it works!")
      }
    });
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
/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));*/
