// THIS


const myObj={
    fullname: "Alice",
    age: 30,

    // greet: function() {
    // console.log("Hello,"+this.fullname);
    // },
    

    // greet: () => {
    //     console.log("this", this); // Window Object
    //     console.log("Hello, " + this.fullname);
        
    // }

    // foo: function() {

    //     this.age += 1;
    //     console.log("Age inside foo:", this.age); // 31

        // const innerFun = function() {
        //     console.log("this", this); // myObj
        //     console.log("Hello, " + this.fullname);
        
        // };

    //     const innerFun = () => {
    //         console.log("this", this); // myObj
    //         console.log("Hello, " + this.fullname);
            
        
    //     const nestedFun = () => {
    //         console.log("this", this); // myObj
    //         console.log("Hello, " + this.age);
            
    //     }
    //     nestedFun(); 

    //     };   
       
    //     innerFun();
    // },

    // greet: function() {
    //     console.log("this", this); // myObj
    //     console.log("Hello, " + this.fullname);
    // }   

   // myObj.greet(); // Hello, undefined
};

// myObj.foo();




// const personal = {
//     name: "Murad",
//     age: 25,
//     city: "Baku"
// }

// for(let key in personal) {

//     console.log(personal[key]);
// }

// const response = [["name","Murad",],["age",25],["city","Baku"]];

// const data = Object.fromEntries(response);
// const keys = Object.keys(personal);

// const data = Object.entries(personal);
 

// for (let i = 0; i < data.length; i++) {

//     console.log(data[i]);
    
//     let simpleArray = data[i];

//     const key = simpleArray[0];
//     const value = simpleArray[1];

//     console.log(key, value);
// }


// let personal2 = {
//     name: "Murad",
//     surname: "Aliyev",
//     age: 25,
//     city: "Baku"

// }

// Object.freeze(personal2);

//  personal2.age = 26;

// console.log(personal2);

// let personal3 = {
//     name: "Alice",
//     age: 30,
//     city: "London",
//     job: "Engineer"
// }

// Object.assign(personal2, personal3);

// console.log(personal2);

// let numbers = [1, 2, 3, 4, 5];
// let numbers2 = [6, 7, 8, 9, 10];

// let combined = numbers.concat(numbers2); // [1,2,3,4,5,6,7,8,9,10] // Array.prototype.concat

// let combined = [...numbers, ...numbers2]; // [1,2,3,4,5,6,7,8,9,10] // Spread Operator

// console.log(combined);


// let myObj1 = {
//     fullname: "Alice",
//     age: 30,
// }

// let myObj2 = {
//     fullname: "Bob",
// }

// // let combinedObj = {...myObj1, ...myObj2};
// let combinedObj2 = Object.assign({}, myObj1, myObj2);

// console.log(combinedObj);