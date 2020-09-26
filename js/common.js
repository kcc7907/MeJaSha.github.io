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
  // localStorage.clear();
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

//  ==========    foodlist    ==========

let add_btn = document.querySelectorAll('.add-btn');
let wrap = document.querySelectorAll('ul.wrap')[0];
let r_list_ul = document.querySelectorAll(".r-list-ul")[0];
let total_num = document.querySelectorAll(".total-num")[0];

// == addbtn ==
wrap.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'add-btn') {
    let list_name = e.target.closest('li').querySelectorAll('.food-card-l h4')[0].innerHTML;
    let list_num = e.target.closest('li').querySelectorAll('.numbox .num')[0].innerHTML;
    let list_pri = e.target.closest('li').querySelectorAll('.food-card-r .price')[0].innerHTML;
    // if (parseInt(list_num) === 0) {
    if (list_num === '0') {
      return;
    } else {
      let task = {
        "list_name": list_name,
        "num": list_num,
        "price": list_pri
      };

      //存ls
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        tasks.unshift(task);
      } else {
        tasks = [task];
      }
      localStorage.setItem("tasks", JSON.stringify(tasks));
      //
      //更新菜單
      if (tasks) {
        let list_html = "";
        tasks.forEach(function (item, i) {

          list_html += `
                        <li class="r-list-box">
                            <div class="list-name">${item.list_name}</div>
                            <div class="list-num">${item.num}</div>
                            <div class="list-pri">${item.price}</div>
                            <button type="button" class="list-del">X</button>
                        </li>
                    `;
        });
        // 更新total
        let ls = JSON.parse(localStorage.getItem("tasks"));
        var vans = 0;
        for (let i = 0; i < ls.length; i++) {
          vans = vans + parseInt(ls[i].price.replace('$', ''));
        }
        total_num.innerHTML = String(vans).replace(/^/, '$');
        //
        r_list_ul.innerHTML = list_html;
      }
    }
  }
  //
});

//  ==  numbtnl  ==

wrap.addEventListener('click', (e) => {
  // console.log(e.target.parentNode);
  if (e.target.parentNode.classList.contains('numbtn-l')) {
    let num = e.target.parentNode.parentNode.querySelectorAll('.num')[0];
    let list_pri = e.target.closest('li').querySelectorAll('.food-card-r .price')[0].getAttribute('data-pri');
    if (parseInt(num.innerText) <= 9 && parseInt(num.innerText) > 0) {
      let list_num = parseInt(num.innerText) - 1;
      num.innerText = list_num;
      let new_pri = list_pri.replace('$', '') * list_num;
      e.target.closest('li').querySelectorAll('.food-card-r .price')[0].innerHTML = String(new_pri).replace(/^/, '$');
    }
  }
});

//  ==  numbtnr  ==

wrap.addEventListener('click', (e) => {
  // console.log(e.target.parentNode);
  if (e.target.parentNode.classList.contains('numbtn-r')) {
    let num = e.target.parentNode.parentNode.querySelectorAll('.num')[0];
    let list_pri = e.target.closest('li').querySelectorAll('.food-card-r .price')[0].getAttribute('data-pri');

    if (parseInt(num.innerText) >= 0 && parseInt(num.innerText) < 9) {
      let list_num = parseInt(num.innerText) + 1;
      num.innerText = list_num;
      let new_pri = list_pri * list_num;
      e.target.closest('li').querySelectorAll('.food-card-r .price')[0].innerHTML = String(new_pri).replace(/^/, '$');
    }
  }
});

// ==  clearAll ==  

let total_box = document.querySelectorAll('.total-box')[0];

total_box.addEventListener('click', (e) => {
  if (e.target.classList.contains('clear-all')) {
    r_list_ul.innerHTML = '';
    localStorage.clear();
    total_num.innerHTML = '$0';
  }
});

//  ==  clearList  ==

r_list_ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('list-del')) {
    e.target.closest('li').remove();
  }
});

//