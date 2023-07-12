// Home Page: Start

let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let popSubmit = document.getElementById('pop-sub')

let join = document.querySelector('.join-us');

join.addEventListener('click', () => {
    popup.style.display = "flex";
})
    setInterval(() => {
        join.innerHTML = "Join Us"
    },9000)
    



const popup = document.querySelector('.pop-cont');
const popBtn = document.getElementById("pop-btn");

popBtn.addEventListener('click', () => {
    popup.style.display = "none";
})

var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
  cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


let search = document.querySelector('.search');
let searchPop = document.querySelector('.searchPop');
let searchCencel = document.getElementById('cencel')

search.addEventListener('click', () => {
    searchPop.style.display = 'block'
})
searchCencel.addEventListener('click', () => {
  searchPop.style.display = 'none'
})

// Home Page: End

// Warning Start

const hide = document.querySelector('.warning');

function remove(){
  hide.style.display = 'none';
}

// Warning End


// Burger Start

const burger = document.querySelector('.burger');
const burgerLinks = document.querySelector('.burgerLinks');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  burgerLinks.style.display = 'block';
})

close.addEventListener('click', () => {
  burgerLinks.style.display = 'none';
})

// Burger End

// input Start

const name = document.querySelectorAll('#name');
const outName = document.querySelector('#inName');
const submit = document.querySelector('#pop-sub')


submit.addEventListener('click', () => {
  
  if( name.value === ""){
    alert("Enter Name")
    return
 }else{
    // name.value = ""
 }

  let arr = [
    {
      name: name.value,
    }
  ]

  console.log(arr.name);

  outName.innerHTML = arr[0].name

})

// input End
