/* empty css                      */import{S as g,t as l,a as b}from"./assets/vendor-C8g4l4s1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const L="46036688-33de53886d5db16dc3a765a31",v=document.querySelector("#search-form"),w=document.querySelector("#input"),f=document.querySelector(".gallery"),a=document.querySelector(".load-more");let c=1;const p=40;let d=0,u="",m;document.addEventListener("DOMContentLoaded",()=>{m=new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})});function z(r,t){return`https://pixabay.com/api/?key=${L}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${p}&page=${t}`}function $(r){r.forEach(({webformatURL:t,largeImageURL:i,tags:n,likes:e,views:o,comments:s,downloads:y})=>{f.insertAdjacentHTML("beforeend",`
      <div class="photo-card">
        <a href="${i}">
          <img src="${t}" alt="${n}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes: ${e}</b></p>
          <p class="info-item"><b>Views: ${o}</b></p>
          <p class="info-item"><b>Comments: ${s}</b></p>
          <p class="info-item"><b>Downloads: ${y}</b></p>
        </div>
      </div>
    `)}),m.refresh()}async function h(r,t,i=!1){try{const n=await b.get(z(r,t)),e=n.data.hits,o=n.data.totalHits;if(d=Math.ceil(o/p),i&&(f.innerHTML=""),e.length===0){l.error("Przepraszamy, nie znaleziono wyników"),a.classList.add("hidden");return}$(e),t<d?a.classList.remove("hidden"):(a.classList.add("hidden"),l.info("We're sorry, but you've reached the end of search results."))}catch(n){l.error("Błąd ładowania zdjęć"),console.error(n)}}v.addEventListener("submit",r=>{r.preventDefault();const t=w.value.trim();if(!t){a.classList.add("hidden"),l.error("Proszę wpisać frazę do wyszukania");return}u=t,c=1,h(u,c,!0)});a.addEventListener("click",async()=>{c<d&&(c+=1,await h(u,c,!1),P())});function P(){const r=document.querySelector(".photo-card");if(!r)console.log("Jeszcze go nie ma");else{const{height:t}=r.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
