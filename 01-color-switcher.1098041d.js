const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let d;e.setAttribute("disabled",!1),t.addEventListener("click",(()=>{e.removeAttribute("disabled"),t.setAttribute("disabled",!1),d=setInterval((function(){r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),e.setAttribute("disabled",!1),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.1098041d.js.map