(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+vvT":function(n,r,a){"use strict";a.r(r);a("BIHw"),a("QGkA");var i=a("q1tI"),o=a.n(i),u=a("Wbzz"),s=a("Bl7J"),c=a("tBDR"),l=a("vrFN"),d=(a("o5e5"),a("iZTo").Cautions);function getTotalCautionType(n,r){return void 0===r&&(r=1),n.map((function(n){return n.gamestats})).flat().map((function(n){return n.cautions})).flat().filter((function(n){return n&&n.caution_id==r})).length}r.default=function SeasonsIndex(n){var r=n.data,a=n.path,i=r.seasons;return console.log(i),o.a.createElement(s.a,null,o.a.createElement(l.a,{title:"Seasons",path:a}),o.a.createElement("h1",null,"Hi Seasons"),o.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},o.a.createElement(c.a,null)),o.a.createElement("ul",null,i.nodes.map((function(n){return o.a.createElement("li",{key:n.season_id},o.a.createElement(u.Link,{to:n.seasonPath},n.season_id,"-",n.season_year,"-",n.schedules.length," ","Game--",n.teams.length," Teams --"," ",function getTotalPlayers(n){return function getTotalChildArr(n,r){var a=0;return n.map((function(n){a+=n[r].length})),a}(n,"players")}(n.teams)," Players --"," ",function getTotalGoals(n){return n.map((function(n){return n.gamestats})).flat().map((function(n){return n.goals})).flat().length}(n.schedules),"Goals --"," ",getTotalCautionType(n.schedules,d.YELLOW),"Yellow Card -- ",getTotalCautionType(n.schedules,d.RED)," Red Card -- ",function getMosDetails(n,r){return n.map((function(n){var a=n.seasons.find((function(n){return n.season_id==r})).teamInfo.team.teamName;return n.name+" - "+a}))}(n.mos,n.season_id).join(",")," ","Mos -"," "))}))))}},"/b8u":function(n,r,a){var i=a("STAE");n.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"33Wh":function(n,r,a){var i=a("yoRg"),o=a("eDl+");n.exports=Object.keys||function keys(n){return i(n,o)}},"6LWA":function(n,r,a){var i=a("xrYK");n.exports=Array.isArray||function isArray(n){return"Array"==i(n)}},A2ZE:function(n,r,a){var i=a("HAuM");n.exports=function(n,r,a){if(i(n),void 0===r)return n;switch(a){case 0:return function(){return n.call(r)};case 1:return function(a){return n.call(r,a)};case 2:return function(a,i){return n.call(r,a,i)};case 3:return function(a,i,o){return n.call(r,a,i,o)}}return function(){return n.apply(r,arguments)}}},BIHw:function(n,r,a){"use strict";var i=a("I+eb"),o=a("or9q"),u=a("ewvW"),s=a("UMSQ"),c=a("ppGB"),l=a("ZfDv");i({target:"Array",proto:!0},{flat:function flat(){var n=arguments.length?arguments[0]:void 0,r=u(this),a=s(r.length),i=l(r,0);return i.length=o(i,r,r,a,0,void 0===n?1:c(n)),i}})},"G+Rx":function(n,r,a){var i=a("0GbY");n.exports=i("document","documentElement")},"N+g0":function(n,r,a){var i=a("g6v/"),o=a("m/L8"),u=a("glrk"),s=a("33Wh");n.exports=i?Object.defineProperties:function defineProperties(n,r){u(n);for(var a,i=s(r),c=i.length,l=0;c>l;)o.f(n,a=i[l++],r[a]);return n}},QGkA:function(n,r,a){a("RNIs")("flat")},RKTH:function(n,r,a){"use strict";a.d(r,"a",(function(){return W})),a.d(r,"b",(function(){return F})),a.d(r,"c",(function(){return Z})),a.d(r,"d",(function(){return B})),a.d(r,"e",(function(){return f})),a.d(r,"f",(function(){return C})),a.d(r,"g",(function(){return V})),a.d(r,"h",(function(){return Y})),a.d(r,"i",(function(){return q})),a.d(r,"j",(function(){return I}));a("E9XD");var i=a("q1tI"),o=a.n(i),u=a("17x9"),s=a.n(u);function h(){return(h=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(n[i]=a[i])}return n}).apply(this,arguments)}function f(n,r){if(null==n)return{};var a,i,o={},u=Object.keys(n);for(i=0;i<u.length;i++)r.indexOf(a=u[i])>=0||(o[a]=n[a]);return o}var c=function(){function t(n,r){for(var a=0;a<r.length;a++){var i=r[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,a){return r&&t(n.prototype,r),a&&t(n,a),n}}(),l=Object.freeze(Object.defineProperties(["",""],{raw:{value:Object.freeze(["",""])}}));function m(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var d=function(){function t(){for(var n=this,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return m(this,t),this.tag=function(r){for(var a=arguments.length,i=Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=arguments[o];return"function"==typeof r?n.interimTag.bind(n,r):"string"==typeof r?n.transformEndResult(r):(r=r.map(n.transformString.bind(n)),n.transformEndResult(r.reduce(n.processSubstitutions.bind(n,i))))},a.length>0&&Array.isArray(a[0])&&(a=a[0]),this.transformers=a.map((function(n){return"function"==typeof n?n():n})),this.tag}return c(t,[{key:"interimTag",value:function value(n,r){for(var a=arguments.length,i=Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];return this.tag(l,n.apply(void 0,[r].concat(i)))}},{key:"processSubstitutions",value:function value(n,r,a){var i=this.transformSubstitution(n.shift(),r);return"".concat(r,i,a)}},{key:"transformString",value:function value(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function value(n,r){return this.transformers.reduce((function(n,a){return a.onSubstitution?a.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function value(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),t}(),p=function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function onEndResult(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};function y(n){if(Array.isArray(n)){for(var r=0,a=Array(n.length);r<n.length;r++)a[r]=n[r];return a}return Array.from(n)}var g=function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function onEndResult(r){if("initial"===n){var a=r.match(/^[^\S\n]*(?=\S)/gm),i=a&&Math.min.apply(Math,y(a.map((function(n){return n.length}))));if(i){var o=new RegExp("^.{"+i+"}","gm");return r.replace(o,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},w=function E(n,r){return{onEndResult:function onEndResult(a){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return a.replace(n,r)}}},O=function S(n,r){return{onSubstitution:function onSubstitution(a,i){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==a?a:a.toString().replace(n,r)}}},T={separator:"",conjunction:"",serial:!1},x=function j(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return{onSubstitution:function onSubstitution(r,a){if(Array.isArray(r)){var i=r.length,o=n.separator,u=n.conjunction,s=n.serial,c=a.match(/(\n?[^\S\n]+)$/);if(r=r.join(c?o+c[1]:o+" "),u&&i>1){var l=r.lastIndexOf(o);r=r.slice(0,l)+(s?o:"")+" "+u+r.slice(l+1)}}return r}}},A=function M(n){return{onSubstitution:function onSubstitution(r,a){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},L=function R(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n};new d(x({separator:","}),g,p),new d(x({separator:",",conjunction:"and"}),g,p),new d(x({separator:",",conjunction:"or"}),g,p),new d(A("\n"),(function(){return{onSubstitution:function onSubstitution(n){return Array.isArray(n)?n.filter(L):L(n)?n:""}}}),x,g,p),new d(A("\n"),x,g,p,O(/&/g,"&amp;"),O(/</g,"&lt;"),O(/>/g,"&gt;"),O(/"/g,"&quot;"),O(/'/g,"&#x27;"),O(/`/g,"&#x60;")),new d(w(/(?:\n(?:\s*))+/g," "),p),new d(w(/(?:\n\s*)/g,""),p),new d(x({separator:","}),w(/(?:\s+)/g," "),p),new d(x({separator:",",conjunction:"or"}),w(/(?:\s+)/g," "),p),new d(x({separator:",",conjunction:"and"}),w(/(?:\s+)/g," "),p),new d(x,g,p),new d(x,w(/(?:\s+)/g," "),p),new d(g,p);new d(g("all"),p);var k=new Set,I=function G(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function P(n){n&&k.add(n)}function C(n){return k.has(n)}var q=function D(n){var r;return null==n||null==(r=n.childImageSharp)?void 0:r.gatsbyImageData};function Y(n,r,a,i,o,u,s){return h({},a,{loading:i,shouldLoad:n,"data-main-image":"",style:{opacity:r?1:0},onLoad:function onLoad(n){if(!r){P(u);var a=n.currentTarget,i=new Image;i.src=a.currentSrc,i.decode?i.decode().catch((function(){})).then((function(){o(!0)})):o(!0)}},ref:s})}function V(n,r,a,i,o,u){var s={};return u&&(s.backgroundColor=u,"fixed"===a?(s.width=i,s.height=o,s.backgroundColor=u,s.position="relative"):("constrained"===a||"fluid"===a)&&(s.position="absolute",s.top=0,s.left=0,s.bottom=0,s.right=0)),h({},n,{"aria-hidden":!0,"data-placeholder-image":"",style:h({opacity:r?0:1,transition:"opacity 500ms linear"},s)})}var N=function J(n){var r=n.as,u=void 0===r?"div":r,s=n.style,c=n.className,l=n.onStartLoad,d=n.image,p=n.onLoad,g=f(n,["as","style","className","onStartLoad","image","onLoad"]);if(!d)return null;var w,O,T,x,A=d.width,L=d.height,k=d.layout,q=d.images,N=Object(i.useRef)(),W=Object(i.useRef)(!1),_=Object(i.useRef)(null),H=Object(i.useRef)(null),z=Object(i.useRef)(),B=Object(i.useState)(I()),Z=B[0],Q=B[1],F=Object(i.useState)(!1),X=F[0],nt=F[1],rt=(w=A,O=L,x={position:"relative"},"fixed"===(T=k)?(x.width=w,x.height=O):"constrained"===T&&(x.display="inline-block"),{className:"gatsby-image-wrapper","data-gatsby-image-wrapper":"",style:x}),at=rt.style,it=rt.className,ot=f(rt,["style","className"]);return Object(i.useEffect)((function(){if(N.current){var n=N.current.querySelector("[data-gatsby-image-ssr]");if(I()&&n)return null==l||l({wasCached:!1}),n.complete&&(null==p||p(),P(JSON.stringify(q))),void n.addEventListener("load",(function e(){n.removeEventListener("load",e),null==p||p(),P(JSON.stringify(q))}));a.e(23).then(a.bind(null,"vJ1Z")).then((function(n){var r=(0,n.createIntersectionObserver)((function(){N.current&&(null==l||l({wasCached:!1}),Q(!0))}));N.current&&(_.current=r(N))}))}return function(){_.current&&(_.current(N),W.current&&H.current&&H.current())}}),[]),Object(i.useEffect)((function(){if(N.current){var n=N.current.querySelector("[data-gatsby-image-ssr]");if(I()&&n&&!W.current)return void(W.current=!0);n||(W.current=!0),a.e(24).then(a.bind(null,"qvLh")).then((function(n){H.current=(0,n.lazyHydrate)(h({image:d,isLoading:Z,isLoaded:X,toggleIsLoaded:function toggleIsLoaded(){null==p||p(),nt(!0)},ref:z},g),N,W)}))}}),[A,L,k,q,Z,X,nt,z,g]),o.a.createElement(u,Object.assign({},ot,{style:h({},at,s),className:it+(c?" "+c:""),ref:N,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))},W=function U(n){return o.a.createElement(N,Object.assign({},n))};W.displayName="GatsbyImage";var _,H=function $(n){var r=n.src,a=n.srcSet,i=n.loading,u=n.alt,s=void 0===u?"":u,c=n.shouldLoad,l=n.innerRef,d=f(n,["src","srcSet","loading","alt","shouldLoad","innerRef"]);return o.a.createElement("img",Object.assign({},d,{decoding:"async",loading:i,src:c?r:void 0,"data-src":c?void 0:r,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:s,ref:l}))},z=Object(i.forwardRef)((function(n,r){var a=n.fallback,i=n.sources,u=void 0===i?[]:i,s=n.shouldLoad,c=void 0===s||s,l=f(n,["fallback","sources","shouldLoad"]),d=o.a.createElement(H,Object.assign({},l,a,{shouldLoad:c,innerRef:r}));return u.length?o.a.createElement("picture",null,u.map((function(n){var r=n.media,a=n.srcSet,i=n.type;return o.a.createElement("source",{key:r+"-"+i+"-"+a,type:i,media:r,srcSet:a})})),d):d}));H.propTypes={src:u.string.isRequired,alt:u.string.isRequired,sizes:u.string,srcSet:u.string,shouldLoad:u.bool},z.displayName="Picture",z.propTypes={alt:u.string.isRequired,shouldLoad:u.bool,fallback:Object(u.exact)({src:u.string.isRequired,srcSet:u.string,sizes:u.string}),sources:Object(u.arrayOf)(Object(u.oneOfType)([Object(u.exact)({media:u.string.isRequired,type:u.string,sizes:u.string,srcSet:u.string.isRequired}),Object(u.exact)({media:u.string,type:u.string.isRequired,sizes:u.string,srcSet:u.string.isRequired})]))};var B=function K(n){var r=n.fallback,a=f(n,["fallback"]);return r?o.a.createElement(z,Object.assign({},a,{fallback:{src:r},"aria-hidden":!0,alt:""})):o.a.createElement("div",Object.assign({},a))};B.displayName="Placeholder",B.propTypes={fallback:u.string,sources:null==(_=z.propTypes)?void 0:_.sources,alt:function alt(n,r,a){return n[r]?new Error("Invalid prop `"+r+"` supplied to `"+a+"`. Validation failed."):null}};var Z=Object(i.forwardRef)((function(n,r){var a=h({},n);return o.a.createElement(z,Object.assign({ref:r},a))}));Z.displayName="MainImage",Z.propTypes=z.propTypes;var Q,F=function tt(n){var r=n.layout,a=n.width,u=n.height,s=n.children,c=null;return"fluid"===r&&(c=o.a.createElement("div",{"aria-hidden":!0,style:{paddingTop:u/a*100+"%"}})),"constrained"===r&&(c=o.a.createElement("div",{style:{maxWidth:a,display:"block"}},o.a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+u+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}}))),o.a.createElement(i.Fragment,null,c,s,!1)},X=function et(n,r){if("fluid"===n.layout||"constrained"===n.layout){if("maxWidth"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"');if(("width"===r||"height"===r)&&n[r])return new Error('"'+r+'" '+n[r]+' may not be passed when layout is "'+n.layout+'"')}else{if(("maxWidth"===r||"maxHeight"===r)&&n[r])return new Error('"'+r+'" may not be passed when layout is "'+n.layout+'"');if("width"===r&&!n[r])return new Error('The prop "'+r+'" is required when layout is "'+n.layout+'"')}return s.a.number.apply(s.a,[n,r].concat([].slice.call(arguments,2)))},nt={src:s.a.string.isRequired,alt:s.a.string.isRequired,width:X,height:X,maxHeight:X,maxWidth:X,sizes:s.a.string},rt=(Q=W,function(n){var r=n.src,a=n.__imageData,i=n.__error,u=f(n,["src","__imageData","__error","width","maxWidth","height","maxHeight","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","blurredOptions"]);return i&&console.warn(i),a?o.a.createElement(Q,Object.assign({image:a},u)):(console.warn("Image not loaded",r),null)});rt.displayName="StaticImage",rt.propTypes=nt},RNIs:function(n,r,a){var i=a("tiKp"),o=a("fHMY"),u=a("m/L8"),s=i("unscopables"),c=Array.prototype;null==c[s]&&u.f(c,s,{configurable:!0,value:o(null)}),n.exports=function(n){c[s][n]=!0}},STAE:function(n,r,a){var i=a("0Dky");n.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},ZfDv:function(n,r,a){var i=a("hh1v"),o=a("6LWA"),u=a("tiKp")("species");n.exports=function(n,r){var a;return o(n)&&("function"!=typeof(a=n.constructor)||a!==Array&&!o(a.prototype)?i(a)&&null===(a=a[u])&&(a=void 0):a=void 0),new(void 0===a?Array:a)(0===r?0:r)}},fHMY:function(n,r,a){var i,o=a("glrk"),u=a("N+g0"),s=a("eDl+"),c=a("0BK2"),l=a("G+Rx"),d=a("zBJ4"),p=a("93I0"),g=p("IE_PROTO"),EmptyConstructor=function(){},scriptTag=function(n){return"<script>"+n+"<\/script>"},NullProtoObject=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var n,r;NullProtoObject=i?function(n){n.write(scriptTag("")),n.close();var r=n.parentWindow.Object;return n=null,r}(i):((r=d("iframe")).style.display="none",l.appendChild(r),r.src=String("javascript:"),(n=r.contentWindow.document).open(),n.write(scriptTag("document.F=Object")),n.close(),n.F);for(var a=s.length;a--;)delete NullProtoObject.prototype[s[a]];return NullProtoObject()};c[g]=!0,n.exports=Object.create||function create(n,r){var a;return null!==n?(EmptyConstructor.prototype=o(n),a=new EmptyConstructor,EmptyConstructor.prototype=null,a[g]=n):a=NullProtoObject(),void 0===r?a:u(a,r)}},iZTo:function(n,r){r.MslImgKey={PLAYER:"players",TEAM:"teams"},r.Cautions={YELLOW:1,RED:2}},o5e5:function(n,r){},or9q:function(n,r,a){"use strict";var i=a("6LWA"),o=a("UMSQ"),u=a("A2ZE"),flattenIntoArray=function(n,r,a,s,c,l,d,p){for(var g,w=c,O=0,T=!!d&&u(d,p,3);O<s;){if(O in a){if(g=T?T(a[O],O,r):a[O],l>0&&i(g))w=flattenIntoArray(n,r,g,o(g.length),w,l-1)-1;else{if(w>=9007199254740991)throw TypeError("Exceed the acceptable array length");n[w]=g}w++}O++}return w};n.exports=flattenIntoArray},tBDR:function(n,r,a){"use strict";var i=a("q1tI"),o=a.n(i),u=a("Wbzz"),s=a("RKTH");r.a=function Image(){var n=Object(u.useStaticQuery)("3222596441"),r=Object(s.i)(n.placeholderImage);return r?o.a.createElement(s.a,{image:r,alt:"Astronaut"}):o.a.createElement("div",null,"Picture not found")}},tiKp:function(n,r,a){var i=a("2oRo"),o=a("VpIT"),u=a("UTVS"),s=a("kOOl"),c=a("STAE"),l=a("/b8u"),d=o("wks"),p=i.Symbol,g=l?p:p&&p.withoutSetter||s;n.exports=function(n){return u(d,n)||(c&&u(p,n)?d[n]=p[n]:d[n]=g("Symbol."+n)),d[n]}}}]);
//# sourceMappingURL=component---src-pages-seasons-index-js-6eaee500854fa2352b15.js.map