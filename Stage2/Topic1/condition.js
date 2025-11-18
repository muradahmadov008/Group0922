// Condition Statements:if, else if, else


// const age = 19

// var result = age >= 19
 

//     if (age >= 19 ){
//       console.log("Hello");
//     }else if(age =>14 && age <=18){
//         console.log("Usaqsan");

//     }else {
//       console.log("Salam");
//     }

var isStart = confirm("Do you want to start exam?")

if(isStart){

    var userAnswer = prompt("Your answer!")


    if (userAnswer <= 100 && userAnswer >= 90){
        alert("A");
    }else if (userAnswer <= 89 && userAnswer >= 80){
        alert("B");
    }else if (userAnswer <= 79 && userAnswer >= 70){
        alert("C");
    }else if (userAnswer <= 69 && userAnswer >= 60){
        alert("D");
    }else if (userAnswer <= 59 && userAnswer >= 50){
        alert("F");
    }else {
        alert("Please enter correct answer!");
    }
}else {
    alert("See you again!");
}   