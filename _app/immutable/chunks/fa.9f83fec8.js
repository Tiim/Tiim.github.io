import{S as Vn,i as Wn,s as Un,R as Yn,e as rn,T as Xn,b as Bn,E as on,h as Gn,U as qn,V as fn,W as sn}from"./index.8c1dbec0.js";/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function _(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_=function(t){return typeof t}:_=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(n)}function Zn(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function ln(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function Jn(n,t,a){return t&&ln(n.prototype,t),a&&ln(n,a),n}function Qn(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{},e=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),e.forEach(function(r){Qn(n,r,a[r])})}return n}function wn(n,t){return Kn(n)||$n(n,t)||nt()}function Kn(n){if(Array.isArray(n))return n}function $n(n,t){var a=[],e=!0,r=!1,i=void 0;try{for(var o=n[Symbol.iterator](),f;!(e=(f=o.next()).done)&&(a.push(f.value),!(t&&a.length===t));e=!0);}catch(l){r=!0,i=l}finally{try{!e&&o.return!=null&&o.return()}finally{if(r)throw i}}return a}function nt(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var cn=function(){},$={},kn={},tt=null,xn={mark:cn,measure:cn};try{typeof window<"u"&&($=window),typeof document<"u"&&(kn=document),typeof MutationObserver<"u"&&(tt=MutationObserver),typeof performance<"u"&&(xn=performance)}catch{}var et=$.navigator||{},un=et.userAgent,mn=un===void 0?"":un,U=$,g=kn,j=xn;U.document;var nn=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function";~mn.indexOf("MSIE")||~mn.indexOf("Trident/");var E="___FONT_AWESOME___",zn="fa",Mn="svg-inline--fa",at="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var X={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},In=U.FontAwesomeConfig||{};function rt(n){var t=g.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function it(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(g&&typeof g.querySelector=="function"){var ot=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ot.forEach(function(n){var t=wn(n,2),a=t[0],e=t[1],r=it(rt(a));r!=null&&(In[e]=r)})}var ft={familyPrefix:zn,replacementClass:Mn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},q=c({},ft,In);q.autoReplaceSvg||(q.observeMutations=!1);var y=c({},q);U.FontAwesomeConfig=y;var O=U||{};O[E]||(O[E]={});O[E].styles||(O[E].styles={});O[E].hooks||(O[E].hooks={});O[E].shims||(O[E].shims=[]);var I=O[E],st=[],lt=function n(){g.removeEventListener("DOMContentLoaded",n),Z=1,st.map(function(t){return t()})},Z=!1;nn&&(Z=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),Z||g.addEventListener("DOMContentLoaded",lt));var tn="pending",Cn="settled",D="fulfilled",F="rejected",ct=function(){},An=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",ut=typeof setImmediate>"u"?setTimeout:setImmediate,T=[],J;function mt(){for(var n=0;n<T.length;n++)T[n][0](T[n][1]);T=[],J=!1}function V(n,t){T.push([n,t]),J||(J=!0,ut(mt,0))}function dt(n,t){function a(r){en(t,r)}function e(r){R(t,r)}try{n(a,e)}catch(r){e(r)}}function En(n){var t=n.owner,a=t._state,e=t._data,r=n[a],i=n.then;if(typeof r=="function"){a=D;try{e=r(e)}catch(o){R(i,o)}}On(i,e)||(a===D&&en(i,e),a===F&&R(i,e))}function On(n,t){var a;try{if(n===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||_(t)==="object")){var e=t.then;if(typeof e=="function")return e.call(t,function(r){a||(a=!0,t===r?Sn(n,r):en(n,r))},function(r){a||(a=!0,R(n,r))}),!0}}catch(r){return a||R(n,r),!0}return!1}function en(n,t){(n===t||!On(n,t))&&Sn(n,t)}function Sn(n,t){n._state===tn&&(n._state=Cn,n._data=t,V(ht,n))}function R(n,t){n._state===tn&&(n._state=Cn,n._data=t,V(gt,n))}function Nn(n){n._then=n._then.forEach(En)}function ht(n){n._state=D,Nn(n)}function gt(n){n._state=F,Nn(n),!n._handled&&An&&global.process.emit("unhandledRejection",n._data,n)}function vt(n){global.process.emit("rejectionHandled",n)}function p(n){if(typeof n!="function")throw new TypeError("Promise resolver "+n+" is not a function");if(!(this instanceof p))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],dt(n,this)}p.prototype={constructor:p,_state:tn,_then:null,_data:void 0,_handled:!1,then:function(t,a){var e={owner:this,then:new this.constructor(ct),fulfilled:t,rejected:a};return(a||t)&&!this._handled&&(this._handled=!0,this._state===F&&An&&V(vt,this)),this._state===D||this._state===F?V(En,e):this._then.push(e),e.then},catch:function(t){return this.then(null,t)}};p.all=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.all().");return new p(function(t,a){var e=[],r=0;function i(l){return r++,function(u){e[l]=u,--r||t(e)}}for(var o=0,f;o<n.length;o++)f=n[o],f&&typeof f.then=="function"?f.then(i(o),a):e[o]=f;r||t(e)})};p.race=function(n){if(!Array.isArray(n))throw new TypeError("You must pass an array to Promise.race().");return new p(function(t,a){for(var e=0,r;e<n.length;e++)r=n[e],r&&typeof r.then=="function"?r.then(t,a):t(r)})};p.resolve=function(n){return n&&_(n)==="object"&&n.constructor===p?n:new p(function(t){t(n)})};p.reject=function(n){return new p(function(t,a){a(n)})};var P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yt(n){if(!(!n||!nn)){var t=g.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=g.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return g.head.insertBefore(t,e),n}}var bt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function W(){for(var n=12,t="";n-- >0;)t+=bt[Math.random()*62|0];return t}function Ln(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pt(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Ln(n[a]),'" ')},"").trim()}function Pn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a],";")},"")}function Tn(n){return n.size!==P.size||n.x!==P.x||n.y!==P.y||n.rotate!==P.rotate||n.flipX||n.flipY}function _n(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),f="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(f)},u={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:l,path:u}}var B={x:0,y:0,width:"100%",height:"100%"};function dn(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function wt(n){return n.tag==="g"?n.children:[n]}function kt(n){var t=n.children,a=n.attributes,e=n.main,r=n.mask,i=n.maskId,o=n.transform,f=e.width,l=e.icon,u=r.width,d=r.icon,m=_n({transform:o,containerWidth:u,iconWidth:f}),w={tag:"rect",attributes:c({},B,{fill:"white"})},k=l.children?{children:l.children.map(dn)}:{},x={tag:"g",attributes:c({},m.inner),children:[dn(c({tag:l.tag,attributes:c({},l.attributes,m.path)},k))]},b={tag:"g",attributes:c({},m.outer),children:[x]},v="mask-".concat(i||W()),h="clip-".concat(i||W()),z={tag:"mask",attributes:c({},B,{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,b]},C={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:wt(d)},z]};return t.push(C,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(v,")")},B)}),{children:t,attributes:a}}function xt(n){var t=n.children,a=n.attributes,e=n.main,r=n.transform,i=n.styles,o=Pn(i);if(o.length>0&&(a.style=o),Tn(r)){var f=_n({transform:r,containerWidth:e.width,iconWidth:e.width});t.push({tag:"g",attributes:c({},f.outer),children:[{tag:"g",attributes:c({},f.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c({},e.icon.attributes,f.path)}]}]})}else t.push(e.icon);return{children:t,attributes:a}}function zt(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(Tn(o)&&a.found&&!e.found){var f=a.width,l=a.height,u={x:f/l/2,y:.5};r.style=Pn(c({},i,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Mt(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(y.familyPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c({},r,{id:o}),children:e}]}]}function It(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,f=n.symbol,l=n.title,u=n.maskId,d=n.titleId,m=n.extra,w=n.watchable,k=w===void 0?!1:w,x=e.found?e:a,b=x.width,v=x.height,h=r==="fak",z=h?"":"fa-w-".concat(Math.ceil(b/v*16)),C=[y.replacementClass,i?"".concat(y.familyPrefix,"-").concat(i):"",z].filter(function(H){return m.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(m.classes).join(" "),M={children:[],attributes:c({},m.attributes,{"data-prefix":r,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(v)})},N=h&&!~m.classes.indexOf("fa-fw")?{width:"".concat(b/v*16*.0625,"em")}:{};k&&(M.attributes[at]=""),l&&M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||W())},children:[l]});var s=c({},M,{prefix:r,iconName:i,main:a,mask:e,maskId:u,transform:o,symbol:f,styles:c({},N,m.styles)}),A=e.found&&a.found?kt(s):xt(s),L=A.children,S=A.attributes;return s.children=L,s.attributes=S,f?Mt(s):zt(s)}var hn=function(){};y.measurePerformance&&j&&j.mark&&j.measure;var Ct=function(t,a){return function(e,r,i,o){return t.call(a,e,r,i,o)}},G=function(t,a,e,r){var i=Object.keys(t),o=i.length,f=r!==void 0?Ct(a,r):a,l,u,d;for(e===void 0?(l=1,d=t[i[0]]):(l=0,d=e);l<o;l++)u=i[l],d=f(d,t[u],u,t);return d};function Rn(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=Object.keys(t).reduce(function(o,f){var l=t[f],u=!!l.icon;return u?o[l.iconName]=l.icon:o[f]=l,o},{});typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(n,i):I.styles[n]=c({},I.styles[n]||{},i),n==="fas"&&Rn("fa",t)}var gn=I.styles,At=I.shims,Hn=function(){var t=function(r){return G(gn,function(i,o,f){return i[f]=G(o,r,{}),i},{})};t(function(e,r,i){return r[3]&&(e[r[3]]=i),e}),t(function(e,r,i){var o=r[2];return e[i]=i,o.forEach(function(f){e[f]=i}),e});var a="far"in gn;G(At,function(e,r){var i=r[0],o=r[1],f=r[2];return o==="far"&&!a&&(o="fas"),e[i]={prefix:o,iconName:f},e},{})};Hn();I.styles;function vn(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}function jn(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?Ln(n):"<".concat(t," ").concat(pt(e),">").concat(i.map(jn).join(""),"</").concat(t,">")}var Et=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],f=i.slice(1).join("-");if(o&&f==="h")return e.flipX=!0,e;if(o&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(o){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},a):a};function Q(n){this.name="MissingIcon",this.message=n||"Icon unavailable",this.stack=new Error().stack}Q.prototype=Object.create(Error.prototype);Q.prototype.constructor=Q;var Y={fill:"currentColor"},Dn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c({},Y,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var an=c({},Dn,{attributeName:"opacity"});c({},Y,{cx:"256",cy:"364",r:"28"}),c({},Dn,{attributeName:"r",values:"28;14;28;28;14;28;"}),c({},an,{values:"1;0;1;1;0;1;"});c({},Y,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),c({},an,{values:"1;0;0;0;0;1;"});c({},Y,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),c({},an,{values:"0;0;1;1;0;0;"});I.styles;function yn(n){var t=n[0],a=n[1],e=n.slice(4),r=wn(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(y.familyPrefix,"-").concat(X.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(X.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.familyPrefix,"-").concat(X.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}I.styles;var Ot=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function St(){var n=zn,t=Mn,a=y.familyPrefix,e=y.replacementClass,r=Ot;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),f=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(f,".".concat(e))}return r}var Nt=function(){function n(){Zn(this,n),this.definitions={}}return Jn(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(f){a.definitions[f]=c({},a.definitions[f]||{},o[f]),Rn(f,o[f]),Hn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],f=o.prefix,l=o.iconName,u=o.icon;a[f]||(a[f]={}),a[f][l]=u}),a}}]),n}();function Lt(){y.autoAddCss&&!bn&&(yt(St()),bn=!0)}function Pt(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return jn(e)})}}),Object.defineProperty(n,"node",{get:function(){if(nn){var e=g.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function K(n){var t=n.prefix,a=t===void 0?"fa":t,e=n.iconName;if(e)return vn(Fn.definitions,a,e)||vn(I.styles,a,e)}function Tt(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:K(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:K(r||{})),n(e,c({},a,{mask:r}))}}var Fn=new Nt,bn=!1,_t={transform:function(t){return Et(t)}},Rt=Tt(function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,e=a===void 0?P:a,r=t.symbol,i=r===void 0?!1:r,o=t.mask,f=o===void 0?null:o,l=t.maskId,u=l===void 0?null:l,d=t.title,m=d===void 0?null:d,w=t.titleId,k=w===void 0?null:w,x=t.classes,b=x===void 0?[]:x,v=t.attributes,h=v===void 0?{}:v,z=t.styles,C=z===void 0?{}:z;if(n){var M=n.prefix,N=n.iconName,s=n.icon;return Pt(c({type:"icon"},n),function(){return Lt(),y.autoA11y&&(m?h["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(k||W()):(h["aria-hidden"]="true",h.focusable="false")),It({icons:{main:yn(s),mask:f?yn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:N,transform:c({},P,e),symbol:i,title:m,maskId:u,titleId:k,extra:{attributes:h,styles:C,classes:b}})})}});function pn(n){if(n===null||typeof n=="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2){const[t,a]=n;return{prefix:t,iconName:a}}if(typeof n=="string")return{prefix:"fas",iconName:n}}function Ht(n){let t,a;return{c(){t=new Yn(!1),a=rn(),this.h()},l(e){t=Xn(e,!1),a=rn(),this.h()},h(){t.a=a},m(e,r){t.m(n[0],e,r),Bn(e,a,r)},p(e,[r]){r&1&&t.p(e[0])},i:on,o:on,d(e){e&&Gn(a),e&&t.d()}}}function jt(n,t,a){let e,r,{border:i=!1}=t,{fixedWidth:o=!1}=t,{flip:f=null}=t,{icon:l=null}=t,{mask:u=null}=t,{listItem:d=!1}=t,{pull:m=null}=t,{pulse:w=!1}=t,{rotation:k=null}=t,{swapOpacity:x=!1}=t,{size:b=null}=t,{spin:v=!1}=t,{transform:h={}}=t,{symbol:z=!1}=t,{title:C=null}=t,{inverse:M=!1}=t,N="";return qn(()=>{const s=pn(l);if(!s)return;const A=K(s),L=Rt(A||l,{symbol:z,title:C,styles:t.style?r:{},classes:[...Object.keys(e).map(S=>e[S]?S:null).filter(S=>!!S),(t.class||"").split(" ")],transform:{...typeof h=="string"?_t.transform(h):h},mask:pn(u)});if(!L){console.warn("Could not find one or more icon(s)",A||l,u);return}a(0,N=L.html)}),n.$$set=s=>{a(19,t=fn(fn({},t),sn(s))),"border"in s&&a(1,i=s.border),"fixedWidth"in s&&a(2,o=s.fixedWidth),"flip"in s&&a(3,f=s.flip),"icon"in s&&a(4,l=s.icon),"mask"in s&&a(5,u=s.mask),"listItem"in s&&a(6,d=s.listItem),"pull"in s&&a(7,m=s.pull),"pulse"in s&&a(8,w=s.pulse),"rotation"in s&&a(9,k=s.rotation),"swapOpacity"in s&&a(10,x=s.swapOpacity),"size"in s&&a(11,b=s.size),"spin"in s&&a(12,v=s.spin),"transform"in s&&a(13,h=s.transform),"symbol"in s&&a(14,z=s.symbol),"title"in s&&a(15,C=s.title),"inverse"in s&&a(16,M=s.inverse)},n.$$.update=()=>{n.$$.dirty&73678&&(e={"fa-spin":v,"fa-pulse":w,"fa-fw":o,"fa-border":i,"fa-li":d,"fa-inverse":M,"fa-flip-horizontal":["both","horizontal"].includes(f),"fa-flip-vertical":["both","vertical"].includes(f),[`fa-${b}`]:b!==null,[`fa-rotate-${k}`]:k!==null,[`fa-pull-${m}`]:m!==null,"fa-swap-opacity":x}),r=(t.style||"").split(";").filter(s=>!!s).map(s=>s.split(":").map(A=>A.trim())).reduce((s,A)=>{const[L,S]=A;return s[L]=S,s},{})},t=sn(t),[N,i,o,f,l,u,d,m,w,k,x,b,v,h,z,C,M]}class Dt extends Vn{constructor(t){super(),Wn(this,t,jt,Ht,Un,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}}/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Ft={prefix:"fas",iconName:"at",icon:[512,512,[],"f1fa","M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"]},Vt={prefix:"fas",iconName:"border-all",icon:[448,512,[],"f84c","M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z"]},Wt={prefix:"fas",iconName:"comment-alt",icon:[512,512,[],"f27a","M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"]},Ut={prefix:"fas",iconName:"external-link-alt",icon:[512,512,[],"f35d","M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"]},Yt={prefix:"fas",iconName:"hashtag",icon:[448,512,[],"f292","M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"]},Xt={prefix:"fas",iconName:"rss",icon:[448,512,[],"f09e","M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"]},Bt={prefix:"fas",iconName:"user",icon:[448,512,[],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"]};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var Gt={prefix:"fab",iconName:"dev",icon:[448,512,[],"f6cc","M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"]},qt={prefix:"fab",iconName:"flickr",icon:[448,512,[],"f16e","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z"]},Zt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Jt={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Qt={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]},Kt={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};Fn.add(Ft,Vt,Wt,Gt,Ut,qt,Zt,Yt,Jt,Qt,Xt,Kt,Bt);const ne=Dt;export{ne as F};
