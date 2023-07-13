// Sign up Pop up: START

let popSubmit = document.getElementById('pop-sub')

let join = document.querySelector('.join-us');

join.addEventListener('click', () => {
    popup.style.display = "flex";
})
    setInterval(() => {
        join.innerHTML = "Join Us"
    },9000);

const popup = document.querySelector('.pop-cont');
const popBtn = document.getElementById("pop-btn");

popBtn.addEventListener('click', () => {
    popup.style.display = "none";
})

var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
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


// Sign up Pop up: END


// Warning Start

const hide = document.querySelector('.warning')

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

const name = document.querySelectorAll('#username');
const nameN = document.querySelectorAll('#name');
const email = document.querySelectorAll('#email');
const password = document.querySelectorAll('#password');
const outName = document.querySelector('#inName');
const submit = document.querySelector('#pop-sub');
const enter = document.querySelector('#fill');


submit.addEventListener('click', () => {

  let arr = [
    {
      name: name.value,
    }
  ]

  if(nameN[0].value === ''){
    fill.style.display = 'block'
      fill.innerHTML = 'Please Enter All Fields'
    } else if(name[0].value === ''){
    fill.style.display = 'block'
      fill.innerHTML = 'Please Enter All Fields'
  } else if(email[0].value === ''){
  fill.stsyle.display = 'block'
    fill.innerHTML = 'Please Enter All Fields'
  } else if(password[0].value === ''){
    fill.style.display = 'block'
      fill.innerHTML = 'Please Enter All Fields'
    } else {
      fill.style.display = 'none'
      popup.style.display = 'none'
    } 

    outName.innerHTML = name[0].value
})

// input End
