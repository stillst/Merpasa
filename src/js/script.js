//Copy nav-items
var navItems = [];
var navItemsDom = document.getElementsByClassName("main-nav__link");

for (var i = 0; i < navItemsDom.length; i++) {
    var navItem = navItemsDom[i].cloneNode(true);
    navItems.push(navItem);
}


//Routing

var url = window.location.pathname;

url = url.substring(url.lastIndexOf("/")+1);


switch(url) {

    case "/":
    case "//":
    case "":
        console.log("main");
    break

    case "packequip":
        console.log("packequip-");
    break

    case "packematerial":
        console.log("packematerial-");
    break

    case "autoequip":
        console.log("autoequip-");
    break

    case "technoequip":
        console.log("technoequip-");
    break

    case "technoserv":
    console.log("technoserv-");
    break

    default:
        console.log(404);
    break
}





//Ajax
/*
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'phones.json', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  console.log( xhr.responseText ); // responseText -- текст ответа.
}
*/




var links = document.getElementsByClassName("main-nav__link");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener( "click" , mainNavLinkClick);
}


function mainNavLinkClick(e){
    e.preventDefault();
    identifyClassName(this.parentNode.className);


}





function identifyClassName(classes){

    var mainlink = "";

    if (classes.indexOf("packequip") !== -1){
        mainlink = "packequip";
        changeUrl(mainlink);
        changeDOM(mainlink);
    }

    if (classes.indexOf("packematerial") !== -1){
        mainlink = "packematerial";
        changeUrl(mainlink);
        changeDOM(mainlink);
    }

    if (classes.indexOf("autoequip") !== -1){
        mainlink = "autoequip";
        changeUrl(mainlink);
        changeDOM(mainlink);
    }

    if (classes.indexOf("technoequip") !== -1){
        mainlink = "technoequip";
        changeUrl(mainlink);
        changeDOM(mainlink);
    }

    if (classes.indexOf("technoserv") !== -1){
        mainlink = "technoserv";
        changeUrl(mainlink);
        changeDOM(mainlink);
    }

}


function changeUrl(mainlink){
    history.replaceState(null, "",  mainlink);
}


function changeDOM(mainlink){
    var navs = document.getElementsByClassName("main-nav__item");

    var navsLength = navs.length;
    for (var i = navsLength; i--;) {

        if (navs[i].className.indexOf(mainlink) == -1){
            cutDOMElement(navs[i]);
        }
    }
}

function cutDOMElement(elem){

    elem.parentNode.removeChild(elem);
}



/*

 var mainNav = document.getElementsByClassName("main-nav");

    for (var i = 0; i < navItems.length; i++) {
        mainNav[0].appendChild(navItems[i]);

    }
*/