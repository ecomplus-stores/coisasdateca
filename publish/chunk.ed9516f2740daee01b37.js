(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{210:function(e,t,o){"use strict";o.r(t);var n=o(0),d=o(23),i=o(31),l=o.n(i),s=o(66),a=o(80),r=o(64),c=o(186),u=(e={},t="product-card")=>{e.buyText&&(window.productCardBuyText=e.buyText),e.buy&&(window.productCardBuyHtml=e.buy),e.footer&&(window.productCardFooterHtml=e.footer);const o=window.storefront&&window.storefront.getScopedSlots,n=document.querySelectorAll(`.${t}`),d=[];for(let e=0;e<n.length;e++)if(n[e]){const{productId:t,toRender:o}=n[e].dataset;o&&-1===d.indexOf(t)&&d.push(t)}let i;if(d.length>=4&&d.length<=70&&!e.skipSearchApi){const e=new r.a;i=e.setPageSize(d.length).setProductIds(d).fetch(!0,{timeout:5e3}).then((()=>{const t=e.getItems();for(let e=0;e<2;e++)u(n[e]);return t})).catch((e=>{console.error(e)}))}else i=Promise.resolve();const u=n=>{if(n){const{productId:d,sku:s,toRender:r}=n.dataset;if(r){let r;i.then((e=>{Array.isArray(e)&&(r=e.find((({_id:e})=>e===d)))})).finally((()=>{let i;if(r){if(i=!0,!r.available||!r.visible||!Object(a.a)(r)){const e=n.parentNode&&n.parentNode.parentNode;e&&"LI"===e.tagName&&e.parentNode.appendChild(e)}}else{const e=n.parentNode;if(e&&(r=e.dataset.product,"string"==typeof r))try{r=JSON.parse(r)}catch(e){r=void 0}}((n,d,i,s,a)=>{new l.a({render:l=>l(c.a,{class:"product-card"!==t?t:null,attrs:{"data-product-id":d,"data-sku":i},props:{...e.props,productId:d,product:s,isLoaded:a,transitionClass:null},scopedSlots:"function"==typeof o?o(n,l):void 0})}).$mount(n)})(n,d,s,r,i)}))}}};Object(s.a)(n,{rootMargin:"350px 0px",threshold:0,load:u}).observe()};const p=window.location.pathname.startsWith("/app/"),w=[],m="localhost"===window.location.hostname?50:1,h=(e,t)=>{const o=new Promise((o=>{setTimeout((()=>{const i=window._widgets&&window._widgets[e];if(i&&i.active&&(!i.desktopOnly||!n.isMobile)&&(p?i.enableCheckout:!i.disablePages))return t().then((t=>{"function"==typeof t.default&&t.default(i.options),d.a.emit(`widget:${e}`),console.log(`Widget loaded: ${e}`)})).catch(console.error).finally(o);o()}),m)}));w.push(o)},{resource:g}=document.body.dataset;p||"products"!==g||h("@ecomplus/widget-product",(()=>Promise.all([o.e(0),o.e(2),o.e(7),o.e(30)]).then(o.bind(null,349)))),Promise.all(w).then((()=>{h("@ecomplus/widget-product-card",(()=>Promise.resolve({default:u}))),("/search"===window.location.pathname||"categories"===g||"brands"===g||!g&&document.getElementById("search-engine"))&&h("@ecomplus/widget-search-engine",(()=>Promise.all([o.e(3),o.e(22)]).then(o.bind(null,350))));const e=e=>{"function"==typeof window.requestIdleCallback?setTimeout((()=>window.requestIdleCallback(e)),200):setTimeout(e,800)};e((()=>{d.a.emit("load:lcp"),p||(h("@ecomplus/widget-search",(()=>Promise.all([o.e(3),o.e(19)]).then(o.bind(null,358)))),h("@ecomplus/widget-minicart",(()=>o.e(16).then(o.bind(null,359)))),h("@ecomplus/widget-user",(()=>o.e(17).then(o.bind(null,360))))),Promise.all(w).then((()=>{e((()=>d.a.emit("load:components"))),h("@ecomplus/widget-tag-manager",(()=>o.e(21).then(o.bind(null,364)))),h("@ecomplus/widget-analytics",(()=>o.e(20).then(o.bind(null,365)))),h("@ecomplus/widget-fb-pixel",(()=>o.e(28).then(o.bind(null,361)))),h("@ecomplus/widget-gmc-ratings",(()=>o.e(29).then(o.bind(null,351)))),h("@ecomplus/widget-ebit",(()=>o.e(27).then(o.bind(null,352)))),h("@ecomplus/widget-compre-confie",(()=>o.e(26).then(o.bind(null,353))))}))}))}))}},0,[0,2,7,30,3,22]]);
//# sourceMappingURL=chunk.ed9516f2740daee01b37.js.map