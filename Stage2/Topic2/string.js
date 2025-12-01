// String methods examples

// 1.toUpperCase() and toLowerCase()
const str1 = "Hello World";
const upperStr = str.toUpperCase(); // "HELLO WORLD"
console.log(upperStr);

// 2.toLowerCase()
const str2 = "Hello World";
const lowerStr = str.toLowerCase(); // "hello world"
console.log(lowerStr);

// 3.includes()
const str3 = "Hello World";
const hasWorld = str.includes("World"); // true
console.log(hasWorld);

// 4.split()
const str4 = "Hello,World,JavaScript";
const strArray = str.split(","); // ["Hello", "World", "JavaScript"]
console.log(strArray);

// 5.replace()
const str5 = "Hello World";
const newStr = str.replace("World", "JavaScript"); // "Hello JavaScript"
console.log(newStr);

// 6.trim()
const str6 = "   Hello World   ";
const trimmedStr = str.trim(); // "Hello World"
console.log(trimmedStr);

// 7.charAt()
const str7 = "Hello World";
const charAtIndex4 = str.charAt(4); // "o"
console.log(charAtIndex4);

// 8.indexOf()
const str8 = "Hello World";
const indexOfWorld = str.indexOf("World"); // 6
console.log(indexOfWorld);

// 9.slice()
const str9 = "Hello World";
const slicedStr = str.slice(0, 5); // "Hello"
console.log(slicedStr);

// 10.concat()
const str10a = "Hello";
const str10b = "World";
const concatenatedStr = str10a.concat(" ", str10b); // "Hello World"
console.log(concatenatedStr);

// 11.repeat()
const str11 = "Hello ";
const repeatedStr = str.repeat(3); // "Hello Hello Hello "
console.log(repeatedStr);

// 12.startsWith() and endsWith()
const str12 = "Hello World";
const startsWithHello = str.startsWith("Hello"); // true
const endsWithWorld = str.endsWith("World"); // true
console.log(startsWithHello);
console.log(endsWithWorld);

// 13.substr()
const str13 = "Hello World";
const substrStr = str.substr(6, 5); // "World"
console.log(substrStr);

// 14.lastIndexOf()
const str14 = "Hello World, Welcome to the World";
const lastIndexOfWorld = str.lastIndexOf("World"); // 24
console.log(lastIndexOfWorld);  
// End of String methods examples 
