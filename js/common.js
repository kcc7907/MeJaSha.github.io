function show() {
  let hideobj = document.querySelectorAll(".hidebg")[0];
  hideobj.style.display = "block";
  hideobj.style.height = document.body.clientHeight + "px";
  document.getElementsByClassName("hidebox")[0].style.display = "block";
}

function hide() {
  document.getElementsByClassName("hidebg")[0].style.display = "none";
  document.getElementsByClassName("hidebox")[0].style.display = "none";
}

function signin() {
  document.getElementsByClassName("signin_page")[0].style.display = "block";
  document.getElementsByClassName("hidebox")[0].style.display = "none";
}

function login() {
  document.getElementsByClassName("hidebox")[0].style.display = "block";
  document.getElementsByClassName("signin_page")[0].style.display = "none";

}
let hmeau = document.querySelectorAll(".hide_meau")[0];

function meau_hide() {

  if (hmeau.style.display == "none") {
    hmeau.style.display = 'block';
  } else {
    hmeau.style.display = 'none';
  }
}