const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]"),l=()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`};let o=null;t.addEventListener("click",(()=>{t.disabled=!0,d.disabled=!1,o=setInterval(l,1e3)})),d.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1,d.disabled=!0,console.log(`Interval with id ${o} has stopped!`)})),d.disabled=!0;
//# sourceMappingURL=01-color-switcher.4614b99a.js.map