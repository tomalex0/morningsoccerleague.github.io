(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3eh+":function(n,r,a){"use strict";a.r(r);var i=a("q1tI"),o=a.n(i),s=(a("Wbzz"),a("Bl7J")),u=(a("tBDR"),a("vrFN"));r.default=function StatsIndexPage(n){var r=n.path,a=n.pageContext;return o.a.createElement(s.a,null,o.a.createElement(u.a,{title:"Statistics "+a.season_id+"-"+a.season_year,path:r}),o.a.createElement("h1",null,"Hi Statistics ",a.season_id,"-",a.season_year))}},WA0N:function(n,r,a){"use strict";a.d(r,"a",(function(){return z})),a.d(r,"b",(function(){return B})),a.d(r,"c",(function(){return J})),a.d(r,"d",(function(){return f})),a.d(r,"e",(function(){return P})),a.d(r,"f",(function(){return h})),a.d(r,"g",(function(){return $})),a.d(r,"h",(function(){return F})),a.d(r,"i",(function(){return T})),a.d(r,"j",(function(){return N})),a.d(r,"k",(function(){return Y}));a("E9XD");var i=a("q1tI"),o=a.n(i),s=a("17x9"),u=a.n(s);function h(){return(h=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n}).apply(this,arguments)}function f(n,r){if(null==n)return{};var a,i,o={},s=Object.keys(n);for(i=0;i<s.length;i++)r.indexOf(a=s[i])>=0||(o[a]=n[a]);return o}var l=function(){function e(n,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,a){return r&&e(n.prototype,r),a&&e(n,a),n}}(),c=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function m(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var d=function(){function e(){for(var n=this,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return m(this,e),this.tag=function(r){for(var a=arguments.length,i=Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return"function"==typeof r?n.interimTag.bind(n,r):"string"==typeof r?n.transformEndResult(r):(r=r.map(n.transformString.bind(n)),n.transformEndResult(r.reduce(n.processSubstitutions.bind(n,i))))},a.length>0&&Array.isArray(a[0])&&(a=a[0]),this.transformers=a.map((function(n){return"function"==typeof n?n():n})),this.tag}return l(e,[{key:"interimTag",value:function value(n,r){for(var a=arguments.length,i=Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];return this.tag(c,n.apply(void 0,[r].concat(i)))}},{key:"processSubstitutions",value:function value(n,r,a){var i=this.transformSubstitution(n.shift(),r);return"".concat(r,i,a)}},{key:"transformString",value:function value(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function value(n,r){return this.transformers.reduce((function(n,a){return a.onSubstitution?a.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function value(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),e}(),g=function w(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function onEndResult(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};function y(n){if(Array.isArray(n)){for(var r=0,a=Array(n.length);r<n.length;r++)a[r]=n[r];return a}return Array.from(n)}var p=function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function onEndResult(r){if("initial"===n){var a=r.match(/^[^\S\n]*(?=\S)/gm),i=a&&Math.min.apply(Math,y(a.map((function(n){return n.length}))));if(i){var o=new RegExp("^.{"+i+"}","gm");return r.replace(o,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},v=function E(n,r){return{onEndResult:function onEndResult(a){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return a.replace(n,r)}}},O=function S(n,r){return{onSubstitution:function onSubstitution(a,i){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==a?a:a.toString().replace(n,r)}}},R={separator:"",conjunction:"",serial:!1},x=function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return{onSubstitution:function onSubstitution(r,a){if(Array.isArray(r)){var i=r.length,o=n.separator,s=n.conjunction,u=n.serial,l=a.match(/(\n?[^\S\n]+)$/);if(r=r.join(l?o+l[1]:o+" "),s&&i>1){var c=r.lastIndexOf(o);r=r.slice(0,c)+(u?o:"")+" "+s+r.slice(c+1)}}return r}}},L=function M(n){return{onSubstitution:function onSubstitution(r,a){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},I=function k(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n};new d(x({separator:","}),p,g),new d(x({separator:",",conjunction:"and"}),p,g),new d(x({separator:",",conjunction:"or"}),p,g),new d(L("\n"),(function(){return{onSubstitution:function onSubstitution(n){return Array.isArray(n)?n.filter(I):I(n)?n:""}}}),x,p,g),new d(L("\n"),x,p,g,O(/&/g,"&amp;"),O(/</g,"&lt;"),O(/>/g,"&gt;"),O(/"/g,"&quot;"),O(/'/g,"&#x27;"),O(/`/g,"&#x60;")),new d(v(/(?:\n(?:\s*))+/g," "),g),new d(v(/(?:\n\s*)/g,""),g),new d(x({separator:","}),v(/(?:\s+)/g," "),g),new d(x({separator:",",conjunction:"or"}),v(/(?:\s+)/g," "),g),new d(x({separator:",",conjunction:"and"}),v(/(?:\s+)/g," "),g),new d(x,p,g),new d(x,v(/(?:\s+)/g," "),g),new d(p,g);new d(p("all"),g);var q=new Set,N=function G(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function C(n){n&&q.add(n)}function P(n){return q.has(n)}var T=function D(n){var r;return null==n||null==(r=n.childImageSharp)?void 0:r.gatsbyImageData};function Y(n,r,a,i,o,s,u,l){return void 0===l&&(l={}),h({},a,{loading:i,shouldLoad:n,"data-main-image":"",style:h({},l,{opacity:r?1:0}),onLoad:function onLoad(n){if(!r){C(s);var a=n.currentTarget,i=new Image;i.src=a.currentSrc,i.decode?i.decode().catch((function(){})).then((function(){o(!0)})):o(!0)}},ref:u})}function F(n,r,a,i,o,s){var u={};return s&&(u.backgroundColor=s,"fixed"===a?(u.width=i,u.height=o,u.backgroundColor=s,u.position="relative"):("constrained"===a||"fluid"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),h({},n,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:r?0:1,transition:"opacity 500ms linear"},u)})}var A=function U(n){var r=n.as,s=void 0===r?"div":r,u=n.style,l=n.className,c=n.class,d=n.onStartLoad,g=n.image,p=n.onLoad,v=n.backgroundColor,O=f(n,["as","style","className","class","onStartLoad","image","onLoad","backgroundColor"]);if(!g)return null;c&&(l=c);var R,x,L,I,q=g.width,T=g.height,A=g.layout,z=g.images,_=Object(i.useRef)(),W=Object(i.useRef)(!1),H=Object(i.useRef)(null),J=Object(i.useRef)(null),B=Object(i.useRef)(),V=Object(i.useState)(N()),$=V[0],K=V[1],ee=Object(i.useState)(!1),ne=ee[0],ae=ee[1],ie=(R=q,x=T,I={position:"relative",overflow:"hidden"},"fixed"===(L=A)?(I.width=R,I.height=x):"constrained"===L&&(I.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:I}),oe=ie.style,se=ie.className,ue=f(ie,["style","className"]);return Object(i.useEffect)((function(){if(_.current){var n=_.current.querySelector("[data-gatsby-image-ssr]");if(N()&&n)return null==d||d({wasCached:!1}),n.complete&&(null==p||p(),C(JSON.stringify(z))),void n.addEventListener("load",(function t(){n.removeEventListener("load",t),null==p||p(),C(JSON.stringify(z))}));a.e(27).then(a.bind(null,"vJ1Z")).then((function(n){var r=(0,n.createIntersectionObserver)((function(){_.current&&(null==d||d({wasCached:!1}),K(!0))}));_.current&&(H.current=r(_))}))}return function(){H.current&&(H.current(_),W.current&&J.current&&J.current())}}),[]),Object(i.useEffect)((function(){if(_.current){var n=_.current.querySelector("[data-gatsby-image-ssr]");if(N()&&n&&!W.current)return void(W.current=!0);n||(W.current=!0),a.e(4).then(a.bind(null,"67LE")).then((function(n){J.current=(0,n.lazyHydrate)(h({image:g,isLoading:$,isLoaded:ne,toggleIsLoaded:function toggleIsLoaded(){null==p||p(),ae(!0)},ref:B},O),_,W)}))}}),[q,T,A,z,$,ne,ae,B,O]),o.a.createElement(s,Object.assign({},ue,{style:h({},oe,u,{backgroundColor:v}),className:se+(l?" "+l:""),ref:_,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))},z=function X(n){return o.a.createElement(A,Object.assign({},n))};z.displayName="GatsbyImage";var _,W=function Z(n){var r=n.src,a=n.srcSet,i=n.loading,s=n.alt,u=void 0===s?"":s,l=n.shouldLoad,c=n.innerRef,d=f(n,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return o.a.createElement("img",Object.assign({},d,{decoding:"async",loading:i,src:l?r:void 0,"data-src":l?void 0:r,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:u,ref:c}))},H=Object(i.forwardRef)((function(n,r){var a=n.fallback,i=n.sources,s=void 0===i?[]:i,u=n.shouldLoad,l=void 0===u||u,c=f(n,["fallback","sources","shouldLoad"]),d=o.a.createElement(W,Object.assign({},c,a,{shouldLoad:l,innerRef:r}));return s.length?o.a.createElement("picture",null,s.map((function(n){var r=n.media,a=n.srcSet,i=n.type;return o.a.createElement("source",{key:r+"-"+i+"-"+a,type:i,media:r,srcSet:a})})),d):d}));W.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},H.displayName="Picture",H.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:Object(s.exact)({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:Object(s.arrayOf)(Object(s.oneOfType)([Object(s.exact)({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),Object(s.exact)({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};var J=function Q(n){var r=n.fallback,a=f(n,["fallback"]);return r?o.a.createElement(H,Object.assign({},a,{fallback:{src:r},"aria-hidden":!0,alt:""})):o.a.createElement("div",Object.assign({},a))};J.displayName="Placeholder",J.propTypes={fallback:s.string,sources:null==(_=H.propTypes)?void 0:_.sources,alt:function alt(n,r,a){return n[r]?new Error("Invalid prop `"+r+"` supplied to `"+a+"`. Validation failed."):null}};var B=Object(i.forwardRef)((function(n,r){var a=h({},n);return o.a.createElement(o.a.Fragment,null,"eager"===a.loading&&o.a.createElement("link",{rel:"preload",as:"image",href:a.fallback.src,imagesrcset:a.fallback.srcSet,imagesizes:a.fallback.sizes}),o.a.createElement(H,Object.assign({ref:r},a)),o.a.createElement("noscript",null,o.a.createElement(H,Object.assign({},a,{shouldLoad:!0}))))}));B.displayName="MainImage",B.propTypes=H.propTypes;var V,$=function te(n){var r=n.layout,a=n.width,s=n.height,u=n.children,l=null;return"fluid"===r&&(l=o.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}})),"constrained"===r&&(l=o.a.createElement("div",{style:{maxWidth:a,display:"block"}},o.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+s+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),o.a.createElement(i.Fragment,null,l,u,!1)},K=function re(n,r){return"fixed"===n.layout||"width"!==r&&"height"!==r||!n[r]?"fixed"!==n.layout||"maxWidth"!==r&&"maxHeight"!==r||!n[r]?u.a.number.apply(u.a,[n,r].concat([].slice.call(arguments,2))):new Error('"'+r+'" may not be passed when layout is "'+n.layout+'"'):new Error('"'+r+'" '+n[r]+' may not be passed when layout is "'+(n.layout||"constrained")+'"')},ee=new Set(["fixed","fluid","constrained"]),ne={src:u.a.string.isRequired,alt:u.a.string.isRequired,width:K,height:K,maxHeight:K,maxWidth:K,sizes:u.a.string,layout:function layout(n){if(void 0!==n.layout&&!ee.has(n.layout.toLowerCase()))return new Error("Invalid value "+n.layout+'" provided for prop "layout". Defaulting to "fixed". Valid values are "fixed", "fluid" or "constrained"')}},ae=(V=z,function(n){var r=n.src,a=n.__imageData,i=n.__error,s=f(n,["src","__imageData","__error","width","maxWidth","height","maxHeight","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"]);return i&&console.warn(i),a?o.a.createElement(V,Object.assign({image:a},s)):(console.warn("Image not loaded",r),null)});ae.displayName="StaticImage",ae.propTypes=ne},tBDR:function(n,r,a){"use strict";var i=a("q1tI"),o=a.n(i),s=a("Wbzz"),u=a("WA0N");r.a=function Image(){var n=Object(s.useStaticQuery)("3222596441"),r=Object(u.i)(n.placeholderImage);return r?o.a.createElement(u.a,{image:r,alt:"Astronaut"}):o.a.createElement("div",null,"Picture not found")}}}]);
//# sourceMappingURL=component---src-pages-seasons-msl-seasons-json-season-id-msl-seasons-json-season-year-statistics-js-251f5e399c5c0369ed2c.js.map