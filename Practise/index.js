//            QUESTION 1
// const boxs = document.getElementsByClassName("box");
// for(let i = 0; i < boxs.length; i++){
//     boxs[i].textContent = "This is a box";
// }

//            QUESTION 2

// const listEL = document.querySelectorAll("ul li");
// listEL.forEach(list =>{
//     list.textContent = "List Item";
// });

//            QUESTION 3

// const divs = document.querySelectorAll("div");
// divs.forEach(div =>{
//     div.style.backgroundColor = "lightblue";
// });

//            QUESTION 4

// function createParagraph() {
//     const p = document.createElement("p");
//     p.textContent = "Hello World";
//     document.body.appendChild(p);
// }

//            QUESTION 5

// let input = document.querySelector(".text-input");
// let textPara = document.querySelector(".text-p");
// input.addEventListener("input",function(e){
//     console.log(this.value);

//     textPara.innerText = e.target.value
// });

//            QUESTION 6

// 1.Focus & Blur Events
// const inputEl = document.querySelector("#inputEl")

// inputEl.addEventListener("focus", function() {

//     console.log("Input focused");
//     inputEl.nextElementSibling.classList.remove("d-none");
// });

// inputEl.addEventListener("blur", function() {
//     console.log("Input blurred");
//     inputEl.nextElementSibling.classList.add("d-none");
// });

//             Question 7

// const btn = document.getElementById("colorBtn");
// const box = document.getElementById("box");

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// // Kliklədikdə rəng dəyişsin
// btn.addEventListener('click', function() {
//     box.style.backgroundColor = getRandomColor();
// });

// // Siçan üzərinə gəldikdə dairəvi olsun
// box.addEventListener('mouseenter', function() {
//     box.style.borderRadius = "50%";
// });

// // Siçan kənara çıxdıqda yenidən kvadrat olsun
// box.addEventListener('mouseleave', function() {
//     box.style.borderRadius = "0%";
// });

//             QUESTION 8

// 1. Elementləri seçirik
// const textarea = document.getElementById('myText');
// const counter = document.getElementById('counter');
// const warning = document.getElementById('warning');

// // 2. 'input' event-ini dinləyirik
// textarea.addEventListener('input', function() {
//     // Yazılan mətnin uzunluğunu alırıq
//     const length = textarea.value.length;

//     // Ekranda sayğacı yeniləyirik
//     counter.textContent = `${length} / 50`;

//     // 3. Şərt yoxlayırıq: Əgər 50-ni keçərsə
//     if (length > 50) {
//         textarea.style.borderColor = "red";
//         counter.style.color = "red";
//         warning.style.display = "block"; // Xəbərdarlığı göstər
//     } else {
//         textarea.style.borderColor = "#ccc";
//         counter.style.color = "black";
//         warning.style.display = "none";  // Xəbərdarlığı gizlə
//     }
// });

//             QUESTION 9
// const input = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const taskList = document.getElementById("taskList");

// addBtn.addEventListener("click", function () {
//   if (input.value.trim() === "") return; // Boşdursa əlavə etmə

//   // Yeni bir 'li' yaradırıq
//   const li = document.createElement("li");
//   li.innerHTML = `
//         <span>${input.value}</span>
//         <button class="delete-btn">Sil</button>
//     `;

//   taskList.appendChild(li); // Siyahıya əlavə edirik
//   input.value = ""; // Inputu təmizləyirik
// });

// taskList.addEventListener("click", function (event) {
//   // Kliklənən elementin 'delete-btn' klası varmı?
//   if (event.target.classList.contains("delete-btn")) {
//     // Əgər varsa, həmin düymənin daxil olduğu 'li'-ni sil
//     const li = event.target.parentElement;
//     li.remove();
//   }
// });

//             QUESTION 10
// function changeText(){
//     document.getElementById("demo").innerHTML="Yes"
// }

//             QUESTION 11

// function turnOn() {
//   document.getElementById("myImage").src = "https://www.w3schools.com/js/pic_bulbon.gif";
// }

// function turnOff() {
//   document.getElementById("myImage").src = "https://www.w3schools.com/js/pic_bulboff.gif";
// }


// function turnOn() {
//   // Şəklin mənbəyini (src) yanan lampa ilə əvəz edir
//   document.getElementById("myImage").src =
//     "https://www.w3schools.com/js/pic_bulbon.gif";
// }

// function turnOff() {
//   // Şəklin mənbəyini (src) sönülü lampa ilə əvəz edir
//   document.getElementById("myImage").src =
//     "https://www.w3schools.com/js/pic_bulboff.gif";
// }

// function turnOn() {
//   document.getElementById("myImage").src =
//     "https://www.w3schools.com/js/pic_bulbon.gif";
//   document.body.style.backgroundColor = "#2c2c00"; // İşığı yandırırıq 💡
// }

// function turnOff() {
//   document.getElementById("myImage").src =
//     "https://www.w3schools.com/js/pic_bulboff.gif";
//   document.body.style.backgroundColor = "#121212"; // İşığı söndürürük 🌑
// }



//             QUESTION 12

let placeText = document.querySelector(".placeText");
const getLocation = () => {
  console.log(window);
  window.navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords);

      placeText.innerHTML = `${position.coords.longitude} ${position.coords.latitude}`
    
    })
}


