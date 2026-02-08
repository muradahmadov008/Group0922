

console.log(history ,"history");


// Check if the Screen Orientation API is supported
// if (window.screen && window.screen.orientation) {
//    Lock the screen orientation to portrait-primary
//   window.screen.orientation.lock('portrait-primary').then(function() {
//     console.log('Orientation locked to portrait-primary');
//   }).catch(function(error) {
//     console.error('Error locking orientation:', error);
//   });
// }

//   window.screen.orientation.addEventListener('change', function() {
//     console.log('Orientation changed to:', window.screen.orientation.type);
//   });

//   if (window.matchMedia("(orientation: portrait)").matches) {
//     console.log("The device is in portrait mode.");
//   } else {
//     console.log("The device is in landscape mode.");
//   }
 

//            LOCATION

// console.log("Current URL:", window.location.href);
// console.log("Current Host:", window.location.host);
// console.log("Current Pathname:", window.location.pathname);
// console.log("Current Protocol:", window.location.protocol);


//  

// const btnEl = document.querySelector("#reloadBtn");

// reloadBtn.addEventListener("click", function() {
//     // Reload the current page
//     // window.location.reload();
//     // window.location.href = "..."

// })
//           HISTORY    
// console.log("History Length:", window.history.length);

// const backBtn = document.querySelector("#backBtn");
// const forwardBtn = document.querySelector("#forwardBtn");

// btnEl.addEventListener("click", function() {
//   window.history.back();
// });

// forwardBtn.addEventListener("click", function() {
//   window.history.forward();
// });  


//          Navigator

// const result = window.navigator.onLine ? "Online" : "Offline";
// console.log("Browser internet status:",result);


const batteryContent = document.getElementById("batteryContent");
const progressLine = document.getElementById("progressLine");
const batteryPromise = navigator.getBattery();

batteryPromise.then((data) => {

    const batteryLevel = Math.floor(data.level * 100);

    progressLine.style.width = `${batteryLevel}%`

    if(data.charging){
        progressLine.classList.add("progress-bar-striped", "charging");
    }else{
        progressLine.classList.remove("progress-bar-striped", "charging");
    }

    batteryContent.innerHTML = `
        <p>Battery Level: ${batteryLevel}%</p>
        <p>Charging: ${data.charging ? "Yes" : "No"}</p>
    `;

    console.log("Battery data fetched:", data);
});

// navigator.geolocation.getCurrentPosition((data) => {
//     console.log("Geolocation permission granted.", data);
// });

// window.addEventListener('online', function() {
//   console.log('The browser is now online.');
// });

// window.addEventListener('offline', function() {
//   console.log('The browser is now offline.');
// });


//

// window.addEventListener("scroll", function(e) {
//     const scrollTop = window.scrollY 
//     console.log("Scroll Top :", scrollTop);
    
//     // console.log("Scroll Top :", e);
// });


// window.addEventListener("keydown", function(e) {
//     // console.log("Keydown event:", e);
//     // console.log("Key pressed:", e.key);
//     console.log("Key code:", e.code);
// });


