// Json - JavaScript Object Notation


// let person1 = [ "John", 30, "New York"];


let person2 = {
    name: "John",
    age: 30,
    city: "New York",
    skills: ["JavaScript", "React", "Node.js"]
}

let person3 = {
    "name": "Mike",
    "age": 20,
    "city": "Amsterdam",
    "skills": ["JavaScript", "React", "Node.js" , "Python"]
}


let result = [person2, person3];
console.log("result:", result);


for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
    console.log(result[i].age);
    console.log(result[i].city);
    console.log(result[i].skills.join(", "));
}




