//1. eger verilen cumle cox uzundursa, 30 simvoldan sonra "..." elave et
let sentence1 = "This is a very long sentence that needs to be truncated.";

let strLength = sentence1.length;

let isLong = strLength >= 30 

let result ="";

if(isLong){
    let shortText = sentence1.substring(0, 29).trim()
    console.log("shortText", shortText);

    result = `${shortText}...`;
   
} else {
    result = sentence1;
}

console.log(result); 

//2. Verilen cumlede butun sozlerin ilk herfini boyuk herfe cevir
let sentence2 = "this is a sample sentence for testing.";

//3. Verilen cumlede "JavaScript" sozunun olub ilmadigini yoxla
// let sentence = "I love programming in JavaScript.";