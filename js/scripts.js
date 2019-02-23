$(document).ready(function() {
  alert("hello")

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
      var Cuba = 0;
      var Cook = 0;
      var CookCuba = 0;
      var Greece = 0;
      var Maldives = 0;


      if (Q1value === "Cuba") {
      Cuba += 1;
    } else if (Q1value === "CookCuba") {
      CookCuba += 1;
    } else if (Q1value === "Greece") {
      Greece += 1;
    } else if (Q1value === "Maldives") {
      Maldives += 1;
    }

    if (Q2value === "Cuba") {
    Cuba += 1;
    } else if (Q2value === "CookCuba") {
      CookCuba += 1;
    } else if (Q2value === "Greece") {
      Greece += 1;
    } else if (Q2value === "Maldives") {
    Maldives += 1;
    }

    if (Q3value === "Cuba") {
    Cuba += 1;
    } else if (Q3value === "CookCuba") {
      CookCuba += 1;
    } else if (Q3value === "Greece") {
      Greece += 1;
    } else if (Q3value === "Maldives") {
    Maldives += 1;
    }

    if (Q4value === "Cuba") {
    Cuba += 1;
  } else if (Q4value === "CookCuba") {
      Cook += 1;
      Cuba += 1;
    } else if (Q4value === "Greece") {
      Greece += 1;
    } else if (Q4value === "Maldives") {
    Maldives += 1;
    }

    if (Q5value === "Cuba") {
    Cuba += 1;
    } else if (Q5value === "CookCuba") {
      CookCuba += 1;
    } else if (Q5value === "Greece") {
      Greece += 1;
    } else if (Q5value === "Maldives") {
    Maldives += 1;
    }

    var highest = Math.max(Cuba, Cook, Greece, Maldives);
    if (highest === Cuba) {
      alert("Go to Cuba")
    } else if (highest === Cook) {
      alert("Go to Cook")
    } else if (highest === Maldives) {
      alert("Go to Maldives")
    } else if (highest === Greece) {
      alert("Go to Maldives")
    }

    });
  });

  $('img#outdoors').click(function() {
    alert("Adventure awaits!")
    $(".outdoors").show();
    window.location = 'Vacation-Website.html#jumpHere2';

    $("form").submit(function(event) {
      event.preventDefault();
      var Q1value = $("input:radio[name=Q1]:checked").val();
      var Q2value = $("input:radio[name=Q2]:checked").val();
      var Q3value = $("input:radio[name=Q3]:checked").val();
      var Q4value = $("input:radio[name=Q4]:checked").val();
      var Q5value = $("input:radio[name=Q5]:checked").val();
      var Cuba = 0;
      var Cook = 0;
      var CookCuba = 0;
      var Greece = 0;
      var Maldives = 0;


      if (Q1value === "Cuba") {
      Cuba += 1;
    } else if (Q1value === "CookCuba") {
      CookCuba += 1;
    } else if (Q1value === "Greece") {
      Greece += 1;
    } else if (Q1value === "Maldives") {
      Maldives += 1;
    }

    if (Q2value === "Cuba") {
    Cuba += 1;
    } else if (Q2value === "CookCuba") {
      CookCuba += 1;
    } else if (Q2value === "Greece") {
      Greece += 1;
    } else if (Q2value === "Maldives") {
    Maldives += 1;
    }

    if (Q3value === "Cuba") {
    Cuba += 1;
    } else if (Q3value === "CookCuba") {
      CookCuba += 1;
    } else if (Q3value === "Greece") {
      Greece += 1;
    } else if (Q3value === "Maldives") {
    Maldives += 1;
    }

    if (Q4value === "Cuba") {
    Cuba += 1;
  } else if (Q4value === "CookCuba") {
      Cook += 1;
      Cuba += 1;
    } else if (Q4value === "Greece") {
      Greece += 1;
    } else if (Q4value === "Maldives") {
    Maldives += 1;
    }

    if (Q5value === "Cuba") {
    Cuba += 1;
    } else if (Q5value === "CookCuba") {
      CookCuba += 1;
    } else if (Q5value === "Greece") {
      Greece += 1;
    } else if (Q5value === "Maldives") {
    Maldives += 1;
    }

    var highest = Math.max(Cuba, Cook, Greece, Maldives);
    if (highest === Cuba) {
      alert("Go to Cuba")
    } else if (highest === Cook) {
      alert("Go to Cook")
    } else if (highest === Maldives) {
      alert("Go to Maldives")
    } else if (highest === Greece) {
      alert("Go to Maldives")
    }

    });
  });

  /*$('img#outdoors').click(function() {
    alert("Ready for a new adventure?")
    $(".outdoors").show();
  });

  $('img#roadtrip').click(function() {
    alert("Let's do it!")
    $(".roadtrip").show();
  });*/
});
/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));*/
