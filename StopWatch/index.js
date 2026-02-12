


const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");



const StopWatch = {
    startTime: 0,
    timer:null,

    start: function(){

        clearInterval(this.timer);

        this.timer = setInterval(()=>{

            this.startTime +=10;
            this.show();

        },10);

        return startTime;
    },

    stop: function(){
        clearInterval(this.timer);
        this.show();
    },

    show: function(){
        timeDisplay.innerHTML = this.generateTimeFormat(this.startTime )

    },

    generateTimeFormat: function(totalMillseconds){
        const minutes = Math.floor(totalMillseconds%3600000/60000);
        const seconds = Math.floor((totalMillseconds%60000)/1000);
        const milliseconds = Math.floor(totalMillseconds%1000/10);




        const fomattedMinutes = String(minutes).padStart(2,"0");
        const fomattedSeconds = String(seconds).padStart(2,"0");
        const fomattedMilliseconds = String(milliseconds).padStart(2,"0");


        return `${fomattedMinutes}:${fomattedSeconds}:${fomattedMilliseconds}`;
        
    },
        

    reset: function(){
        this.startTime = 0; 
        clearInterval(this.timer);
        this.show(); 
        this.stop();
    }

}

startBtn.addEventListener('click',function(){
    StopWatch.start();
});
stopBtn.addEventListener('click',function(){
    StopWatch.stop();
});
resetBtn.addEventListener('click',function(){
    StopWatch.reset();
    timeDisplay.textContent = "00:00"
});