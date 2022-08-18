/*! For license information please see 5.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5],{"7851":function(o,t,e){e.d(t,{"a":function(){return createCommonjsModule},"b":function(){return c},"c":function(){return u},"g":function(){return getDefaultExportFromCjs}});var s=e(1002),c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function createCommonjsModule(o,t,e){return o(e={"path":t,"exports":{},"require":function require(o,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}var u=createCommonjsModule((function(o){!function(){var t={}.hasOwnProperty;function r(){for(var o=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var u=(0,s.Z)(c);if("string"===u||"number"===u)o.push(c);else if(Array.isArray(c)){if(c.length){var a=r.apply(null,c);a&&o.push(a)}}else if("object"===u)if(c.toString===Object.prototype.toString)for(var f in c)t.call(c,f)&&c[f]&&o.push(f);else o.push(c.toString())}}return o.join(" ")}o.exports?(r.default=r,o.exports=r):window.classNames=r}()}))},"6827":function(o,t,e){function throttle(o,t,e){void 0===t&&(t=250);var s,c=0;return function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];var f=e||this,h=Date.now();h-c>t?(o.apply(this,u),c=h):(clearTimeout(s),s=setTimeout((function(){c=h,o.apply(f,u)}),t))}}function debounce(o,t,e){var s;return void 0===t&&(t=250),function(){for(var c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];var a=e||this;clearTimeout(s),s=setTimeout((function(){o.apply(a,c)}),t)}}e.d(t,{"d":function(){return debounce},"t":function(){return throttle}})},"536":function(o,t,e){e.r(t),e.d(t,{"taro_scroll_view_core":function(){return a}});var s=e(4933),c=e(7851),u=e(6827);function easeOutScroll(o,t,e){if(o!==t&&"number"==typeof o){var s=t-o,c=Date.now(),u=t>=o;!function n(){o=function i(o,t,e,s){return e*o/s+t}(Date.now()-c,o,s,500),u&&o>=t||!u&&t>=o?e(t):(e(o),requestAnimationFrame(n))}()}}var a=function(){function l(o){var t=this;(0,s.r)(this,o),this.onScroll=(0,s.c)(this,"scroll",3),this.onScrollToUpper=(0,s.c)(this,"scrolltoupper",3),this.onScrollToLower=(0,s.c)(this,"scrolltolower",3),this.scrollX=!1,this.scrollY=!1,this.upperThreshold=50,this.lowerThreshold=50,this.scrollWithAnimation=!1,this.handleScroll=function(o){if(!(o instanceof CustomEvent)){var e=t.el,s=e.scrollLeft,c=e.scrollTop,u=e.scrollHeight,a=e.scrollWidth;t._scrollLeft=s,t._scrollTop=c,t.upperAndLower(),t.onScroll.emit({"scrollLeft":s,"scrollTop":c,"scrollHeight":u,"scrollWidth":a})}},this.upperAndLower=(0,u.d)((function(){var o=t.el,e=o.offsetWidth,s=o.offsetHeight,c=o.scrollLeft,u=o.scrollTop,a=o.scrollHeight,f=o.scrollWidth,h=Number(t.lowerThreshold),p=Number(t.upperThreshold);!isNaN(h)&&(t.scrollY&&s+u+h>=a||t.scrollX&&e+c+h>=f)&&t.onScrollToLower.emit({"direction":t.scrollX?"right":t.scrollY?"bottom":""}),!isNaN(p)&&(t.scrollY&&u<=p||t.scrollX&&c<=p)&&t.onScrollToUpper.emit({"direction":t.scrollX?"left":t.scrollY?"top":""})}),200)}return l.prototype.watchScrollLeft=function(o){var t=this,e=Number(o);this.scrollX&&!isNaN(e)&&e!==this._scrollLeft&&(this.scrollWithAnimation?easeOutScroll(this._scrollLeft,e,(function(o){return t.el.scrollLeft=o})):this.el.scrollLeft=e,this._scrollLeft=e)},l.prototype.watchScrollTop=function(o){var t=this,e=Number(o);this.scrollY&&!isNaN(e)&&e!==this._scrollTop&&(this.scrollWithAnimation?easeOutScroll(this._scrollTop,e,(function(o){return t.el.scrollTop=o})):this.el.scrollTop=e,this._scrollTop=e)},l.prototype.watchScrollIntoView=function(o){var t;"string"==typeof o&&o&&(null===(t=document.querySelector("#"+o))||void 0===t||t.scrollIntoView({"behavior":"smooth","block":"center","inline":"start"}))},l.prototype.componentDidLoad=function(){var o=this,t=this,e=t.scrollY,s=t.scrollX,c=t.scrollWithAnimation,u=Number(this.mpScrollTop),a=Number(this.mpScrollLeft);e&&!isNaN(u)&&(c?easeOutScroll(0,u,(function(t){return o.el.scrollTop=t})):this.el.scrollTop=u,this._scrollTop=u),s&&!isNaN(a)&&(c?easeOutScroll(0,a,(function(t){return o.el.scrollLeft=t})):this.el.scrollLeft=a,this._scrollLeft=a)},l.prototype.render=function(){var o=this.scrollX,t=this.scrollY,e=(0,c.c)({"taro-scroll-view__scroll-x":o,"taro-scroll-view__scroll-y":t});return(0,s.h)(s.H,{"class":e,"onScroll":this.handleScroll},(0,s.h)("slot",null))},Object.defineProperty(l.prototype,"el",{"get":function get(){return(0,s.g)(this)},"enumerable":!1,"configurable":!0}),Object.defineProperty(l,"watchers",{"get":function get(){return{"mpScrollLeft":["watchScrollLeft"],"mpScrollTop":["watchScrollTop"],"mpScrollIntoView":["watchScrollIntoView"]}},"enumerable":!1,"configurable":!0}),l}();a.style="taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}"}}]);