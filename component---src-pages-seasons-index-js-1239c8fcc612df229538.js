(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+vvT":function(n,r,a){"use strict";a.r(r);var o=a("q1tI"),i=a.n(o),u=a("Wbzz"),s=a("Bl7J"),l=a("tBDR"),c=a("vrFN"),d=a("vyb4"),g=a("ntwW");a("o5e5");r.default=function SeasonsIndex(n){var r=n.data,a=n.path,o=r.seasons;return i.a.createElement(s.a,null,i.a.createElement(c.a,{title:"Seasons",path:a}),i.a.createElement("h1",null,"Hi Seasons"),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(l.a,null)),i.a.createElement("ul",null,o.nodes.map((function(n){return i.a.createElement("li",{key:n.season_id},i.a.createElement(u.Link,{to:n.seasonPath},n.season_id,"-",n.season_year,"-",n.schedules.length," ","Game--",n.teams.length," Teams --"," ",Object(g.getTotalPlayers)(n.teams)," Players --"," ",Object(g.getTotalGoals)(n.schedules).length,"Goals --"," ",Object(g.getTotalCautionType)(n.schedules,d.Cautions.YELLOW).length,"Yellow Card --"," ",Object(g.getTotalCautionType)(n.schedules,d.Cautions.RED).length," Red Card --"))}))))}},"/b8u":function(n,r,a){var o=a("STAE");n.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"33Wh":function(n,r,a){var o=a("yoRg"),i=a("eDl+");n.exports=Object.keys||function keys(n){return o(n,i)}},"6LWA":function(n,r,a){var o=a("xrYK");n.exports=Array.isArray||function isArray(n){return"Array"==o(n)}},A2ZE:function(n,r,a){var o=a("HAuM");n.exports=function(n,r,a){if(o(n),void 0===r)return n;switch(a){case 0:return function(){return n.call(r)};case 1:return function(a){return n.call(r,a)};case 2:return function(a,o){return n.call(r,a,o)};case 3:return function(a,o,i){return n.call(r,a,o,i)}}return function(){return n.apply(r,arguments)}}},BIHw:function(n,r,a){"use strict";var o=a("I+eb"),i=a("or9q"),u=a("ewvW"),s=a("UMSQ"),l=a("ppGB"),c=a("ZfDv");o({target:"Array",proto:!0},{flat:function flat(){var n=arguments.length?arguments[0]:void 0,r=u(this),a=s(r.length),o=c(r,0);return o.length=i(o,r,r,a,0,void 0===n?1:l(n)),o}})},"G+Rx":function(n,r,a){var o=a("0GbY");n.exports=o("document","documentElement")},"N+g0":function(n,r,a){var o=a("g6v/"),i=a("m/L8"),u=a("glrk"),s=a("33Wh");n.exports=o?Object.defineProperties:function defineProperties(n,r){u(n);for(var a,o=s(r),l=o.length,c=0;l>c;)i.f(n,a=o[c++],r[a]);return n}},QGkA:function(n,r,a){a("RNIs")("flat")},RKTH:function(n,r,a){"use strict";a.d(r,"a",(function(){return W})),a.d(r,"b",(function(){return Z})),a.d(r,"c",(function(){return F})),a.d(r,"d",(function(){return z})),a.d(r,"e",(function(){return f})),a.d(r,"f",(function(){return C})),a.d(r,"g",(function(){return V})),a.d(r,"h",(function(){return Y})),a.d(r,"i",(function(){return N})),a.d(r,"j",(function(){return I}));a("E9XD");var o=a("q1tI"),i=a.n(o),u=a("17x9"),s=a.n(u);function h(){return(h=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(n[o]=a[o])}return n}).apply(this,arguments)}function f(n,r){if(null==n)return{};var a,o,i={},u=Object.keys(n);for(o=0;o<u.length;o++)r.indexOf(a=u[o])>=0||(i[a]=n[a]);return i}var l=function(){function t(n,r){for(var a=0;a<r.length;a++){var o=r[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(n,r,a){return r&&t(n.prototype,r),a&&t(n,a),n}}(),c=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function m(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var d=function(){function t(){for(var n=this,r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];return m(this,t),this.tag=function(r){for(var a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return"function"==typeof r?n.interimTag.bind(n,r):"string"==typeof r?n.transformEndResult(r):(r=r.map(n.transformString.bind(n)),n.transformEndResult(r.reduce(n.processSubstitutions.bind(n,o))))},a.length>0&&Array.isArray(a[0])&&(a=a[0]),this.transformers=a.map((function(n){return"function"==typeof n?n():n})),this.tag}return l(t,[{key:"interimTag",value:function value(n,r){for(var a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return this.tag(c,n.apply(void 0,[r].concat(o)))}},{key:"processSubstitutions",value:function value(n,r,a){var o=this.transformSubstitution(n.shift(),r);return"".concat(r,o,a)}},{key:"transformString",value:function value(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function value(n,r){return this.transformers.reduce((function(n,a){return a.onSubstitution?a.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function value(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),t}(),g=function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function onEndResult(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};function y(n){if(Array.isArray(n)){for(var r=0,a=Array(n.length);r<n.length;r++)a[r]=n[r];return a}return Array.from(n)}var p=function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function onEndResult(r){if("initial"===n){var a=r.match(/^[^\S\n]*(?=\S)/gm),o=a&&Math.min.apply(Math,y(a.map((function(n){return n.length}))));if(o){var i=new RegExp("^.{"+o+"}","gm");return r.replace(i,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},w=function E(n,r){return{onEndResult:function onEndResult(a){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return a.replace(n,r)}}},T=function S(n,r){return{onSubstitution:function onSubstitution(a,o){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==a?a:a.toString().replace(n,r)}}},O={separator:"",conjunction:"",serial:!1},A=function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return{onSubstitution:function onSubstitution(r,a){if(Array.isArray(r)){var o=r.length,i=n.separator,u=n.conjunction,s=n.serial,l=a.match(/(\n?[^\S\n]+)$/);if(r=r.join(l?i+l[1]:i+" "),u&&o>1){var c=r.lastIndexOf(i);r=r.slice(0,c)+(s?i:"")+" "+u+r.slice(c+1)}}return r}}},x=function M(n){return{onSubstitution:function onSubstitution(r,a){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},L=function R(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n};new d(A({separator:","}),p,g),new d(A({separator:",",conjunction:"and"}),p,g),new d(A({separator:",",conjunction:"or"}),p,g),new d(x("\n"),(function(){return{onSubstitution:function onSubstitution(n){return Array.isArray(n)?n.filter(L):L(n)?n:""}}}),A,p,g),new d(x("\n"),A,p,g,T(/&/g,"&amp;"),T(/</g,"&lt;"),T(/>/g,"&gt;"),T(/"/g,"&quot;"),T(/'/g,"&#x27;"),T(/`/g,"&#x60;")),new d(w(/(?:\n(?:\s*))+/g," "),g),new d(w(/(?:\n\s*)/g,""),g),new d(A({separator:","}),w(/(?:\s+)/g," "),g),new d(A({separator:",",conjunction:"or"}),w(/(?:\s+)/g," "),g),new d(A({separator:",",conjunction:"and"}),w(/(?:\s+)/g," "),g),new d(A,p,g),new d(A,w(/(?:\s+)/g," "),g),new d(p,g);new d(p("all"),g);var k=new Set,I=function G(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function P(n){n&&k.add(n)}function C(n){return k.has(n)}var N=function D(n){var r;return null==n||null==(r=n.childImageSharp)?void 0:r.gatsbyImageData};function Y(n,r,a,o,i,u,s){return h({},a,{loading:o,shouldLoad:n,"data-main-image":"",style:{opacity:r?1:0},onLoad:function onLoad(n){if(!r){P(u);var a=n.currentTarget,o=new Image;o.src=a.currentSrc,o.decode?o.decode().catch((function(){})).then((function(){i(!0)})):i(!0)}},ref:s})}function V(n,r,a,o,i,u){var s={};return u&&(s.backgroundColor=u,"fixed"===a?(s.width=o,s.height=i,s.backgroundColor=u,s.position="relative"):("constrained"===a||"fluid"===a)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),h({},n,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:r?0:1,transition:"opacity 500ms linear"},s)})}var q=function J(n){var r=n.as,u=void 0===r?"div":r,s=n.style,l=n.className,c=n.onStartLoad,d=n.image,g=n.onLoad,p=f(n,["as","style","className","onStartLoad","image","onLoad"]);if(!d)return null;var w,T,O,A,x=d.width,L=d.height,k=d.layout,N=d.images,q=Object(o.useRef)(),W=Object(o.useRef)(!1),B=Object(o.useRef)(null),H=Object(o.useRef)(null),_=Object(o.useRef)(),z=Object(o.useState)(I()),F=z[0],Q=z[1],Z=Object(o.useState)(!1),X=Z[0],nt=Z[1],rt=(w=x,T=L,A={position:"relative"},"fixed"===(O=k)?(A.width=w,A.height=T):"constrained"===O&&(A.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:A}),at=rt.style,ot=rt.className,it=f(rt,["style","className"]);return Object(o.useEffect)((function(){if(q.current){var n=q.current.querySelector("[data-gatsby-image-ssr]");if(I()&&n)return null==c||c({wasCached:!1}),n.complete&&(null==g||g(),P(JSON.stringify(N))),void n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==g||g(),P(JSON.stringify(N))}));a.e(23).then(a.bind(null,"vJ1Z")).then((function(n){var r=(0,n.createIntersectionObserver)((function(){q.current&&(null==c||c({wasCached:!1}),Q(!0))}));q.current&&(B.current=r(q))}))}return function(){B.current&&(B.current(q),W.current&&H.current&&H.current())}}),[]),Object(o.useEffect)((function(){if(q.current){var n=q.current.querySelector("[data-gatsby-image-ssr]");if(I()&&n&&!W.current)return void(W.current=!0);n||(W.current=!0),a.e(24).then(a.bind(null,"qvLh")).then((function(n){H.current=(0,n.lazyHydrate)(h({image:d,isLoading:F,isLoaded:X,toggleIsLoaded:function toggleIsLoaded(){null==g||g(),nt(!0)},ref:_},p),q,W)}))}}),[x,L,k,N,F,X,nt,_,p]),i.a.createElement(u,Object.assign({},it,{style:h({},at,s),className:ot+(l?" "+l:""),ref:q,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))},W=function U(n){return i.a.createElement(q,Object.assign({},n))};W.displayName="GatsbyImage";var B,H=function $(n){var r=n.src,a=n.srcSet,o=n.loading,u=n.alt,s=void 0===u?"":u,l=n.shouldLoad,c=n.innerRef,d=f(n,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return i.a.createElement("img",Object.assign({},d,{decoding:"async",loading:o,src:l?r:void 0,"data-src":l?void 0:r,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s,ref:c}))},_=Object(o.forwardRef)((function(n,r){var a=n.fallback,o=n.sources,u=void 0===o?[]:o,s=n.shouldLoad,l=void 0===s||s,c=f(n,["fallback","sources","shouldLoad"]),d=i.a.createElement(H,Object.assign({},c,a,{shouldLoad:l,innerRef:r}));return u.length?i.a.createElement("picture",null,u.map((function(n){var r=n.media,a=n.srcSet,o=n.type;return i.a.createElement("source",{key:r+"-"+o+"-"+a,type:o,media:r,srcSet:a})})),d):d}));H.propTypes={src:u.string.isRequired,alt:u.string.isRequired,sizes:u.string,srcSet:u.string,shouldLoad:u.bool},_.displayName="Picture",_.propTypes={alt:u.string.isRequired,shouldLoad:u.bool,fallback:Object(u.exact)({src:u.string.isRequired,srcSet:u.string,sizes:u.string}),sources:Object(u.arrayOf)(Object(u.oneOfType)([Object(u.exact)({media:u.string.isRequired,type:u.string,sizes:u.string,srcSet:u.string.isRequired}),Object(u.exact)({media:u.string,type:u.string.isRequired,sizes:u.string,srcSet:u.string.isRequired})]))};var z=function K(n){var r=n.fallback,a=f(n,["fallback"]);return r?i.a.createElement(_,Object.assign({},a,{fallback:{src:r},"aria-hidden":!0,alt:""})):i.a.createElement("div",Object.assign({},a))};z.displayName="Placeholder",z.propTypes={fallback:u.string,sources:null==(B=_.propTypes)?void 0:B.sources,alt:function alt(n,r,a){return n[r]?new Error("Invalid prop `"+r+"` supplied to `"+a+"`. Validation failed."):null}};var F=Object(o.forwardRef)((function(n,r){var a=h({},n);return i.a.createElement(_,Object.assign({ref:r},a))}));F.displayName="MainImage",F.propTypes=_.propTypes;var Q,Z=function tt(n){var r=n.layout,a=n.width,u=n.height,s=n.children,l=null;return"fluid"===r&&(l=i.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:u/a*100+"%"}})),"constrained"===r&&(l=i.a.createElement("div",{style:{maxWidth:a,display:"block"}},i.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+u+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),i.a.createElement(o.Fragment,null,l,s,!1)},X=function et(n,r){if("fluid"===n.layout||"constrained"===n.layout){if("maxWidth"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"');if(("width"===r||"height"===r)&&n[r])return new Error('"'+r+'" '+n[r]+' may not be passed when layout is "'+n.layout+'"')}else{if(("maxWidth"===r||"maxHeight"===r)&&n[r])return new Error('"'+r+'" may not be passed when layout is "'+n.layout+'"');if("width"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"')}return s.a.number.apply(s.a,[n,r].concat([].slice.call(arguments,2)))},nt={src:s.a.string.isRequired,alt:s.a.string.isRequired,width:X,height:X,maxHeight:X,maxWidth:X,sizes:s.a.string},rt=(Q=W,function(n){var r=n.src,a=n.__imageData,o=n.__error,u=f(n,["src","__imageData","__error","width","maxWidth","height","maxHeight","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","blurredOptions"]);return o&&console.warn(o),a?i.a.createElement(Q,Object.assign({image:a},u)):(console.warn("Image not loaded",r),null)});rt.displayName="StaticImage",rt.propTypes=nt},RNIs:function(n,r,a){var o=a("tiKp"),i=a("fHMY"),u=a("m/L8"),s=o("unscopables"),l=Array.prototype;null==l[s]&&u.f(l,s,{configurable:!0,value:i(null)}),n.exports=function(n){l[s][n]=!0}},STAE:function(n,r,a){var o=a("0Dky");n.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},ZfDv:function(n,r,a){var o=a("hh1v"),i=a("6LWA"),u=a("tiKp")("species");n.exports=function(n,r){var a;return i(n)&&("function"!=typeof(a=n.constructor)||a!==Array&&!i(a.prototype)?o(a)&&null===(a=a[u])&&(a=void 0):a=void 0),new(void 0===a?Array:a)(0===r?0:r)}},fHMY:function(n,r,a){var o,i=a("glrk"),u=a("N+g0"),s=a("eDl+"),l=a("0BK2"),c=a("G+Rx"),d=a("zBJ4"),g=a("93I0"),p=g("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(n){return"<script>"+n+"<\/script>"},NullProtoObject=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(i){}var n,r;NullProtoObject=o?function(n){n.write(scriptTag("")),n.close();var r=n.parentWindow.Object;return n=null,r}(o):((r=d("iframe")).style.display="none",c.appendChild(r),r.src=String("javascript:"),(n=r.contentWindow.document).open(),n.write(scriptTag("document.F=Object")),n.close(),n.F);for(var a=s.length;a--;)delete NullProtoObject.prototype[s[a]];return NullProtoObject()};l[p]=!0,n.exports=Object.create||function create(n,r){var a;return null!==n?(EmptyConstructor.prototype=i(n),a=new EmptyConstructor,EmptyConstructor.prototype=null,a[p]=n):a=NullProtoObject(),void 0===r?a:u(a,r)}},ntwW:function(n,r,a){function getTotalByType(n,r){return n.map((function(n){return n.gamestats})).flat().map((function(n){return n[r]})).flat().filter((function(n){return void 0!==n}))}function getTotalCautionType(n,r){return void 0===r&&(r=1),getTotalByType(n,"cautions").filter((function(n){return n&&n.caution_id==r}))}function getTotalGoals(n){return getTotalByType(n,"goals")}function getTotalMom(n){return getTotalByType(n,"mom")}function getTotalChildArr(n,r){var a=0;return n.map((function(n){a+=n[r].length})),a}a("BIHw"),a("E9XD"),a("QGkA"),r.getFile=function getFile(n,r){return n.nodeModel.getAllNodes({type:"File"}).find((function(n){return n.relativePath==r}))},r.findInNested=function findInNested(n,r,a,o,i){return void 0===o&&(o=[]),r.forEach((function(r){r[a]&&findInNested(n,r[a],a,o,r),r==n&&o.push(i)})),o},r.getTotalCautionType=getTotalCautionType,r.getTotalGoals=getTotalGoals,r.getTotalMom=getTotalMom,r.getTotalMom=getTotalMom,r.getPlayerGoals=function getPlayerGoals(n,r){return getTotalGoals(n).filter((function(n){return!n.owngoal&&n.player==r}))},r.getPlayerAssists=function getPlayerAssists(n,r){return getTotalGoals(n).filter((function(n){return n.assist==r}))},r.getPlayerCautions=function getPlayerCautions(n,r,a){return getTotalCautionType(n,a).filter((function(n){return n.player==r}))},r.getPlayerMom=function getPlayerMom(n,r){return getTotalMom(n).filter((function(n){return n.player==r}))},r.getPlayerSaves=function getPlayerSaves(n,r){return function getTotalSaves(n){return getTotalByType(n,"keeper")}(n).filter((function(n){return n.player==r}))},r.getTotalChildArr=getTotalChildArr,r.getTotalPlayers=function getTotalPlayers(n){return getTotalChildArr(n,"players")},r.getMosDetails=function getMosDetails(n,r){return n.map((function(n){var a=n.seasons.find((function(n){return n.season_id==r})).playerInfo.team.teamName;return n.name+" - "+a}))};r.groupBy=function groupBy(n,r){return n.reduce((function(n,a){return(n[a[r]]=n[a[r]]||[]).push(a),n}),{})},r.getSum=function getSum(n,r){return n.reduce((function(n,a){return n+a[r]}),0)}},o5e5:function(n,r){},or9q:function(n,r,a){"use strict";var o=a("6LWA"),i=a("UMSQ"),u=a("A2ZE"),flattenIntoArray=function(n,r,a,s,l,c,d,g){for(var p,w=l,T=0,O=!!d&&u(d,g,3);T<s;){if(T in a){if(p=O?O(a[T],T,r):a[T],c>0&&o(p))w=flattenIntoArray(n,r,p,i(p.length),w,c-1)-1;else{if(w>=9007199254740991)throw TypeError("Exceed the acceptable array length");n[w]=p}w++}T++}return w};n.exports=flattenIntoArray},tBDR:function(n,r,a){"use strict";var o=a("q1tI"),i=a.n(o),u=a("Wbzz"),s=a("RKTH");r.a=function Image(){var n=Object(u.useStaticQuery)("3222596441"),r=Object(s.i)(n.placeholderImage);return r?i.a.createElement(s.a,{image:r,alt:"Astronaut"}):i.a.createElement("div",null,"Picture not found")}},tiKp:function(n,r,a){var o=a("2oRo"),i=a("VpIT"),u=a("UTVS"),s=a("kOOl"),l=a("STAE"),c=a("/b8u"),d=i("wks"),g=o.Symbol,p=c?g:g&&g.withoutSetter||s;n.exports=function(n){return u(d,n)||(l&&u(g,n)?d[n]=g[n]:d[n]=p("Symbol."+n)),d[n]}},vyb4:function(n,r){r.MslImgKey={PLAYER:"players",TEAM:"teams"},r.Cautions={YELLOW:1,RED:2}}}]);
//# sourceMappingURL=component---src-pages-seasons-index-js-1239c8fcc612df229538.js.map