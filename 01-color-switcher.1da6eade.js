!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=document.body;e.addEventListener("click",(function(){t=setInterval((function(){e.disabled=!0,a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.1da6eade.js.map
