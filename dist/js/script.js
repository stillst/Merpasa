!function(){function e(){var e=localStorage.getItem("color");null!=e&&s(e)}function a(){var e=window.location.pathname;switch(e=e.substring(e.lastIndexOf("/")+1)){case"/":case"//":case"":t();break;case"packequip":case"packematerial":case"autoequip":case"technoequip":case"technoserv":c(e)}}function n(){for(var e=document.getElementsByClassName("main-nav__link"),a=0;a<e.length;a++)e[a].addEventListener("click",o)}function t(a){null!=a&&a.preventDefault();var t="dist",o=window.location.pathname;o=o.substring(o.lastIndexOf("/")+1),console.log("refresh "+o),t!=o&&i(t),d=document.getElementsByClassName("main-nav__item");var r=document.getElementById("main-nav"),c=d.length;if(c<5){for(var l=c;l--;)d[l].parentNode.removeChild(d[l]);for(var l=0;l<u.length;l++)r.appendChild(u[l]);e(),n()}}function o(e){e.preventDefault(),r(this.parentNode.className)}function r(e){var a="";e.indexOf("packequip")!==-1&&(a="packequip",i(a),c(a)),e.indexOf("packematerial")!==-1&&(a="packematerial",i(a),c(a)),e.indexOf("autoequip")!==-1&&(a="autoequip",i(a),c(a)),e.indexOf("technoequip")!==-1&&(a="technoequip",i(a),c(a)),e.indexOf("technoserv")!==-1&&(a="technoserv",i(a),c(a))}function i(e){history.pushState(null,"",e)}function c(e){for(var a=document.getElementsByClassName("main-nav__item"),n=a.length,t=n;t--;)a[t].className.indexOf(e)==-1&&a[t].parentNode.removeChild(a[t])}function l(){var e="rgba(26, 72, 166, 0.9)",a="rgba(167, 27, 59, 0.9)",n="rgba(166, 120, 26, 0.9)",t="rgba(27, 167, 104, 0.9)",o=localStorage.getItem("color"),r="";do{var i=Math.floor(4*Math.random())+1;switch(i){case 1:r=e;break;case 2:r=a;break;case 3:r=n;break;case 4:r=t}}while(o==r);localStorage.setItem("color",r),s(r)}function s(e){var a=document.getElementById("footer");a.style.backgroundColor=e;var n=document.getElementsByClassName("main-nav__link");j=.9;for(var t=0;t<n.length;t++){var o=e.substring(0,e.lastIndexOf(",")+1);o=o+" "+j+")",n[t].style.backgroundColor=o,j-=.1}j=.9}window.addEventListener("popstate",function(e){a()},!1),n();for(var u=[],d=document.getElementsByClassName("main-nav__item"),m=0;m<d.length;m++){var v=d[m].cloneNode(!0);u.push(v)}e(),a();var f=document.getElementById("logo__link");f.addEventListener("mouseover",l),f.addEventListener("click",t)}();