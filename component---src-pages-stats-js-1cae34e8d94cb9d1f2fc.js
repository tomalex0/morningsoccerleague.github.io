(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+MOk":function(n,r,a){"use strict";a.r(r);var i=a("q1tI"),o=a.n(i),u=(a("Wbzz"),a("Bl7J")),s=a("tBDR"),l=a("vrFN");r.default=function IndexPage(n){var r=n.path;return o.a.createElement(u.a,null,o.a.createElement(l.a,{title:"Stats",path:r}),o.a.createElement("h1",null,"Hi Stats"),o.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},o.a.createElement(s.a,null)))}},OH5k:function(n,r,a){"use strict";a.d(r,"a",(function(){return z})),a.d(r,"b",(function(){return Q})),a.d(r,"c",(function(){return F})),a.d(r,"d",(function(){return B})),a.d(r,"e",(function(){return f})),a.d(r,"f",(function(){return C})),a.d(r,"g",(function(){return V})),a.d(r,"h",(function(){return Y})),a.d(r,"i",(function(){return N})),a.d(r,"j",(function(){return T}));a("E9XD");var i=a("q1tI"),o=a.n(i),u=a("17x9"),s=a.n(u);function h(){return(h=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n}).apply(this,arguments)}function f(n,r){if(null==n)return{};var a,i,o={},u=Object.keys(n);for(i=0;i<u.length;i++)r.indexOf(a=u[i])>=0||(o[a]=n[a]);return o}var l=function(){function t(n,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,a){return r&&t(n.prototype,r),a&&t(n,a),n}}(),c=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function m(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var d=function(){function t(){for(var n=this,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return m(this,t),this.tag=function(r){for(var a=arguments.length,i=Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return"function"==typeof r?n.interimTag.bind(n,r):"string"==typeof r?n.transformEndResult(r):(r=r.map(n.transformString.bind(n)),n.transformEndResult(r.reduce(n.processSubstitutions.bind(n,i))))},a.length>0&&Array.isArray(a[0])&&(a=a[0]),this.transformers=a.map((function(n){return"function"==typeof n?n():n})),this.tag}return l(t,[{key:"interimTag",value:function value(n,r){for(var a=arguments.length,i=Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];return this.tag(c,n.apply(void 0,[r].concat(i)))}},{key:"processSubstitutions",value:function value(n,r,a){var i=this.transformSubstitution(n.shift(),r);return"".concat(r,i,a)}},{key:"transformString",value:function value(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function value(n,r){return this.transformers.reduce((function(n,a){return a.onSubstitution?a.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function value(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),t}(),g=function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function onEndResult(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};function y(n){if(Array.isArray(n)){for(var r=0,a=Array(n.length);r<n.length;r++)a[r]=n[r];return a}return Array.from(n)}var p=function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function onEndResult(r){if("initial"===n){var a=r.match(/^[^\S\n]*(?=\S)/gm),i=a&&Math.min.apply(Math,y(a.map((function(n){return n.length}))));if(i){var o=new RegExp("^.{"+i+"}","gm");return r.replace(o,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},w=function E(n,r){return{onEndResult:function onEndResult(a){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return a.replace(n,r)}}},O=function S(n,r){return{onSubstitution:function onSubstitution(a,i){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==a?a:a.toString().replace(n,r)}}},k={separator:"",conjunction:"",serial:!1},x=function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return{onSubstitution:function onSubstitution(r,a){if(Array.isArray(r)){var i=r.length,o=n.separator,u=n.conjunction,s=n.serial,l=a.match(/(\n?[^\S\n]+)$/);if(r=r.join(l?o+l[1]:o+" "),u&&i>1){var c=r.lastIndexOf(o);r=r.slice(0,c)+(s?o:"")+" "+u+r.slice(c+1)}}return r}}},L=function M(n){return{onSubstitution:function onSubstitution(r,a){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},q=function R(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n};new d(x({separator:","}),p,g),new d(x({separator:",",conjunction:"and"}),p,g),new d(x({separator:",",conjunction:"or"}),p,g),new d(L("\n"),(function(){return{onSubstitution:function onSubstitution(n){return Array.isArray(n)?n.filter(q):q(n)?n:""}}}),x,p,g),new d(L("\n"),x,p,g,O(/&/g,"&amp;"),O(/</g,"&lt;"),O(/>/g,"&gt;"),O(/"/g,"&quot;"),O(/'/g,"&#x27;"),O(/`/g,"&#x60;")),new d(w(/(?:\n(?:\s*))+/g," "),g),new d(w(/(?:\n\s*)/g,""),g),new d(x({separator:","}),w(/(?:\s+)/g," "),g),new d(x({separator:",",conjunction:"or"}),w(/(?:\s+)/g," "),g),new d(x({separator:",",conjunction:"and"}),w(/(?:\s+)/g," "),g),new d(x,p,g),new d(x,w(/(?:\s+)/g," "),g),new d(p,g);new d(p("all"),g);var I=new Set,T="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function P(n){n&&I.add(n)}function C(n){return I.has(n)}var N=function D(n){var r;return null==n||null==(r=n.childImageSharp)?void 0:r.gatsbyImageData};function Y(n,r,a,i,o,u,s){return h({},a,{loading:i,shouldLoad:n,"data-main-image":"",style:{opacity:r?1:0},onLoad:function onLoad(n){if(!r){P(u);var a=n.currentTarget,i=new Image;i.src=a.currentSrc,i.decode?i.decode().catch((function(){})).then((function(){o(!0)})):o(!0)}},ref:s})}function V(n,r,a,i,o,u){var s={};return u&&(s.backgroundColor=u,"fixed"===a?(s.width=i,s.height=o,s.backgroundColor=u,s.position="relative"):("constrained"===a||"fluid"===a)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),h({},n,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:r?0:1,transition:"opacity 500ms linear"},s)})}var A=function J(n){var r=n.as,u=void 0===r?"div":r,s=n.style,l=n.className,c=n.onStartLoad,d=n.image,g=n.onLoad,p=f(n,["as","style","className","onStartLoad","image","onLoad"]);if(!d)return null;var w,O,k,x,L=d.width,q=d.height,I=d.layout,N=d.images,A=Object(i.useRef)(),z=Object(i.useRef)(!1),H=Object(i.useRef)(null),W=Object(i.useRef)(null),_=Object(i.useRef)(),B=Object(i.useState)(T),F=B[0],G=B[1],Q=Object(i.useState)(!1),X=Q[0],Z=Q[1],ee=(w=L,O=q,x={position:"relative"},"fixed"===(k=I)?(x.width=w,x.height=O):"constrained"===k&&(x.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:x}),te=ee.style,ne=ee.className,re=f(ee,["style","className"]);return Object(i.useEffect)((function(){if(A.current){var n=A.current.querySelector("[data-gatsby-image-ssr]");if(T&&n)return null==c||c({wasCached:!1}),n.complete&&(null==g||g(),P(JSON.stringify(N))),void n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==g||g(),P(JSON.stringify(N))}));a.e(18).then(a.bind(null,"vJ1Z")).then((function(n){var r=(0,n.createIntersectionObserver)((function(){A.current&&(null==c||c({wasCached:!1}),G(!0))}));A.current&&(H.current=r(A))}))}return function(){H.current&&(H.current(A),z.current&&W.current&&W.current())}}),[]),Object(i.useEffect)((function(){if(A.current){var n=A.current.querySelector("[data-gatsby-image-ssr]");if(T&&n&&!z.current)return;a.e(19).then(a.bind(null,"L+sa")).then((function(n){W.current=(0,n.lazyHydrate)(h({image:d,isLoading:F,isLoaded:X,toggleIsLoaded:function toggleIsLoaded(){null==g||g(),Z(!0)},ref:_},p),A,z)}))}}),[L,q,I,N,F,X,Z,_,p]),o.a.createElement(u,Object.assign({},re,{style:h({},te,s),className:ne+(l?" "+l:""),ref:A,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))},z=function U(n){return o.a.createElement(A,Object.assign({},n))};z.displayName="GatsbyImage";var H,W=function $(n){var r=n.src,a=n.srcSet,i=n.loading,u=n.alt,s=void 0===u?"":u,l=n.shouldLoad,c=n.innerRef,d=f(n,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return o.a.createElement("img",Object.assign({},d,{decoding:"async",loading:i,src:l?r:void 0,"data-src":l?void 0:r,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s,ref:c}))},_=Object(i.forwardRef)((function(n,r){var a=n.fallback,i=n.sources,u=void 0===i?[]:i,s=n.shouldLoad,l=void 0===s||s,c=f(n,["fallback","sources","shouldLoad"]),d=o.a.createElement(W,Object.assign({},c,a,{shouldLoad:l,innerRef:r}));return u.length?o.a.createElement("picture",null,u.map((function(n){var r=n.media,a=n.srcSet,i=n.type;return o.a.createElement("source",{key:r+"-"+i+"-"+a,type:i,media:r,srcSet:a})})),d):d}));W.propTypes={src:u.string.isRequired,alt:u.string.isRequired,sizes:u.string,srcSet:u.string,shouldLoad:u.bool},_.displayName="Picture",_.propTypes={alt:u.string.isRequired,shouldLoad:u.bool,fallback:Object(u.exact)({src:u.string.isRequired,srcSet:u.string,sizes:u.string}),sources:Object(u.arrayOf)(Object(u.oneOfType)([Object(u.exact)({media:u.string.isRequired,type:u.string,sizes:u.string,srcSet:u.string.isRequired}),Object(u.exact)({media:u.string,type:u.string.isRequired,sizes:u.string,srcSet:u.string.isRequired})]))};var B=function K(n){var r=n.fallback,a=f(n,["fallback"]);return r?o.a.createElement(_,Object.assign({},a,{fallback:{src:r},"aria-hidden":!0,alt:""})):o.a.createElement("div",Object.assign({},a))};B.displayName="Placeholder",B.propTypes={fallback:u.string,sources:null==(H=_.propTypes)?void 0:H.sources,alt:function alt(n,r,a){return n[r]?new Error("Invalid prop `"+r+"` supplied to `"+a+"`. Validation failed."):null}};var F=Object(i.forwardRef)((function(n,r){var a=h({},n);return o.a.createElement(_,Object.assign({ref:r},a))}));F.displayName="MainImage",F.propTypes=_.propTypes;var G,Q=function tt(n){var r=n.layout,a=n.width,u=n.height,s=n.children,l=null;return"fluid"===r&&(l=o.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:u/a*100+"%"}})),"constrained"===r&&(l=o.a.createElement("div",{style:{maxWidth:a,display:"block"}},o.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+u+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),o.a.createElement(i.Fragment,null,l,s,!1)},X=function et(n,r){if("fluid"===n.layout||"constrained"===n.layout){if("maxWidth"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"');if(("width"===r||"height"===r)&&n[r])return new Error('"'+r+'" '+n[r]+' may not be passed when layout is "'+n.layout+'"')}else{if(("maxWidth"===r||"maxHeight"===r)&&n[r])return new Error('"'+r+'" may not be passed when layout is "'+n.layout+'"');if("width"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"')}return s.a.number.apply(s.a,[n,r].concat([].slice.call(arguments,2)))},Z={src:s.a.string.isRequired,alt:s.a.string.isRequired,width:X,height:X,maxHeight:X,maxWidth:X,sizes:s.a.string},ee=(G=z,function(n){var r=n.src,a=n.__imageData,i=n.__error,u=f(n,["src","__imageData","__error","width","maxWidth","height","maxHeight","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","blurredOptions"]);return i&&console.warn(i),a?o.a.createElement(G,Object.assign({image:a},u)):(console.warn("Image not loaded",r),null)});ee.displayName="StaticImage",ee.propTypes=Z},tBDR:function(n,r,a){"use strict";var i=a("q1tI"),o=a.n(i),u=a("Wbzz"),s=a("OH5k");r.a=function Image(){var n=Object(u.useStaticQuery)("3222596441"),r=Object(s.i)(n.placeholderImage);return r?o.a.createElement(s.a,{image:r,alt:"Astronaut"}):o.a.createElement("div",null,"Picture not found")}}}]);
//# sourceMappingURL=component---src-pages-stats-js-1cae34e8d94cb9d1f2fc.js.map