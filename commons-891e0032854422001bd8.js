(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"33yf":function(e,t,r){(function(e){function normalizeArray(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function filter(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",r=!1,n=arguments.length-1;n>=-1&&!r;n--){var o=n>=0?arguments[n]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return(r?"/":"")+(t=normalizeArray(filter(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var n=t.isAbsolute(e),o="/"===r(e,-1);return(e=normalizeArray(filter(e.split("/"),(function(e){return!!e})),!n).join("/"))||n||(e="."),e&&o&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(filter(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function trim(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var n=trim(e.split("/")),o=trim(r.split("/")),i=Math.min(n.length,o.length),a=i,u=0;u<i;u++)if(n[u]!==o[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){n=i;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function basename(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var u=e.charCodeAt(a);if(47!==u)-1===n&&(o=!1,n=a+1),46===u?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){r=a+1;break}}return-1===t||-1===n||0===i||1===i&&t===n-1&&t===r+1?"":e.slice(t,n)};var r="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("8oxB"))},"8+s/":function(e,t,r){"use strict";var n=r("q1tI"),o=function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}(n);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function withSideEffect(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function wrap(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function emitChange(){u=e(c.map((function(e){return e.props}))),s.canUseDOM?t(u):r&&(u=r(u))}var s=function(e){function SideEffect(){return e.apply(this,arguments)||this}!function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(SideEffect,e),SideEffect.peek=function peek(){return u},SideEffect.rewind=function rewind(){if(SideEffect.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var t=SideEffect.prototype;return t.UNSAFE_componentWillMount=function UNSAFE_componentWillMount(){c.push(this),emitChange()},t.componentDidUpdate=function componentDidUpdate(){emitChange()},t.componentWillUnmount=function componentWillUnmount(){var e=c.indexOf(this);c.splice(e,1),emitChange()},t.render=function render(){return o.createElement(a,this.props)},SideEffect}(n.PureComponent);return _defineProperty(s,"displayName","SideEffect("+function getDisplayName(e){return e.displayName||e.name||"Component"}(a)+")"),_defineProperty(s,"canUseDOM",i),s}}},"8oxB":function(e,t){var r,n,o=e.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(r===setTimeout)return setTimeout(e,0);if((r===defaultSetTimout||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){r=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var i,a=[],u=!1,c=-1;function cleanUpNextTick(){u&&i&&(u=!1,i.length?a=i.concat(a):c=-1,a.length&&drainQueue())}function drainQueue(){if(!u){var e=runTimeout(cleanUpNextTick);u=!0;for(var t=a.length;t;){for(i=a,a=[];++c<t;)i&&i[c].run();c=-1,t=a.length}i=null,u=!1,function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new Item(e,t)),1!==a.length||u||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"8ypT":function(e,t,r){},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("Wbzz"),a=function Header(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};a.defaultProps={siteTitle:""};var u=a;r("8ypT"),t.a=function Layout(e){var t,r=e.children,n=Object(i.useStaticQuery)("3649515864");return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{siteTitle:(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},o.a.createElement("main",null,r),o.a.createElement("footer",{style:{marginTop:"2rem"}},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function isEqual(e,t){try{return function equal(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var a,u,c,s;if(Array.isArray(e)){if((a=e.length)!=t.length)return!1;for(u=a;0!=u--;)if(!equal(e[u],t[u]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!equal(u.value[1],t.get(u.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!t.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((a=e.length)!=t.length)return!1;for(u=a;0!=u--;)if(e[u]!==t[u])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((a=(c=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(t,c[u]))return!1;if(r&&e instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!equal(e[c[u]],t[c[u]]))return!1;return!0}return e!=e&&t!=t}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},fJVW:function(e,t,r){e.exports=r.p+"static/og-fe47d75b74038bd1745f5add4fcc18d0.jpg"},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return fe}));r("E9XD");var n,o=r("17x9"),i=r.n(o),a=r("8+s/"),u=r.n(a),c=r("ZhWT"),s=r.n(c),l=r("q1tI"),f=r.n(l),p=r("YVoz"),d=r.n(p),m="bodyAttributes",h="htmlAttributes",y="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(g).map((function(e){return g[e]})),"charset"),b="cssText",v="href",w="http-equiv",A="innerHTML",C="itemprop",E="name",S="property",O="rel",P="src",j="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",x="defer",I="encodeSpecialCharacters",M="onChangeClientState",H="titleTemplate",N=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),R=[g.NOSCRIPT,g.SCRIPT,g.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_=function classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D=function objectWithoutProperties(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function encodeSpecialCharacters(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function getTitleFromPropsList(e){var t=Q(e,g.TITLE),r=Q(e,H);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},Y=function getOnChangeClientState(e){return Q(e,M)||function(){}},V=function getAttributesFromPropsList(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},K=function getBaseTagFromPropsList(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},J=function getTagsFromPropsList(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||r===O&&"canonical"===e[r].toLowerCase()||c===O&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==A&&u!==b&&u!==C||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=d()({},n[u],o[u]);n[u]=c}return e}),[]).reverse()},Q=function getInnermostProperty(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),Z=function cafPolyfill(e){return clearTimeout(e)},G="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,X="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:e.cancelAnimationFrame||Z,ee=function warn(e){return console&&"function"==typeof console.warn&&console.warn(e)},te=null,re=function commitTagChanges(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ie(g.BODY,n),ie(g.HTML,o),oe(f,p);var d={baseTag:ae(g.BASE,r),linkTags:ae(g.LINK,i),metaTags:ae(g.META,a),noscriptTags:ae(g.NOSCRIPT,u),scriptTags:ae(g.SCRIPT,s),styleTags:ae(g.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,m,h)},ne=function flattenArray(e){return Array.isArray(e)?e.join(""):e},oe=function updateTitle(e,t){void 0!==e&&document.title!==e&&(document.title=ne(e)),ie(g.TITLE,t)},ie=function updateAttributes(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var l=i.indexOf(c);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},ae=function updateTags(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===b)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function generateElementAttributesAsString(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ce=function convertElementAttributestoReactProps(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[k[r]||r]=e[r],t}),t)},se=function getMethodsForTag(e,t,r){switch(e){case g.TITLE:return{toComponent:function toComponent(){return function generateTitleAsReactComponent(e,t,r){var n,o=((n={key:t})["data-react-helmet"]=!0,n),i=ce(r,o);return[f.a.createElement(g.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function toString(){return function generateTitleAsString(e,t,r,n){var o=ue(r),i=ne(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case m:case h:return{toComponent:function toComponent(){return ce(t)},toString:function toString(){return ue(t)}};default:return{toComponent:function toComponent(){return function generateTagsAsReactComponent(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=k[e]||e;if(r===A||r===b){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),f.a.createElement(e,o)}))}(e,t)},toString:function toString(){return function generateTagsAsString(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===A||e===b)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},le=function mapStateOnServer(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:se(g.BASE,t,n),bodyAttributes:se(m,r,n),htmlAttributes:se(h,o,n),link:se(g.LINK,i,n),meta:se(g.META,a,n),noscript:se(g.NOSCRIPT,u,n),script:se(g.SCRIPT,c,n),style:se(g.STYLE,s,n),title:se(g.TITLE,{title:f,titleAttributes:p},n)}},fe=function Helmet(e){var t,r;return r=t=function(t){function HelmetWrapper(){return _(this,HelmetWrapper),F(this,t.apply(this,arguments))}return function inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(HelmetWrapper,t),HelmetWrapper.prototype.shouldComponentUpdate=function shouldComponentUpdate(e){return!s()(this.props,e)},HelmetWrapper.prototype.mapNestedChildrenToProps=function mapNestedChildrenToProps(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},HelmetWrapper.prototype.flattenArrayTypeChildren=function flattenArrayTypeChildren(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},o,this.mapNestedChildrenToProps(r,i))]),t))},HelmetWrapper.prototype.mapObjectTypeChildren=function mapObjectTypeChildren(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return B({},o,((t={})[n.type]=a,t.titleAttributes=B({},i),t));case g.BODY:return B({},o,{bodyAttributes:B({},i)});case g.HTML:return B({},o,{htmlAttributes:B({},i)})}return B({},o,((r={})[n.type]=B({},i),r))},HelmetWrapper.prototype.mapArrayTypeChildrenToProps=function mapArrayTypeChildrenToProps(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},HelmetWrapper.prototype.warnOnInvalidChildren=function warnOnInvalidChildren(e,t){return!0},HelmetWrapper.prototype.mapChildrenToProps=function mapChildrenToProps(e,t){var r=this,n={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function convertReactPropstoHtmlAttributes(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[N[r]||r]=e[r],t}),t)}(D(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},HelmetWrapper.prototype.render=function render(){var t=this.props,r=t.children,n=D(t,["children"]),o=B({},n);return r&&(o=this.mapChildrenToProps(r,o)),f.a.createElement(e,o)},q(HelmetWrapper,null,[{key:"canUseDOM",set:function set$$1(t){e.canUseDOM=t}}]),HelmetWrapper}(f.a.Component),t.propTypes={base:i.a.object,bodyAttributes:i.a.object,children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]),defaultTitle:i.a.string,defer:i.a.bool,encodeSpecialCharacters:i.a.bool,htmlAttributes:i.a.object,link:i.a.arrayOf(i.a.object),meta:i.a.arrayOf(i.a.object),noscript:i.a.arrayOf(i.a.object),onChangeClientState:i.a.func,script:i.a.arrayOf(i.a.object),style:i.a.arrayOf(i.a.object),title:i.a.string,titleAttributes:i.a.object,titleTemplate:i.a.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=le({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(u()((function reducePropsToState(e){return{baseTag:K([v,j],e),bodyAttributes:V(m,e),defer:Q(e,x),encode:Q(e,I),htmlAttributes:V(h,e),linkTags:J(g.LINK,[O,v],e),metaTags:J(g.META,[E,T,w,S,C],e),noscriptTags:J(g.NOSCRIPT,[A],e),onChangeClientState:Y(e),scriptTags:J(g.SCRIPT,[P,A],e),styleTags:J(g.STYLE,[b],e),title:z(e),titleAttributes:V(y,e)}}),(function handleClientStateChange(e){te&&X(te),e.defer?te=G((function(){re(e,(function(){te=null}))})):(re(e),te=null)}),le)((function NullComponent(){return null})));fe.renderStatic=fe.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("qhky"),a=r("Wbzz"),u=r("fJVW"),c=r.n(u),s=r("33yf");function SEO(e){var t,r,n=e.description,u=e.lang,l=e.meta,f=e.title,p=e.image,d=e.path,m=Object(a.useStaticQuery)("127183153").site,h=m.siteMetadata.siteUrl,y=m.siteMetadata.pathPrefix,g=n||m.siteMetadata.description,T=null===(t=m.siteMetadata)||void 0===t?void 0:t.title,b=p||c.a,v=function isValidUrl(e){try{new URL(e)}catch(t){return!1}return!0}(b)?b:""+h+b,w=Object(s.join)(y,d||"/"),A=new URL(w,h).href;return o.a.createElement(i.a,{htmlAttributes:{lang:u},title:f,titleTemplate:T?"%s | "+T:null,meta:[{name:"description",content:g},{property:"og:title",content:f},{property:"og:image",content:v},{property:"og:description",content:g},{property:"og:type",content:"website"},{property:"og:url",content:A},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(r=m.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:f},{name:"twitter:description",content:g},{property:"twitter:image",content:v}].concat(l)},o.a.createElement("link",{rel:"canonical",href:A}))}SEO.defaultProps={lang:"en",meta:[],description:""},t.a=SEO}}]);
//# sourceMappingURL=commons-891e0032854422001bd8.js.map