(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"33yf":function(e,t,r){(function(e){function normalizeArray(e,t){for(var r=0,n=e.length-1;n>=0;n--){var a=e[n];"."===a?e.splice(n,1):".."===a?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function filter(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var a=n>=0?arguments[n]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return(r?"/":"")+(t=normalizeArray(filter(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var n=t.isAbsolute(e),a="/"===r(e,-1);return(e=normalizeArray(filter(e.split("/"),(function(e){return!!e})),!n).join("/"))||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(filter(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function trim(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var n=trim(e.split("/")),a=trim(r.split("/")),o=Math.min(n.length,a.length),i=o,c=0;c<o;c++)if(n[c]!==a[c]){i=c;break}var u=[];for(c=i;c<n.length;c++)u.push("..");return(u=u.concat(a.slice(i))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,a=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!a){n=o;break}}else a=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function basename(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,a=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!a){r=t+1;break}}else-1===n&&(a=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,a=!0,o=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(47!==c)-1===n&&(a=!1,n=i+1),46===c?-1===t?t=i:1!==o&&(o=1):-1!==t&&(o=-1);else if(!a){r=i+1;break}}return-1===t||-1===n||0===o||1===o&&t===n-1&&t===r+1?"":e.slice(t,n)};var r="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("8oxB"))},"8+s/":function(e,t,r){"use strict";var n=r("q1tI"),a=function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function withSideEffect(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function wrap(i){if("function"!=typeof i)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function emitChange(){c=e(u.map((function(e){return e.props}))),s.canUseDOM?t(c):r&&(c=r(c))}var s=function(e){function SideEffect(){return e.apply(this,arguments)||this}!function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(SideEffect,e),SideEffect.peek=function peek(){return c},SideEffect.rewind=function rewind(){if(SideEffect.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var t=SideEffect.prototype;return t.UNSAFE_componentWillMount=function UNSAFE_componentWillMount(){u.push(this),emitChange()},t.componentDidUpdate=function componentDidUpdate(){emitChange()},t.componentWillUnmount=function componentWillUnmount(){var e=u.indexOf(this);u.splice(e,1),emitChange()},t.render=function render(){return a.createElement(i,this.props)},SideEffect}(n.PureComponent);return _defineProperty(s,"displayName","SideEffect("+function getDisplayName(e){return e.displayName||e.name||"Component"}(i)+")"),_defineProperty(s,"canUseDOM",o),s}}},"8oxB":function(e,t){var r,n,a=e.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var o,i=[],c=!1,u=-1;function cleanUpNextTick(){c&&o&&(c=!1,o.length?i=o.concat(i):u=-1,i.length&&drainQueue())}function drainQueue(){if(!c){var e=runTimeout(cleanUpNextTick);c=!0;for(var t=i.length;t;){for(o=i,i=[];++u<t;)o&&o[u].run();u=-1,t=i.length}o=null,c=!1,function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];i.push(new Item(e,t)),1!==i.length||c||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=noop,a.addListener=noop,a.once=noop,a.off=noop,a.removeListener=noop,a.removeAllListeners=noop,a.emit=noop,a.prependListener=noop,a.prependOnceListener=noop,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("R2/8"),c=r.n(i),u=[{name:"Home",href:"/"},{name:"Stats",href:"/stats"},{name:"Teams",href:"/teams"},{name:"Schedule",href:"/schedule"},{name:"Register",href:"/register"},{name:"Rules",href:"/rules"},{name:"GMM",href:"/gmm"},{name:"Contacts",href:"/contacts"}],s=function Header(){var e=Object(n.useState)(!1),t=e[0],r=e[1];return a.a.createElement("header",null,a.a.createElement("nav",{className:"bg-gray-100 dark:bg-gray-800 fixed z-30"},a.a.createElement("div",{className:"w-screen mx-auto px-2 sm:px-6 lg:px-8"},a.a.createElement("div",{className:"relative flex items-center justify-between h-16"},a.a.createElement("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},a.a.createElement("button",{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-expanded":"false",onClick:function toggleMenuState(){return r((function(e){return!e}))}},a.a.createElement("span",{className:"sr-only"},"Open main menu"),a.a.createElement("svg",{className:"h-6 w-6 "+(t?"hidden":"block"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})),a.a.createElement("svg",{className:"h-6 w-6 "+(t?"block":"hidden"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},a.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})))),a.a.createElement("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},a.a.createElement("div",{className:"flex-shrink-0 flex items-center absolute top-0"},a.a.createElement(o.Link,{to:"/"},a.a.createElement("img",{className:"w-14",src:c.a,alt:"Morning Soccer League"}))),a.a.createElement("div",{className:"hidden sm:block sm:ml-14 md:ml-16 lg:ml-24"},a.a.createElement("div",{className:"flex space-x-4"},u.map((function(e){return a.a.createElement(o.Link,{to:e.href,className:"px-2 py-2 font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-red-700"},e.name)}))))))),a.a.createElement("div",{className:"bg-gray-50 dark:bg-gray-800 "+(t?"block":"hidden")+" md:hidden"},a.a.createElement("div",{className:"px-2 pt-2 pb-3 space-y-1"},u.map((function(e){return a.a.createElement(o.Link,{to:e.href,className:"text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-red-700 block px-3 py-2 text-base font-medium"},e.name)}))))))};s.defaultProps={siteTitle:""};var l=s,f=function MslContact(){return a.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-800"},a.a.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"},a.a.createElement("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"},a.a.createElement("span",{className:"block text-indigo-600 dark:text-white"},"Interested to play?")),a.a.createElement("div",{className:"mt-8 lex lg:mt-0 lg:flex-shrink-0"},a.a.createElement("div",{className:"ml-3 inline-flex rounded-md shadow"},a.a.createElement("a",{href:"mailto:morningsoccerleague@gmail.com",className:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"},"Contact Us")))))};t.a=function Layout(e){var t,r=e.children,n=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex flex-col h-screen justify-between"},a.a.createElement(l,{siteTitle:(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.a.createElement("main",{className:"flex-grow mt-16 bg-gray-50 dark:bg-gray-700"},r),a.a.createElement("footer",null,a.a.createElement(f,null))))}},"R2/8":function(e,t,r){e.exports=r.p+"static/msl-logo-e84201686eae4d41872cfaba233c21ea.svg"},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function isEqual(e,t){try{return function equal(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var i,c,u,s;if(Array.isArray(e)){if((i=e.length)!=t.length)return!1;for(c=i;0!=c--;)if(!equal(e[c],t[c]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!t.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!equal(c.value[1],t.get(c.value[0])))return!1;return!0}if(a&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!t.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((i=e.length)!=t.length)return!1;for(c=i;0!=c--;)if(e[c]!==t[c])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((i=(u=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(c=i;0!=c--;)if(!Object.prototype.hasOwnProperty.call(t,u[c]))return!1;if(r&&e instanceof Element)return!1;for(c=i;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!equal(e[u[c]],t[u[c]]))return!1;return!0}return e!=e&&t!=t}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},fJVW:function(e,t,r){e.exports=r.p+"static/og-fe47d75b74038bd1745f5add4fcc18d0.jpg"},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return fe}));r("E9XD");var n,a=r("17x9"),o=r.n(a),i=r("8+s/"),c=r.n(i),u=r("ZhWT"),s=r.n(u),l=r("q1tI"),f=r.n(l),p=r("YVoz"),d=r.n(p),m="bodyAttributes",h="htmlAttributes",y="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(g).map((function(e){return g[e]})),"charset"),v="cssText",T="href",w="http-equiv",E="innerHTML",C="itemprop",A="name",x="property",S="rel",O="src",k="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",N="encodeSpecialCharacters",M="onChangeClientState",I="titleTemplate",R=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),H=[g.NOSCRIPT,g.SCRIPT,g.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function encodeSpecialCharacters(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},D=function getTitleFromPropsList(e){var t=Q(e,g.TITLE),r=Q(e,I);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,P);return t||n||void 0},Y=function getOnChangeClientState(e){return Q(e,M)||function(){}},V=function getAttributesFromPropsList(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},K=function getBaseTagFromPropsList(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},J=function getTagsFromPropsList(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===S&&"canonical"===e[r].toLowerCase()||u===S&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==E&&c!==v&&c!==C||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=d()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},Q=function getInnermostProperty(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),Z=function cafPolyfill(e){return clearTimeout(e)},G="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,X="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:e.cancelAnimationFrame||Z,ee=function warn(e){return console&&"function"==typeof console.warn&&console.warn(e)},te=null,re=function commitTagChanges(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;oe(g.BODY,n),oe(g.HTML,a),ae(f,p);var d={baseTag:ie(g.BASE,r),linkTags:ie(g.LINK,o),metaTags:ie(g.META,i),noscriptTags:ie(g.NOSCRIPT,c),scriptTags:ie(g.SCRIPT,s),styleTags:ie(g.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ne=function flattenArray(e){return Array.isArray(e)?e.join(""):e},ae=function updateTitle(e,t){void 0!==e&&document.title!==e&&(document.title=ne(e)),oe(g.TITLE,t)},oe=function updateAttributes(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},ie=function updateTags(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===v)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ce=function generateElementAttributesAsString(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function convertElementAttributestoReactProps(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},se=function getMethodsForTag(e,t,r){switch(e){case g.TITLE:return{toComponent:function toComponent(){return function generateTitleAsReactComponent(e,t,r){var n,a=((n={key:t})["data-react-helmet"]=!0,n),o=ue(r,a);return[f.a.createElement(g.TITLE,o,t)]}(0,t.title,t.titleAttributes)},toString:function toString(){return function generateTitleAsString(e,t,r,n){var a=ce(r),o=ne(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case h:return{toComponent:function toComponent(){return ue(t)},toString:function toString(){return ce(t)}};default:return{toComponent:function toComponent(){return function generateTagsAsReactComponent(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===E||r===v){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),f.a.createElement(e,a)}))}(e,t)},toString:function toString(){return function generateTagsAsString(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===E||e===v)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+z(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},le=function mapStateOnServer(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:se(g.BASE,t,n),bodyAttributes:se(m,r,n),htmlAttributes:se(h,a,n),link:se(g.LINK,o,n),meta:se(g.META,i,n),noscript:se(g.NOSCRIPT,c,n),script:se(g.SCRIPT,u,n),style:se(g.STYLE,s,n),title:se(g.TITLE,{title:f,titleAttributes:p},n)}},fe=function Helmet(e){var t,r;return r=t=function(t){function HelmetWrapper(){return _(this,HelmetWrapper),F(this,t.apply(this,arguments))}return function inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(HelmetWrapper,t),HelmetWrapper.prototype.shouldComponentUpdate=function shouldComponentUpdate(e){return!s()(this.props,e)},HelmetWrapper.prototype.mapNestedChildrenToProps=function mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},HelmetWrapper.prototype.flattenArrayTypeChildren=function flattenArrayTypeChildren(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,o))]),t))},HelmetWrapper.prototype.mapObjectTypeChildren=function mapObjectTypeChildren(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case g.TITLE:return U({},a,((t={})[n.type]=i,t.titleAttributes=U({},o),t));case g.BODY:return U({},a,{bodyAttributes:U({},o)});case g.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((r={})[n.type]=U({},o),r))},HelmetWrapper.prototype.mapArrayTypeChildrenToProps=function mapArrayTypeChildrenToProps(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},HelmetWrapper.prototype.warnOnInvalidChildren=function warnOnInvalidChildren(e,t){return!0},HelmetWrapper.prototype.mapChildrenToProps=function mapChildrenToProps(e,t){var r=this,n={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function convertReactPropstoHtmlAttributes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(B(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},HelmetWrapper.prototype.render=function render(){var t=this.props,r=t.children,n=B(t,["children"]),a=U({},n);return r&&(a=this.mapChildrenToProps(r,a)),f.a.createElement(e,a)},q(HelmetWrapper,null,[{key:"canUseDOM",set:function set$$1(t){e.canUseDOM=t}}]),HelmetWrapper}(f.a.Component),t.propTypes={base:o.a.object,bodyAttributes:o.a.object,children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),defaultTitle:o.a.string,defer:o.a.bool,encodeSpecialCharacters:o.a.bool,htmlAttributes:o.a.object,link:o.a.arrayOf(o.a.object),meta:o.a.arrayOf(o.a.object),noscript:o.a.arrayOf(o.a.object),onChangeClientState:o.a.func,script:o.a.arrayOf(o.a.object),style:o.a.arrayOf(o.a.object),title:o.a.string,titleAttributes:o.a.object,titleTemplate:o.a.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=le({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(c()((function reducePropsToState(e){return{baseTag:K([T,k],e),bodyAttributes:V(m,e),defer:Q(e,L),encode:Q(e,N),htmlAttributes:V(h,e),linkTags:J(g.LINK,[S,T],e),metaTags:J(g.META,[A,b,w,x,C],e),noscriptTags:J(g.NOSCRIPT,[E],e),onChangeClientState:Y(e),scriptTags:J(g.SCRIPT,[O,E],e),styleTags:J(g.STYLE,[v],e),title:D(e),titleAttributes:V(y,e)}}),(function handleClientStateChange(e){te&&X(te),e.defer?te=G((function(){re(e,(function(){te=null}))})):(re(e),te=null)}),le)((function NullComponent(){return null})));fe.renderStatic=fe.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz"),c=r("fJVW"),u=r.n(c),s=r("33yf");function SEO(e){var t,r,n=e.description,c=e.lang,l=e.meta,f=e.title,p=e.image,d=e.path,m=Object(i.useStaticQuery)("127183153").site,h=m.siteMetadata.siteUrl,y=m.siteMetadata.pathPrefix,g=n||m.siteMetadata.description,b=null===(t=m.siteMetadata)||void 0===t?void 0:t.title,v=p||u.a,T=function isValidUrl(e){try{new URL(e)}catch(t){return!1}return!0}(v)?v:""+h+v,w=Object(s.join)(y,d||"/"),E=new URL(w,h).href;return a.a.createElement(o.a,{htmlAttributes:{lang:c},title:f,titleTemplate:b?"%s | "+b:null,meta:[{name:"description",content:g},{property:"og:title",content:f},{property:"og:image",content:T},{property:"og:description",content:g},{property:"og:type",content:"website"},{property:"og:url",content:E},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(r=m.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:f},{name:"twitter:description",content:g},{property:"twitter:image",content:T}].concat(l)},a.a.createElement("link",{rel:"canonical",href:E}))}SEO.defaultProps={lang:"en",meta:[],description:""},t.a=SEO}}]);
//# sourceMappingURL=commons-c00cb9d70614c5c1f5e7.js.map