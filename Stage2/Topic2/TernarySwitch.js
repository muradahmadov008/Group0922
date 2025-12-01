


// let number1 = "99.45"
// let number2 = 15.99

// let name = "Murad"
// let surename = "Ahmadov"


// let newNumber = number.toFixed (2) // "99.45"
// let newNumber = number.toPrecision (4) // "99.45"
// let newNumber = number.toString() // "99.45454545454545"


// let result = parseFloat (number1) + number2 
// let result2 = name + " " + surename
 

// console.log(result2);

// let age = 18

// let personalName = "Mike"
// let str = age >=18 ? `Mr.${personalName}` :  `Hey ${personalName}`


//3 Switch Case

let day = 7
let str = ""

// if (day === 1) {
//     str = "Monday"
// } else if (day === 2) {
//     str = "Tuesday"
// } else if (day === 3) {
//     str = "Wednesday"
// } else if (day === 4) {
//     str = "Thursday"
// } else if (day === 5) {
//     str = "Friday"
// } else if (day === 6) {
//     str = "Saturday"
// } else if (day === 7) {
//     str = "Sunday"
// } else {
//     str = "Invalid Day"
// }

// console.log(dayName);

switch (day) {
    case 1:
        str = "Monday"
        break;
    case 2:
        str = "Tuesday"
        break;
    case 3:
        str = "Wednesday"
        break;
    case 4:
        str = "Thursday"
        break;
    case 5:
        str = "Friday"
        break;
    case 6:
        str = "Saturday"
        break;
    case 7:
        str = "Sunday"
        break;
    default:
        str = "Invalid Day"
        break;
}

console.log(str);
