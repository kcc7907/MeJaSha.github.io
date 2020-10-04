let img_breakfast = document.querySelectorAll(".img_breakfast")[0];
let img_brunch = document.querySelectorAll(".img_brunch")[0];
let hideobj = document.querySelectorAll(".hidezone")[0];
let hidepicm = document.querySelectorAll(".hidepic.m")[0];
let hidepicb = document.querySelectorAll(".hidepic.b")[0];

// function showm() {
//     hideobj.style.display = "block";
//     hideobj.style.height = document.body.clientHeight + "px";
//     hidepicm.style.display = "block";
// }

// function showb() {

//     hideobj.style.display = "block";
//     hideobj.style.height = document.body.clientHeight + "px";
//     hidepicb.style.display = "block";
// }

function hidezone() {
    hideobj.style.display = "none";
    hidepicm.style.display = "none";
    hidepicb.style.display = "none";
}
//

let bo = "img/meau/menu_b.jpg"
let b760 = "./img/meau/b/760.jpg"
let b300 = "./img/meau/b/300.png"
let hidepicb_img = document.querySelectorAll(".hidepic.b img")[0];

img_brunch.addEventListener('click', () => {
    if (window.innerWidth > 900) {
        hideobj.style.display = "block";
        hideobj.style.height = document.body.clientHeight + "px";
        hidepicb.style.display = "block";
        hidepicb_img.src = bo;
    } else if (window.innerWidth <= 900 && window.innerWidth > 330) {
        hideobj.style.display = "block";
        hideobj.style.height = document.body.clientHeight + "px";
        hidepicb.style.display = "block";
        hidepicb_img.src = b760;
    } else if (window.innerWidth <= 330) {
        hideobj.style.display = "block";
        hideobj.style.height = document.body.clientHeight + "px";
        hidepicb.style.display = "block";
        hidepicb_img.src = b300;
    }
});

let mo = "img/meau/menu_m.jpg"
let m760 = "./img/meau/m/760.png"
let m300 = "./img/meau/m/300.png"
let hidepicm_img = document.querySelectorAll(".hidepic.m img")[0];

img_breakfast.addEventListener('click', () => {
    if (window.innerWidth > 900) {
        hideobj.style.display = "block";
        hideobj.style.height = document.body.clientHeight + "px";
        hidepicm.style.display = "block";
        hidepicm_img.src = mo;
    } else if (window.innerWidth <= 900 && window.innerWidth > 330) {
        hideobj.style.display = "block";
        hideobj.style.height = document.body.clientHeight + "px";
        hidepicm.style.display = "block";
        hidepicm_img.src = m760;
    } else if (window.innerWidth <= 330) {
        hideobj.style.display = "block";
        hideobj.style.height = document.body.clientHeight + "px";
        hidepicm.style.display = "block";
        hidepicm_img.src = m300;
    }
});