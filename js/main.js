!function(){"use strict";var e=JSON.parse('{"Q0":"assets/img/beOnMAX.jpg","jm":"assets/img/rs-schoolstage0.jpg","mC":"assets/img/udemy.jpg"}'),t=function(e,t){switch(t){case"block":e.style.display="block";break;case"none":e.style.display="none"}},s=(e,t)=>{e.style.pointerEvents="none",setTimeout((()=>e.style.pointerEvents="auto"),t)};function c(e){e.forEach(((e,t)=>{0!==t&&3!==t||e.classList.toggle("hamburger__el_close"),1===t&&e.classList.toggle("hamburger__middle_close"),2===t&&e.classList.toggle("hamburger__visible_close")}))}function o(){const e=document.querySelector(".aside"),t=e.querySelector(".overlay_aside"),s=document.querySelector(".aside__menu"),c=document.querySelector("body");e.classList.toggle("aside_open"),s.classList.toggle("aside__menu_open"),t.classList.toggle("overlay_open"),c.classList.toggle("overflowy_hidden")}(()=>{const c=document.querySelectorAll(".certificate-button"),o=document.querySelector(".modal-certificate"),l=o.querySelector(".overlay_certificate"),a=o.querySelector(".close");c.forEach((c=>{let a=null;switch(c.getAttribute("data-course")){case"beonmax":a=e.Q0;break;case"rsstage0":a=e.jm;break;case"udemy":a=e.mC}c.addEventListener("click",(()=>{s(c,500),t(o,"block"),function(e){document.querySelector(".сertificate").innerHTML=`<img class="certificate-img" src=${e} alt="beOnMAX" />`}(a),setTimeout((()=>l.classList.toggle("overlay_open")),50)}))})),a.addEventListener("click",(e=>{s(a,1e3),l.classList.toggle("overlay_open"),setTimeout((()=>t(o,"none")),500)})),l.addEventListener("click",(e=>{e.target.classList.contains("overlay_certificate")&&(s(l,500),l.classList.toggle("overlay_open"),setTimeout((()=>t(o,"none")),500))}))})(),(()=>{const e=document.querySelector(".hamburger"),t=e.querySelectorAll("span"),l=document.querySelector(".overlay_aside"),a=document.querySelector(".aside__menu-list");e.addEventListener("click",(()=>{s(e,400),c(t),o()})),a.addEventListener("click",(e=>{e.target.classList.contains("menu__link")&&(s(e.target,400),c(t),o())})),l.addEventListener("click",(e=>{e.target.classList.contains("overlay")&&(s(l,400),c(t),o())}))})()}();