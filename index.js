(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelectorAll(".btn-catalog").forEach(o=>{o.addEventListener("click",()=>{document.querySelector(".catalog-item:nth-child(5)").classList.toggle("show-more")})});document.querySelectorAll(".btn-catalog").forEach(o=>{o.addEventListener("click",()=>{document.querySelector(".catalog-item:nth-child(6)").classList.toggle("show-more")})});let s=document.querySelector(".btn-catalog");s.addEventListener("click",()=>{s.innerText=="Show more"?s.innerText="Show less":s.innerText="Show more"});document.querySelectorAll(".js-mobile-menu").forEach(o=>{o.addEventListener("click",()=>{document.querySelector(".mobile-menu").classList.toggle("is-open")})});window.onload=function(){window.scrollTo(0,0)};document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("scrollToTop");window.addEventListener("scroll",function(){window.scrollY>document.documentElement.scrollHeight/5?o.classList.add("show"):o.classList.remove("show")}),o.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})});function i(){const r=window.scrollY,l=performance.now();function c(e){const t=e-l,n=Math.min(t/300,1);window.scrollTo(0,r*(1-n)),n<1&&requestAnimationFrame(c)}requestAnimationFrame(c)}document.getElementById("scrollToTop").addEventListener("click",i);
//# sourceMappingURL=index.js.map
