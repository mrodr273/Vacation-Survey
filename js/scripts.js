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

    alert("Cuba is"+Cuba+" Greece is"+ Greece)

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
      var OutdoorQ1value = $("input:radio[name=OutdoorQ1]:checked").val();
      var OutdoorQ2value = $("input:radio[name=OutdoorQ2]:checked").val();
      var OutdoorQ3value = $("input:radio[name=OutdoorQ3]:checked").val();
      var OutdoorQ4value = $("input:radio[name=OutdoorQ4]:checked").val();
      var OutdoorQ5value = $("input:radio[name=OutdoorQ5]:checked").val();
      var Yellowstone = 0;
      var LakeTahoe = 0;
      var Canyon = 0;
      var Yosemite = 0;


      if (OutdoorQ1value === "Yellowstone") {
      Yellowstone += 1;
    } else if (OutdoorQ1value === "LakeTahoe") {
      LakeTahoe += 1;
    } else if (OutdoorQ1value === "Canyon") {
      Canyon += 1;
    } else if (OutdoorQ1value === "Yosemite") {
      Yosemite += 1;
    }

    if (OutdoorQ2value === "Yellowstone") {
    Yellowstone += 1;
    } else if (OutdoorQ2value === "LakeTahoe") {
      LakeTahoe += 1;
    } else if (OutdoorQ2value === "Canyon") {
      Canyon += 1;
    } else if (OutdoorQ2value === "Yosemite") {
    Yosemite += 1;
    }

    if (OutdoorQ3value === "Yellowstone") {
    Yellowstone += 1;
    } else if (OutdoorQ3value === "LakeTahoe") {
      LakeTahoe += 1;
    } else if (OutdoorQ3value === "Canyon") {
      Canyon += 1;
    } else if (OutdoorQ3value === "Yosemite") {
    Yosemite += 1;
    }

    if (OutdoorQ4value === "Yellowstone") {
    Yellowstone += 1;
    } else if (OutdoorQ4value === "LakeTahoe") {
      LakeTahoe += 1;
    } else if (OutdoorQ4value === "Canyon") {
      Canyon += 1;
    } else if (OutdoorQ4value === "Yosemite") {
    Yosemite += 1;
    }

    if (OutdoorQ5value === "Yellowstone") {
    Yellowstone += 1;
    } else if (OutdoorQ5value === "LakeTahoe") {
    LakeTahoe += 1;
    } else if (OutdoorQ5value === "Canyon") {
    Canyon += 1;
    } else if (OutdoorQ5value === "Yosemite") {
    Yosemite += 1;
    }


    var highest = Math.max(Yellowstone, LakeTahoe, Canyon, Yosemite);
    alert("LakeTahoe is " + LakeTahoe + " Yellowstone is"+ Yellowstone + " Canyon is" + Canyon + " Yosemite is"+ Yosemite)
    if (highest === Yellowstone) {
      alert("Go to Yellowstone")
    } else if (highest === LakeTahoe) {
      alert("Go to LakeTahoe")
    } else if (highest === Canyon) {
      alert("Go to Canyon")
    } else if (highest === Yosemite) {
      alert("Go to Yosemite")
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
