const btn = document.getElementById('menu-btn');
const overlay = document.getElementById ('overlay');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);

function navToggle () {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-slow');
    document.body.classList.toggle('stop-scroll');
    menu.classList.toggle('show-menu');
}

/// For circle


const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8.1}deg)">${char}</span>`
).join('');






//Testimonial section

let userTexts = document.getElementsByClassName("user-text");
let userPics = document.getElementsByClassName("user-pic");


function showReview(){
    for(userPic of userPics){
        userPic.classList.remove("active-pic");
    }
    for(userText of userTexts){
        userText.classList.remove("active-text");
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add("active-pic");
    userTexts[i].classList.add("active-text");
}

// This section for the product offered on the platform


const itemList = document.querySelector('.item-list');
const gridViewBtn = document.getElementById('grid-active-btn');
const detailsViewBtn = document.getElementById('details-active-btn');

gridViewBtn.classList.add('active-btn');

gridViewBtn.addEventListener('click', () => {
    gridViewBtn.classList.add('active-btn');
    detailsViewBtn.classList.remove('active-btn');
    itemList.classList.remove('details-active');
});

detailsViewBtn.addEventListener('click', () => {
    detailsViewBtn.classList.add('active-btn');
    gridViewBtn.classList.remove("active-btn");
    itemList.classList.add("details-active");
});









