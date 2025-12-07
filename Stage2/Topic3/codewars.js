//CODEWAR


// SOLITION 1
// Test.assertEquals(countWords(" Arthur "), 1);
// Test.assertEquals(countWords(" David"), 1);
// Test.assertEquals(countWords("Nelson "), 1);
// Test.assertEquals(countWords("  Hello Gomer  "), 2);
// Test.assertEquals(countWords("  Hello     Bart  "), 2);


// function  countWords(str) {

//     let newStr = str.trim();

//     let arr = newStr.split(" ");

//     let count =arr.length

//     // (6)[("Hello", "", "", "", "", "Bart")];

//     for (let i = 0; i < arr.length; i++){

//         if(arr[i ]=== "")
//             count--;
//     }

//     console.log(count);
// }


// countWords("  Hello     Bart  ")


// function countWords(str) {

//   let newStr = str.trim();

//   let arr = newStr.split(/\s+/);

//   console.log(arr);
  

// //   let count = arr.length;
//     let count = 0

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "") 
//         count++;
//   }

//   return count;
// }

// countWords("  Hello     Bart  ");
// countWords(" Arthur ");
// countWords("Nelson ");
// countWords("  Hello Gomer  ");




// assert.strictEqual(solution("world"), "dlrow");
// assert.strictEqual(solution("hello"), "olleh");
// assert.strictEqual(solution(""), "");
// assert.strictEqual(solution("h"), "h");


// function solution(str){
//     let result = str.split("") //convert string to array
//     let result2 = result.reverse() // reverse array
//     let result3 = result2.join("") // convert array to string

//     console.log("result3",result3);
    

//     return result3;

// }

// solution('World')
// solution('hello')
// solution('')
// solution('h')




// function howMuchILoveYou(nbPetlas){
//     let phrases = [
//         "I love you",
//         "a little",
//         "a lot",
//         "passionately",
//         "madly",
//         "not at all",
//     ];

//     let index = (nbPetlas - 1) % phrases.length

//     console.log("index",phrases[index]);

//     return phrases[index];
    
// }






