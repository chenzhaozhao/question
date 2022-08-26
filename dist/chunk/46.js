/*! For license information please see 46.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[46],{"7851":function(t,a,n){n.d(a,{"a":function(){return createCommonjsModule},"b":function(){return s},"c":function(){return l},"g":function(){return getDefaultExportFromCjs}});var i=n(1002),s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function createCommonjsModule(t,a,n){return t(n={"path":a,"exports":{},"require":function require(t,a){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var l=createCommonjsModule((function(t){!function(){var a={}.hasOwnProperty;function r(){for(var t=[],n=0;n<arguments.length;n++){var s=arguments[n];if(s){var l=(0,i.Z)(s);if("string"===l||"number"===l)t.push(s);else if(Array.isArray(s)){if(s.length){var d=r.apply(null,s);d&&t.push(d)}}else if("object"===l)if(s.toString===Object.prototype.toString)for(var b in s)a.call(s,b)&&s[b]&&t.push(b);else t.push(s.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):window.classNames=r}()}))},"7293":function(t,a,n){n.r(a),n.d(a,{"taro_tabbar":function(){return g}});var i=n(4933),s=n(1756),l=n(7356),d=n(7851),__spreadArray=function(t,a){for(var n=0,i=a.length,s=t.length;n<i;n++,s++)t[s]=a[n];return t},b=function splitUrl(t){var a,n=t||"",i={"path":null,"query":null,"fragment":null};return(a=n.indexOf("#"))>-1&&(i.fragment=n.substring(a+1),n=n.substring(0,a)),(a=n.indexOf("?"))>-1&&(i.query=n.substring(a+1),n=n.substring(0,a)),i.path=n,i},h=function addLeadingSlash(t){return void 0===t&&(t=""),"/"===t.charAt(0)?t:"/"+t},u=function stripBasename(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),function hasBasename(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),new RegExp("^"+a+"(\\/|\\?|#|$)","i").test(t)||t===a}(t,a)?t.substring(a.length):t};function isAbsolute(t){return"/"===t.charAt(0)}function spliceOne(t,a){for(var n=a,i=n+1,s=t.length;i<s;n+=1,i+=1)t[n]=t[i];t.pop()}var c=function TabbarItem(t){var a=t.index,n=t.isSelected,s=void 0!==n&&n,l=t.textColor,b=t.iconPath,h=t.badgeText,u=t.showRedDot,c=void 0!==u&&u,f=t.text,g=t.onSelect,p=(0,d.c)("weui-tabbar__item",{"weui-bar__item_on":s});return(0,i.h)("a",{"key":a,"href":"javascript:;","class":p,"onClick":function v(){g(a)}},(0,i.h)("span",{"style":{"display":"inline-block","position":"relative"}},(0,i.h)("img",{"src":b,"alt":"","class":"weui-tabbar__icon"}),!!h&&(0,i.h)("span",{"class":"weui-badge taro-tabbar-badge","style":{"position":"absolute","top":"-2px","right":"-13px"}},h),c&&(0,i.h)("span",{"class":"weui-badge weui-badge_dot","style":{"position":"absolute","top":"0","right":"-6px"}})),(0,i.h)("p",{"class":"weui-tabbar__label","style":{"color":l}},f))},f="taro-tabbar__tabbar",g=function(){function e(t){var a=this;(0,i.r)(this,t),this.onLongPress=(0,i.c)(this,"longpress",7),this.homePage="",this.customRoutes=[],this.tabbarPos="bottom",this.selectedIndex=-1,this.status=0,this.getOriginUrl=function(t){var n=a.customRoutes.filter((function(a){var n=a[1];return b(n).path===b(t).path}));return function stripSuffix(t,a){return void 0===t&&(t=""),void 0===a&&(a=""),t.includes(a)?t.substring(0,t.length-a.length):t}(n.length?n[0][0]:t,".html")},this.getSelectedIndex=function(t){var n=-1;return a.list.forEach((function(a,i){var s=a.pagePath;b(t).path===b(s).path&&(n=i)})),n},this.switchTab=function(t){a.selectedIndex=t,(0,s.MR)({"url":a.list[t].pagePath})},this.switchTabHandler=function(t){var n=t.url,i=t.successHandler,s=t.errorHandler,l=function resolvePathname(t,a){void 0===a&&(a="");var n,i=t&&t.split("/")||[],s=a&&a.split("/")||[],l=t&&isAbsolute(t),d=a&&isAbsolute(a),b=l||d;if(t&&isAbsolute(t)?s=i:i.length&&(s.pop(),s=s.concat(i)),!s.length)return"/";if(s.length){var h=s[s.length-1];n="."===h||".."===h||""===h}else n=!1;for(var u=0,c=s.length;c>=0;c--){var f=s[c];"."===f?spliceOne(s,c):".."===f?(spliceOne(s,c),u++):u&&(spliceOne(s,c),u--)}if(!b)for(;u--;u)s.unshift("..");!b||""===s[0]||s[0]&&isAbsolute(s[0])||s.unshift("");var g=s.join("/");return n&&"/"!==g.substr(-1)&&(g+="/"),g}(n,a.getOriginUrl(a.getCurrentUrl()||a.homePage)),d=a.getSelectedIndex(l);d>-1?(a.switchTab(d),i({"errMsg":"switchTab:ok"})):s({"errMsg":'switchTab:fail page "'+l+'" is not found'})},this.routerChangeHandler=function(t){var n,i,s=null===(n=null==t?void 0:t.toLocation)||void 0===n?void 0:n.path;if("string"==typeof s){var l=a.conf.basename||"/";i=u(h(s||a.homePage),l)||"/"}else i=a.getCurrentUrl();a.selectedIndex=a.getSelectedIndex(a.getOriginUrl(i))},this.setTabBarBadgeHandler=function(t){var n=t.index,i=t.text,s=t.successHandler,l=t.errorHandler,d=__spreadArray([],a.list);n in d?(d[n].showRedDot=!1,d[n].badgeText=i,s({"errMsg":"setTabBarBadge:ok"})):l({"errMsg":"setTabBarBadge:fail tabbar item not found"}),a.list=d},this.removeTabBarBadgeHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].badgeText=null,l[n].badgeText=null,i({"errMsg":"removeTabBarBadge:ok"})):s({"errMsg":"removeTabBarBadge:fail tabbar item not found"}),a.list=l},this.showTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].badgeText=null,l[n].showRedDot=!0,i({"errMsg":"showTabBarRedDot:ok"})):s({"errMsg":"showTabBarRedDot:fail tabbar item not found"}),a.list=l},this.hideTabBarRedDotHandler=function(t){var n=t.index,i=t.successHandler,s=t.errorHandler,l=__spreadArray([],a.list);n in l?(l[n].showRedDot=!1,i({"errMsg":"hideTabBarRedDot:ok"})):s({"errMsg":"hideTabBarRedDot:fail tabbar item not found"}),a.list=l},this.showTabBarHandler=function(t){var n=t.successHandler;a.status=0,n({"errMsg":"showTabBar:ok"})},this.hideTabBarHandler=function(t){var n=t.animation,i=t.successHandler;a.status=n?2:1,i({"errMsg":"hideTabBar:ok"})},this.setTabBarStyleHandler=function(t){var n=t.color,i=t.selectedColor,s=t.backgroundColor,l=t.borderStyle,d=t.successHandler;s&&(a.backgroundColor=s),l&&(a.borderStyle=l),n&&(a.color=n),i&&(a.selectedColor=i),d({"errMsg":"setTabBarStyle:ok"})},this.setTabBarItemHandler=function(t){var n=t.index,i=t.iconPath,s=t.selectedIconPath,l=t.text,d=t.successHandler,b=t.errorHandler,h=__spreadArray([],a.list);n in h?(i&&(h[n].iconPath=i),s&&(h[n].selectedIconPath=s),l&&(h[n].text=l),d({"errMsg":"setTabBarItem:ok"})):b({"errMsg":"setTabBarItem:fail tabbar item not found"}),a.list=h};var n=this.conf.list,l=this.conf.customRoutes;if("[object Array]"!==Object.prototype.toString.call(n)||n.length<2||n.length>5)throw new Error("tabBar 配置错误");this.homePage=h(this.conf.homePage);var d=function o(t){var a,n=l[t];t=h(t),"string"==typeof n?c.customRoutes.push([t,h(n)]):(null==n?void 0:n.length)>0&&(a=c.customRoutes).push.apply(a,n.map((function(a){return[t,h(a)]})))},c=this;for(var f in l)d(f);n.forEach((function(t){0!==t.pagePath.indexOf("/")&&(t.pagePath="/"+t.pagePath)})),this.list=n,this.borderStyle=this.conf.borderStyle,this.backgroundColor=this.conf.backgroundColor,this.color=this.conf.color,this.selectedColor=this.conf.selectedColor}return e.prototype.getCurrentUrl=function(){var t,a=this.conf.mode,n=this.conf.basename||"/";if("hash"===a){var i=window.location.href,s=i.indexOf("#");t=-1===s?"":i.substring(s+1)}else t=location.pathname;var l=h(u(t,n));return decodeURI("/"===l?this.homePage:l)},e.prototype.bindEvent=function(){l.ZPm.eventCenter.on("__taroRouterChange",this.routerChangeHandler),l.ZPm.eventCenter.on("__taroSwitchTab",this.switchTabHandler),l.ZPm.eventCenter.on("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.ZPm.eventCenter.on("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.ZPm.eventCenter.on("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.ZPm.eventCenter.on("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.ZPm.eventCenter.on("__taroShowTabBar",this.showTabBarHandler),l.ZPm.eventCenter.on("__taroHideTabBar",this.hideTabBarHandler),l.ZPm.eventCenter.on("__taroSetTabBarStyle",this.setTabBarStyleHandler),l.ZPm.eventCenter.on("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.removeEvent=function(){l.ZPm.eventCenter.off("__taroRouterChange",this.routerChangeHandler),l.ZPm.eventCenter.off("__taroSwitchTab",this.switchTabHandler),l.ZPm.eventCenter.off("__taroSetTabBarBadge",this.setTabBarBadgeHandler),l.ZPm.eventCenter.off("__taroRemoveTabBarBadge",this.removeTabBarBadgeHandler),l.ZPm.eventCenter.off("__taroShowTabBarRedDotHandler",this.showTabBarRedDotHandler),l.ZPm.eventCenter.off("__taroHideTabBarRedDotHandler",this.hideTabBarRedDotHandler),l.ZPm.eventCenter.off("__taroShowTabBar",this.showTabBarHandler),l.ZPm.eventCenter.off("__taroHideTabBar",this.hideTabBarHandler),l.ZPm.eventCenter.off("__taroSetTabBarStyle",this.setTabBarStyleHandler),l.ZPm.eventCenter.off("__taroSetTabBarItem",this.setTabBarItemHandler)},e.prototype.componentDidLoad=function(){this.tabbarPos=this.tabbar.nextElementSibling?"top":"bottom",this.bindEvent(),this.routerChangeHandler()},e.prototype.disconnectedCallback=function(){this.removeEvent()},e.prototype.render=function(){var t,a,n=this,s=this.tabbarPos,l=void 0===s?"bottom":s,b=this.status,h=(0,d.c)("weui-tabbar",((t={})["taro-tabbar__border-"+(this.borderStyle||"black")]=!0,t)),u=-1===this.selectedIndex||1===b,g=2===b;return(0,i.h)(i.H,{"class":(0,d.c)(f,"taro-tabbar__tabbar-"+l,(a={},a["taro-tabbar__tabbar-hide"]=u,a["taro-tabbar__tabbar-slideout"]=g,a))},(0,i.h)("div",{"class":h,"style":{"backgroundColor":this.backgroundColor||"","height":"inherit"}},this.list.map((function(t,a){var s,l,d=n.selectedIndex===a;return d?(s=n.selectedColor||"",l=t.selectedIconPath):(s=n.color||"",l=t.iconPath),(0,i.h)(c,{"index":a,"onSelect":n.switchTab.bind(n),"isSelected":d,"textColor":s,"iconPath":l,"text":t.text,"badgeText":t.badgeText,"showRedDot":t.showRedDot})}))))},Object.defineProperty(e.prototype,"tabbar",{"get":function get(){return(0,i.g)(this)},"enumerable":!1,"configurable":!0}),e}();g.style="html,body{height:100%}#app{height:100%}.taro-tabbar__border-white::before{border-top-color:#fff !important}.taro-tabbar__container{display:-ms-flexbox;display:flex;overflow:hidden;-ms-flex-direction:column;flex-direction:column;height:100%}.taro-tabbar__panel{overflow:auto;position:relative;-ms-flex:1;flex:1;-webkit-overflow-scrolling:auto}.taro-tabbar__tabbar{position:relative;width:100%;height:50px;-webkit-transition:bottom 0.2s, top 0.2s;transition:bottom 0.2s, top 0.2s}.taro-tabbar__tabbar-top{top:0}.taro-tabbar__tabbar-bottom{bottom:0;margin-bottom:constant(safe-area-inset-bottom);margin-bottom:env(safe-area-inset-bottom)}.taro-tabbar__tabbar-hide{display:none}.taro-tabbar__tabbar-slideout{top:-52px;-ms-flex:0 0;flex:0 0}.taro-tabbar__panel+.taro-tabbar__tabbar-slideout{top:auto;bottom:-52px}"}}]);