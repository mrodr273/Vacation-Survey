$(document).ready(function() {

  $('img#tropical').click(function() {
    alert("Great choice!")
    $(".tropical").show();
    window.location = 'Vacation-Website.html#jumpHere';

    $("form").submit(function(event) {
      event.preventDefault();
      window.location = 'Vacation-Website.html#result-tropical';
      var Q1value = $("input:radio[name=Q1]:checked").val();
      var Q2value = $("input:radio[name=Q2]:checked").val();
      var Q3value = $("input:radio[name=Q3]:checked").val();
      var Q4value = $("input:radio[name=Q4]:checked").val();
      var Q5value = $("input:radio[name=Q5]:checked").val();
      var Cuba = 0;
      var Cook = 0;
      var Greece = 0;
      var Maldives = 0;


      if (Q1value === "Cuba") {
      Cuba += 1;
    } else if (Q1value === "Cook") {
      Cook += 1;
    } else if (Q1value === "Greece") {
      Greece += 1;
    } else if (Q1value === "Maldives") {
      Maldives += 1;
    }

    if (Q2value === "Cuba") {
    Cuba += 1;
    } else if (Q2value === "Cook") {
      Cook += 1;
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
  } else if (Q4value === "Cook") {
      Cook += 1;
    } else if (Q4value === "Greece") {
      Greece += 1;
    } else if (Q4value === "Maldives") {
    Maldives += 1;
    }

    if (Q5value === "Cuba") {
    Cuba += 1;
    } else if (Q5value === "Cook") {
      Cook += 1;
    } else if (Q5value === "Greece") {
      Greece += 1;
    } else if (Q5value === "Maldives") {
    Maldives += 1;
    }

    var highest = Math.max(Cuba, Cook, Greece, Maldives);
    if (highest === Cuba) {
      alert("Go to Cuba")
      $('img#cuba').show();
    } else if (highest === Cook) {
      alert("Go to Cook")
      $('img#cook').show();
    } else if (highest === Maldives) {
      alert("Go to Maldives")
      $('img#maldives').show();
    } else if (highest === Greece) {
      alert("Go to Greece")
      $('img#greece').show();
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

    if (highest === Yellowstone) {
      alert("Go to Yellowstone")
      $('img#yellowstone').show();
    } else if (highest === LakeTahoe) {
      alert("Go to LakeTahoe")
      $('img#laketahoe').show();
    } else if (highest === Canyon) {
      alert("Go to Canyon")
      $('img#canyon').show();
    } else if (highest === Yosemite) {
      alert("Go to Yosemite")
      $('img#yosemite').show();
    }

    });
  });

  $('img#roadtrip').click(function() {
    alert("Let's do it!")
    $(".roadtrip").show();
    window.location = 'Vacation-Website.html#jumpHere3';

    $("form").submit(function(event) {
      event.preventDefault();
      var roadQ1value = $("input:radio[name=roadQ1]:checked").val();
      var roadQ2value = $("input:radio[name=roadQ2]:checked").val();
      var roadQ3value = $("input:radio[name=roadQ3]:checked").val();
      var roadQ4value = $("input:radio[name=roadQ4]:checked").val();
      var roadQ5value = $("input:radio[name=roadQ5]:checked").val();


      var PacificHwy = 0;
      var Columbia = 0;
      var Route66 = 0;
      var Ocean = 0;


      if (roadQ1value === "PacificHwy") {
      PacificHwy += 1;
    } else if (roadQ1value === "Columbia") {
      Columbia += 1;
    } else if (roadQ1value === "Route66") {
      Route66 += 1;
    } else if (roadQ1value === "Ocean") {
      Ocean += 1;
    }

    if (roadQ2value === "PacificHwy") {
    PacificHwy += 1;
    } else if (roadQ2value === "Columbia") {
      Columbia += 1;
    } else if (raodQ2value === "Route66") {
      Route66 += 1;
    } else if (roadQ2value === "Ocean") {
    Ocean += 1;
    }

    if (roadQ3value === "PacificHwy") {
    PacificHwy += 1;
    } else if (roadQ3value === "Columbia") {
    Columbia += 1;
    } else if (roadQ3value === "Route66") {
    Canyon += 1;
    } else if (roadrQ3value === "Ocean") {
    Ocean += 1;
    }

    if (roadQ4value === "PacificHwy") {
    PacificHwy += 1;
    } else if (roadQ4value === "Columbia") {
    Columbia += 1;
    } else if (roadQ4value === "Route66") {
    Route66 += 1;
    } else if (roadQ4value === "Ocean") {
    Ocean += 1;
    }

    if (roadQ5value === "PacificHwy") {
    PacificHwy += 1;
    } else if (roadQ5value === "Columbia") {
    Columbia += 1;
    } else if (roadQ5value === "Route66") {
    Route66 += 1;
    } else if (roadQ5value === "Ocean") {
    Ocean += 1;
    }

    var highest = Math.max(PacificHwy, Columbia, Route66, Ocean);

    if (highest === PacificHwy) {
      alert("Go to PacificHwy")
      $('img#pacifichwy').show();
    } else if (highest === Columbia) {
      alert("Go to Columbia")
      $('img#columbia').show();
    } else if (highest === Route66) {
      alert("Go to Route66")
      $('img#route66').show();
    } else if (highest === Ocean) {
      alert("Go to Overseas Highway")
      $('img#ocean').show();
    }
    });
  });
});
