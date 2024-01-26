(()=>{var n={28:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var r=e(537),o=e.n(r),i=e(645),A=e.n(i)()(o());A.push([n.id,"html,\nbody {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  height: 100%;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  background-color: lightsalmon;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  position: relative;\n}\n\nheader > .wrapper {\n  position: absolute;\n  display: flex;\n  gap: 20px;\n}\n\nheader > h1 {\n  margin: auto;\n}\n\nbutton {\n  cursor: pointer;\n  border: 2px solid;\n  border-radius: 25%;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bars {\n  height: 30px;\n}\n\nmain {\n  height: 100%;\n  display: flex;\n  position: relative;\n}\n\n#leftBtn {\n  transition: transform 1s;\n}\n\n#rightBtn {\n  transition: transform 1s;\n}\n\n.clicked {\n  transform: rotate(180deg);\n}\n#slideBar {\n  position: absolute;\n  height: 100%;\n  width: 0;\n  background-color: green;\n  transition: 1s;\n  overflow: hidden;\n}\n#slideBar.slide {\n  width: 300px;\n  border-right: 1px solid;\n}\n#dropBar {\n  position: absolute;\n  right: 0;\n  height: 0;\n  width: 300px;\n  background-color: red;\n  transition: 1s;\n  overflow: hidden;\n}\n#dropBar.drop {\n  height: 100%;\n  border-right: 1px solid;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 20px 50px;\n}\n\nli {\n  list-style: none;\n  border-bottom: 1px solid;\n  cursor: pointer;\n  transition: ease-in-out 0.5s;\n  height: 25px;\n  padding: 5px;\n}\n\nli:hover {\n  color: white;\n  font-size: 25px;\n}\n\n.test {\n  width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background-color: lightsalmon;\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n\n.github {\n  height: 20px;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;;EAEE,SAAS;EACT,SAAS;EACT,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,wBAAwB;EACxB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,QAAQ;EACR,uBAAuB;EACvB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,qBAAqB;EACrB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,eAAe;EACf,4BAA4B;EAC5B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,6BAA6B;EAC7B,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd",sourcesContent:["html,\nbody {\n  border: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  height: 100%;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  background-color: lightsalmon;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  position: relative;\n}\n\nheader > .wrapper {\n  position: absolute;\n  display: flex;\n  gap: 20px;\n}\n\nheader > h1 {\n  margin: auto;\n}\n\nbutton {\n  cursor: pointer;\n  border: 2px solid;\n  border-radius: 25%;\n  height: 50px;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bars {\n  height: 30px;\n}\n\nmain {\n  height: 100%;\n  display: flex;\n  position: relative;\n}\n\n#leftBtn {\n  transition: transform 1s;\n}\n\n#rightBtn {\n  transition: transform 1s;\n}\n\n.clicked {\n  transform: rotate(180deg);\n}\n#slideBar {\n  position: absolute;\n  height: 100%;\n  width: 0;\n  background-color: green;\n  transition: 1s;\n  overflow: hidden;\n}\n#slideBar.slide {\n  width: 300px;\n  border-right: 1px solid;\n}\n#dropBar {\n  position: absolute;\n  right: 0;\n  height: 0;\n  width: 300px;\n  background-color: red;\n  transition: 1s;\n  overflow: hidden;\n}\n#dropBar.drop {\n  height: 100%;\n  border-right: 1px solid;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n  padding: 20px 50px;\n}\n\nli {\n  list-style: none;\n  border-bottom: 1px solid;\n  cursor: pointer;\n  transition: ease-in-out 0.5s;\n  height: 25px;\n  padding: 5px;\n}\n\nli:hover {\n  color: white;\n  font-size: 25px;\n}\n\n.test {\n  width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  background-color: lightsalmon;\n  border-top-width: 1px;\n  border-top-style: solid;\n}\n\n.github {\n  height: 20px;\n}\n"],sourceRoot:""}]);const s=A},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(A[a]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&A[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},537:n=>{"use strict";n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},A=[],s=0;s<n.length;s++){var a=n[s],c=r.base?a[0]+r.base:a[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var p=e(l),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var g=o(u,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:g,references:1})}A.push(l)}return A}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var A=0;A<i.length;A++){var s=e(i[A]);t[s].references--}for(var a=r(n,o),c=0;c<i.length;c++){var d=e(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=a}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},112:(n,t,e)=>{var r={"./github.svg":926,"./icons8-ellipsis-30.png":240,"./icons8-menu.svg":652};function o(n){var t=i(n);return e(t)}function i(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=112},926:(n,t,e)=>{"use strict";n.exports=e.p+"images/github.svg"},240:(n,t,e)=>{"use strict";n.exports=e.p+"images/icons8-ellipsis-30.png"},652:(n,t,e)=>{"use strict";n.exports=e.p+"images/icons8-menu.svg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.nc=void 0,(()=>{"use strict";var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),A=e.n(i),s=e(565),a=e.n(s),c=e(216),d=e.n(c),l=e(589),p=e.n(l),u=e(28),g={};g.styleTagTransform=p(),g.setAttributes=a(),g.insert=A().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const h=function(){const n=document.getElementById("leftBtn"),t=document.getElementById("rightBtn"),e=document.getElementById("slideBar"),r=document.getElementById("dropBar");n.addEventListener("click",(()=>{e.classList.toggle("slide"),n.classList.toggle("clicked")})),t.addEventListener("click",(()=>{r.classList.toggle("drop"),t.classList.toggle("clicked")}))};var E;(E=e(112)).keys().forEach(E),h()})()})();
//# sourceMappingURL=bundle.js.map