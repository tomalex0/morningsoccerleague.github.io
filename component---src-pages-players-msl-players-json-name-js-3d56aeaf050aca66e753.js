(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+ujc":function(n,r,a){"use strict";a.r(r);var i=a("q1tI"),o=a.n(i),s=a("Wbzz"),l=a("Bl7J"),u=a("tBDR"),c=a("vrFN");a("o5e5");r.default=function Player(n){var r=n.data,a=n.path,i=r.player;return console.log(i),o.a.createElement(l.a,null,o.a.createElement(c.a,{title:i.name,path:a}),o.a.createElement("h1",null,"Hi Player ",i.name," - ",i.player_id),o.a.createElement("div",null,o.a.createElement("span",null,i.playerStats.allseasonStats.goals," Total Goals ---",i.playerStats.allseasonStats.assists," Total Assists---",i.playerStats.allseasonStats.mos," Total Mos---",i.playerStats.allseasonStats.yellow_cards," Total Yellow --",i.playerStats.allseasonStats.red_cards," Total Red --",i.playerStats.allseasonStats.mom," Total Mom --")),o.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},o.a.createElement(u.a,null)),o.a.createElement("ul",null,i.playerStats.seasonStats.map((function(n){return o.a.createElement("li",{key:n.season.season_id},o.a.createElement(s.Link,{to:n.season.seasonPath},n.season.season_id,"-",n.season.season_year),n.isOwner&&o.a.createElement("span",null,"---Owner"),o.a.createElement("span",null,"---",n.goals," Goals"),o.a.createElement("span",null,"---",n.team.teamName," Team"),o.a.createElement("span",null,"---",n.assists," Assist"),o.a.createElement("span",null,"---",n.yellow_cards," Yellow"),o.a.createElement("span",null,"---",n.red_cards," Red"),o.a.createElement("span",null,"---",n.mom," Mom"),n.isMos&&o.a.createElement("span",null,"---Mos"))}))))}},RKTH:function(n,r,a){"use strict";a.d(r,"a",(function(){return A})),a.d(r,"b",(function(){return X})),a.d(r,"c",(function(){return F})),a.d(r,"d",(function(){return B})),a.d(r,"e",(function(){return f})),a.d(r,"f",(function(){return C})),a.d(r,"g",(function(){return V})),a.d(r,"h",(function(){return Y})),a.d(r,"i",(function(){return N})),a.d(r,"j",(function(){return I}));a("E9XD");var i=a("q1tI"),o=a.n(i),s=a("17x9"),l=a.n(s);function h(){return(h=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n}).apply(this,arguments)}function f(n,r){if(null==n)return{};var a,i,o={},s=Object.keys(n);for(i=0;i<s.length;i++)r.indexOf(a=s[i])>=0||(o[a]=n[a]);return o}var u=function(){function t(n,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,a){return r&&t(n.prototype,r),a&&t(n,a),n}}(),c=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function m(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var d=function(){function t(){for(var n=this,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return m(this,t),this.tag=function(r){for(var a=arguments.length,i=Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return"function"==typeof r?n.interimTag.bind(n,r):"string"==typeof r?n.transformEndResult(r):(r=r.map(n.transformString.bind(n)),n.transformEndResult(r.reduce(n.processSubstitutions.bind(n,i))))},a.length>0&&Array.isArray(a[0])&&(a=a[0]),this.transformers=a.map((function(n){return"function"==typeof n?n():n})),this.tag}return u(t,[{key:"interimTag",value:function value(n,r){for(var a=arguments.length,i=Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];return this.tag(c,n.apply(void 0,[r].concat(i)))}},{key:"processSubstitutions",value:function value(n,r,a){var i=this.transformSubstitution(n.shift(),r);return"".concat(r,i,a)}},{key:"transformString",value:function value(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function value(n,r){return this.transformers.reduce((function(n,a){return a.onSubstitution?a.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function value(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),t}(),p=function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function onEndResult(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};function y(n){if(Array.isArray(n)){for(var r=0,a=Array(n.length);r<n.length;r++)a[r]=n[r];return a}return Array.from(n)}var g=function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function onEndResult(r){if("initial"===n){var a=r.match(/^[^\S\n]*(?=\S)/gm),i=a&&Math.min.apply(Math,y(a.map((function(n){return n.length}))));if(i){var o=new RegExp("^.{"+i+"}","gm");return r.replace(o,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},w=function E(n,r){return{onEndResult:function onEndResult(a){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return a.replace(n,r)}}},O=function S(n,r){return{onSubstitution:function onSubstitution(a,i){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==a?a:a.toString().replace(n,r)}}},T={separator:"",conjunction:"",serial:!1},L=function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return{onSubstitution:function onSubstitution(r,a){if(Array.isArray(r)){var i=r.length,o=n.separator,s=n.conjunction,l=n.serial,u=a.match(/(\n?[^\S\n]+)$/);if(r=r.join(u?o+u[1]:o+" "),s&&i>1){var c=r.lastIndexOf(o);r=r.slice(0,c)+(l?o:"")+" "+s+r.slice(c+1)}}return r}}},k=function M(n){return{onSubstitution:function onSubstitution(r,a){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},x=function R(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n};new d(L({separator:","}),g,p),new d(L({separator:",",conjunction:"and"}),g,p),new d(L({separator:",",conjunction:"or"}),g,p),new d(k("\n"),(function(){return{onSubstitution:function onSubstitution(n){return Array.isArray(n)?n.filter(x):x(n)?n:""}}}),L,g,p),new d(k("\n"),L,g,p,O(/&/g,"&amp;"),O(/</g,"&lt;"),O(/>/g,"&gt;"),O(/"/g,"&quot;"),O(/'/g,"&#x27;"),O(/`/g,"&#x60;")),new d(w(/(?:\n(?:\s*))+/g," "),p),new d(w(/(?:\n\s*)/g,""),p),new d(L({separator:","}),w(/(?:\s+)/g," "),p),new d(L({separator:",",conjunction:"or"}),w(/(?:\s+)/g," "),p),new d(L({separator:",",conjunction:"and"}),w(/(?:\s+)/g," "),p),new d(L,g,p),new d(L,w(/(?:\s+)/g," "),p),new d(g,p);new d(g("all"),p);var q=new Set,I=function G(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function P(n){n&&q.add(n)}function C(n){return q.has(n)}var N=function D(n){var r;return null==n||null==(r=n.childImageSharp)?void 0:r.gatsbyImageData};function Y(n,r,a,i,o,s,l){return h({},a,{loading:i,shouldLoad:n,"data-main-image":"",style:{opacity:r?1:0},onLoad:function onLoad(n){if(!r){P(s);var a=n.currentTarget,i=new Image;i.src=a.currentSrc,i.decode?i.decode().catch((function(){})).then((function(){o(!0)})):o(!0)}},ref:l})}function V(n,r,a,i,o,s){var l={};return s&&(l.backgroundColor=s,"fixed"===a?(l.width=i,l.height=o,l.backgroundColor=s,l.position="relative"):("constrained"===a||"fluid"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),h({},n,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:r?0:1,transition:"opacity 500ms linear"},l)})}var _=function J(n){var r=n.as,s=void 0===r?"div":r,l=n.style,u=n.className,c=n.onStartLoad,d=n.image,p=n.onLoad,g=f(n,["as","style","className","onStartLoad","image","onLoad"]);if(!d)return null;var w,O,T,L,k=d.width,x=d.height,q=d.layout,N=d.images,_=Object(i.useRef)(),A=Object(i.useRef)(!1),z=Object(i.useRef)(null),H=Object(i.useRef)(null),W=Object(i.useRef)(),B=Object(i.useState)(I()),F=B[0],Q=B[1],X=Object(i.useState)(!1),Z=X[0],ee=X[1],te=(w=k,O=x,L={position:"relative"},"fixed"===(T=q)?(L.width=w,L.height=O):"constrained"===T&&(L.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:L}),ne=te.style,re=te.className,ae=f(te,["style","className"]);return Object(i.useEffect)((function(){if(_.current){var n=_.current.querySelector("[data-gatsby-image-ssr]");if(I()&&n)return null==c||c({wasCached:!1}),n.complete&&(null==p||p(),P(JSON.stringify(N))),void n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==p||p(),P(JSON.stringify(N))}));a.e(23).then(a.bind(null,"vJ1Z")).then((function(n){var r=(0,n.createIntersectionObserver)((function(){_.current&&(null==c||c({wasCached:!1}),Q(!0))}));_.current&&(z.current=r(_))}))}return function(){z.current&&(z.current(_),A.current&&H.current&&H.current())}}),[]),Object(i.useEffect)((function(){if(_.current){var n=_.current.querySelector("[data-gatsby-image-ssr]");if(I()&&n&&!A.current)return void(A.current=!0);n||(A.current=!0),a.e(24).then(a.bind(null,"qvLh")).then((function(n){H.current=(0,n.lazyHydrate)(h({image:d,isLoading:F,isLoaded:Z,toggleIsLoaded:function toggleIsLoaded(){null==p||p(),ee(!0)},ref:W},g),_,A)}))}}),[k,x,q,N,F,Z,ee,W,g]),o.a.createElement(s,Object.assign({},ae,{style:h({},ne,l),className:re+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))},A=function U(n){return o.a.createElement(_,Object.assign({},n))};A.displayName="GatsbyImage";var z,H=function $(n){var r=n.src,a=n.srcSet,i=n.loading,s=n.alt,l=void 0===s?"":s,u=n.shouldLoad,c=n.innerRef,d=f(n,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return o.a.createElement("img",Object.assign({},d,{decoding:"async",loading:i,src:u?r:void 0,"data-src":u?void 0:r,srcSet:u?a:void 0,"data-srcset":u?void 0:a,alt:l,ref:c}))},W=Object(i.forwardRef)((function(n,r){var a=n.fallback,i=n.sources,s=void 0===i?[]:i,l=n.shouldLoad,u=void 0===l||l,c=f(n,["fallback","sources","shouldLoad"]),d=o.a.createElement(H,Object.assign({},c,a,{shouldLoad:u,innerRef:r}));return s.length?o.a.createElement("picture",null,s.map((function(n){var r=n.media,a=n.srcSet,i=n.type;return o.a.createElement("source",{key:r+"-"+i+"-"+a,type:i,media:r,srcSet:a})})),d):d}));H.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},W.displayName="Picture",W.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:Object(s.exact)({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:Object(s.arrayOf)(Object(s.oneOfType)([Object(s.exact)({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),Object(s.exact)({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};var B=function K(n){var r=n.fallback,a=f(n,["fallback"]);return r?o.a.createElement(W,Object.assign({},a,{fallback:{src:r},"aria-hidden":!0,alt:""})):o.a.createElement("div",Object.assign({},a))};B.displayName="Placeholder",B.propTypes={fallback:s.string,sources:null==(z=W.propTypes)?void 0:z.sources,alt:function alt(n,r,a){return n[r]?new Error("Invalid prop `"+r+"` supplied to `"+a+"`. Validation failed."):null}};var F=Object(i.forwardRef)((function(n,r){var a=h({},n);return o.a.createElement(W,Object.assign({ref:r},a))}));F.displayName="MainImage",F.propTypes=W.propTypes;var Q,X=function tt(n){var r=n.layout,a=n.width,s=n.height,l=n.children,u=null;return"fluid"===r&&(u=o.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}})),"constrained"===r&&(u=o.a.createElement("div",{style:{maxWidth:a,display:"block"}},o.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+s+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),o.a.createElement(i.Fragment,null,u,l,!1)},Z=function et(n,r){if("fluid"===n.layout||"constrained"===n.layout){if("maxWidth"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"');if(("width"===r||"height"===r)&&n[r])return new Error('"'+r+'" '+n[r]+' may not be passed when layout is "'+n.layout+'"')}else{if(("maxWidth"===r||"maxHeight"===r)&&n[r])return new Error('"'+r+'" may not be passed when layout is "'+n.layout+'"');if("width"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"')}return l.a.number.apply(l.a,[n,r].concat([].slice.call(arguments,2)))},ee={src:l.a.string.isRequired,alt:l.a.string.isRequired,width:Z,height:Z,maxHeight:Z,maxWidth:Z,sizes:l.a.string},te=(Q=A,function(n){var r=n.src,a=n.__imageData,i=n.__error,s=f(n,["src","__imageData","__error","width","maxWidth","height","maxHeight","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","blurredOptions"]);return i&&console.warn(i),a?o.a.createElement(Q,Object.assign({image:a},s)):(console.warn("Image not loaded",r),null)});te.displayName="StaticImage",te.propTypes=ee},o5e5:function(n,r){},tBDR:function(n,r,a){"use strict";var i=a("q1tI"),o=a.n(i),s=a("Wbzz"),l=a("RKTH");r.a=function Image(){var n=Object(s.useStaticQuery)("3222596441"),r=Object(l.i)(n.placeholderImage);return r?o.a.createElement(l.a,{image:r,alt:"Astronaut"}):o.a.createElement("div",null,"Picture not found")}}}]);
//# sourceMappingURL=component---src-pages-players-msl-players-json-name-js-3d56aeaf050aca66e753.js.map