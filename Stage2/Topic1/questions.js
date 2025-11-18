


var isStart = confirm("Do you want to start exam?")
var point = 0;

console.log(isStart);


if(isStart){ 

    //Q1
    var q1 = prompt("2+2 = ?")

    if (q1 == 4){
        point = point + 10;
        alert(`Correct! your point is ${point}`);
    }else {
        alert("Wrong answer!");
    }

    //Q2
    var q2 = prompt("5*3 = ?")

    if (q2 == 15){
        point = point + 10;
        alert(`Correct! your point is ${point}`);
    }else {
        alert("Wrong answer!");
    }
    
    //Q3
    var q3 = prompt("100/3 = ?")
    if (q3 == 33.33 || q3 == 33.333 || q3 == 33 ){
        point = point + 10;
        alert(`Correct! your point is ${point}`);
    }else {
        alert("Wrong answer!");
    }


 }else {
    alert("See you again!");
} 