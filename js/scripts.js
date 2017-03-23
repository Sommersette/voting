$(document).ready(function() {

  var age = parseInt(prompt("Hold up, how old are you?"));

  if (age >= 17) {
    $('#votingage').show();
  } else if (age <= 16) {
    alert("Thank you for being civically minded. Sorry you can't vote... YET!");
    $('#minor').show();
  }






});
