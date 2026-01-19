// Date 

// const dateformat = "2024-06-15T14:30:45.123Z";
// const date  = new Date(dateformat);

// console.log("date:", date);


// let result1 = date.getFullYear(); // 2024
// let result2 = date.getMonth();    // 5 (June, months are zero-indexed)
// let result3 = date.getDate();     // 15 (15th day of the month)
// let result4 = date.getDay();      // 6 (Saturday, days are zero-indexed starting from Sunday)
// let result5 = date.getHours();    // 14 (2 PM in 24-hour format)
// let result6 = date.getMinutes();  // 30
// let result7 = date.getSeconds();  // 45
// let result8 = date.getMilliseconds(); // 123

// let oclock = `${result5}:${result6}:${result7}`

// console.log("oclock:", oclock);

const DateHelper = {

    weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekDaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

   formData : function(dateformat){
      const date  = new Date(dateformat);

      let year = date.getFullYear(); 
      let month = date.getMonth() + 1;    
      let day = date.getDate();     

      if (month < 10){
            month = '0' + month;
      }

      if (day < 10){
            day = '0' + day;
      }

      return `${year}-${month}-${day}`;
   },
   formatDateLong: function(dateformat){
      const date  = new Date(dateformat);

      const year = date.getFullYear(); 
      const monthIndex = date.getMonth();    
      const day = date.getDate();     
      const weekDayIndex = date.getDay();

      const monthName = this.monthNames[monthIndex];
      const weekDayName = this.weekDays[weekDayIndex];

      return `${weekDayName}, ${day} ${monthName} ${year}`;
   },
   formatTime: function(dateformat){
      const date  = new Date(dateformat);

      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();

        if (hours < 10){
            hours = '0' + hours;
      }

      if (minutes < 10){
            minutes = '0' + minutes;
      }

      if (seconds < 10){
            seconds = '0' + seconds;
      }

      return `${hours}:${minutes}:${seconds}`;
   },
   diffInDays: function(date1, date2){
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

        const diffInTime = Math.abs(date2.getTime() - date1.getTime());

        return Math.round(diffInTime / oneDay);
   },
   diffInHours: function(date1, date2){
        const oneHour = 60 * 60 * 1000; // minutes*seconds*milliseconds

        const diffInTime = Math.abs(date2.getTime() - date1.getTime());

       const result = Math.round(diffInTime / oneHour);

       if (result > 24){
            return this.diffInDays(date1, date2) + ' day(s)';
       }
       
       if (result <=1){
            return "Less than an hour";
       }
       return `${result} hour(s)`;
   }
}

// const createdAt = "2025-12-31T10:00:00.000Z";
// const lastMonth = new Date(createdAt);
// const currentDate = new Date();
// // const formattedDate = DateHelper.formatDateLong(currentDate);
// // const formattedTime = DateHelper.formatTime(currentDate);

//  const diff = DateHelper.diffInHours(lastMonth, currentDate);

//  console.log( diff);
// //     console.log("formattedDate:", formattedDate);



const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 10); // Add 10 days to the current date

// const formattedDate = DateHelper.formData(currentDate);

// console.log("formattedDate:", formattedDate);

const a = currentDate.getUTCDate();
console.log("a:", a);