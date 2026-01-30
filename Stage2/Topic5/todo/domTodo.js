//Elements
const btnShow = document.querySelector("#btnShow")
const title = document.querySelector("#title")
const menuBar = document.querySelector("#menuBar")
const formBtn = document.querySelector("#formBtn")
const inputEl = document.querySelector("#fullname");

// title.parentElement.style.padding = "20px"
// title.parentElement.style.backgroundColor = "blue"
 
const data =[]
//Events
function adItem(){
    console.log("Button Clicked");

    const listEL = document.querySelector("#listEL") 

    const userValue = inputEl.value
    

    data.push(userValue)

    inputEl.value = ""

    const contentArray = data.map(item=>`<li class="text-danger">${item}</li>`).join("")

    listEL.innerHTML = contentArray
}
inputEl.addEventListener("keydown",function(e){
    if (e.key === "Enter") {
      adItem();
    }
})

formBtn.addEventListener("click",function(){

    const inputEl = document.querySelector("#fullname")
    const listEL = document.querySelector("#listEL") 

    const userValue = inputEl.value
    

    data.push(userValue)

    inputEl.value = ""

    const contentArray = data.map(item=>`<li class="text-danger">${item}</li>`).join("")

    listEL.innerHTML = contentArray


    // listEL.innerHTML = `<li class="text-danger">Test1</li> <li class="text-danger">Test2</li> <li class="text-danger">Test3</li>`

    
})

title.addEventListener("dblclick",function(){
// title.addEventListener("mouseenter",function(){
// title.addEventListener("click",function(){

    console.log("Title Clicked");

    const color = ["red","blue","green","yellow","purple","pink","orange","brown","black","gray" ]
    const randomIndex = Math.floor( Math.random() * color.length )
    const randomColor = color[randomIndex]
    title.style.color = randomColor

});


// function test(){
//     console.log("Test");
// }

