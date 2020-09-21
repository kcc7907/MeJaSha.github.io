let hidebg = document.querySelectorAll('.hidebg')[0];
let hidebox = document.querySelectorAll('.hidebox')[0];
let login2 = document.querySelectorAll('.login_2')[0];
let signin1 = document.querySelectorAll('.signin1')[0];
let flip = document.querySelectorAll('.flip')[0];
let hmeau = document.querySelectorAll(".hide_meau")[0];
let flipout = document.querySelectorAll(".flipout")[0];
let signin_page = document.querySelectorAll(".signin_page")[0];
let r_top_r = document.querySelectorAll(".r-top-r")[0];
let r_top_l = document.querySelectorAll(".r-top-l")[0];
let menu = document.querySelectorAll(".menu")[0];
let hidelist = document.querySelectorAll(".hidelist")[0];
let oderlist = document.querySelectorAll(".oderlist")[0];

function show() {
  hidebg.style.display = "block";
  hidebg.style.height = document.body.clientHeight + "px";
  flipout.style.display = "block";
  hidebox.classList.add('-on');
}

function hide() {
  hidebg.style.display = "none";
  flipout.style.display = "none";
  if (flip.classList.contains('-on')) {
    flip.classList.remove('-on');
  }
}

signin1.addEventListener('click', function () {
  flip.classList.add('-on');
});

login2.addEventListener('click', function () {
  flip.classList.remove('-on');
});

menu.addEventListener('click', function () {
  hidelist.style.display = "block";
  hidebg.style.height = document.body.clientHeight + "px";
  hidebg.style.display = "block";
});

r_top_r.addEventListener('click', function () {
  hidelist.style.display = "none";
  hidebg.style.display = "none";
});

r_top_l.addEventListener('click', function () {
  if (oderlist.style.display === "none" || oderlist.style.display === "") {
    oderlist.style.display = "block";
  } else {
    oderlist.style.display = "none";
  }
});

function meau_hide() {
  if (hmeau.style.display == "none" || hmeau.style.display == "") {
    hmeau.style.display = 'block';
    hmeau.style.maxHeight = hmeau.scrollHeight + "px";
  } else {
    hmeau.style.maxHeight = '0';
    setTimeout(function () {
      hmeau.style.display = 'none';;
    }, 1000);
  }
};


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
})