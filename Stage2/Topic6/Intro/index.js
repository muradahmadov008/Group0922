

//Timeout fn

const btn = document.getElementById('btn');

let timer;

btn.addEventListener('click',function(){

    console.log("timer",timer);
    clearInterval(timer);// cleanup
    
      timer = setInterval(function () {
       console.log("Hello from Timeout");
    }, 1000);
    
})

//Debounce fn

function debounce(fn, delay){
    let timer;

    return function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn()
        },delay)
    }

}


const searchInput = document.getElementById('searchInput');

const debounceedFunction = debounce(function(){

    console.log("Searching for",searchInput.value);
},500)

searchInput.addEventListener('input',debounceedFunction)


//

// function A(){
//  setInterval(function (){
//     console.log('Hello from Timeout');
// }, 2000)
// }

// window.setTimeout(A,2000);


// const a = setTimeout(A, 2000)

// const b = setTimeout(A,2000)

// clearTimeout(a)
// clearTimeout(b)

// console.log("a",a);
// console.log("b",b);


// const a = 5
// const b = 10

// function B(){
//     console.log("Inside B fn");
    
// }
// console.log('Sum is:',a + b);
// B();