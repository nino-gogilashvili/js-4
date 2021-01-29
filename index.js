
let btn = document.querySelectorAll('.dropdown')[1];
let btnAll = document.querySelectorAll('.dropdown')[0];
let x = document.querySelectorAll(".dropdown-content")[1];
let x1 = document.querySelectorAll(".dropdown-content")[0];
function toggleMenu1() {
     x1.classList.toggle('open');
}
function toggleMenu() {
    x.classList.toggle("open");
   
}
btn.addEventListener('click', toggleMenu);
btnAll.addEventListener('click', toggleMenu1);

/*let btn = document.querySelectorAll('.dropdown');
let x = document.querySelectorAll(".dropdown-content");
function toggleMenu() {
    if(btn.indexof(0))
    return x.indexof(0).classList.toggle("open");
    if(btn.indexof(1))
    return x.indexof(1).classList.toggle('open');
}

btn.addEventListener('click', toggleMenu);


let btn = document.querySelectorAll('.dropdown')[0];
let btnall = document.querySelectorAll('.dropdown')[1];
let x = document.querySelectorAll(".dropdown-content")[0];
let x1 = document.querySelectorAll(".dropdown-content")[1];
function toggleMenu() {
    if(btn)
    return x.classList.toggle("open");
    if(btnall)
    return x1.classList.toggle('open');
}

btn.addEventListener('click', toggleMenu);
btnall.addEventListener('click', toggleMenu); 

//
let btn = document.querySelector('.dropdown');
let btnall = document.querySelectorAll('.dropdown')[1];
let x = document.querySelector(".dropdown-content");
let x1 = document.querySelectorAll(".dropdown-content")[1];
function toggleMenu() {
    if(btn)
    return x.classList.toggle("open");
    if(btnall)
    return x1.classList.toggle('open');
}

btn.addEventListener('click', toggleMenu);
btnall.addEventListener('click', toggleMenu); 


////
let btn = document.querySelectorAll('.dropdown');
let x = document.querySelectorAll(".dropdown-content");
function toggleMenu() {
    if(btn[0]) { x[0].classList.toggle("open");}
    
    if(btn[1]){ x[1].classList.toggle('open');}
    
}

btn.addEventListener('click', toggleMenu);


///

let btn = document.querySelectorAll('.dropdown');
let x = document.querySelectorAll(".dropdown-content");
function toggleMenu() {
    for (let i = 0; i < btn.length;  i++) {
    if(btn[0])
    return x[0].classList.toggle("open");
    if(btn[1])
    return x[0].classList.toggle('open');}
}

btn.addEventListener('click', toggleMenu);

///

let btn = document.querySelectorAll('.dropdown')[0];
let btn = document.querySelectorAll('.dropdown')[1];
let x = document.querySelectorAll(".dropdown-content")[0];
let x = document.querySelectorAll(".dropdown-content")[1];
function toggleMenu() {
    if(btn[1])
    return x[1].classList.toggle("open");
    else if(btn[0])
    return x.classList.toggle('open');
}

btn.addEventListener('click', toggleMenu);


*/