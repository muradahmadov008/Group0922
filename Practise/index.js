// const car = {
//     brand: "Lexus",
//     model: "LX570",
//     year: 2020,
//     color: "Black",

//     getAge : function(){
//         const currentYear = 2025;
//         console.log(`Car age : ${currentYear - this.year} years`);
//     },
//     getInfo: function(){
//     console.log(`Car Info: ${this.brand} ${this.model} ${this.year} ${this.color}`);
    
// }

// }
// car.getAge();
// car.getInfo();



const person = {
    name: "Murad",
    surname: "Akmedov",
    age: 17,
    adres:{
        city:"Baku",
        street:"Nizami",
        homeNumber:25
    },
    getFullAdres(){
        return `${this.adres.city}, ${this.adres.street} street, home number: ${this.adres.homeNumber}`;
    }
    
}
console.log(person.getFullAdres());
