window.onscroll = function () {
    myFunction()
};

let qwe = document.querySelector("#calendar").scrollTop;
let qaz = document.querySelector("#process").getBoundingClientRect().top + window.scrollY;
let wsx = document.querySelector("#news").getBoundingClientRect().top + window.scrollY;
let edc = document.querySelector("#calendar").getBoundingClientRect().top + window.scrollY;
let edc1 = document.querySelector("#calendar").getBoundingClientRect().top;
let rfv = document.querySelector("#gotop").getBoundingClientRect().top + window.scrollY;
let iop = document.querySelector("#gotop");

function myFunction() {
    if (document.documentElement.scrollTop > (qaz - 300)) {
        document.getElementById("process").classList.add('-on');
    }
    if (document.documentElement.scrollTop > (wsx - 300)) {
        document.getElementById("news").classList.add('-on');
    }
    if (document.querySelector("#calendar").getBoundingClientRect().top < 300) {
        document.getElementById("calendar").classList.add('-on');
    }
    iop.classList.toggle('-on', window.scrollY > (wsx - 300));
}

iop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});