(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();class y{listeners=new Map;subscribe(e,s){this.listeners.has(e)||this.listeners.set(e,[]),this.listeners.get(e).push(s)}publish(e,s){this.listeners.get(e)?.forEach(n=>n(s))}}const r=new y,i={TITLE_CHANGED:"titleChanged",LOGO_CLICK:"logoClick",LOAD_START:"loadStart",LOAD_MORE:"loadMore",LAST_PAGE_REACHED:"lastPageReached",MOVIES_LOADED:"moviesLoaded",SEARCH_LOADED:"searchLoaded",MORE_LOADED:"moreLoaded",MOVIE_SELECTED:"movieSelected",MOVIE_DETAIL_LOADED:"movieDetailLoaded",MODAL_CLOSED:"modalClosed",ERROR:"error"},M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ4SURBVHgB7VlNctMwFP7UwrRl0/YGzgloNwyURd0TQE5AeoK2J2hyAuAEaU9QOEHMgvCzSW9QcwLChqbDNOI9RVEk106sWGZY5JvR+FlRJD29fxlYYYX/F/I79uQXxKgRAjWANh3Ro0ct0l0ptSPxQj2DYg31oIvZ5qHpLmpAcAno07+ZdWBIq+zoN5ZCgoCoQwLnhhK4oBUS8y7xGoFRhwT49CP9eqSfPb3aEBtoiH16BkJQCdDmW7AMl9VFq0w6GUCqdKvGBENoFXpj0R2LvjSUwCsERDAGtPHGVldiqBHeWf0xxwcEQkgJOMZr+3xxpHQ+Mb//CWfMIRmIDSUtlZlhplLrOJED41orIQgDecabHaP6pPY+E2OOEQChJFBkvC4E3lv0CQIgNw4o8Y6UiCNicQdjanxqQrVtQ0s9xk0bGkU5j+zR+E38tFa/1pF6aD1/GXrqfteJfkySzYkfImfjV8CS4mXjfY7jeUNkn+YXSxvxBR3Amc3II+fnEd4CS+tmQlH2bOGoO2JwC8umFS3aI8MckiuBPol3lnilqs3EyfjxQORjak/yxTsPStq/tYraKikMvY2pak769/SOhyTl3ek8j+aswb68g5qgGb4uM1Z+oxgzzg9+rheyvQTQll9xFcpfLwNeW9nMGG2r+4M9xmWAQ760BrCejjDQacI/hVqT1nYMXtDeMnYmCv7chp0asC2soymelRN5VcjPpC5ryhtGpnOMjnjpSEIhN5CR7reJNZvTCPckiT5OUTNIbU9oVwPYm5fkOnM2z5hb0OSeBNlGXcatjbVtdaX03qTNF0p+YUWWc8Mw1cXjUJWVchS3VPS7+s5RurnoJqNUSalSgI3MAnw6m9ivyoSO/lmVuaRgd1pm7lLJHOfz4gBNuIlaFKQ8HKlDicw7G+sBWmUPxisbVcYtrVixhqeojtiiO0XGWgT/dFqoED+BpNSiOlJrPu+g6c+AdEJ6gupIDLVEwe91L5S9dSOVqnyvpB3EjUkiN7Hr4xj8JBD+9CcFv7D8/MgvzfZjwBXxp0XDPa7XZ3NJvysXXxuILTopGsSbppRgwOkHvfb4unFBQpgYytMOSuuwo/+ZosKM4aB0R+mALMiZJGW7lLLnRddMMdUo+y3BRwKxtZEHuYlSFY6o9ualrtymEOq3nr6GcSGcOWOUhA8Dh5ht7KMhSTLUOFdy8yVWC4F91eBcdPGYLv2n66iVNSf95xAlsZwE9Gmp1FcqPY+tjQxpVk7C1Ccl3VqYFOKpNR/39UyKbktAlpeAjw1I65Xv/c+RFTWnGVuUbhf4cX3ibbgXYYxUzSlVBeZlBz4M9FCsmym147Kfj9Tt9P2DOiOLUgz4qFCnsJ/Tao9vX1ya0vjGnDnTsl7IL5XoU5Sc3GlGyhNR2Vn106lSK6lu66YBLEVNn2RrBZevqoRdYYUVvPAXJrOCc9SFL6sAAAAASUVORK5CYII=",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAUCAYAAACtZULwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUdSURBVHgB7VrhcRsrEP6cyX+rBFyBlQpMKrBeBZYreHYFUip4cgVSKkhSgXgVRKlApAKrAx77AA+3t3CcpHGcmXwzjO5gF5Zd2GU5XTjnlgDsxcXFxj9r/0xl5csDulh5mgOrQ+Qfgsj72vCyOl7n5brAifDdKv+zZ9Ub3/V9ZWzS+RVeEy7g2ZetL/v4rlwfWuCdujYovAFIguEMKOhrPTD2HmdElEHnhdO8z56VL5NKf1NfjFD3B28DS1/usnfrS8dzJGPvvEv56IJLXhQ6uxbqfjdjf8KvAx/71cNaMraKhr6p0GqhrkZfhR+PvIhC36NYXw5+8e0E+o7n8TS20rdEu0G7bNMoW8Ihlt2R548Nez8UxlWQvaxFXS+XQn+qM54rxFgX4jjHhHXWi0Ol/jIeivNbN4y9L4uM70GgmUOAr18LtBPXl2/P+HSjbN99meVKFWh4zN6z9m1usCjzc8PYe9fVy9y1Yfsu8hgE//6UyWcFPU5zxQjtO1TggtFpkhrDINplphQj0JQ8i2bvZmg3urBwWmUjPXzJDX4iaGHMUT8zJSgEvTxgJJKxk/vIXcG/Av208FzjybFG24Ry0G6bRffFDdZTtqfl7pfwGcNYYDz+wYlwwVses2j+xkgkY5OCaFXPszZpl14XnhMsCoi7WgtN5E3uY3ks9HEbf7+x+onrp3Va4DeoIHopxaqtLx8RPB6VD+jLptzpaaW0aWw2bhqb20PF3wPKerdZeYnZFINoB23iO01CyqFfYlzkyfHs5NiV+tNC/VcuXaGPfWyT4tMD49+y9u9Z235Ev0tBtqVAN3cnxGwn62UrjL0R6NTQ3HK8Z6vgOb2Q2/QMtGpyt0uTmsT4x1dkNV6jv3NEHjo1u/5dR5KBFseatWmEG7/kEjVrb3HhSqi79f3dNNCdCklvOhqL2n4geKZlLC8oZSMlJGOT4fYFQTSrmzr54ukHzgeLrmL/NzYtMj+2YTLlBtFCXwbHofUOQeEExDnRgrwT+qVC8TydJ8geFPbMWEMTUsy2CEm/Ye2SAaeQFWFQx9iDWQn8EEhxO8lzy9osz0vfIryMcwT92wFSmid5tq2Ts6Eq0s4mpSxjnNJZe+mQJhnOoo4DzgOD/slZQ/ZCBqeNYxvozrKYSP8IKZVGmAd5LDKupGuFkPpdjbngScZOMYJ3bAQeLdQdYoxXGIfSble8//TgxzHCWeI2unfO1xKvO/1n+ObHWqEB7oQTeeRVrHoVjZ9SSSoL9EMbufgNGpGMnY7vCpkS42Gpd0gT+mlZ3RJN71LEyRcVnNegm5uSMjSjoQVo0IZDQbYVk+0L+jnxX5DnNvP0PxHiq0EZS/Tj9VWSKYahtJG4R6uFRhUzgp+pouVDiOQeOVoOZxZhArmA0+hRbHxPd9JD/VPczpVOfAuBphVGqJsxZV1CvvxId+YcuUwGZVihbu3H5vLfQR47geykWPu88xZzst737Kx95YYxi7TFPDu2L91xUExm1cAzZxOv5qKu7U7cVfhL99rLwti1PLsVOht/ULfvMl0oyG7hWBctYYXxB5pPPM2I73aA7yvG4R5tB7Icj9nzE45AdPHH8H5m4YF0a2sM5MaJgdz4owu7gdxF7h4M6m7owIwh0ab4Q78f4jiUJikUPnEiuOFNJXV6Qj/VSih9htyhq5CX53g+oWtJ8lJ3mWxokS1mM9R+w/hsYeycl77opXB5DXnjpXBhaHz6G1neGOd75YKXpX4umRz4Dz1my31xwGpxAAAAAElFTkSuQmCC",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAALZJREFUeAGtkQENwzAMBK0hCIMFQiAUwiAUQhm0TDoGgVAIg5Ax6Bhk3vaVflUcRVVfekWK7XPsiJypnLNTj+qUf1rVUR1aigMKLI21Yk9dF3VH9xNBBgswIyEa8WEbyQI8kGDOSi8MpeBXUpGG70jr+f6C84UkV2FccT5L9AX0ScrdPS3SlRI6a9P43oTYLJZ23/UpiPQyvvc1SE/dNq2ApyYIjXSDHe2hHWKA/yByRAQ5BtjrDXDaZj4YxEyHAAAAAElFTkSuQmCC",U="https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/",P="https://media.themoviedb.org/t/p/w200",B="https://image.tmdb.org/t/p/w500",Y=document.querySelector(".main-title"),x=document.querySelector(".scroll-sentinel"),h=document.querySelector(".background-container");function v(){const t=document.querySelector(".logo");t&&t.addEventListener("click",()=>{r.publish(i.LOGO_CLICK,void 0)},{once:!0})}const u={clearHeader(){const t=h;t.innerHTML="",t.style.background="none",t.style.height="100px"},render(t){if(!t)return;const e=h;e.innerHTML=`
            <div class="top-rated-movie">
                <div class="rate">
                  <img src="${M}" class="star" />
                  <span class="rate-value">${(t.vote_average??0).toFixed(1)}</span>
                </div>
                <div class="title">${t.title}</div>
                <button class="primary detail">자세히 보기</button>
            </div>
            ${this.renderImage()}
      `,t.backdrop_path&&(e.style.background=`url(${U}${t.backdrop_path}) no-repeat center center / cover`),e.style.removeProperty("height"),v(),e.querySelector(".detail")?.addEventListener("click",()=>{r.publish(i.MOVIE_SELECTED,t.id)})},renderSearch(){const t=h;t.innerHTML=`${this.renderImage()}`,v()},renderImage(){return`<div class="overlay" aria-hidden="true">
                <div class="search-container">
                <h1 class="logo">
                    <img src="${D}" alt="MovieList" />
                </h1>
                <form class="search-form">
                    <input
                    type="search"
                    class="search-input"
                    placeholder="검색어를 입력하세요"
                    />
                    <button type="submit" class="btn-submit">
                        <img
                            src="${T}"
                            alt="search"
                            class="img-search"
                        />
                     </button>
                 </form>
                </div>
            </div>`}};class N{movie;constructor(e){this.movie=e}render(){const e=this.movie.poster_path?`${P}${this.movie.poster_path}`:"";return`<div class="item" data-id="${this.movie.id}">
      <img
         class="thumbnail"
         src="${e}"
         alt="${this.movie.title}"
         loading="lazy"
        />
        <div class="item-desc">
          <p class="rate">
            <img src="${M}" class="star" />
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
    `}}const V="/javascript-movie-review/assets/Nosearch-9C2OvmM-.png";class Q{movieList;movieContainer;constructor(){this.movieList=document.querySelector(".thumbnail-list"),this.movieContainer=document.querySelector(".main-result"),this.attachClickListener()}attachClickListener(){this.movieList?.addEventListener("click",e=>{const s=e.target.closest("[data-id]");s&&r.publish(i.MOVIE_SELECTED,Number(s.dataset.id))})}showEmpty(){this.movieContainer.innerHTML=`
      <div class="result-none">
        <img src="${V}" alt="검색 결과 없음" class="result-none-image" />
        <p class="result-none-text">검색 결과가 없습니다.</p>
      </div>
    `}showError(e){this.movieContainer.innerHTML=`
      <div class="result-none">
        <p class="result-none-text">${e}</p>
      </div>
    `}clearList(){this.movieList.innerHTML="",this.movieContainer.innerHTML=""}renderSkeleton(){this.clearList();const e=new H().render();for(let s=0;s<20;s++){const n=document.createElement("li");n.innerHTML=e,this.movieList?.append(n)}}renderMovieList(e){e.results.forEach(s=>{const n=document.createElement("li"),a=new N(s);n.innerHTML=a.render(),this.movieList?.append(n)})}}const l=new Q;class G{constructor(e){this.sentinel=e,this.observer=new IntersectionObserver(this.onIntersect.bind(this))}observer;onIntersect(e){e[0].isIntersecting&&r.publish(i.LOAD_MORE,void 0)}observe(){this.observer.observe(this.sentinel)}disconnect(){this.observer.disconnect()}}const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFcSURBVHgBndVRToMwGAfw7+uyPXOEeQM9gezRGOcNBjzqNHEn8AhiIizxpYDxeZHps7uBu4EcwefpWlsYZsNSyv7JlrS0v0D7FQA2eXx+O5Q/2COUzqzp09wu2yj/wiS94xxu8g4E/3I0nJiCYfzqMGC+gCzRzAjrDjCg4u7I+mNnJEI0Hg09E5ADi3Z7+T1RjubgBklKoTVYhIy90yUHHreBNaB4/J6PZeshfokQ0Pk3rLIUerA7uPBOMtzubYJNwGJ4JXWwqIqFqBC7CVSiOtgErEUNYSWoRWXCZP7OObcVl74EeKQCZdR1CptdVoMyFut839bNxVqwprArs5UnD/cGNTAxBOWmHJiePDQE/3bZ5ORhG7BME4xTOusz0vk0BZtgcfImhEHPagvKXDnnrmqNRRn2yQpWYiLP2oBamOEyX9NiCUj+OZHvQxNwOwFNXdKB4581xtfe2eIXnjrtn65LhjUAAAAASUVORK5CYII=",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZhBbtQwFIZ/zyAxu8IN0hNANqh0Q+YG9ASlJyhzgpmeADgBvQG9QbOCJXMDwgnIqoyEqPnjcWmVxElsPU9bKZ/kZuQ4rp/f+/OeA4yMjDxqFCKhvyHh7B+gUWKGhUp5jcATxGPJxb81v67wk39XiMAE8cj+/5riVH/HM0QgigEMn3e8JLcdXPzvOwYJEssDx40ehVNEQFzERrzAj9abU6TqFdYQJIYHls47f6yoBYlhQOa8E0HMogY0xNsYIC9maQ8c944QFrOYiDvFW2eG51KZWdIDy8Ejr/AeQnh7wIhwwzZl+8s2YbvGC/iXCmd8ds1nS85Vcq6qZip9PdNqAMOh2s3ENMUFattUnHKguQAaoYwhBbarLNm3Vq9pdI2GAfZN8hkPEc2q9hAf73ZNWgbtZpdDUM3wahhgLTzDQ0PjE0PovN7tFDFDaQWfN0tMWkLnhs63EI3IsNVDgvtgK+Yj7nzuGtL7GrUJ6hK7N6Jgm3PxRdeg3kRmJ5iz5dgdOXNC2rf4Cq9EthNdVGI9HJ6p/TNxTCM6xOoiqJjTX3kwUfgCWeZdYnURXI3SE1XlmUCGgovfRwBhHrhktp7hFyQJLLHDyukZXkKaTdicYQZo+cN56JyhB5o3kCdoTv/XaIz4vyFAB/4eeBrnE6Eh4ItFSAhlA8cVbCe2FQOfyeBJiAH9scpywNYy56aG3yA1fRJz1/CrhfriX/GQXpUDjow6qLL11IGfB1zxr82he6EOzK7nrser6tJmXPeJz1MHfgao1mSTsz/1KcJoxIqXfT530XI7gwd+BlzzH2rr3u31hIuZD6nb6xhvHOAIdZFPsAcPQsrpBNUuzXAh9XnQzrnipuxxRYuQDRkZGRm5H/4BIkyx5W7xkPAAAAAASUVORK5CYII=",X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAxCAMAAAASlFxYAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAABpUExURQAAAP/KAP/HAP/HAP/HAP/HAP/IAP/HAP/PAP/GAP/FAP/IAP/GAP/IAP/HAP/GAP/GAP/HAP+/AP/JAP/IAP/IAP/GAP/HAP/FAP/IAP/GAP/JAP/IAP/IAP/GAP/HAP/GAP/HAP///43tVtUAAAAhdFJOUwAwQCDfv6+fEO+An5DvYFBwgBBQj8+vfzCQz39wb6Cgj/rd/DIAAAABYktHRCJdZVysAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH6gQLBC04Vqv5KAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wNC0xMFQwNzo1MzoxNSswMDowMGkixPMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDQtMTBUMDc6NTI6NTUrMDA6MDBz9xmLAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTA0LTExVDA0OjQ1OjU2KzAwOjAwJfobLwAAABBjYU52AAAAMAAAADEAAAAAAAAAAG0FHhIAAAJ7SURBVFjD7ZfbcuMgDIZtDsY0WWycOHHTdrO8/0suAh/DoXI7md5UN50JEj/SB5JbFL/2RSvJU7enzBhGnyjAjTW+50SVqPe42+2lMTuqJIx52SFg3Q+VMUd8hC3pnx0pWHdC9oQoKGmD3t+6M6fSYiN2MrPuqig0PgSYWSt3uNsr2uFDhBfAYgbEYyLIEOYFsMzYeEHRmJUZDYfZIwaTyBA+CeCYecRgSMzUzJZMuKbkpFp9FhVnHjEYYO55Jc66VYSUqWixCCSY1dxs7DAtXLa/B+2mpiU5Xdcu+kRKWmeO4Co5O3TVg8K0cBW8Z9IkTTLOq+ssYD0ZvwhhK9GQYaNfD6SxtXsVnN/spVruAcbalcC1+NTeFoEWJ6CmUHtbTPXJja8vazgas//SjDsIzg8wGHHrQyAU2nU8+LNM4xnY4x0kLL+9fJhW74Hm2j4iqzSrENbDnTGB+g0ihqBqPL0/jxB9rPIWbx8jlAQRn7UedaBQg/Df+B1LKCRLrWOLymTGQhPbP/Mxclxd9cnutsGkIyKkWdobmlKwmc59vnSxDDJP9hbJj+TORPaVCCZHeEiZOdMRf4fAmugE46uuFUk5tBsKwfL5noEQRZBJmM31I/3y2jMQmrhA6kuBTg2/PnvHf15CzkM6jYAptdzYVMJqROAapZQuLA9hRnC0VelmuRQE4d6x72Gc0jv8FdTNr0M0YELQj4WdG2wCgkPwASeXJ5cR+LM2DcEjkO3yi85CgDfCp4TdiVwSjKYgaJ/rhmOVgTD2d7Z6ieWUdFRgkEYGdCDveEXHd6+3BdS5BkZVbLDcL6nx3nAWrtHbk/+jtZUYvr/Hr/2k/QcYHYMoV42idQAAAABJRU5ErkJggg==",L=5,k=2,b={2:"최악이에요",4:"별로예요",6:"보통이에요",8:"재미있어요",10:"명작이에요"};class F{constructor(e,s,n){this.container=e,this.movieId=s,this.repository=n}currentRating=0;async mount(){const e=await this.repository.load(this.movieId);this.currentRating=e??0,this.container.innerHTML=this.buildHTML(),this.attach()}buildHTML(){const e=Array.from({length:L},(a,o)=>{const c=(L-o)*k,f=c===this.currentRating?"checked":"";return`
        <input type="radio" name="rating-${this.movieId}" id="star-${this.movieId}-${c}" value="${c}" ${f} />
        <label for="star-${this.movieId}-${c}" data-value="${c}" aria-label="${c}점"
          style="background-image: url(${X})"></label>
      `}).join(""),s=this.currentRating>0?b[this.currentRating]:"평가하기",n=this.currentRating>0?`<span class="rating-score">(${this.currentRating}/10)</span>`:"";return`<div class="star-list">${e}</div><span class="rating-label">${s} ${n}</span>`}updateLabel(e,s){const n=s>0?b[s]:"평가하기",a=s>0?`<span class="rating-score">(${s}/10)</span>`:"";e.innerHTML=`${n} ${a}`}attach(){const e=this.container.querySelector(".star-list"),s=this.container.querySelector(".rating-label");e.addEventListener("change",async n=>{const a=n.target;this.currentRating=Number(a.value),await this.repository.save(this.movieId,this.currentRating),this.updateLabel(s,this.currentRating)})}}const R="rating_";class J{async save(e,s){localStorage.setItem(`${R}${e}`,String(s))}async load(e){const s=localStorage.getItem(`${R}${e}`);return s!==null?Number(s):null}}class z{constructor(e){this.ratingRepository=e,this.dialog=document.querySelector(".modal"),this.dialog.addEventListener("close",()=>{r.publish(i.MODAL_CLOSED,void 0)})}dialog;openWithLoading(){this.dialog.innerHTML=this.renderLoading(),this.dialog.showModal()}fill(e){this.dialog.innerHTML=this.render(e);const s=this.dialog.querySelector(".close-modal");s.focus(),s.addEventListener("click",()=>this.dialog.close());const n=this.dialog.querySelector(".star-rating");new F(n,e.id,this.ratingRepository).mount()}renderLoading(){return`
      <button class="close-modal">
        <img src="${m}" alt="닫기" />
      </button>
      <div class="modal-loading">
        <div class="spinner"></div>
      </div>
    `}render(e){const s=e.release_date?e.release_date.slice(0,4):"미정",n=e.genres.length>0?e.genres.map(o=>o.name).join(", "):"장르 정보 없음",a=e.poster_path?`${B}${e.poster_path}`:"";return`
      <button class="close-modal">
        <img src="${m}" alt="닫기" />
      </button>
      <div class="modal-container">
        <div class="modal-image">
          <img src="${a}" alt="${e.title}" />
        </div>
        <div class="modal-description">
          <h2>${e.title}</h2>
          <p class="subtitle">${s} · ${n}</p>
          <div class="rate">
            <span>평균</span>
            <span class="rate-score">
              <img src="${j}" alt="별점" />
              <span>${(e.vote_average??0).toFixed(1)}</span>
            </span>
          </div>
          <hr class="modal-divider" />
          <p class="section-label">내 별점</p>
          <div class="star-rating"></div>
          <hr class="modal-divider" />
          <p class="section-label">줄거리</p>
          <p class="detail">${e.overview??"줄거리 정보가 없습니다."}</p>
        </div>
      </div>
    `}}const O=new z(new J);function Z(){const t=new G(x);r.subscribe(i.TITLE_CHANGED,e=>{Y.textContent=e}),r.subscribe(i.LOAD_START,()=>{t.disconnect(),l.renderSkeleton()}),r.subscribe(i.MOVIES_LOADED,e=>{u.clearHeader(),u.render(e.results[0]??null),l.clearList(),l.renderMovieList(e),t.observe()}),r.subscribe(i.SEARCH_LOADED,e=>{u.clearHeader(),u.renderSearch(),e.results.length===0?(l.clearList(),l.showEmpty()):(l.clearList(),l.renderMovieList(e),t.observe())}),r.subscribe(i.MORE_LOADED,e=>{l.renderMovieList(e),t.observe()}),r.subscribe(i.LAST_PAGE_REACHED,()=>{t.disconnect()}),r.subscribe(i.MOVIE_SELECTED,()=>{t.disconnect(),O.openWithLoading()}),r.subscribe(i.MOVIE_DETAIL_LOADED,e=>{O.fill(e)}),r.subscribe(i.MODAL_CLOSED,()=>{t.observe()}),r.subscribe(i.ERROR,e=>{t.disconnect(),l.clearList(),l.showError(e)})}const C="https://api.themoviedb.org/3",I="53582fed17d630068894f05310efec62",q="movie/popular",_="search/movie",W="movie";class d extends Error{constructor(e,s){super(s),this.status=e,this.name="ApiError"}}class K extends d{constructor(){super(401,"인증에 실패했습니다."),this.name="UnauthorizedError"}}class $ extends d{constructor(){super(404,"요청한 리소스를 찾을 수 없습니다."),this.name="NotFoundError"}}class ee extends d{constructor(){super(429,"요청이 너무 많습니다. 잠시 후 새로고침 해주세요."),this.name="TooManyRequestsError"}}class te extends d{constructor(){super(503,"서버가 일시적으로 사용 불가 상태입니다. 잠시 후 다시 시도해주세요."),this.name="ServiceUnavailableError"}}async function w(t){const e=await fetch(t);if(!e.ok)throw e.status===401?new K:e.status===404?new $:e.status===429?new ee:e.status===503?new te:new d(e.status,`API 요청 실패: ${e.status}`);return e.json()}async function S(t,e,s=""){const n=new URLSearchParams({api_key:I,language:"ko-KR",page:String(e),...s&&{query:s}});return w(`${C}/${t}?${n}`)}async function se(t){const e=new URLSearchParams({api_key:I,language:"ko-KR"});return w(`${C}/${W}/${t}?${e}`)}async function p(t,e){return e?await S(_,t,e):await S(q,t)}async function re(t){return await p(t)}async function ie(t,e){return await p(t,e)}async function ne(t,e){return await p(t,e)}async function ae(t){return await se(t)}const A={page:1,searchQuery:""};async function oe(){await E(A.page)}async function Ae(){A.page=1,A.searchQuery="",await E(A.page)}async function E(t){r.publish(i.LOAD_START,void 0);try{const e=await re(t);r.publish(i.MOVIES_LOADED,e)}catch(e){r.publish(i.ERROR,e.message)}}async function ce(t){if(A.page=1,A.searchQuery=t,t===""){await E(A.page);return}await le(A.page,t)}async function le(t,e){r.publish(i.LOAD_START,void 0);try{const s=await ie(t,e);r.publish(i.SEARCH_LOADED,s)}catch(s){r.publish(i.ERROR,s.message)}}async function de(){A.page+=1,await ue(A.page,A.searchQuery)}async function ue(t,e){try{const s=await ne(t,e);r.publish(i.MORE_LOADED,s),t>=s.total_pages&&r.publish(i.LAST_PAGE_REACHED,void 0)}catch(s){r.publish(i.ERROR,s.message)}}async function he(t){try{const e=await ae(t);r.publish(i.MOVIE_DETAIL_LOADED,e)}catch(e){r.publish(i.ERROR,e.message)}}const g="지금 인기 있는 영화";function ge(){r.subscribe(i.LOAD_MORE,de),r.subscribe(i.MOVIE_SELECTED,he),r.subscribe(i.LOGO_CLICK,()=>{r.publish(i.TITLE_CHANGED,g),Ae()})}function pe(){addEventListener("load",async()=>{r.publish(i.TITLE_CHANGED,g),await oe()}),h.addEventListener("submit",async t=>{t.preventDefault();const s=document.querySelector(".search-input").value.trim(),n=s===""?g:`"${s}" 검색 결과`;r.publish(i.TITLE_CHANGED,n),await ce(s)})}Z();ge();pe();
