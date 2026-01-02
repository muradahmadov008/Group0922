

//       GLOBAL SCOPE | LOCAL SCOPE | BLOCK SCOPE | ASIGNMENT
// var          YES          YES          NO            YES                            
// let           NO          YES          YES           YES
// const         NO          YES          YES            NO

//ASIGNMENT

// let a = 10;

// a = 20;

// const a = 3.14

// a =20
// console.log(a);

// const numbers = [1,2,3,4,5]

// numbers.push(6)

// console.log("numbers",numbers);


// GLOBAL SCOPE

// var a = 10 

// let a1 = 20

// const a2 = 30


// const a3 = function(num1){
//     console.log("num1",num1);
// }
// a3(100);

// console.log("window",window);


// function A(){
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log("Inside A - a",a);
//     console.log("Inside A - b",b);
//     console.log("Inside A - c",c);

//     return [a,b,c]
// }

// const resultA = A()
// console.log("resultA",resultA);


// function B(){
//     var a = 100;
//     let b = 200;
//     const c = 300;

//     console.log("Inside B - a",a);
//     console.log("Inside B - b",b);
//     console.log("Inside B - c",c);
// }

// B();


// BLOCK SCOPE

// if (true){

//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log("Inside Block - var",a);
//     console.log("Inside Block - let",b);
//     console.log("Inside Block - const",c);
// }

// console.log("Outside Block - var",a);
// console.log("Outside Block - let",b);
// console.log("Outside Block - const",c);


// EXERCISE

// function foo (){
//     console.log("Foo!");

// function bar (){
//     console.log("Bar!");
// }

// return bar();

// }
// let netice = foo();

// console.log("netice",netice);
