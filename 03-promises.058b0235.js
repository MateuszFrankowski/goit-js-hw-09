!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector("button"),u=document.querySelector("form"),a=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]'),d=function(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){t?o({position:e,delay:n}):i({position:e,delay:n})}),delayFromEachOther)}))};u.addEventListener("submit",(function(e){e.preventDefault(),r.disabled=!0;var n=parseInt(a.value),t=parseInt(c.value),o=l.value,u=1,f=function(e){return d(u++,e).then((function(e){i.Notify.success("✅ Fulfilled promise ".concat(e.position," in ").concat(e.delay,"ms"))})).catch((function(e){i.Notify.failure("❌ Rejected promise ".concat(e.position," in ").concat(e.delay,"ms"))})).finally((function(){return e+=t,t,u<=o?f(e):r.disabled=!1}))};f(n)}))}();
//# sourceMappingURL=03-promises.058b0235.js.map
