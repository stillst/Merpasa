(function() {

window.addEventListener('popstate', function(e){
    Routing();
}, false);


addNavEvents();

//Copy nav-items
var navItems = [];
var navItemsDom = document.getElementsByClassName("main-nav__item");

for (var i = 0; i < navItemsDom.length; i++) {
    var navItem = navItemsDom[i].cloneNode(true);
    navItems.push(navItem);
}

SetColor();

//Set Color
function SetColor(){
    var color = localStorage.getItem("color");
    if (color != null){
        printColor(color);
    }
}

Routing();


function Routing(){
    var url = window.location.pathname;
    url = url.substring(url.lastIndexOf("/")+1);

    switch(url) {

        case "/":
        case "//":
        case "":
            refreshPage();
        break

        case "packequip":
        case "packematerial":
        case "autoequip":
        case "technoequip":
        case "technoserv":
            delAllNavButThis(url);
        break

        default:

        break
    }

}



//Links Click
function addNavEvents(){
    var links = document.getElementsByClassName("main-nav__link");

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click" , mainNavLinkClick);
    }
}


function refreshPage(e){

    if (e != null){
        e.preventDefault();
    }

    var baseurl = "Merpasa/dist/";
    var url = window.location.pathname;
    url = url.substring(url.lastIndexOf("/")+1);

    if (baseurl != url){
        changeUrl(baseurl);
    }
    /*https://stillst.github.io/Merpasa/dist/*/



    navItemsDom = document.getElementsByClassName("main-nav__item");
    var mainNav = document.getElementById("main-nav");

    var navItemsDomLength = navItemsDom.length;

    if (navItemsDomLength < 5){

        for (var i = navItemsDomLength; i--;) {
            navItemsDom[i].parentNode.removeChild(navItemsDom[i]);
        }

        for (var i = 0; i < navItems.length; i++) {
            mainNav.appendChild(navItems[i]);
        }

        SetColor();

        addNavEvents();
    }

}





function mainNavLinkClick(e){
    e.preventDefault();
    changePageStruct(this.parentNode.className);
}


function changePageStruct(classes){

    var mainlink = "";

    if (classes.indexOf("packequip") !== -1){
        mainlink = "packequip";
        changeUrl(mainlink);
        delAllNavButThis(mainlink);
    }

    if (classes.indexOf("packematerial") !== -1){
        mainlink = "packematerial";
        changeUrl(mainlink);
        delAllNavButThis(mainlink);
    }

    if (classes.indexOf("autoequip") !== -1){
        mainlink = "autoequip";
        changeUrl(mainlink);
        delAllNavButThis(mainlink);
    }

    if (classes.indexOf("technoequip") !== -1){
        mainlink = "technoequip";
        changeUrl(mainlink);
        delAllNavButThis(mainlink);
    }

    if (classes.indexOf("technoserv") !== -1){
        mainlink = "technoserv";
        changeUrl(mainlink);
        delAllNavButThis(mainlink);
    }

}


function changeUrl(mainlink){
    history.pushState(null, "",  mainlink);
}


function delAllNavButThis(mainlink){
    var navs = document.getElementsByClassName("main-nav__item");

    var navsLength = navs.length;
    for (var i = navsLength; i--;) {

        if (navs[i].className.indexOf(mainlink) == -1){
            navs[i].parentNode.removeChild(navs[i]);
        }
    }
}


//Colors
var logo = document.getElementById("logo__link");
logo.addEventListener("mouseover" , changeColor);
logo.addEventListener("click" , refreshPage);

function changeColor(){
    var blue = "rgba(26, 72, 166, 0.9)";  //"#1a48a6";
    var red =  "rgba(167, 27, 59, 0.9)"; //  "#a71b3b";
    var yellow = "rgba(166, 120, 26, 0.9)"; //"#a6781a";
    var green = "rgba(27, 167, 104, 0.9)"; //"#1ba768";

    var savedColor = localStorage.getItem("color");
    var color = "";


    do {
        var rand = Math.floor(Math.random() * 4) + 1;

        switch(rand)
        {

            case 1:
                color = blue;
            break;

            case 2:
                color = red;
            break;

            case 3:
                color = yellow;
            break;

            case 4:
                color = green;
            break;

        }

    } while (savedColor == color)

    localStorage.setItem("color", color);
    printColor(color);

}

function printColor(color){

    var footer = document.getElementById("footer");
    footer.style.backgroundColor = color;

    var mainNavLinks = document.getElementsByClassName("main-nav__link");
    j = 0.9;

    for(var i = 0; i < mainNavLinks.length; i++){

        var newColor = color.substring(0, color.lastIndexOf(",")+1);
        newColor = newColor +" "+ j + ")";

        mainNavLinks[i].style.backgroundColor = newColor;
        j = j - 0.1;
    }

    j = 0.9;
}



})();