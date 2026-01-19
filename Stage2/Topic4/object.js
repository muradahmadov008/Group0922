//OBJECT


// const programingInstructors = {

//     name: "Murad",
//     surname: "Akmedov",
//     age: 30,
//     tutor_experience: 5,



//     talkLesson: function(){
//         console.log("Lessons ... ");
//     },

//     prepareSeries: function(seriesName) {
//         console.log("Prepare ... ", seriesName);
//     }
// }



const hibridCar = {
    brand: "",
    model: "",
    year: null,
    color: "",
    speed: 0,
   

    fill: function(carName,carBrand,carYear){
        this.name = carName;
        this.brand = carBrand;
        this.year = carYear;

        return {...this};
    },

    start: function() {
        this.speed += 20;
        this.monitoring()
    },
   
    stop: function() {
        console.log("STOP",this.speed);
        
    },


    monitoring: function() {
        console.log("==============");
        console.log("Brand: ", this.brand);
        console.log("Model: ", this.model);
        console.log("Speed: ", this.speed);
        console.log("==============");
    },

   
}

// const teslaCar = hibridCar.fill("Tesla","Tesla",2022);
// const miniCar = hibridCar.fill("Mini","Mini",2022);

// console.log(teslaCar);
// console.log(miniCar);

// miniCar.start();
// miniCar.start();
// miniCar.start();
// miniCar.stop();


// teslaCar.start();
// teslaCar.start();
// teslaCar.start();
// teslaCar.stop();

