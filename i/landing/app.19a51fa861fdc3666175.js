(self.webpackChunkcloudike_landing=self.webpackChunkcloudike_landing||[]).push([[143],{928:function(e,n,t){"use strict";var o=t(755),r=t.n(o),i=JSON.parse('{"i8":"3.3.12","vp":"1"}'),c="https://cloudbeeline.ru/api/2/";function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=/^https?:\/\//.test(e)?e:"".concat(c).concat(e);return new Promise((function(e,c){r().ajax(a({method:n,url:i,data:t},o)).done(e).fail((function(e){c(e.responseJSON)}))}))}window.$=r();var l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return u("/offers/","get",{type:e,tenant_name:n}).then((function(e){var n,t;return null==e||null===(n=e._embedded.offers[0])||void 0===n||null===(t=n._links)||void 0===t?void 0:t.content.href})).then((function(e){return u(e)}))};console.log("version: v".concat(i.vp,".").concat(i.i8));var f=document.querySelector(".footer__conditions"),p=document.querySelector(".offer"),v=document.querySelector(".offer_bg"),h=document.querySelector(".footer__confidentiality");f.addEventListener("click",(function(){l("terms_and_conditions","default").then((function(e){e&&(document.querySelector(".offer_text").innerHTML=e,p.classList.remove("hidden"),p.classList.add("open"))}))})),h.addEventListener("click",(function(){l("privacy_policy","default").then((function(e){e&&(document.querySelector(".offer_text").innerHTML=e,p.classList.remove("hidden"),p.classList.add("open"))}))})),v.addEventListener("click",(function(){p.classList.remove("open"),p.classList.add("hidden")})),r()((function(){t.e(216).then(t.t.bind(t,437,23)).then((function(e){var n,t;n=e.default,(t=new n(window.navigator.userAgent)).is("iPhone")&&r()("html").addClass("iPhone"),t.is("iPad")&&r()("html").addClass("iPad"),t.is("AndroidOS")&&r()("html").addClass("Android")}))}))}},0,[[928,666,216]]]);