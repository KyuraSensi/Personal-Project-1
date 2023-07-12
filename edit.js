
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



// Sign up Pop up: START

let name = document.getElementById('name');
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


// Sign up Pop up: END





// Maoped section: START


let results = document.querySelector('.resultsHere');

let programming = [
    {   
        img: 'imgs/programming1.png',
        title: 'Learning HTML & CSS',
        postedby: 'Kyu',
        description: 'With my 6 months maximum coarse suggestion, you can become close to a senior level web developer, no lie. I offer only the best suggestions when it comes to the besics of web development UI',
        },
    {   
        img: 'imgs/Journalist _ back to 1950.gif',
        title: 'Learning JavaScript',
        postedby: 'John',
        description: 'Are you tired of being stressed out by JavaScript, yeah i was too, i almost lost my brain untill i want through my suggestions channels. Trust me you have nothing to lose besides 14hrs.',
        },
    {   
        img: 'imgs/Coding.gif',
        title: 'Learning React JS',
        postedby: 'Sipho',
        description: "Are you tired of bulding your sites out of besic HTML, CSS and JS. Well i got you with some out of this worl React JS lessons from the best of the best online teachers, i'm talking NetNinja, BroCode, Nella's Got You even W3Schools.",
        },
    {   
        img: 'imgs/pro.png',
        title: 'Learning C',
        postedby: 'Reece',
        description: 'Okay if your even looking at this then your clearly in another level, im talking Neo seeing binary in the real world type level, well checkout out my suggestions, trust me when i say these arnt going to be your besic smooth seiling lessons just to worn you.',
        }
]


    let show = programming.map((item) => (
        `
        <div>
        <img
        src="${item.img}"
        width="100%"
        height="100%"
      />
      <h3>${item.title}</h3>
      <h5>posted by ${item.postedby}</h5>
      <p>
        ${item.description} 
      </p>
      </div>`
  ))
    console.log(show)

results.innerHTML += show



let results2 = document.querySelector('.resultsHere2');

let graphic = [
    {   
        img: 'imgs/Graph.png',
        title: 'Learning To Use Figma',
        postedby: 'Sanje',
        description: 'Learn how to properly use Figma to create live like projects that truly send a message to the target audiance.',
        },
    {   
        img: 'imgs/GD.gif',
        title: 'Learning  Techniques',
        postedby: 'Lee',
        description: 'Find some techniques you my be in need of that you didnt even know you need with our Learn Techniques suggetions',
        },
    {   
        img: 'imgs/UX_UI Illustrations 🔥.png',
        title: 'UI / UX Illustrations',
        postedby: 'Lwando',
        description: 'Find the best ways of creating User Interfaces which are completly user friendly and baby level easy to use.',
        },
    {   
        img: 'imgs/Trivago.gif',
        title: 'Learning Blender',
        postedby: 'Tegra',
        description: 'Want to create your own animations, just like the one on top visit our Youtube suggestions and learn about it all in just a period of 3 months, yes 3 months. ',
        },
    {   
        img: 'imgs/DELL - Walk Cycle.gif',
        title: 'Learning Animation',
        postedby: 'Tracy',
        description: 'While motion graphics describes moving or animated graphic design, they mainly focus on giving movement to graphic design elements. Motion graphics take a graphic design that would be otherwise static and gives it animation and movement, usually without following a specific narrative.',
        },
    {   
        img: 'imgs/Collection.gif',
        title: 'Master Resizing',
        postedby: 'Stoic',
        description: "Resizing allows you to make your image smaller or larger without cutting anything out. Resizing alters the image's dimensions, which typically affects the file size and image quality",
        },
]


    let show2 = graphic.map((item) => (
        `
        <div>
        <img
        src="${item.img}"
        width="100%"
        height="100%"
      />
      <h3>${item.title}</h3>
      <h5>posted by ${item.postedby}</h5>
      <p>
        ${item.description} 
      </p>
      </div>`
  ))

results2.innerHTML += show2






let results3 = document.querySelector('.resultsHere3');

let visualArt = [
    {   
        img: 'imgs/Hand Drawn Illustration PNG Image, Cartoon Exam Learning Hand Drawn Illustration, Examination, Learn, Student PNG Image For Free Download.jpg',
        title: 'Learning Art Elements',
        postedby: 'Sixteen',
        description: 'Learn the foundematals of creating art works. Besic lines and how their used, colors and what each of them mean, shapes and the message they relay and more...',
        },
    {   
        img: 'imgs/Reading Illustration Clipart Transparent PNG Hd, Hand Drawn Cartoon Reading Learning Illustration, Pen, Examination, Learn PNG Image For Free Download.png',
        title: 'Design Principles',
        postedby: 'Karabo',
        description: 'Learn about all the elements that make an artwork speak to the viewers, such as: <br> Rythme <br> Shape <br> Harmony <br> Emphasis <br> Foreground / Background <br> etc...',
        },
    {   
        img: 'imgs/Pencil Hand Drawn PNG Picture, Hand Drawn Cartoon Reading Pencil Illustration, Chart, Student, Stationery PNG Image For Free Download.png',
        title: 'Art History',
        postedby: 'Claydon',
        description: 'Learn about the best artworks of history, from artist such as Da Vinci. Get besic analysis of such artworks, how they were made, why they were made, the media and art element imlications...',
        },
    {   
        img: 'imgs/Personality.gif',
        title: 'Design Rules',
        postedby: 'Mike',
        description: 'Learn the rules required to create a perfect art work for Art Analystics to read easily. Even get a chance to learn more about Art Snalysts ',
        },
    {   
        img: 'imgs/Hand Drawn Illustration Hd Transparent, Hand Drawn Cartoon Reading Exam Illustration, Pink, Bookshelf, Student PNG Image For Free Download.jpg',
        title: 'Practical/Paper Drawing',
        postedby: 'Katlego',
        description: 'Learn How to draw on paper and on your device with quick tutorials from famous Youtubers. Get to put the Design Principles you learnt to use to create your own artwork...',
        }
]


    let show3 = visualArt.map((item) => (
        `
        <div>
        <img
        src="${item.img}"
        width="100%"
        height="100%"
      />
      <h3>${item.title}</h3>
      <h5>posted by ${item.postedby}</h5>
      <p>
        ${item.description} 
      </p>
      </div>`
  ))

results3.innerHTML += show3;

// Maoped section: END





// ADD section: START


let Title = document.getElementById('Title');
let Images = document.getElementById('Image');
let Learning = document.getElementById('Learning');
let Posted = document.getElementById('Posted');
let Description = document.getElementById('Description');
let SubBtn = document.getElementById('buttonAdding');
let shows = document.getElementByI('showhere')

Title.value
Images.value
Learning.value
Posted.value
Description.value


SubBtn.addEventListener('click', () => {
    console.log(Title)
     
} )





//  shows.innerHTML = `
// <div>
// <img
// src="${item.img}"
// width="100%"
// height="100%"
// />
// <h3>${Learning.value}</h3>
// <h5>posted by ${Posted.value}</h5>
// <p>
// ${Description.value} 
// </p>
// </div>`




// ADD section: End











    