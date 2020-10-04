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
let backOpen = document.querySelectorAll('.backOpen')[0];

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

backOpen.addEventListener('click', () => {
    setCookie("open", "opening", -1);
    location.href = "../opening.html";
})

// <==  設定 cookie  ==>

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//  <==  取得 cookie 的值  ==>

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}