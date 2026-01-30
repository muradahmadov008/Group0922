// Mouse Events

// 1.Click Event
// 2.Double Click Event
// 3.Mouse Enter Event
// 4.Mouse Leave Event
// 5.Mouse Over Event
// 6.Mouse Out Event
// 7.Context Menu Event

// Keyboard Events

// 1.Key Down Event
// 2.Key Up Event
// 3.Key Press Event

// Focus Events
//1.Focus & Blur Events
// const inputEl = document.querySelector("#inputEl")

// inputEl.addEventListener("focus", function() {

//     console.log("Input focused");
//     inputEl.nextElementSibling.classList.remove("d-none");
// });

// inputEl.addEventListener("blur", function() {
//     console.log("Input blurred");
//     inputEl.nextElementSibling.classList.add("d-none");
// });

// Keyboard Events
// inputEl.addEventListener("keypress", function(e) {
//     const isEnter= e.key === "Enter";
//     if(isEnter){
//         console.log("Form Submitted");
//     }
// });



// Mouse Events
const boxEl = document.querySelector("#boxEl");
const changeEl = document.querySelector("#changeEl");

boxEl.addEventListener("mouseover", function (e) {
  changeEl.classList.remove("d-none");
  console.log("e", e);
  // boxEl.innerHTML = `X: ${e.offsetX} Y: ${e.offsetY}`;
});

boxEl.addEventListener("mouseout", function (e) {
  changeEl.classList.add("d-none");
  console.log("e", e);
});


