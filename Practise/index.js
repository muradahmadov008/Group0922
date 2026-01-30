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