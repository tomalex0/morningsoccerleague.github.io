(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+MOk":function(n,r,a){"use strict";a.r(r);var i=a("q1tI"),o=a.n(i),s=(a("Wbzz"),a("Bl7J")),u=a("tBDR"),l=a("vrFN");r.default=function IndexPage(n){var r=n.path;return o.a.createElement(s.a,null,o.a.createElement(l.a,{title:"Stats",path:r}),o.a.createElement("h1",null,"Hi Stats"),o.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},o.a.createElement(u.a,null)))}},OH5k:function(n,r,a){"use strict";(function(n){a.d(r,"a",(function(){return z})),a.d(r,"b",(function(){return Q})),a.d(r,"c",(function(){return F})),a.d(r,"d",(function(){return B})),a.d(r,"e",(function(){return f})),a.d(r,"f",(function(){return C})),a.d(r,"g",(function(){return V})),a.d(r,"h",(function(){return Y})),a.d(r,"i",(function(){return q})),a.d(r,"j",(function(){return _}));a("E9XD");var i=a("q1tI"),o=a.n(i),s=a("17x9"),u=a.n(s);function h(){return(h=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n}).apply(this,arguments)}function f(n,r){if(null==n)return{};var a,i,o={},s=Object.keys(n);for(i=0;i<s.length;i++)r.indexOf(a=s[i])>=0||(o[a]=n[a]);return o}var l=function(){function t(n,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,a){return r&&t(n.prototype,r),a&&t(n,a),n}}(),c=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function m(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var d=function(){function t(){for(var n=this,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return m(this,t),this.tag=function(r){for(var a=arguments.length,i=Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return"function"==typeof r?n.interimTag.bind(n,r):"string"==typeof r?n.transformEndResult(r):(r=r.map(n.transformString.bind(n)),n.transformEndResult(r.reduce(n.processSubstitutions.bind(n,i))))},a.length>0&&Array.isArray(a[0])&&(a=a[0]),this.transformers=a.map((function(n){return"function"==typeof n?n():n})),this.tag}return l(t,[{key:"interimTag",value:function value(n,r){for(var a=arguments.length,i=Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];return this.tag(c,n.apply(void 0,[r].concat(i)))}},{key:"processSubstitutions",value:function value(n,r,a){var i=this.transformSubstitution(n.shift(),r);return"".concat(r,i,a)}},{key:"transformString",value:function value(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function value(n,r){return this.transformers.reduce((function(n,a){return a.onSubstitution?a.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function value(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),t}(),g=function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function onEndResult(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};function y(n){if(Array.isArray(n)){for(var r=0,a=Array(n.length);r<n.length;r++)a[r]=n[r];return a}return Array.from(n)}var p=function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function onEndResult(r){if("initial"===n){var a=r.match(/^[^\S\n]*(?=\S)/gm),i=a&&Math.min.apply(Math,y(a.map((function(n){return n.length}))));if(i){var o=new RegExp("^.{"+i+"}","gm");return r.replace(o,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},w=function E(n,r){return{onEndResult:function onEndResult(a){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return a.replace(n,r)}}},O=function S(n,r){return{onSubstitution:function onSubstitution(a,i){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==a?a:a.toString().replace(n,r)}}},k={separator:"",conjunction:"",serial:!1},L=function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return{onSubstitution:function onSubstitution(r,a){if(Array.isArray(r)){var i=r.length,o=n.separator,s=n.conjunction,u=n.serial,l=a.match(/(\n?[^\S\n]+)$/);if(r=r.join(l?o+l[1]:o+" "),s&&i>1){var c=r.lastIndexOf(o);r=r.slice(0,c)+(u?o:"")+" "+s+r.slice(c+1)}}return r}}},x=function M(n){return{onSubstitution:function onSubstitution(r,a){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},I=function R(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n};new d(L({separator:","}),p,g),new d(L({separator:",",conjunction:"and"}),p,g),new d(L({separator:",",conjunction:"or"}),p,g),new d(x("\n"),(function(){return{onSubstitution:function onSubstitution(n){return Array.isArray(n)?n.filter(I):I(n)?n:""}}}),L,p,g),new d(x("\n"),L,p,g,O(/&/g,"&amp;"),O(/</g,"&lt;"),O(/>/g,"&gt;"),O(/"/g,"&quot;"),O(/'/g,"&#x27;"),O(/`/g,"&#x60;")),new d(w(/(?:\n(?:\s*))+/g," "),g),new d(w(/(?:\n\s*)/g,""),g),new d(L({separator:","}),w(/(?:\s+)/g," "),g),new d(L({separator:",",conjunction:"or"}),w(/(?:\s+)/g," "),g),new d(L({separator:",",conjunction:"and"}),w(/(?:\s+)/g," "),g),new d(L,p,g),new d(L,w(/(?:\s+)/g," "),g),new d(p,g);new d(p("all"),g);var T=new Set,_="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function P(n){n&&T.add(n)}function C(n){return T.has(n)}var q=function D(n){var r;return null==n||null==(r=n.childImageSharp)?void 0:r.gatsbyImageData};function Y(r,a,i,o,s,u,l){var c=h({},i,{loading:o,shouldLoad:r,"data-main-image":"",style:{opacity:a?1:0},onLoad:function onLoad(n){if(!a){P(u);var r=n.currentTarget,i=new Image;i.src=r.currentSrc,i.decode?i.decode().catch((function(){})).then((function(){s(!0)})):s(!0)}},ref:l});return n.GATSBY___IMAGE||(c.style.height="100%",c.style.left=0,c.style.position="absolute",c.style.top=0,c.style.transform="translateZ(0)",c.style.transition="opacity 250ms linear",c.style.width="100%",c.style.willChange="opacity",c.style.objectFit="cover"),c}function V(r,a,i,o,s,u){var l={};u&&(l.backgroundColor=u,"fixed"===i?(l.width=o,l.height=s,l.backgroundColor=u,l.position="relative"):("constrained"===i||"fluid"===i)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0));var c=h({},r,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:a?0:1,transition:"opacity 500ms linear"},l)});return n.GATSBY___IMAGE||(c.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),c}var A=!1,N=function J(r){var s=r.as,u=void 0===s?"div":s,l=r.style,c=r.className,d=r.onStartLoad,g=r.image,p=r.onLoad,w=f(r,["as","style","className","onStartLoad","image","onLoad"]);if(!g)return null;var O=g.width,k=g.height,L=g.layout,x=g.images,I=Object(i.useRef)(),T=Object(i.useRef)(!1),q=Object(i.useRef)(null),N=Object(i.useRef)(null),z=Object(i.useRef)(),H=Object(i.useState)(_),G=H[0],W=H[1],B=Object(i.useState)(!1),F=B[0],Z=B[1];n.GATSBY___IMAGE||A||(A=!0,console.warn('[gatsby-plugin-image] You\'re missing out on some cool performance features. Please add "gatsby-plugin-image" to your gatsby-config.js'));var Q,X,ee,te,ne=(Q=O,X=k,te={position:"relative"},"fixed"===(ee=L)?(te.width=Q,te.height=X):"constrained"===ee&&(te.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:te}),re=ne.style,ae=ne.className,ie=f(ne,["style","className"]);return Object(i.useEffect)((function(){if(I.current){var r=I.current.querySelector("[data-gatsby-image-ssr]");if(_&&r&&n.GATSBY___IMAGE)return null==d||d({wasCached:!1}),r.complete&&(null==p||p(),P(JSON.stringify(x))),void r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==p||p(),P(JSON.stringify(x))}));a.e(15).then(a.bind(null,"vJ1Z")).then((function(n){var r=(0,n.createIntersectionObserver)((function(){I.current&&(null==d||d({wasCached:!1}),W(!0))}));I.current&&(q.current=r(I))}))}return function(){q.current&&(q.current(I),T.current&&N.current&&N.current())}}),[]),Object(i.useEffect)((function(){if(I.current){var n=I.current.querySelector("[data-gatsby-image-ssr]");if(_&&n&&!T.current)return;a.e(16).then(a.bind(null,"L+sa")).then((function(n){N.current=(0,n.lazyHydrate)(h({image:g,isLoading:G,isLoaded:F,toggleIsLoaded:function toggleIsLoaded(){null==p||p(),Z(!0)},ref:z},w),I,T)}))}}),[O,k,L,x,G,F,Z,z,w]),o.a.createElement(u,Object.assign({},ie,{style:h({},re,l),className:ae+(c?" "+c:""),ref:I,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))},z=function U(n){return o.a.createElement(N,Object.assign({},n))};z.displayName="GatsbyImage";var H,G=function $(n){var r=n.src,a=n.srcSet,i=n.loading,s=n.alt,u=void 0===s?"":s,l=n.shouldLoad,c=n.innerRef,d=f(n,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return o.a.createElement("img",Object.assign({},d,{decoding:"async",loading:i,src:l?r:void 0,"data-src":l?void 0:r,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:u,ref:c}))},W=Object(i.forwardRef)((function(n,r){var a=n.fallback,i=n.sources,s=void 0===i?[]:i,u=n.shouldLoad,l=void 0===u||u,c=f(n,["fallback","sources","shouldLoad"]),d=o.a.createElement(G,Object.assign({},c,a,{shouldLoad:l,innerRef:r}));return s.length?o.a.createElement("picture",null,s.map((function(n){var r=n.media,a=n.srcSet,i=n.type;return o.a.createElement("source",{key:r+"-"+i+"-"+a,type:i,media:r,srcSet:a})})),d):d}));G.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},W.displayName="Picture",W.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:Object(s.exact)({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:Object(s.arrayOf)(Object(s.oneOfType)([Object(s.exact)({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),Object(s.exact)({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};var B=function K(n){var r=n.fallback,a=f(n,["fallback"]);return r?o.a.createElement(W,Object.assign({},a,{fallback:{src:r},"aria-hidden":!0,alt:""})):o.a.createElement("div",Object.assign({},a))};B.displayName="Placeholder",B.propTypes={fallback:s.string,sources:null==(H=W.propTypes)?void 0:H.sources,alt:function alt(n,r,a){return n[r]?new Error("Invalid prop `"+r+"` supplied to `"+a+"`. Validation failed."):null}};var F=Object(i.forwardRef)((function(n,r){var a=h({},n);return o.a.createElement(W,Object.assign({ref:r},a))}));F.displayName="MainImage",F.propTypes=W.propTypes;var Z,Q=function tt(n){var r=n.layout,a=n.width,s=n.height,u=n.children,l=null;return"fluid"===r&&(l=o.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}})),"constrained"===r&&(l=o.a.createElement("div",{style:{maxWidth:a,display:"block"}},o.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+s+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),o.a.createElement(i.Fragment,null,l,u,!1)},X=function et(n,r){if("fluid"===n.layout||"constrained"===n.layout){if("maxWidth"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"');if(("width"===r||"height"===r)&&n[r])return new Error('"'+r+'" '+n[r]+' may not be passed when layout is "'+n.layout+'"')}else{if(("maxWidth"===r||"maxHeight"===r)&&n[r])return new Error('"'+r+'" may not be passed when layout is "'+n.layout+'"');if("width"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"')}return u.a.number.apply(u.a,[n,r].concat([].slice.call(arguments,2)))},ee={src:u.a.string.isRequired,alt:u.a.string.isRequired,width:X,height:X,maxHeight:X,maxWidth:X,sizes:u.a.string},te=(Z=z,function(n){var r=n.src,a=n.__imageData,i=n.__error,s=f(n,["src","__imageData","__error","width","maxWidth","height","maxHeight","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","blurredOptions"]);return i&&console.warn(i),a?o.a.createElement(Z,Object.assign({image:a},s)):(console.warn("Image not loaded",r),null)});te.displayName="StaticImage",te.propTypes=ee}).call(this,a("yLpj"))},tBDR:function(n,r,a){"use strict";var i=a("q1tI"),o=a.n(i),s=a("Wbzz"),u=a("OH5k");r.a=function Image(){var n=Object(s.useStaticQuery)("3222596441"),r=Object(u.i)(n.placeholderImage);return r?o.a.createElement(u.a,{image:r}):o.a.createElement("div",null,"Picture not found")}}}]);
//# sourceMappingURL=component---src-pages-stats-js-07176a58eb95e3250107.js.map