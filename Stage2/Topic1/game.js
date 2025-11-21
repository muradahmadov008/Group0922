var isStart = confirm("Do you want to start exam?");
var point = 0;

console.log(isStart);

if (isStart) {
  var q1 = prompt("Where is Azerbaijan located = ?" );

  if (q1 == "Asia") {
    point = point + 10;
    alert(`Correct! your point is ${point}`);
  } else {
    alert("Wrong answer!");
  }

  var q2 = prompt("Where is Turkey located = ?");

  if (q2 == "Europe") {
    point = point + 10;
    alert(`Correct! your point is ${point}`);
  } else {
    alert("Wrong answer!");
  }

  var q3 = prompt("Where is USA located = ?");

  if (q3 == "America") {
    point = point + 10;
    alert(`Correct! your point is ${point}`);
  } else {
    alert("Wrong answer!");
  }
} else {
  alert("See you again!");
}
