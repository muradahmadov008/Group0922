//SIMPLE

// function filterArray(arr, el) {
//   let newArray = [];

//   for (let i = 1; i <= arr.length; i++) {
//     console.log(i);

//     let currentEl = arr[i];

//     if (currentEl != el) {
//       newArray.push(currentEl);
//     }
//   }

//   return newArray;
// }


//With callback
function filterArray(arr, cl) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {

    let currentEl = arr[i];

    let yourTrueCondition = cl(currentEl)//True

    if (yourTrueCondition) {
      newArray.push(currentEl);
    }
  }

  return newArray;
}

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function renderElement(element) {
//   console.log('rendered: ', element);

//   if (element !==5 && element !==3) {
//     return true;
//   }
//   return false;
// }


// function renderElement2(element) {
//   console.log('rendered: ', element);

//   if (element % 2 === 0) {
//     return true;
//   }
//   return false;
// }



// function renderElement3(element) {
//   console.log('rendered: ', element);

//   if (element % 5 === 0) {
//     return true;
//   }
//   return false;
// }



// let filterResult = filterArray(numbers, renderElement);
// let filterResult2 = filterArray(numbers, renderElement2);
// let filterResult3 = filterArray(numbers, renderElement3);


// console.log("filterResult: ", filterResult);
// console.log("filterResult2: ", filterResult2);
// console.log("filterResult3: ", filterResult3);


function mapArray(arr, cl) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
   

    let currentEl = arr[i]

    let yourNewElement = cl(currentEl); // New Element 

    newArray.push(yourNewElement);

  }

  return newArray;
}


let numbers = [1, 2, 4, 3, 4, 5, 6, 7]


// let newArray = mapArray(numbers, function (element) {
//   let result = element / 10;

//   return result;
// })


// MAP
// let newArray1 = numbers.map( function (element,index) {
//   let result = element * 10 *index

//   return result;
// });


// FILTER
// let newArray2 = numbers.filter ( function (element,index) {

//   return element !==5;

// });


let findNum = numbers.find ( function (element) {
  return element == 5;
} );

console.log("findNum: ", findNum); 


// FIND
// let findNum = numbers.find ( function (element,index) {

//   return element == 5;

// });

// console.log("findNum: ", findNum);


// REDUCE
// let total = numbers.reduce ( function (sum,currentEl) {

//   console.log("sum: ", sum);
//   console.log("currentEl: ", currentEl);

//   return sum + currentEl; 

//  });



// console.log("total: ", total);



// numbers.sort (function(a,b) {

//   console.log("=======");
//   console.log("a: ", a);
//   console.log("b: ", b);
//   console.log("=======");
  

//    let result = a - b; // Ascending

//    return result;

// });

// console.log("numbers: ", numbers);



// let result = numbers.every ( function (el) {
//   return el == 5;

// } );

// let result = numbers.some ( function (el) {
//   return el == 5;

// } ); // hec olmasa 1 element 5

// console.log("result: ", result);