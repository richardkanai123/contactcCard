//  capture elements
const body = document.querySelector('.body');
const Btn = document.querySelector("button");
const description = document.querySelector(".description");
const container = document.querySelector(".container");
const h5 = document.querySelector('h5');
const phoneIcon = document.querySelector('.fa-phone-square-alt');
const Facebook = document.querySelector('.fa-facebook');
const Messenger = document.querySelector('.fa-facebook-messenger');
const Instagram = document.querySelector('.fa-instagram');
const Gmail = document.querySelector('.fa-envelope');
const Whatsapp = document.querySelector('.fa-whatsapp-square');
const Linkedin = document.querySelector('.fa-linkedin');
const social = document.querySelector(".social");




// events
Btn.addEventListener("click", () => {
    Btn.classList.toggle("black");
    body.classList.toggle("black");
    description.classList.toggle('dark');
})

social.children[0].addEventListener('mouseover', () =>{
    h5.innerText = "Call Me!"
});
social.children[1].addEventListener('mouseover', () =>{

    h5.innerText = "Facebook Page"
});
social.children[2].addEventListener('mouseover', () =>{

    h5.innerText = "Instagram"
});
social.children[3].addEventListener('mouseover', () =>{

    h5.innerText = "Gmail"
});
social.children[4].addEventListener('mouseover', () =>{

    h5.innerText = "Whatsapp"
});
social.children[5].addEventListener('mouseover', () =>{

    h5.innerText = "Github"
});
social.children[6].addEventListener('mouseover', () =>{

    h5.innerText = "Linkedin"
});
