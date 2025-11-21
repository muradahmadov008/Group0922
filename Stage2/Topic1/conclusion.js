
var conclusion = confirm("Do you want to start exam?");

if (conclusion) {
  var conclusion = prompt("Your answer!");

  if (conclusion <= 100 && conclusion >= 90) {
    alert("A");
  } else if (conclusion <= 89 && conclusion >= 80) {
    alert("B");
  } else if (conclusion <= 79 && conclusion >= 70) {
    alert("C");
  } else if (conclusion <= 69 && conclusion >= 60) {
    alert("D");
  } else if (conclusion <= 59 && conclusion >= 50) {
    alert("F");
  } else {
    alert("Please enter correct answer!");
  }
} else {
  alert("See you again!");
}   