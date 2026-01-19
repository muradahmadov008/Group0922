

// alert("Hello, World!");

// console.log(Window);

Object.prototype.hello = function() {
  console.log("Hello, World!",this);
};

Array.prototype.findBingInt = function() {

    let prevNum = this[0];

    for (let i = 0; i < this.length; i++) {
        if (this[i]> prevNum) {
            prevNum = this[i];
        }
    }
    return prevNum;
}

let fullname = null;
let numbers = [10, 20, 30, 40, 50];

const result = numbers.findBingInt();

console.log("result:", result);

console.log("numbers:", numbers);





// let myObj = {
//     name : "Murad",
//     surname : "Akmedov",
//     age : 20
// }

// console.log("myObj:", myObj);


// const isArrayData = Array.isArray(numbers);

// console.log(isArrayData);

