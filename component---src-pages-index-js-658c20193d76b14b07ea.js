(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"33Wh":function(a,n,r){var i=r("yoRg"),l=r("eDl+");a.exports=Object.keys||function keys(a){return i(a,l)}},"5e2u":function(a,n,r){"use strict";r.d(n,"a",(function(){return D})),r.d(n,"b",(function(){return B})),r.d(n,"c",(function(){return ee})),r.d(n,"d",(function(){return f})),r.d(n,"e",(function(){return P})),r.d(n,"f",(function(){return h})),r.d(n,"g",(function(){return T})),r.d(n,"h",(function(){return F})),r.d(n,"i",(function(){return _})),r.d(n,"j",(function(){return Y}));r("E9XD");var i=r("q1tI"),l=r.n(i),s=r("17x9"),o=r.n(s);function h(){return(h=Object.assign||function(a){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a}).apply(this,arguments)}function f(a,n){if(null==a)return{};var r,i,l={},s=Object.keys(a);for(i=0;i<s.length;i++)n.indexOf(r=s[i])>=0||(l[r]=a[r]);return l}var c=function(){function t(a,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}return function(a,n,r){return n&&t(a.prototype,n),r&&t(a,r),a}}(),u=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function m(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}var d=function(){function t(){for(var a=this,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return m(this,t),this.tag=function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),l=1;l<r;l++)i[l-1]=arguments[l];return"function"==typeof n?a.interimTag.bind(a,n):"string"==typeof n?a.transformEndResult(n):(n=n.map(a.transformString.bind(a)),a.transformEndResult(n.reduce(a.processSubstitutions.bind(a,i))))},r.length>0&&Array.isArray(r[0])&&(r=r[0]),this.transformers=r.map((function(a){return"function"==typeof a?a():a})),this.tag}return c(t,[{key:"interimTag",value:function value(a,n){for(var r=arguments.length,i=Array(r>2?r-2:0),l=2;l<r;l++)i[l-2]=arguments[l];return this.tag(u,a.apply(void 0,[n].concat(i)))}},{key:"processSubstitutions",value:function value(a,n,r){var i=this.transformSubstitution(a.shift(),n);return"".concat(n,i,r)}},{key:"transformString",value:function value(a){return this.transformers.reduce((function(a,n){return n.onString?n.onString(a):a}),a)}},{key:"transformSubstitution",value:function value(a,n){return this.transformers.reduce((function(a,r){return r.onSubstitution?r.onSubstitution(a,n):a}),a)}},{key:"transformEndResult",value:function value(a){return this.transformers.reduce((function(a,n){return n.onEndResult?n.onEndResult(a):a}),a)}}]),t}(),g=function w(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function onEndResult(n){if(""===a)return n.trim();if("start"===(a=a.toLowerCase())||"left"===a)return n.replace(/^\s*/,"");if("end"===a||"right"===a)return n.replace(/\s*$/,"");throw new Error("Side not supported: "+a)}}};function y(a){if(Array.isArray(a)){for(var n=0,r=Array(a.length);n<a.length;n++)r[n]=a[n];return r}return Array.from(a)}var p=function b(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function onEndResult(n){if("initial"===a){var r=n.match(/^[^\S\n]*(?=\S)/gm),i=r&&Math.min.apply(Math,y(r.map((function(a){return a.length}))));if(i){var l=new RegExp("^.{"+i+"}","gm");return n.replace(l,"")}return n}if("all"===a)return n.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+a)}}},v=function E(a,n){return{onEndResult:function onEndResult(r){if(null==a||null==n)throw new Error("replaceResultTransformer requires at least 2 arguments.");return r.replace(a,n)}}},x=function S(a,n){return{onSubstitution:function onSubstitution(r,i){if(null==a||null==n)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==r?r:r.toString().replace(a,n)}}},N={separator:"",conjunction:"",serial:!1},O=function j(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return{onSubstitution:function onSubstitution(n,r){if(Array.isArray(n)){var i=n.length,l=a.separator,s=a.conjunction,o=a.serial,c=r.match(/(\n?[^\S\n]+)$/);if(n=n.join(c?l+c[1]:l+" "),s&&i>1){var u=n.lastIndexOf(l);n=n.slice(0,u)+(o?l:"")+" "+s+n.slice(u+1)}}return n}}},R=function M(a){return{onSubstitution:function onSubstitution(n,r){if(null==a||"string"!=typeof a)throw new Error("You need to specify a string character to split by.");return"string"==typeof n&&n.includes(a)&&(n=n.split(a)),n}}},A=function k(a){return null!=a&&!Number.isNaN(a)&&"boolean"!=typeof a};new d(O({separator:","}),p,g),new d(O({separator:",",conjunction:"and"}),p,g),new d(O({separator:",",conjunction:"or"}),p,g),new d(R("\n"),(function(){return{onSubstitution:function onSubstitution(a){return Array.isArray(a)?a.filter(A):A(a)?a:""}}}),O,p,g),new d(R("\n"),O,p,g,x(/&/g,"&amp;"),x(/</g,"&lt;"),x(/>/g,"&gt;"),x(/"/g,"&quot;"),x(/'/g,"&#x27;"),x(/`/g,"&#x60;")),new d(v(/(?:\n(?:\s*))+/g," "),g),new d(v(/(?:\n\s*)/g,""),g),new d(O({separator:","}),v(/(?:\s+)/g," "),g),new d(O({separator:",",conjunction:"or"}),v(/(?:\s+)/g," "),g),new d(O({separator:",",conjunction:"and"}),v(/(?:\s+)/g," "),g),new d(O,p,g),new d(O,v(/(?:\s+)/g," "),g),new d(p,g);new d(p("all"),g);var L=new Set,_=function C(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function G(a){a&&L.add(a)}function P(a){return L.has(a)}function Y(a,n,r,i,l,s,o,c){return void 0===c&&(c={}),h({},r,{loading:i,shouldLoad:a,"data-main-image":"",style:h({},c,{opacity:n?1:0}),onLoad:function onLoad(a){if(!n){G(s);var r=a.currentTarget,i=new Image;i.src=r.currentSrc,i.decode?i.decode().catch((function(){})).then((function(){l(!0)})):l(!0)}},ref:o})}function F(a,n,r,i,l,s){var o={};return s&&(o.backgroundColor=s,"fixed"===r?(o.width=i,o.height=l,o.backgroundColor=s,o.position="relative"):("constrained"===r||"fluid"===r)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),h({},a,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:n?0:1,transition:"opacity 500ms linear"},o)})}var T=function J(a){var n=a.layout,r=a.width,s=a.height,o=a.children,c=null;return"fluid"===n&&(c=l.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/r*100+"%"}})),"constrained"===n&&(c=l.a.createElement("div",{style:{maxWidth:r,display:"block"}},l.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+s+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),l.a.createElement(i.Fragment,null,c,o,!1)},I=function X(a){var n=a.as,s=void 0===n?"div":n,o=a.style,c=a.className,u=a.class,d=a.onStartLoad,g=a.image,p=a.onLoad,v=a.backgroundColor,x=f(a,["as","style","className","class","onStartLoad","image","onLoad","backgroundColor"]);if(!g)return null;u&&(c=u);var N=g.width,O=g.height,R=g.layout,A=g.images,L=Object(i.useRef)(),T=Object(i.useRef)(!1),I=Object(i.useRef)(null),z=Object(i.useRef)(null),q=Object(i.useRef)(),H=Object(i.useState)(_()),W=H[0],B=H[1],D=Object(i.useState)(!1),Q=D[0],V=D[1],U=function(a,n,r){var i={position:"relative",overflow:"hidden"};return"fixed"===r?(i.width=a,i.height=n):"constrained"===r&&(i.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:i}}(N,O,R),Z=U.style,ee=U.className,te=f(U,["style","className"]);Object(i.useEffect)((function(){if(L.current){var a=L.current.querySelector("[data-gatsby-image-ssr]");if(_()&&a)return null==d||d({wasCached:!1}),a.complete&&(null==p||p(),G(JSON.stringify(A))),void a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==p||p(),G(JSON.stringify(A))}));r.e(30).then(r.bind(null,"vJ1Z")).then((function(a){var n=(0,a.createIntersectionObserver)((function(){L.current&&(null==d||d({wasCached:!1}),B(!0))}));L.current&&(I.current=n(L))}))}return function(){I.current&&(I.current(L),T.current&&z.current&&z.current())}}),[]),Object(i.useEffect)((function(){if(L.current){var a=L.current.querySelector("[data-gatsby-image-ssr]");if(_()&&a&&!T.current)return void(T.current=!0);a||(T.current=!0),r.e(4).then(r.bind(null,"yOz9")).then((function(a){z.current=(0,a.lazyHydrate)(h({image:g,isLoading:W,isLoaded:Q,toggleIsLoaded:function toggleIsLoaded(){null==p||p(),V(!0)},ref:q},x),L,T)}))}}),[N,O,R,A,W,Q,V,q,x]);var ae=function(a,n,r){var i=null;return"fluid"===a&&(i='<div aria-hidden="true" style="padding-top: '+r/n*100+'%;"></div>'),"constrained"===a&&(i='<div style="max-width: '+n+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(R,N,O);return l.a.createElement(s,Object.assign({},te,{style:h({},Z,o,{backgroundColor:v}),className:ee+(c?" "+c:""),ref:L,dangerouslySetInnerHTML:{__html:ae},suppressHydrationWarning:!0}))},z=function $(a){return l.a.createElement(I,Object.assign({},a))};z.displayName="GatsbyImage";var q,H=function K(a){var n=a.src,r=a.srcSet,i=a.loading,s=a.alt,o=void 0===s?"":s,c=a.shouldLoad,u=a.innerRef,d=f(a,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return l.a.createElement("img",Object.assign({},d,{decoding:"async",loading:i,src:c?n:void 0,"data-src":c?void 0:n,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:o,ref:u}))},W=Object(i.forwardRef)((function(a,n){var r=a.fallback,i=a.sources,s=void 0===i?[]:i,o=a.shouldLoad,c=void 0===o||o,u=f(a,["fallback","sources","shouldLoad"]),d=l.a.createElement(H,Object.assign({},u,r,{shouldLoad:c,innerRef:n}));return s.length?l.a.createElement("picture",null,s.map((function(a){var n=a.media,r=a.srcSet,i=a.type;return l.a.createElement("source",{key:n+"-"+i+"-"+r,type:i,media:n,srcSet:r})})),d):d}));H.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},W.displayName="Picture",W.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:Object(s.exact)({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:Object(s.arrayOf)(Object(s.oneOfType)([Object(s.exact)({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),Object(s.exact)({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};var B=function tt(a){var n=a.fallback,r=f(a,["fallback"]);return n?l.a.createElement(W,Object.assign({},r,{fallback:{src:n},"aria-hidden":!0,alt:""})):l.a.createElement("div",Object.assign({},r))};B.displayName="Placeholder",B.propTypes={fallback:s.string,sources:null==(q=W.propTypes)?void 0:q.sources,alt:function alt(a,n,r){return a[n]?new Error("Invalid prop `"+n+"` supplied to `"+r+"`. Validation failed."):null}};var D=Object(i.forwardRef)((function(a,n){var r=h({},a);return l.a.createElement(l.a.Fragment,null,"eager"===r.loading&&l.a.createElement("link",{rel:"preload",as:"image",href:r.fallback.src,imagesrcset:r.fallback.srcSet,imagesizes:r.fallback.sizes}),l.a.createElement(W,Object.assign({ref:n},r)),l.a.createElement("noscript",null,l.a.createElement(W,Object.assign({},r,{shouldLoad:!0}))))}));D.displayName="MainImage",D.propTypes=W.propTypes;var Q,V=function rt(a,n){return"fixed"===a.layout||"width"!==n&&"height"!==n||!a[n]?"fixed"!==a.layout||"maxWidth"!==n&&"maxHeight"!==n||!a[n]?o.a.number.apply(o.a,[a,n].concat([].slice.call(arguments,2))):new Error('"'+n+'" may not be passed when layout is "'+a.layout+'"'):new Error('"'+n+'" '+a[n]+' may not be passed when layout is "'+(a.layout||"constrained")+'"')},U=new Set(["fixed","fluid","constrained"]),Z={src:o.a.string.isRequired,alt:o.a.string.isRequired,width:V,height:V,maxHeight:V,maxWidth:V,sizes:o.a.string,layout:function layout(a){if(void 0!==a.layout&&!U.has(a.layout.toLowerCase()))return new Error("Invalid value "+a.layout+'" provided for prop "layout". Defaulting to "fixed". Valid values are "fixed", "fluid" or "constrained"')}},ee=(Q=z,function(a){var n=a.src,r=a.__imageData,i=a.__error,s=f(a,["src","__imageData","__error","width","maxWidth","height","maxHeight","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"]);return i&&console.warn(i),r?l.a.createElement(Q,Object.assign({image:r},s)):(console.warn("Image not loaded",n),null)});ee.displayName="StaticImage",ee.propTypes=Z},"6LWA":function(a,n,r){var i=r("xrYK");a.exports=Array.isArray||function isArray(a){return"Array"==i(a)}},A2ZE:function(a,n,r){var i=r("HAuM");a.exports=function(a,n,r){if(i(a),void 0===n)return a;switch(r){case 0:return function(){return a.call(n)};case 1:return function(r){return a.call(n,r)};case 2:return function(r,i){return a.call(n,r,i)};case 3:return function(r,i,l){return a.call(n,r,i,l)}}return function(){return a.apply(n,arguments)}}},BIHw:function(a,n,r){"use strict";var i=r("I+eb"),l=r("or9q"),s=r("ewvW"),o=r("UMSQ"),c=r("ppGB"),u=r("ZfDv");i({target:"Array",proto:!0},{flat:function flat(){var a=arguments.length?arguments[0]:void 0,n=s(this),r=o(n.length),i=u(n,0);return i.length=l(i,n,n,r,0,void 0===a?1:c(a)),i}})},"G+Rx":function(a,n,r){var i=r("0GbY");a.exports=i("document","documentElement")},HRMp:function(a){a.exports=JSON.parse('{"layout":"fluid","images":{"fallback":{"src":"/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/669f3/1.jpg","srcSet":"/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/53b2b/1.jpg 256w,\\n/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/d4d2a/1.jpg 512w,\\n/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/669f3/1.jpg 1024w,\\n/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/863ef/1.jpg 2048w","sizes":"100vw"},"sources":[{"srcSet":"/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/36766/1.webp 256w,\\n/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/a79fe/1.webp 512w,\\n/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/2d898/1.webp 1024w,\\n/morningsoccerleague.github.io/static/6d2cce217b42c6ca3c673ba63ad4c043/de790/1.webp 2048w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.75}')},"N+g0":function(a,n,r){var i=r("g6v/"),l=r("m/L8"),s=r("glrk"),o=r("33Wh");a.exports=i?Object.defineProperties:function defineProperties(a,n){s(a);for(var r,i=o(n),c=i.length,u=0;c>u;)l.f(a,r=i[u++],n[r]);return a}},QGkA:function(a,n,r){r("RNIs")("flat")},RNIs:function(a,n,r){var i=r("tiKp"),l=r("fHMY"),s=r("m/L8"),o=i("unscopables"),c=Array.prototype;null==c[o]&&s.f(c,o,{configurable:!0,value:l(null)}),a.exports=function(a){c[o][a]=!0}},RXBc:function(a,n,r){"use strict";r.r(n);var i=r("q1tI"),l=r.n(i),s=r("Bl7J"),o=r("vrFN"),c=r("Wbzz"),u=r("5e2u"),d=function MslHero(){return l.a.createElement("div",{className:"relative bg-light-50 dark:bg-dark-800 overflow-hidden"},l.a.createElement("div",{className:"max-w-7xl mx-auto"},l.a.createElement("div",{className:"relative z-10 pb-8 bg-light-50 dark:bg-dark-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"},l.a.createElement("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-light-50 dark:text-dark-800 transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},l.a.createElement("polygon",{points:"50,0 100,0 50,100 0,100"})),l.a.createElement("div",{className:"hidden lg:block relative pt-6 px-4 sm:px-6 lg:px-8"}),l.a.createElement("div",{className:"mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"},l.a.createElement("div",{className:"sm:text-center lg:text-left"},l.a.createElement("h1",{className:"text-4xl tracking-tight font-extrabold text-light-800 dark:text-dark-300 sm:text-5xl md:text-6xl"},l.a.createElement("span",{className:"block  xl:inline"},"Morning Soccer League")),l.a.createElement("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"},l.a.createElement(c.Link,{to:"/seasons",className:"text-xl md:text-2xl font-medium  text-dark-700 dark:text-dark-200 hover:text-dark-800"},"Check Seasons →")))))),l.a.createElement("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},l.a.createElement(u.c,{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",layout:"fluid",placeholder:"none",src:"../../images/hero/1.jpg",alt:"MSL",__imageData:r("HRMp")})))},g=(r("E9XD"),r("KQm4")),p=l.a.createElement("svg",{className:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"})),v=function MslAllStatsItem(a){var n=a.title,r=a.value,i=a.children,s=void 0===i?p:i;return l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"flex-shrink-0"},l.a.createElement("div",{className:"flex items-center justify-center h-12 w-12 rounded-md bg-light-800 dark:bg-dark-800 text-light-50 dark:text-light-50 shadow-md"},s)),l.a.createElement("dl",{className:"ml-4"},l.a.createElement("dt",{className:"text-lg leading-6 font-medium text-dark-900 dark:text-dark-300"},n),l.a.createElement("dd",{className:"mt-2 text-base text-dark-600 dark:text-dark-400"},r)))},x=r("q5+t"),N=r("vyb4"),O=(r("o5e5"),function MslAllStats(){var a=Object(c.useStaticQuery)("3447364634"),n=a.seasons.nodes.length,r=a.matches.nodes.length,i=a.players.nodes.length,s=a.teams.nodes.length,o=a.matches.nodes,u=Object(x.getReferees)(o),d=Object(g.a)(new Set(u.map((function(a){var n;return null==a||null===(n=a.player)||void 0===n?void 0:n.player_id})).filter((function(a){return a})))).length,p=Object(x.getAllGameStatsByType)(o,"goals"),O=p.length,R=p.filter((function(a){return a.owngoal})).length,A=p.filter((function(a){return a.assist})).length,L=Object(x.getAllGameStatsByType)(o,"fouls").reduce((function(a,n){return a+n}),0),_=Object(x.getAllGameStatsByType)(o,"cautions").filter((function(a){var n;return(null==a||null===(n=a.caution)||void 0===n?void 0:n.caution_id)==N.Cautions.YELLOW})).length,T=Object(x.getAllGameStatsByType)(o,"cautions").filter((function(a){var n;return(null==a||null===(n=a.caution)||void 0===n?void 0:n.caution_id)==N.Cautions.RED})).length,I=p.map((function(a){var n;return null==a||null===(n=a.player)||void 0===n?void 0:n.player_id})),z=Object(g.a)(new Set(I)).length;return l.a.createElement("div",{className:"pt-12"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l.a.createElement("div",{className:"lg:text-center"},l.a.createElement("h2",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark-700 dark:text-dark-300 sm:text-4xl"},"All Time Stats")),l.a.createElement("div",{className:"mt-10"},l.a.createElement("div",{className:"space-y-0 grid grid-cols-2 gap-y-4 sm:gap-x-3 sm:gap-y-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-6"},l.a.createElement(v,{title:"Seasons",value:n}),l.a.createElement(v,{title:"Games",value:r}),l.a.createElement(v,{title:"Teams",value:s}),l.a.createElement(v,{title:"Players",value:i}),l.a.createElement(v,{title:"Goals",value:O}),l.a.createElement(v,{title:"Fouls",value:L}),l.a.createElement(v,{title:"Assists",value:A}),l.a.createElement(v,{title:"Players Scored",value:z}),l.a.createElement(v,{title:"Referees",value:d}),l.a.createElement(v,{title:"Yellow Cards",value:_}),l.a.createElement(v,{title:"Red Cards",value:T}),l.a.createElement(v,{title:"Own Goals",value:R})))))}),R=l.a.lazy((function(){return r.e(1).then(r.bind(null,"ItRV"))})),A=function MslMission(a){a.player;var n="undefined"==typeof window;return l.a.createElement("div",{className:"pt-12"},l.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},l.a.createElement("div",{className:"lg:text-center"},l.a.createElement("h2",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark-700 dark:text-dark-300 sm:text-4xl"},"Mission")),l.a.createElement("div",{className:"flex flex-col justify-center my-12"},l.a.createElement("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto"},l.a.createElement("div",{className:"absolute inset-0 bg-gradient-to-r from-light_alt-800 to-light-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),l.a.createElement("div",{className:"relative px-4 py-5 bg-dark_alt shadow-lg sm:rounded-3xl sm:p-8 dark:bg-dark-600"},l.a.createElement("div",{className:"max-w-md mx-auto"},l.a.createElement("div",{className:"divide-y divide-dark-200"},l.a.createElement("div",{className:"py-4 text-base leading-6 space-y-4 text-dark-700 dark:text-dark-100 sm:text-lg sm:leading-7"},l.a.createElement("p",null,"Morning Soccer League is a get together of friends dedicated to the positive development through their participation in a safe, healthy, and affordable soccer program that is fun and rewarding for all."),l.a.createElement("ul",{className:"list-disc space-y-2"},l.a.createElement("li",{className:"flex items-start"},l.a.createElement("span",{className:"h-6 flex items-center sm:h-7"},l.a.createElement("svg",{className:"flex-shrink-0 h-5 w-5 text-light_alt-700 dark:text-dark-400",viewBox:"0 0 20 20",fill:"currentColor"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),l.a.createElement("p",{className:"ml-2"},"Game on weekdays @ 6.20am, you are welcome!")),l.a.createElement("li",{className:"flex items-start"},l.a.createElement("span",{className:"h-6 flex items-center sm:h-7"},l.a.createElement("svg",{className:"flex-shrink-0 h-5 w-5 text-light_alt-700 dark:text-dark-400",viewBox:"0 0 20 20",fill:"currentColor"},l.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))),l.a.createElement("p",{className:"ml-2"},"Follow us on.."))),l.a.createElement("div",{className:"h-32"},!n&&l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",null," ")},l.a.createElement(R,{title:"MSL Facebook",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmorningsoccerleague%2F&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=108821693720"})))))))))))};n.default=function IndexPage(a){var n=a.path;return l.a.createElement(s.a,null,l.a.createElement(d,null),l.a.createElement(A,null),l.a.createElement(O,null),l.a.createElement(o.a,{title:"Home",path:n}))}},ZfDv:function(a,n,r){var i=r("hh1v"),l=r("6LWA"),s=r("tiKp")("species");a.exports=function(a,n){var r;return l(a)&&("function"!=typeof(r=a.constructor)||r!==Array&&!l(r.prototype)?i(r)&&null===(r=r[s])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},fHMY:function(a,n,r){var i,l=r("glrk"),s=r("N+g0"),o=r("eDl+"),c=r("0BK2"),u=r("G+Rx"),d=r("zBJ4"),g=r("93I0"),p=g("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(a){return"<script>"+a+"<\/script>"},NullProtoObject=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(l){}var a,n;NullProtoObject=i?function(a){a.write(scriptTag("")),a.close();var n=a.parentWindow.Object;return a=null,n}(i):((n=d("iframe")).style.display="none",u.appendChild(n),n.src=String("javascript:"),(a=n.contentWindow.document).open(),a.write(scriptTag("document.F=Object")),a.close(),a.F);for(var r=o.length;r--;)delete NullProtoObject.prototype[o[r]];return NullProtoObject()};c[p]=!0,a.exports=Object.create||function create(a,n){var r;return null!==a?(EmptyConstructor.prototype=l(a),r=new EmptyConstructor,EmptyConstructor.prototype=null,r[p]=a):r=NullProtoObject(),void 0===n?r:s(r,n)}},o5e5:function(a,n){},or9q:function(a,n,r){"use strict";var i=r("6LWA"),l=r("UMSQ"),s=r("A2ZE"),flattenIntoArray=function(a,n,r,o,c,u,d,g){for(var p,v=c,x=0,N=!!d&&s(d,g,3);x<o;){if(x in r){if(p=N?N(r[x],x,n):r[x],u>0&&i(p))v=flattenIntoArray(a,n,p,l(p.length),v,u-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");a[v]=p}v++}x++}return v};a.exports=flattenIntoArray},"q5+t":function(a,n,r){r("BIHw"),r("QGkA"),n.getAllGameStatsByType=function getAllGameStatsByType(a,n){return a.map((function(a){return a.gamestats})).flat().map((function(a){return a[n]&&Array.isArray(a[n])?a[n].map((function(n){return n.team=a.team,n})):a[n]})).flat().filter((function(a){return a}))},n.getReferees=function getReferees(a){return a.map((function(a){return a.referees})).flat()}},vyb4:function(a,n){n.MslImgKey={PLAYER:"players",TEAM:"teams"},n.Cautions={YELLOW:1,RED:2},n.SCHEMA_TYPE_NAME={MslSeasonsJson:"MslSeasonsJson",MslSchedulesJson:"MslSchedulesJson",MslTeamsJson:"MslTeamsJson",MslPlayersJson:"MslPlayersJson"},n.DEFUAULT_SCORES={played:0,won:0,lost:0,draw:0,goal_allowed:0,goal_scored:0},n.FIELD_NAMES={PLAYER_ID:"player_id",PLAYER_MOS:"isMos",PLAYER_OWNER:"isOwner"}}}]);
//# sourceMappingURL=component---src-pages-index-js-658c20193d76b14b07ea.js.map