
// 2 Rest Operator

// function sum(...arr){
    

//     let total = 0;
//     for(let i=0; i<arr.length; i++){
//         total += arr[i];
//     }

//     return total;
// }

// let result = sum(1,2,3,4,5,6,7,8,9,10);

// console.log("result",result);


function calc(operator, ...arr){
    let total = 1
    for (let i=0; i<arr.length; i++){
        if(operator === "multiply"){
            total *= arr[i];
        } else if(operator === "add"){
            total += arr[i];
        }
    }

    return total;
}

let result = calc("add",1,2,3,4,5);

console.log("add",result);