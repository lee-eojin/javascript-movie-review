(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();const f="https://api.themoviedb.org/3",S="53582fed17d630068894f05310efec62";class h extends Error{constructor(t,s){super(s),this.status=t,this.name="ApiError"}}class y extends h{constructor(){super(401,"인증에 실패했습니다."),this.name="UnauthorizedError"}}class b extends h{constructor(){super(404,"요청한 리소스를 찾을 수 없습니다."),this.name="NotFoundError"}}async function g(e,t,s=""){const a=new URLSearchParams({api_key:S,language:"ko-KR",page:String(t),...s&&{query:s}}),r=await fetch(`${f}/${e}?${a}`);if(!r.ok)throw r.status===401?new y:r.status===404?new b:new h(r.status,`API 요청 실패: ${r.status}`);return await r.json()}const O="movie/popular",w="search/movie";async function p(e,t){return t?await g(w,e,t):await g(O,e,t)}async function R(e,t){return await p(e,t)}async function C(e){return await p(e)}async function M(e,t){return await p(e,t)}class x{listeners=new Map;subscribe(t,s){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(s)}publish(t,s){this.listeners.get(t)?.forEach(a=>a(s))}}const n=new x,o={LOAD_START:"loadStart",MOVIES_LOADED:"moviesLoaded",SEARCH_LOADED:"searchLoaded",MORE_LOADED:"moreLoaded",TITLE_CHANGED:"titleChanged",LOGO_CLICK:"logoClick",ERROR:"error"},i={page:1,searchQuery:""};async function T(){await m(i.page)}async function U(){i.page=1,i.searchQuery="",await m(i.page)}async function m(e){n.publish(o.TITLE_CHANGED,"지금 인기 있는 영화"),n.publish(o.LOAD_START,void 0);try{const t=await C(e);n.publish(o.MOVIES_LOADED,t)}catch(t){n.publish(o.ERROR,t.message)}}async function V(e,t){n.publish(o.TITLE_CHANGED,`"${t}" 검색 결과`),n.publish(o.LOAD_START,void 0);try{const s=await M(e,t);n.publish(o.SEARCH_LOADED,s)}catch(s){n.publish(o.ERROR,s.message)}}async function D(e,t){try{const s=await R(e,t);n.publish(o.MORE_LOADED,s)}catch(s){n.publish(o.ERROR,s.message)}}async function Y(e){if(i.page=1,i.searchQuery=e,e===""){await m(i.page);return}await V(i.page,e)}async function N(){i.page+=1,await D(i.page,i.searchQuery)}const E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ4SURBVHgB7VlNctMwFP7UwrRl0/YGzgloNwyURd0TQE5AeoK2J2hyAuAEaU9QOEHMgvCzSW9QcwLChqbDNOI9RVEk106sWGZY5JvR+FlRJD29fxlYYYX/F/I79uQXxKgRAjWANh3Ro0ct0l0ptSPxQj2DYg31oIvZ5qHpLmpAcAno07+ZdWBIq+zoN5ZCgoCoQwLnhhK4oBUS8y7xGoFRhwT49CP9eqSfPb3aEBtoiH16BkJQCdDmW7AMl9VFq0w6GUCqdKvGBENoFXpj0R2LvjSUwCsERDAGtPHGVldiqBHeWf0xxwcEQkgJOMZr+3xxpHQ+Mb//CWfMIRmIDSUtlZlhplLrOJED41orIQgDecabHaP6pPY+E2OOEQChJFBkvC4E3lv0CQIgNw4o8Y6UiCNicQdjanxqQrVtQ0s9xk0bGkU5j+zR+E38tFa/1pF6aD1/GXrqfteJfkySzYkfImfjV8CS4mXjfY7jeUNkn+YXSxvxBR3Amc3II+fnEd4CS+tmQlH2bOGoO2JwC8umFS3aI8MckiuBPol3lnilqs3EyfjxQORjak/yxTsPStq/tYraKikMvY2pak769/SOhyTl3ek8j+aswb68g5qgGb4uM1Z+oxgzzg9+rheyvQTQll9xFcpfLwNeW9nMGG2r+4M9xmWAQ760BrCejjDQacI/hVqT1nYMXtDeMnYmCv7chp0asC2soymelRN5VcjPpC5ryhtGpnOMjnjpSEIhN5CR7reJNZvTCPckiT5OUTNIbU9oVwPYm5fkOnM2z5hb0OSeBNlGXcatjbVtdaX03qTNF0p+YUWWc8Mw1cXjUJWVchS3VPS7+s5RurnoJqNUSalSgI3MAnw6m9ivyoSO/lmVuaRgd1pm7lLJHOfz4gBNuIlaFKQ8HKlDicw7G+sBWmUPxisbVcYtrVixhqeojtiiO0XGWgT/dFqoED+BpNSiOlJrPu+g6c+AdEJ6gupIDLVEwe91L5S9dSOVqnyvpB3EjUkiN7Hr4xj8JBD+9CcFv7D8/MgvzfZjwBXxp0XDPa7XZ3NJvysXXxuILTopGsSbppRgwOkHvfb4unFBQpgYytMOSuuwo/+ZosKM4aB0R+mALMiZJGW7lLLnRddMMdUo+y3BRwKxtZEHuYlSFY6o9ualrtymEOq3nr6GcSGcOWOUhA8Dh5ht7KMhSTLUOFdy8yVWC4F91eBcdPGYLv2n66iVNSf95xAlsZwE9Gmp1FcqPY+tjQxpVk7C1Ccl3VqYFOKpNR/39UyKbktAlpeAjw1I65Xv/c+RFTWnGVuUbhf4cX3ibbgXYYxUzSlVBeZlBz4M9FCsmym147Kfj9Tt9P2DOiOLUgz4qFCnsJ/Tao9vX1ya0vjGnDnTsl7IL5XoU5Sc3GlGyhNR2Vn106lSK6lu66YBLEVNn2RrBZevqoRdYYUVvPAXJrOCc9SFL6sAAAAASUVORK5CYII=",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAUCAYAAACtZULwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUdSURBVHgB7VrhcRsrEP6cyX+rBFyBlQpMKrBeBZYreHYFUip4cgVSKkhSgXgVRKlApAKrAx77AA+3t3CcpHGcmXwzjO5gF5Zd2GU5XTjnlgDsxcXFxj9r/0xl5csDulh5mgOrQ+Qfgsj72vCyOl7n5brAifDdKv+zZ9Ub3/V9ZWzS+RVeEy7g2ZetL/v4rlwfWuCdujYovAFIguEMKOhrPTD2HmdElEHnhdO8z56VL5NKf1NfjFD3B28DS1/usnfrS8dzJGPvvEv56IJLXhQ6uxbqfjdjf8KvAx/71cNaMraKhr6p0GqhrkZfhR+PvIhC36NYXw5+8e0E+o7n8TS20rdEu0G7bNMoW8Ihlt2R548Nez8UxlWQvaxFXS+XQn+qM54rxFgX4jjHhHXWi0Ol/jIeivNbN4y9L4uM70GgmUOAr18LtBPXl2/P+HSjbN99meVKFWh4zN6z9m1usCjzc8PYe9fVy9y1Yfsu8hgE//6UyWcFPU5zxQjtO1TggtFpkhrDINplphQj0JQ8i2bvZmg3urBwWmUjPXzJDX4iaGHMUT8zJSgEvTxgJJKxk/vIXcG/Av208FzjybFG24Ry0G6bRffFDdZTtqfl7pfwGcNYYDz+wYlwwVses2j+xkgkY5OCaFXPszZpl14XnhMsCoi7WgtN5E3uY3ks9HEbf7+x+onrp3Va4DeoIHopxaqtLx8RPB6VD+jLptzpaaW0aWw2bhqb20PF3wPKerdZeYnZFINoB23iO01CyqFfYlzkyfHs5NiV+tNC/VcuXaGPfWyT4tMD49+y9u9Z235Ev0tBtqVAN3cnxGwn62UrjL0R6NTQ3HK8Z6vgOb2Q2/QMtGpyt0uTmsT4x1dkNV6jv3NEHjo1u/5dR5KBFseatWmEG7/kEjVrb3HhSqi79f3dNNCdCklvOhqL2n4geKZlLC8oZSMlJGOT4fYFQTSrmzr54ukHzgeLrmL/NzYtMj+2YTLlBtFCXwbHofUOQeEExDnRgrwT+qVC8TydJ8geFPbMWEMTUsy2CEm/Ye2SAaeQFWFQx9iDWQn8EEhxO8lzy9osz0vfIryMcwT92wFSmid5tq2Ts6Eq0s4mpSxjnNJZe+mQJhnOoo4DzgOD/slZQ/ZCBqeNYxvozrKYSP8IKZVGmAd5LDKupGuFkPpdjbngScZOMYJ3bAQeLdQdYoxXGIfSble8//TgxzHCWeI2unfO1xKvO/1n+ObHWqEB7oQTeeRVrHoVjZ9SSSoL9EMbufgNGpGMnY7vCpkS42Gpd0gT+mlZ3RJN71LEyRcVnNegm5uSMjSjoQVo0IZDQbYVk+0L+jnxX5DnNvP0PxHiq0EZS/Tj9VWSKYahtJG4R6uFRhUzgp+pouVDiOQeOVoOZxZhArmA0+hRbHxPd9JD/VPczpVOfAuBphVGqJsxZV1CvvxId+YcuUwGZVihbu3H5vLfQR47geykWPu88xZzst737Kx95YYxi7TFPDu2L91xUExm1cAzZxOv5qKu7U7cVfhL99rLwti1PLsVOht/ULfvMl0oyG7hWBctYYXxB5pPPM2I73aA7yvG4R5tB7Icj9nzE45AdPHH8H5m4YF0a2sM5MaJgdz4owu7gdxF7h4M6m7owIwh0ab4Q78f4jiUJikUPnEiuOFNJXV6Qj/VSih9htyhq5CX53g+oWtJ8lJ3mWxokS1mM9R+w/hsYeycl77opXB5DXnjpXBhaHz6G1neGOd75YKXpX4umRz4Dz1my31xwGpxAAAAAElFTkSuQmCC",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALZJREFUeAGtkQENwzAMBK0hCIMFQiAUwiAUQhm0TDoGgVAIg5Ax6Bhk3vaVflUcRVVfekWK7XPsiJypnLNTj+qUf1rVUR1aigMKLI21Yk9dF3VH9xNBBgswIyEa8WEbyQI8kGDOSi8MpeBXUpGG70jr+f6C84UkV2FccT5L9AX0ScrdPS3SlRI6a9P43oTYLJZ23/UpiPQyvvc1SE/dNq2ApyYIjXSDHe2hHWKA/yByRAQ5BtjrDXDaZj4YxEyHAAAAAElFTkSuQmCC",G="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/",j="https://media.themoviedb.org/t/p/w200",A={clearHeader(){const e=document.querySelector(".background-container");e.innerHTML="",e.style.background="none",e.style.height="100px"},render(e){if(!e)return;const t=document.querySelector(".background-container");t.innerHTML=`
            <div class="top-rated-movie">
                <div class="rate">
                  <img src="${E}" class="star" />
                  <span class="rate-value">${(e.vote_average??0).toFixed(1)}</span>
                </div>
                <div class="title">${e.title}</div>
                <button class="primary detail">자세히 보기</button>
            </div>
            ${this.renderImage()}
      `,t.style.background=`url(${G}${e.backdrop_path}) no-repeat center center / cover`,t.style.removeProperty("height")},renderSearch(){const e=document.querySelector(".background-container");e.innerHTML=`${this.renderImage()}`},renderImage(){return`<div class="overlay" aria-hidden="true">
                <div class="search-container">
                <h1 class="logo">
                    <img src="${I}" alt="MovieList" />
                </h1>
                <form class="search-form">
                    <input
                    type="search"
                    class="search-input"
                    placeholder="검색어를 입력하세요"
                    />
                    <button type="submit" class="btn-submit">
                        <img
                            src="${Q}"
                            alt="search"
                            class="img-search"
                        />
                     </button>
                 </form>
                </div>
            </div>`}};class B{movie;constructor(t){this.movie=t}render(){return`<div class="item">
      <img
         class="thumbnail"
         src="${j}${this.movie.poster_path}"
         alt="${this.movie.title}"
        />
        <div class="item-desc">
          <p class="rate">
            <img src="${E}" class="star" />
            <span>${(this.movie.vote_average??0).toFixed(1)}</span>
          </p>
          <strong>${this.movie.title}</strong>
        </div>
      </div>
    `}}class H{render(){return`<div class="movie-skeleton">
      <div class="movie-skeleton__poster"></div>
      <div class="movie-skeleton__details">
       <div class="movie-skeleton__title"></div>
       <div class="movie-skeleton__info"></div>
      </div>
    </div>
    `}}const P="/javascript-movie-review/assets/Nosearch-9C2OvmM-.png";class F{movieList;movieContainer;constructor(){this.movieList=document.querySelector(".thumbnail-list"),this.movieContainer=document.querySelector(".main-result")}showEmpty(){this.movieContainer.innerHTML=`
      <div class="result-none">
        <img src="${P}" alt="검색 결과 없음" class="result-none-image" />
        <p class="result-none-text">검색 결과가 없습니다.</p>
      </div>
    `}showError(t){this.movieContainer.innerHTML=`
      <div class="result-none">
        <p class="result-none-text">${t}</p>
      </div>
    `}clearList(){this.movieList.innerHTML="",this.movieContainer.innerHTML=""}renderSkeleton(){this.clearList();const t=new H().render();for(let s=0;s<20;s++){const a=document.createElement("li");a.innerHTML=t,this.movieList?.append(a)}}renderMovieList(t){t.results.forEach(s=>{const a=document.createElement("li"),r=new B(s);a.innerHTML=r.render(),this.movieList?.append(a)})}}const l=new F;function d(e,t,s){e.style.display=t===s?"none":"block"}function v(){const e=document.querySelector(".logo");e&&e.addEventListener("click",()=>{n.publish(o.LOGO_CLICK,void 0)},{once:!0})}function k(e,t){n.subscribe(o.LOGO_CLICK,U),n.subscribe(o.TITLE_CHANGED,s=>{t.textContent=s}),n.subscribe(o.LOAD_START,()=>{l.renderSkeleton()}),n.subscribe(o.MOVIES_LOADED,s=>{A.clearHeader(),A.render(s.results[0]??null),v(),l.clearList(),l.renderMovieList(s),d(e,s.total_pages,i.page)}),n.subscribe(o.SEARCH_LOADED,s=>{A.clearHeader(),A.renderSearch(),v(),s.results.length===0?(l.clearList(),l.showEmpty()):(l.clearList(),l.renderMovieList(s)),d(e,s.total_pages,i.page)}),n.subscribe(o.MORE_LOADED,s=>{l.renderMovieList(s),d(e,s.total_pages,i.page)}),n.subscribe(o.ERROR,s=>{l.clearList(),l.showError(s)})}const L=document.querySelector(".btn-more"),X=document.querySelector(".main-title");k(L,X);addEventListener("load",async()=>{await T()});const Z=document.querySelector(".background-container");Z.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".search-input");await Y(t.value.trim())});L.addEventListener("click",async()=>{await N()});
