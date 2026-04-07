(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const L="https://api.themoviedb.org/3",f="53582fed17d630068894f05310efec62";async function m(e,t,r=""){const c=new URLSearchParams({api_key:f,language:"ko-KR",page:String(t),...r&&{query:r}}),s=await fetch(`${L}/${e}?${c}`);if(!s.ok)throw new Error(`API 요청 실패: ${s.status}`);return await s.json()}const S="movie/popular",y="search/movie";async function h(e,t){return t?await m(y,e,t):await m(S,e,t)}async function w(e,t){try{return await h(e,t)}catch{throw new Error("영화 데이터를 불러오는 중 오류가 발생했습니다.")}}async function b(e){try{return await h(e)}catch{throw new Error("영화 데이터를 불러오는 중 오류가 발생했습니다.")}}async function O(e,t){try{return await h(e,t)}catch{throw new Error("영화 데이터를 불러오는 중 오류가 발생했습니다.")}}class C{listeners=new Map;subscribe(t,r){this.listeners.has(t)||this.listeners.set(t,[]),this.listeners.get(t).push(r)}publish(t,r){this.listeners.get(t)?.forEach(c=>c(r))}}const n=new C,o={LOAD_START:"loadStart",MOVIES_LOADED:"moviesLoaded",SEARCH_LOADED:"searchLoaded",MORE_LOADED:"moreLoaded",TITLE_CHANGED:"titleChanged",LOGO_CLICK:"logoClick"},i={page:1,searchQuery:""};async function M(){await p(i.page)}async function R(){i.page=1,i.searchQuery="",await p(i.page)}async function p(e){n.publish(o.TITLE_CHANGED,"지금 인기 있는 영화"),n.publish(o.LOAD_START,void 0);const t=await b(e);n.publish(o.MOVIES_LOADED,t)}async function x(e,t){n.publish(o.TITLE_CHANGED,`"${t}" 검색 결과`),n.publish(o.LOAD_START,void 0);const r=await O(e,t);n.publish(o.SEARCH_LOADED,r)}async function V(e,t){const r=await w(e,t);n.publish(o.MORE_LOADED,r)}async function D(e){if(i.page=1,i.searchQuery=e,e===""){await p(i.page);return}await x(i.page,e)}async function T(){i.page+=1,await V(i.page,i.searchQuery)}const v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ4SURBVHgB7VlNctMwFP7UwrRl0/YGzgloNwyURd0TQE5AeoK2J2hyAuAEaU9QOEHMgvCzSW9QcwLChqbDNOI9RVEk106sWGZY5JvR+FlRJD29fxlYYYX/F/I79uQXxKgRAjWANh3Ro0ct0l0ptSPxQj2DYg31oIvZ5qHpLmpAcAno07+ZdWBIq+zoN5ZCgoCoQwLnhhK4oBUS8y7xGoFRhwT49CP9eqSfPb3aEBtoiH16BkJQCdDmW7AMl9VFq0w6GUCqdKvGBENoFXpj0R2LvjSUwCsERDAGtPHGVldiqBHeWf0xxwcEQkgJOMZr+3xxpHQ+Mb//CWfMIRmIDSUtlZlhplLrOJED41orIQgDecabHaP6pPY+E2OOEQChJFBkvC4E3lv0CQIgNw4o8Y6UiCNicQdjanxqQrVtQ0s9xk0bGkU5j+zR+E38tFa/1pF6aD1/GXrqfteJfkySzYkfImfjV8CS4mXjfY7jeUNkn+YXSxvxBR3Amc3II+fnEd4CS+tmQlH2bOGoO2JwC8umFS3aI8MckiuBPol3lnilqs3EyfjxQORjak/yxTsPStq/tYraKikMvY2pak769/SOhyTl3ek8j+aswb68g5qgGb4uM1Z+oxgzzg9+rheyvQTQll9xFcpfLwNeW9nMGG2r+4M9xmWAQ760BrCejjDQacI/hVqT1nYMXtDeMnYmCv7chp0asC2soymelRN5VcjPpC5ryhtGpnOMjnjpSEIhN5CR7reJNZvTCPckiT5OUTNIbU9oVwPYm5fkOnM2z5hb0OSeBNlGXcatjbVtdaX03qTNF0p+YUWWc8Mw1cXjUJWVchS3VPS7+s5RurnoJqNUSalSgI3MAnw6m9ivyoSO/lmVuaRgd1pm7lLJHOfz4gBNuIlaFKQ8HKlDicw7G+sBWmUPxisbVcYtrVixhqeojtiiO0XGWgT/dFqoED+BpNSiOlJrPu+g6c+AdEJ6gupIDLVEwe91L5S9dSOVqnyvpB3EjUkiN7Hr4xj8JBD+9CcFv7D8/MgvzfZjwBXxp0XDPa7XZ3NJvysXXxuILTopGsSbppRgwOkHvfb4unFBQpgYytMOSuuwo/+ZosKM4aB0R+mALMiZJGW7lLLnRddMMdUo+y3BRwKxtZEHuYlSFY6o9ualrtymEOq3nr6GcSGcOWOUhA8Dh5ht7KMhSTLUOFdy8yVWC4F91eBcdPGYLv2n66iVNSf95xAlsZwE9Gmp1FcqPY+tjQxpVk7C1Ccl3VqYFOKpNR/39UyKbktAlpeAjw1I65Xv/c+RFTWnGVuUbhf4cX3ibbgXYYxUzSlVBeZlBz4M9FCsmym147Kfj9Tt9P2DOiOLUgz4qFCnsJ/Tao9vX1ya0vjGnDnTsl7IL5XoU5Sc3GlGyhNR2Vn106lSK6lu66YBLEVNn2RrBZevqoRdYYUVvPAXJrOCc9SFL6sAAAAASUVORK5CYII=",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAUCAYAAACtZULwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUdSURBVHgB7VrhcRsrEP6cyX+rBFyBlQpMKrBeBZYreHYFUip4cgVSKkhSgXgVRKlApAKrAx77AA+3t3CcpHGcmXwzjO5gF5Zd2GU5XTjnlgDsxcXFxj9r/0xl5csDulh5mgOrQ+Qfgsj72vCyOl7n5brAifDdKv+zZ9Ub3/V9ZWzS+RVeEy7g2ZetL/v4rlwfWuCdujYovAFIguEMKOhrPTD2HmdElEHnhdO8z56VL5NKf1NfjFD3B28DS1/usnfrS8dzJGPvvEv56IJLXhQ6uxbqfjdjf8KvAx/71cNaMraKhr6p0GqhrkZfhR+PvIhC36NYXw5+8e0E+o7n8TS20rdEu0G7bNMoW8Ihlt2R548Nez8UxlWQvaxFXS+XQn+qM54rxFgX4jjHhHXWi0Ol/jIeivNbN4y9L4uM70GgmUOAr18LtBPXl2/P+HSjbN99meVKFWh4zN6z9m1usCjzc8PYe9fVy9y1Yfsu8hgE//6UyWcFPU5zxQjtO1TggtFpkhrDINplphQj0JQ8i2bvZmg3urBwWmUjPXzJDX4iaGHMUT8zJSgEvTxgJJKxk/vIXcG/Av208FzjybFG24Ry0G6bRffFDdZTtqfl7pfwGcNYYDz+wYlwwVses2j+xkgkY5OCaFXPszZpl14XnhMsCoi7WgtN5E3uY3ks9HEbf7+x+onrp3Va4DeoIHopxaqtLx8RPB6VD+jLptzpaaW0aWw2bhqb20PF3wPKerdZeYnZFINoB23iO01CyqFfYlzkyfHs5NiV+tNC/VcuXaGPfWyT4tMD49+y9u9Z235Ev0tBtqVAN3cnxGwn62UrjL0R6NTQ3HK8Z6vgOb2Q2/QMtGpyt0uTmsT4x1dkNV6jv3NEHjo1u/5dR5KBFseatWmEG7/kEjVrb3HhSqi79f3dNNCdCklvOhqL2n4geKZlLC8oZSMlJGOT4fYFQTSrmzr54ukHzgeLrmL/NzYtMj+2YTLlBtFCXwbHofUOQeEExDnRgrwT+qVC8TydJ8geFPbMWEMTUsy2CEm/Ye2SAaeQFWFQx9iDWQn8EEhxO8lzy9osz0vfIryMcwT92wFSmid5tq2Ts6Eq0s4mpSxjnNJZe+mQJhnOoo4DzgOD/slZQ/ZCBqeNYxvozrKYSP8IKZVGmAd5LDKupGuFkPpdjbngScZOMYJ3bAQeLdQdYoxXGIfSble8//TgxzHCWeI2unfO1xKvO/1n+ObHWqEB7oQTeeRVrHoVjZ9SSSoL9EMbufgNGpGMnY7vCpkS42Gpd0gT+mlZ3RJN71LEyRcVnNegm5uSMjSjoQVo0IZDQbYVk+0L+jnxX5DnNvP0PxHiq0EZS/Tj9VWSKYahtJG4R6uFRhUzgp+pouVDiOQeOVoOZxZhArmA0+hRbHxPd9JD/VPczpVOfAuBphVGqJsxZV1CvvxId+YcuUwGZVihbu3H5vLfQR47geykWPu88xZzst737Kx95YYxi7TFPDu2L91xUExm1cAzZxOv5qKu7U7cVfhL99rLwti1PLsVOht/ULfvMl0oyG7hWBctYYXxB5pPPM2I73aA7yvG4R5tB7Icj9nzE45AdPHH8H5m4YF0a2sM5MaJgdz4owu7gdxF7h4M6m7owIwh0ab4Q78f4jiUJikUPnEiuOFNJXV6Qj/VSih9htyhq5CX53g+oWtJ8lJ3mWxokS1mM9R+w/hsYeycl77opXB5DXnjpXBhaHz6G1neGOd75YKXpX4umRz4Dz1my31xwGpxAAAAAElFTkSuQmCC",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALZJREFUeAGtkQENwzAMBK0hCIMFQiAUwiAUQhm0TDoGgVAIg5Ax6Bhk3vaVflUcRVVfekWK7XPsiJypnLNTj+qUf1rVUR1aigMKLI21Yk9dF3VH9xNBBgswIyEa8WEbyQI8kGDOSi8MpeBXUpGG70jr+f6C84UkV2FccT5L9AX0ScrdPS3SlRI6a9P43oTYLJZ23/UpiPQyvvc1SE/dNq2ApyYIjXSDHe2hHWKA/yByRAQ5BtjrDXDaZj4YxEyHAAAAAElFTkSuQmCC",I="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/",N="https://media.themoviedb.org/t/p/w200",A={clearHeader(){const e=document.querySelector(".background-container");e.innerHTML="",e.style.background="none",e.style.height="100px"},render(e){if(!e)return;const t=document.querySelector(".background-container");t.innerHTML=`
            <div class="top-rated-movie">
                <div class="rate">
                  <img src="${v}" class="star" />
                  <span class="rate-value">${e.vote_average.toFixed(1)}</span>
                </div>
                <div class="title">${e.title}</div>
                <button class="primary detail">자세히 보기</button>
            </div>
            ${this.renderImage()}
      `,t.style.background=`url(${I}${e.backdrop_path}) no-repeat center center / cover`,t.style.removeProperty("height")},renderSearch(){const e=document.querySelector(".background-container");e.innerHTML=`${this.renderImage()}`},renderImage(){return`<div class="overlay" aria-hidden="true">
                <div class="search-container">
                <h1 class="logo">
                    <img src="${Y}" alt="MovieList" />
                </h1>
                <form class="search-form">
                    <input
                    type="search"
                    class="search-input"
                    placeholder="검색어를 입력하세요"
                    />
                    <button type="submit" class="btn-submit">
                        <img
                            src="${U}"
                            alt="search"
                            class="img-search"
                        />
                     </button>
                 </form>
                </div>
            </div>`}};class Q{movie;constructor(t){this.movie=t}render(){return`<div class="item">
      <img
         class="thumbnail"
         src="${N}${this.movie.poster_path}"
         alt="${this.movie.title}"
        />
        <div class="item-desc">
          <p class="rate">
            <img src="${v}" class="star" />
            <span>${this.movie.vote_average.toFixed(1)}</span>
          </p>
          <strong>${this.movie.title}</strong>
        </div>
      </div>
    `}}class G{render(){return`<div class="movie-skeleton">
      <div class="movie-skeleton__poster"></div>
      <div class="movie-skeleton__details">
       <div class="movie-skeleton__title"></div>
       <div class="movie-skeleton__info"></div>
      </div>
    </div>
    `}}const j="/javascript-movie-review/assets/Nosearch-9C2OvmM-.png";class B{movieList;movieContainer;constructor(){this.movieList=document.querySelector(".thumbnail-list"),this.movieContainer=document.querySelector(".main-result")}showEmpty(){this.movieContainer.innerHTML=`
      <div class="result-none">
        <img src="${j}" alt="검색 결과 없음" class="result-none-image" />
        <p class="result-none-text">검색 결과가 없습니다.</p>
      </div>
    `}clearList(){this.movieList.innerHTML="",this.movieContainer.innerHTML=""}renderSkeleton(){this.clearList();for(let t=0;t<20;t++){const r=document.createElement("li"),c=new G;r.innerHTML=c.render(),this.movieList?.append(r)}}renderMovieList(t){t.results.forEach(r=>{const c=document.createElement("li"),s=new Q(r);c.innerHTML=s.render(),this.movieList?.append(c)})}}const l=new B;function u(e,t,r){e.style.display=t===r?"none":"block"}function g(){const e=document.querySelector(".logo");e&&e.addEventListener("click",()=>{n.publish(o.LOGO_CLICK,void 0)},{once:!0})}function H(e,t){n.subscribe(o.LOGO_CLICK,R),n.subscribe(o.TITLE_CHANGED,r=>{t.textContent=r}),n.subscribe(o.LOAD_START,()=>{l.renderSkeleton()}),n.subscribe(o.MOVIES_LOADED,r=>{A.clearHeader(),A.render(r.results[0]??null),g(),l.clearList(),l.renderMovieList(r),u(e,r.total_pages,i.page)}),n.subscribe(o.SEARCH_LOADED,r=>{A.clearHeader(),A.renderSearch(),g(),r.results.length===0?(l.clearList(),l.showEmpty()):(l.clearList(),l.renderMovieList(r)),u(e,r.total_pages,i.page)}),n.subscribe(o.MORE_LOADED,r=>{l.renderMovieList(r),u(e,r.total_pages,i.page)})}const E=document.querySelector(".btn-more"),P=document.querySelector(".main-title");H(E,P);addEventListener("load",async()=>{await M()});const k=document.querySelector(".background-container");k.addEventListener("submit",async e=>{e.preventDefault();const t=document.querySelector(".search-input");await D(t.value.trim())});E.addEventListener("click",async()=>{await T()});
