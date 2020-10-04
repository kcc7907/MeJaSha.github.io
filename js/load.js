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

//  <==  檢查某 cookie 是否存在  ==>

function checkCookie(cname) {
    var cookie_value = getCookie(cname);
    if (cookie_value != "") {
        return true;
    } else {
        return false;
    }
}

//  <==  暫存登入資料  ==>

// setCookie("open", "animation", 0.1);
// (function () {
//     let load = setCookie("pas", "heisenberg", 0.1);
//     if () {

//     }
// })();

if (checkCookie('open') == false) {
    location.href = "../opening.html";
}