(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"33yf":function(e,t,r){(function(e){function normalizeArray(e,t){for(var r=0,n=e.length-1;n>=0;n--){var a=e[n];"."===a?e.splice(n,1):".."===a?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function filter(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var a=n>=0?arguments[n]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return(r?"/":"")+(t=normalizeArray(filter(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var n=t.isAbsolute(e),a="/"===r(e,-1);return(e=normalizeArray(filter(e.split("/"),(function(e){return!!e})),!n).join("/"))||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(filter(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function trim(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var n=trim(e.split("/")),a=trim(r.split("/")),o=Math.min(n.length,a.length),i=o,c=0;c<o;c++)if(n[c]!==a[c]){i=c;break}var l=[];for(c=i;c<n.length;c++)l.push("..");return(l=l.concat(a.slice(i))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!a){n=o;break}}else a=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function basename(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){r=t+1;break}}else-1===n&&(a=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,a=!0,o=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47!==c)-1===n&&(a=!1,n=i+1),46===c?-1===t?t=i:1!==o&&(o=1):-1!==t&&(o=-1);else if(!a){r=i+1;break}}return-1===t||-1===n||0===o||1===o&&t===n-1&&t===r+1?"":e.slice(t,n)};var r="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("8oxB"))},"8+s/":function(e,t,r){"use strict";var n=r("q1tI"),a=function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function withSideEffect(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function wrap(i){if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function emitChange(){c=e(l.map((function(e){return e.props}))),s.canUseDOM?t(c):r&&(c=r(c))}var s=function(e){function SideEffect(){return e.apply(this,arguments)||this}!function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(SideEffect,e),SideEffect.peek=function peek(){return c},SideEffect.rewind=function rewind(){if(SideEffect.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var t=SideEffect.prototype;return t.UNSAFE_componentWillMount=function UNSAFE_componentWillMount(){l.push(this),emitChange()},t.componentDidUpdate=function componentDidUpdate(){emitChange()},t.componentWillUnmount=function componentWillUnmount(){var e=l.indexOf(this);l.splice(e,1),emitChange()},t.render=function render(){return a.createElement(i,this.props)},SideEffect}(n.PureComponent);return _defineProperty(s,"displayName","SideEffect("+function getDisplayName(e){return e.displayName||e.name||"Component"}(i)+")"),_defineProperty(s,"canUseDOM",o),s}}},"8oxB":function(e,t){var r,n,a=e.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var o,i=[],c=!1,l=-1;function cleanUpNextTick(){c&&o&&(c=!1,o.length?i=o.concat(i):l=-1,i.length&&drainQueue())}function drainQueue(){if(!c){var e=runTimeout(cleanUpNextTick);c=!0;for(var t=i.length;t;){for(o=i,i=[];++l<t;)o&&o[l].run();l=-1,t=i.length}o=null,c=!1,function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new Item(e,t)),1!==i.length||c||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=noop,a.addListener=noop,a.once=noop,a.off=noop,a.removeListener=noop,a.removeAllListeners=noop,a.emit=noop,a.prependListener=noop,a.prependOnceListener=noop,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("R2/8"),c=r.n(i),l=function MslThemeSwitch(e){var t,r=Object(n.useState)(!1);r[0],r[1];return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"toggle",className:"cursor-pointer"},a.a.createElement("button",{type:"button",className:"pointer-events-none group rounded-md border border-transparent focus:bg-gray-100 focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-400"},a.a.createElement("span",{className:"sr-only"},a.a.createElement("span",{className:"dark:hidden"},"Switch to dark theme"),a.a.createElement("span",{className:"hidden dark:inline"},"Switch to light theme")),a.a.createElement("svg",((t={xmlns:"http://www.w3.org/2000/svg",fill:"none"}).fill="none",t.viewBox="0 0 24 24",t.stroke="currentColor",t.className="dark:text-yellow-400 w-6 hidden dark:inline",t),a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})),a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"text-gray-900 w-6 inline dark:hidden"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})))),a.a.createElement("input",{type:"checkbox",id:"toggle",className:" pointer-events-none hidden"}))},s=[{name:"Home",href:"/"},{name:"Seasons",href:"/seasons"},{name:"Teams",href:"/teams"},{name:"Players",href:"/players"},{name:"Register",href:"/register"},{name:"Rules",href:"/rules"},{name:"GMM",href:"/gmm"}],u=function Header(){var e=Object(n.useState)(!1),t=e[0],r=e[1];return a.a.createElement("header",null,a.a.createElement("nav",{className:"bg-gray-100 dark:bg-gray-800 fixed z-30"},a.a.createElement("div",{className:"w-screen mx-auto px-2 sm:px-6 lg:px-8"},a.a.createElement("div",{className:"relative flex items-center justify-between h-16"},a.a.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},a.a.createElement("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-expanded":"false",onClick:function toggleMenuState(){return r((function(e){return!e}))}},a.a.createElement("span",{className:"sr-only"},"Open main menu"),a.a.createElement("svg",{className:"h-6 w-6 "+(t?"hidden":"block"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})),a.a.createElement("svg",{className:"h-6 w-6 "+(t?"block":"hidden"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})))),a.a.createElement("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},a.a.createElement("div",{className:"flex-shrink-0 flex items-center absolute top-0"},a.a.createElement(o.Link,{to:"/"},a.a.createElement("img",{className:"w-14",src:c.a,alt:"Morning Soccer League"}))),a.a.createElement("div",{className:"hidden sm:block sm:ml-14 md:ml-16 lg:ml-24"},a.a.createElement("div",{className:"flex space-x-4"},s.map((function(e){return a.a.createElement(o.Link,{to:e.href,className:"px-2 py-2 font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-red-700"},e.name)})))),a.a.createElement("div",{className:"flex-1 flex items-center justify-end sm:justify-end"},a.a.createElement(l,null))))),a.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-800 "+(t?"block":"hidden")+" md:hidden"},a.a.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},s.map((function(e){return a.a.createElement(o.Link,{to:e.href,className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-red-700 block px-3 py-2 text-base font-medium"},e.name)}))))))};u.defaultProps={siteTitle:""};var f=u,p=function MslContact(){return a.a.createElement("div",null,a.a.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},a.a.createElement("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},a.a.createElement("span",{className:"block text-indigo-600 dark:text-indigo-400"},"Interested to play?")),a.a.createElement("div",{className:"mt-8 lex lg:mt-0 lg:flex-shrink-0"},a.a.createElement("div",{className:"ml-3 inline-flex rounded-md shadow"},a.a.createElement("a",{href:"mailto:morningsoccerleague@gmail.com",className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"},"Contact Us")))))},m=r("YlVc"),d=r.n(m);t.a=function Layout(e){var t,r=e.children,n=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex flex-col h-screen justify-between"},a.a.createElement(f,{siteTitle:(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.a.createElement("main",{className:"flex-grow mt-16 bg-gray-50 dark:bg-gray-700 pb-10"},r),a.a.createElement("footer",{className:"bg-gray-100 dark:bg-gray-800"},a.a.createElement(p,null),a.a.createElement("div",{className:"pt-2"},a.a.createElement("div",{className:"flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl"},a.a.createElement("div",{className:"mt-2"},"Copyright: © ",(new Date).getFullYear()," Morning Soccer League. All Rights Reserved."),a.a.createElement("div",{className:"md:flex-auto md:flex-row-reverse mt-2 flex-row flex"},a.a.createElement("a",{href:"https://www.facebook.com/morningsoccerleague/",target:"_blank",className:"w-8 mx-1"},a.a.createElement("img",{alt:"Facebook",src:d.a}))))))))}},"R2/8":function(e,t,r){e.exports=r.p+"static/msl-logo-e84201686eae4d41872cfaba233c21ea.svg"},YlVc:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI5MS4zMTkgMjkxLjMxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkxLjMxOSAyOTEuMzE5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzNCNTk5ODsiIGQ9Ik0xNDUuNjU5LDBjODAuNDUsMCwxNDUuNjYsNjUuMjE5LDE0NS42NiwxNDUuNjZjMCw4MC40NS02NS4yMSwxNDUuNjU5LTE0NS42NiwxNDUuNjU5CgkJUzAsMjI2LjEwOSwwLDE0NS42NkMwLDY1LjIxOSw2NS4yMSwwLDE0NS42NTksMHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTYzLjM5NCwxMDAuMjc3aDE4Ljc3MnYtMjcuNzNoLTIyLjA2N3YwLjFjLTI2LjczOCwwLjk0Ny0zMi4yMTgsMTUuOTc3LTMyLjcwMSwzMS43NjNoLTAuMDU1CgkJdjEzLjg0N2gtMTguMjA3djI3LjE1NmgxOC4yMDd2NzIuNzkzaDI3LjQzOXYtNzIuNzkzaDIyLjQ3N2w0LjM0Mi0yNy4xNTZoLTI2Ljgxdi04LjM2NgoJCUMxNTQuNzkxLDEwNC41NTYsMTU4LjM0MSwxMDAuMjc3LDE2My4zOTQsMTAwLjI3N3oiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function isEqual(e,t){try{return function equal(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var i,c,l,s;if(Array.isArray(e)){if((i=e.length)!=t.length)return!1;for(c=i;0!=c--;)if(!equal(e[c],t[c]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!t.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!equal(c.value[1],t.get(c.value[0])))return!1;return!0}if(a&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((i=e.length)!=t.length)return!1;for(c=i;0!=c--;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((i=(l=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(c=i;0!=c--;)if(!Object.prototype.hasOwnProperty.call(t,l[c]))return!1;if(r&&e instanceof Element)return!1;for(c=i;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!equal(e[l[c]],t[l[c]]))return!1;return!0}return e!=e&&t!=t}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},fJVW:function(e,t,r){e.exports=r.p+"static/og-fe47d75b74038bd1745f5add4fcc18d0.jpg"},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return fe}));r("E9XD");var n,a=r("17x9"),o=r.n(a),i=r("8+s/"),c=r.n(i),l=r("ZhWT"),s=r.n(l),u=r("q1tI"),f=r.n(u),p=r("YVoz"),m=r.n(p),d="bodyAttributes",h="htmlAttributes",g="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(y).map((function(e){return y[e]})),"charset"),v="cssText",w="href",T="http-equiv",E="innerHTML",x="itemprop",C="name",S="property",N="rel",A="src",k="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",O="encodeSpecialCharacters",P="onChangeClientState",I="titleTemplate",z=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),D=[y.NOSCRIPT,y.SCRIPT,y.STYLE],R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Z=function possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function encodeSpecialCharacters(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function getTitleFromPropsList(e){var t=V(e,y.TITLE),r=V(e,I);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=V(e,M);return t||n||void 0},K=function getOnChangeClientState(e){return V(e,P)||function(){}},_=function getAttributesFromPropsList(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},q=function getBaseTagFromPropsList(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},J=function getTagsFromPropsList(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===N&&"canonical"===e[r].toLowerCase()||l===N&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==E&&c!==v&&c!==x||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=m()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},V=function getInnermostProperty(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},G=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){G(e)}),0)}),Q=function cafPolyfill(e){return clearTimeout(e)},X="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:e.requestAnimationFrame||G,$="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:e.cancelAnimationFrame||Q,ee=function warn(e){return console&&"function"==typeof console.warn&&console.warn(e)},te=null,re=function commitTagChanges(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;oe(y.BODY,n),oe(y.HTML,a),ae(f,p);var m={baseTag:ie(y.BASE,r),linkTags:ie(y.LINK,o),metaTags:ie(y.META,i),noscriptTags:ie(y.NOSCRIPT,c),scriptTags:ie(y.SCRIPT,s),styleTags:ie(y.STYLE,u)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ne=function flattenArray(e){return Array.isArray(e)?e.join(""):e},ae=function updateTitle(e,t){void 0!==e&&document.title!==e&&(document.title=ne(e)),oe(y.TITLE,t)},oe=function updateAttributes(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ie=function updateTags(e,t){var r=document.head||document.querySelector(y.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===v)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ce=function generateElementAttributesAsString(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},le=function convertElementAttributestoReactProps(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},se=function getMethodsForTag(e,t,r){switch(e){case y.TITLE:return{toComponent:function toComponent(){return function generateTitleAsReactComponent(e,t,r){var n,a=((n={key:t})["data-react-helmet"]=!0,n),o=le(r,a);return[f.a.createElement(y.TITLE,o,t)]}(0,t.title,t.titleAttributes)},toString:function toString(){return function generateTitleAsString(e,t,r,n){var a=ce(r),o=ne(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case d:case h:return{toComponent:function toComponent(){return le(t)},toString:function toString(){return ce(t)}};default:return{toComponent:function toComponent(){return function generateTagsAsReactComponent(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===E||r===v){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),f.a.createElement(e,a)}))}(e,t)},toString:function toString(){return function generateTagsAsString(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===E||e===v)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},ue=function mapStateOnServer(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:se(y.BASE,t,n),bodyAttributes:se(d,r,n),htmlAttributes:se(h,a,n),link:se(y.LINK,o,n),meta:se(y.META,i,n),noscript:se(y.NOSCRIPT,c,n),script:se(y.SCRIPT,l,n),style:se(y.STYLE,s,n),title:se(y.TITLE,{title:f,titleAttributes:p},n)}},fe=function Helmet(e){var t,r;return r=t=function(t){function HelmetWrapper(){return W(this,HelmetWrapper),Z(this,t.apply(this,arguments))}return function inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(HelmetWrapper,t),HelmetWrapper.prototype.shouldComponentUpdate=function shouldComponentUpdate(e){return!s()(this.props,e)},HelmetWrapper.prototype.mapNestedChildrenToProps=function mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},HelmetWrapper.prototype.flattenArrayTypeChildren=function flattenArrayTypeChildren(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,o))]),t))},HelmetWrapper.prototype.mapObjectTypeChildren=function mapObjectTypeChildren(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case y.TITLE:return U({},a,((t={})[n.type]=i,t.titleAttributes=U({},o),t));case y.BODY:return U({},a,{bodyAttributes:U({},o)});case y.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((r={})[n.type]=U({},o),r))},HelmetWrapper.prototype.mapArrayTypeChildrenToProps=function mapArrayTypeChildrenToProps(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},HelmetWrapper.prototype.warnOnInvalidChildren=function warnOnInvalidChildren(e,t){return!0},HelmetWrapper.prototype.mapChildrenToProps=function mapChildrenToProps(e,t){var r=this,n={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function convertReactPropstoHtmlAttributes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(B(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},HelmetWrapper.prototype.render=function render(){var t=this.props,r=t.children,n=B(t,["children"]),a=U({},n);return r&&(a=this.mapChildrenToProps(r,a)),f.a.createElement(e,a)},H(HelmetWrapper,null,[{key:"canUseDOM",set:function set$$1(t){e.canUseDOM=t}}]),HelmetWrapper}(f.a.Component),t.propTypes={base:o.a.object,bodyAttributes:o.a.object,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),defaultTitle:o.a.string,defer:o.a.bool,encodeSpecialCharacters:o.a.bool,htmlAttributes:o.a.object,link:o.a.arrayOf(o.a.object),meta:o.a.arrayOf(o.a.object),noscript:o.a.arrayOf(o.a.object),onChangeClientState:o.a.func,script:o.a.arrayOf(o.a.object),style:o.a.arrayOf(o.a.object),title:o.a.string,titleAttributes:o.a.object,titleTemplate:o.a.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(c()((function reducePropsToState(e){return{baseTag:q([w,k],e),bodyAttributes:_(d,e),defer:V(e,L),encode:V(e,O),htmlAttributes:_(h,e),linkTags:J(y.LINK,[N,w],e),metaTags:J(y.META,[C,b,T,S,x],e),noscriptTags:J(y.NOSCRIPT,[E],e),onChangeClientState:K(e),scriptTags:J(y.SCRIPT,[A,E],e),styleTags:J(y.STYLE,[v],e),title:F(e),titleAttributes:_(g,e)}}),(function handleClientStateChange(e){te&&$(te),e.defer?te=X((function(){re(e,(function(){te=null}))})):(re(e),te=null)}),ue)((function NullComponent(){return null})));fe.renderStatic=fe.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz"),c=r("fJVW"),l=r.n(c),s=r("33yf");function SEO(e){var t,r,n=e.description,c=e.lang,u=e.meta,f=e.title,p=e.image,m=e.path,d=Object(i.useStaticQuery)("127183153").site,h=d.siteMetadata.siteUrl,g=d.siteMetadata.pathPrefix,y=n||d.siteMetadata.description,b=null===(t=d.siteMetadata)||void 0===t?void 0:t.title,v=p||l.a,w=function isValidUrl(e){try{new URL(e)}catch(t){return!1}return!0}(v)?v:""+h+v,T=Object(s.join)(g,m||"/"),E=new URL(T,h).href;return a.a.createElement(o.a,{htmlAttributes:{lang:c},title:f,titleTemplate:b?"%s | "+b:null,meta:[{name:"description",content:y},{property:"og:title",content:f},{property:"og:image",content:w},{property:"og:description",content:y},{property:"og:type",content:"website"},{property:"og:url",content:E},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(r=d.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:f},{name:"twitter:description",content:y},{property:"twitter:image",content:w}].concat(u)},a.a.createElement("link",{rel:"canonical",href:E}))}SEO.defaultProps={lang:"en",meta:[],description:""},t.a=SEO}}]);
//# sourceMappingURL=commons-926c0a02f7eb88335f54.js.map