(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelectorAll(".btn-catalog").forEach(r=>{r.addEventListener("click",()=>{document.querySelector(".catalog-item:nth-child(5)").classList.toggle("show-more")})});document.querySelectorAll(".btn-catalog").forEach(r=>{r.addEventListener("click",()=>{document.querySelector(".catalog-item:nth-child(6)").classList.toggle("show-more")})});let o=document.querySelector(".btn-catalog");o.addEventListener("click",()=>{o.innerText=="Show more"?o.innerText="Show less":o.innerText="Show more"});document.querySelectorAll(".js-mobile-menu").forEach(r=>{r.addEventListener("click",()=>{document.querySelector(".mobile-menu").classList.toggle("is-open")})});
//# sourceMappingURL=index.js.map
