

// function A(){
//     console.log("This is function A");
// }

// A();


// const A = function(){
//     console.log("This is function A");
// }

// Simple 1
// const B = () => {
//     console.log(" B called ");
// }

// Simple 2
// const B = () => {
//     let a= 10;
//     let b= 20;
//     return a + b;
// }

// Simple 3
// const B = ( a , b) => a + b;


// const B = ( a , b) => a + b

// let result =B(10,20);

// console.log("Result ", result);

  
// B();


let numbers = [10,20,30,40,50];

let filterNumbers = numbers.map(function(number){
    return number * 2;
});

let filterNumbers2 = numbers.map(function(number){
    return number % 2 === 0;
});

// let filterNumbers3 = numbers.map( (number) => {
//   return number * 2;
// });

let filterNumbers3 = numbers.filter( number => number % 2 === 0 );

