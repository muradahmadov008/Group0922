


// function catchMinNumber(numbers) {
//   let prevNum = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     let currentNum = numbers[i];

//     if (currentNum < prevNum) {
//       prevNum = currentNum;
//     }

//   }

//   return prevNum;
// }
 


// function calcProcess(num,arr){
//     let minNumber = catchMinNumber(arr);

//     let result = num * minNumber;

//     console.log("Result is:",result);
    
// }

// let list =[15,3,9,27,1,8,12];

// calcProcess(10,list);


// function A(){
//     const pi = 3.14

//     return pi;

// }


// function calc(num){
//     let resultA = A(); // 3.14

//     console.log("Result last is", resultA * num);
    
// }

// calc(10)



// function A(){

//     console.log("Function A is called");
    
// }
// console.log(A());


// function C(mes){
//     console.log("Function C is called",mes);
    
// }

// function greetUser(name , calback){

//     let message =  `Hello, ${name}! Welcome to the platform.`;

//     console.log(message);

//     // console.log("calback",calback);
     
//     calback()
// }


// greetUser("Alice",C);


// function performOperation( num1,num2, operationCallback);{

//     let a = 20;
//     let result = operationCallback(num1, num2, a);

//     console.log("Result of the operation is",result);
    
// }


// function add(a,b,c){
//     let result = a + b + c
//     return result;
// }


// performOperation(10,5,add);



// function kofeAparati(coffeeType, clTerezi){

//     const hazirlanmaVaxti = 20

//     const result = clTerezi(coffeeType, hazirlanmaVaxti);

//     console.log("Sifarisiniz hazirdir!:",result); 
    
// }

// function terezi(coffeeType, hazirlanmaVaxti){
    
//     return `${coffeeType} kofesi, ${hazirlanmaVaxti} saniyeye hazirlanir.`
// }

// function terezi2(coffeeType, hazirlanmaVaxti){

//     return `${coffeeType} kofesi, ${hazirlanmaVaxti + 10} saniyeye hazirlanir.`
// }

// function terezi3(coffeeType, hazirlanmaVaxti){

//     return `${coffeeType} kofesi, ${hazirlanmaVaxti + 5} saniyeye hazirlanir.`
// }


// kofeAparati("Espresso", terezi);
// kofeAparati("Latte", terezi2);
// kofeAparati("Moca", terezi3);
