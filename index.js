/* empty css                      */import{S as g,N as c,a as b}from"./assets/vendor-AqeyZ-Vj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L="46036688-33de53886d5db16dc3a765a31",v=document.querySelector("#search-form"),$=document.querySelector("#input"),u=document.querySelector(".gallery"),l=document.querySelector(".load-more");let s=1;const p=40;let d=0,f="",m;document.addEventListener("DOMContentLoaded",()=>{m=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})});function w(i,r){return`https://pixabay.com/api/?key=${L}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${p}&page=${r}`}function z(i){i.forEach(({webformatURL:r,largeImageURL:n,tags:o,likes:e,views:t,comments:a,downloads:h})=>{u.insertAdjacentHTML("beforeend",`
      <div class="photo-card">
        <a href="${n}">
        <img src="${r}" alt="${o}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes: ${e}</b></p>
          <p class="info-item"><b>Views: ${t}</b></p>
          <p class="info-item"><b>Comments: ${a}</b></p>
          <p class="info-item"><b>Downloads: ${h}</b></p>
        </div>
      </div>
    `)}),m.refresh()}async function y(i,r,n=!1){await b.get(w(i,r)).then(o=>{const e=o.data.hits,t=o.data.totalHits;if(d=Math.ceil(t/p),n&&(u.innerHTML=""),e.length===0){c.Notify.failure("Przepraszamy, nie znaleziono wyników"),l.classList.add("hidden");return}z(e),r<d?l.classList.remove("hidden"):(l.classList.add("hidden"),c.Notify.info("We're sorry, but you've reached the end of search results."))}).catch(o=>{c.Notify.failure("Błąd ładowania zdjęć"),console.error(o)})}v.addEventListener("submit",i=>{i.preventDefault();const r=$.value.trim();if(!r){c.Notify.failure("Proszę wpisać frazę do wyszukania");return}f=r,s=1,y(f,s,!0)});l.addEventListener("click",()=>{s<d&&(s+=1,y(f,s,!1))});
//# sourceMappingURL=index.js.map
