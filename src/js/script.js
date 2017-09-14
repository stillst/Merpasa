//Routing

var currentPath = window.location;

console.log(currentPath);


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
    console.log(currentPath);
}


function changeUrl(mainlink){
    history.replaceState(null, "",  mainlink);
}


function changeDOM(mainlink){
    var navs = document.getElementsByClassName("main-nav__item");

    var navsLength = navs.length;
    for (var i = navsLength; i--;) {

        if (navs[i].className.indexOf(mainlink) == -1){
            cutDOMElements(navs[i]);
        }
    }
}

function cutDOMElements(elem){
    var navItems = [];
    var navItem = elem.cloneNode(true);
    navItems.push(navItem);


    elem.parentNode.removeChild(elem);
    console.log(navItems);



}



/*

 var mainNav = document.getElementsByClassName("main-nav");

    for (var i = 0; i < navItems.length; i++) {
        mainNav[0].appendChild(navItems[i]);

    }
*/