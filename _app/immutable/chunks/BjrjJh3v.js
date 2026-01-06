import"./Bzak7iHL.js";import{N as bn,ae as yn,aG as vn,p as xn,Z as An,a4 as kn,a5 as wn,a as Sn,b as Pn,g as it,aD as ae,a3 as En,aB as Cn,aH as p,aI as On}from"./N6vMP6K8.js";import{h as Nn}from"./dVNlkfcI.js";import{p as b}from"./tirM1Ya0.js";const In=[];function re(t,e=!1,n=!1){return ft(t,new Map,"",In,null,n)}function ft(t,e,n,a,r=null,s=!1){if(typeof t=="object"&&t!==null){var i=e.get(t);if(i!==void 0)return i;if(t instanceof Map)return new Map(t);if(t instanceof Set)return new Set(t);if(bn(t)){var o=Array(t.length);e.set(t,o),r!==null&&e.set(r,o);for(var m=0;m<t.length;m+=1){var u=t[m];m in t&&(o[m]=ft(u,e,n,a,null,s))}return o}if(yn(t)===vn){o={},e.set(t,o),r!==null&&e.set(r,o);for(var d in t)o[d]=ft(t[d],e,n,a,null,s);return o}if(t instanceof Date)return structuredClone(t);if(typeof t.toJSON=="function"&&!s)return ft(t.toJSON(),e,n,a,t)}if(t instanceof EventTarget)return t;try{return structuredClone(t)}catch{return t}}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Mn(t,e,n){return(e=Tn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?se(Object(n),!0).forEach(function(a){Mn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Fn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Tn(t){var e=Fn(t,"string");return typeof e=="symbol"?e:e+""}const ie=()=>{};let Wt={},Te={},_e=null,ze={mark:ie,measure:ie};try{typeof window<"u"&&(Wt=window),typeof document<"u"&&(Te=document),typeof MutationObserver<"u"&&(_e=MutationObserver),typeof performance<"u"&&(ze=performance)}catch{}const{userAgent:oe=""}=Wt.navigator||{},L=Wt,y=Te,le=_e,ot=ze;L.document;const _=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Le=~oe.indexOf("MSIE")||~oe.indexOf("Trident/");var _n=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,zn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,De={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ln={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Re=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",gt="duotone",Dn="sharp",Rn="sharp-duotone",je=[A,gt,Dn,Rn],jn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Yn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Un=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Wn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Hn=["fak","fa-kit","fakd","fa-kit-duotone"],fe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Gn=["kit"],Xn={kit:{"fa-kit":"fak"}},Vn=["fak","fakd"],Bn={kit:{fak:"fa-kit"}},ce={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Kn=["fak","fa-kit","fakd","fa-kit-duotone"],Jn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Qn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Zn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Et={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$n=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ct=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...qn,...$n],ta=["solid","regular","light","thin","duotone","brands"],Ye=[1,2,3,4,5,6,7,8,9,10],ea=Ye.concat([11,12,13,14,15,16,17,18,19,20]),na=[...Object.keys(Zn),...ta,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY].concat(Ye.map(t=>"".concat(t,"x"))).concat(ea.map(t=>"w-".concat(t))),aa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const F="___FONT_AWESOME___",Ot=16,Ue="fa",We="svg-inline--fa",U="data-fa-i2svg",Nt="data-fa-pseudo-element",ra="data-fa-pseudo-element-pending",Ht="data-prefix",Gt="data-icon",ue="fontawesome-i2svg",sa="async",ia=["HTML","HEAD","STYLE","SCRIPT"],He=(()=>{try{return!0}catch{return!1}})();function nt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const Ge=l({},De);Ge[A]=l(l(l(l({},{"fa-duotone":"duotone"}),De[A]),fe.kit),fe["kit-duotone"]);const oa=nt(Ge),It=l({},Wn);It[A]=l(l(l(l({},{duotone:"fad"}),It[A]),ce.kit),ce["kit-duotone"]);const me=nt(It),Mt=l({},Et);Mt[A]=l(l({},Mt[A]),Bn.kit);const Xt=nt(Mt),Ft=l({},Qn);Ft[A]=l(l({},Ft[A]),Xn.kit);nt(Ft);const la=_n,Xe="fa-layers-text",fa=zn,ca=l({},jn);nt(ca);const ua=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At=Ln,ma=[...Gn,...na],Z=L.FontAwesomeConfig||{};function da(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ga(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ga(da(n));r!=null&&(Z[a]=r)});const Ve={styleDefault:"solid",familyDefault:A,cssPrefix:Ue,replacementClass:We,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);const B=l(l({},Ve),Z);B.autoReplaceSvg||(B.observeMutations=!1);const c={};Object.keys(Ve).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){B[t]=e,$.forEach(n=>n(c))},get:function(){return B[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){B.cssPrefix=t,$.forEach(e=>e(c))},get:function(){return B.cssPrefix}});L.FontAwesomeConfig=c;const $=[];function ha(t){return $.push(t),()=>{$.splice($.indexOf(t),1)}}const z=Ot,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pa(t){if(!t||!_)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return y.head.insertBefore(e,a),t}const ba="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let t=12,e="";for(;t-- >0;)e+=ba[Math.random()*62|0];return e}function q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vt(t){return t.classList?q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Be(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ya(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Be(t[n]),'" '),"").trim()}function ht(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Bt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function va(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(s," ").concat(i," ").concat(o)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:m,path:u}}function xa(t){let{transform:e,width:n=Ot,height:a=Ot,startCentered:r=!1}=t,s="";return r&&Le?s+="translate(".concat(e.x/z-n/2,"em, ").concat(e.y/z-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/z,"em), calc(-50% + ").concat(e.y/z,"em)) "):s+="translate(".concat(e.x/z,"em, ").concat(e.y/z,"em) "),s+="scale(".concat(e.size/z*(e.flipX?-1:1),", ").concat(e.size/z*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Aa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
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

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
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
  z-index: var(--fa-stack-z-index, auto);
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
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function qe(){const t=Ue,e=We,n=c.cssPrefix,a=c.replacementClass;let r=Aa;if(n!==t||a!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let de=!1;function kt(){c.autoAddCss&&!de&&(pa(qe()),de=!0)}var ka={mixout(){return{dom:{css:qe,insertCss:kt}}},hooks(){return{beforeDOMElementCreation(){kt()},beforeI2svg(){kt()}}}};const T=L||{};T[F]||(T[F]={});T[F].styles||(T[F].styles={});T[F].hooks||(T[F].hooks={});T[F].shims||(T[F].shims=[]);var M=T[F];const Ke=[],Je=function(){y.removeEventListener("DOMContentLoaded",Je),mt=1,Ke.map(t=>t())};let mt=!1;_&&(mt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),mt||y.addEventListener("DOMContentLoaded",Je));function wa(t){_&&(mt?setTimeout(t,0):Ke.push(t))}function at(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Be(t):"<".concat(e," ").concat(ya(n),">").concat(a.map(at).join(""),"</").concat(e,">")}function ge(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wt=function(e,n,a,r){var s=Object.keys(e),i=s.length,o=n,m,u,d;for(a===void 0?(m=1,d=e[s[0]]):(m=0,d=a);m<i;m++)u=s[m],d=o(d,e[u],u,e);return d};function Sa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Tt(t){const e=Sa(t);return e.length===1?e[0].toString(16):null}function Pa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function he(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function _t(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=he(e);typeof M.hooks.addPack=="function"&&!a?M.hooks.addPack(t,he(e)):M.styles[t]=l(l({},M.styles[t]||{}),r),t==="fas"&&_t("fa",e)}const{styles:et,shims:Ea}=M,Qe=Object.keys(Xt),Ca=Qe.reduce((t,e)=>(t[e]=Object.keys(Xt[e]),t),{});let qt=null,Ze={},$e={},tn={},en={},nn={};function Oa(t){return~ma.indexOf(t)}function Na(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Oa(r)?r:null}const an=()=>{const t=a=>wt(et,(r,s,i)=>(r[i]=wt(s,a,{}),r),{});Ze=t((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),$e=t((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),nn=t((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const e="far"in et||c.autoFetchSvg,n=wt(Ea,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});tn=n.names,en=n.unicodes,qt=pt(c.styleDefault,{family:c.familyDefault})};ha(t=>{qt=pt(t.styleDefault,{family:c.familyDefault})});an();function Kt(t,e){return(Ze[t]||{})[e]}function Ia(t,e){return($e[t]||{})[e]}function Y(t,e){return(nn[t]||{})[e]}function rn(t){return tn[t]||{prefix:null,iconName:null}}function Ma(t){const e=en[t],n=Kt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return qt}const sn=()=>({prefix:null,iconName:null,rest:[]});function Fa(t){let e=A;const n=Qe.reduce((a,r)=>(a[r]="".concat(c.cssPrefix,"-").concat(r),a),{});return je.forEach(a=>{(t.includes(n[a])||t.some(r=>Ca[a].includes(r)))&&(e=a)}),e}function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=oa[n][t];if(n===gt&&!t)return"fad";const r=me[n][t]||me[n][a],s=t in M.styles?t:null;return r||s||null}function Ta(t){let e=[],n=null;return t.forEach(a=>{const r=Na(c.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function pe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function bt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=Ct.concat(Kn),s=pe(t.filter(h=>r.includes(h))),i=pe(t.filter(h=>!Ct.includes(h))),o=s.filter(h=>(a=h,!Re.includes(h))),[m=null]=o,u=Fa(s),d=l(l({},Ta(i)),{},{prefix:pt(m,{family:u})});return l(l(l({},d),Da({values:t,family:u,styles:et,config:c,canonical:d,givenPrefix:a})),_a(n,a,d))}function _a(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const s=e==="fa"?rn(r):{},i=Y(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!et.far&&et.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const za=je.filter(t=>t!==A||t!==gt),La=Object.keys(Et).filter(t=>t!==A).map(t=>Object.keys(Et[t])).flat();function Da(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=t,o=n===gt,m=e.includes("fa-duotone")||e.includes("fad"),u=i.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(m||u||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&za.includes(n)&&(Object.keys(s).find(g=>La.includes(g))||i.autoFetchSvg)){const g=Un.get(n).defaultShortPrefixId;a.prefix=g,a.iconName=Y(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=D()||"fas"),a}class Ra{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=l(l({},this.definitions[s]||{}),r[s]),_t(s,r[s]);const i=Xt[A][s];i&&_t(i,r[s]),an()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],m=o[2];e[s]||(e[s]={}),m.length>0&&m.forEach(u=>{typeof u=="string"&&(e[s][u]=o)}),e[s][i]=o}),e}}let be=[],X={};const V={},ja=Object.keys(V);function Ya(t,e){let{mixoutsTo:n}=e;return be=t,X={},Object.keys(V).forEach(a=>{ja.indexOf(a)===-1&&delete V[a]}),be.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{X[i]||(X[i]=[]),X[i].push(s[i])})}a.provides&&a.provides(V)}),n}function zt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(X[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function W(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(X[t]||[]).forEach(s=>{s.apply(null,n)})}function R(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return V[t]?V[t].apply(null,e):void 0}function Lt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||D();if(e)return e=Y(n,e)||e,ge(on.definitions,n,e)||ge(M.styles,n,e)}const on=new Ra,Ua=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,W("noAuto")},Wa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _?(W("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,wa(()=>{Ga({autoReplaceSvgRoot:e}),W("watch",t)})}},Ha={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pt(t[0]);return{prefix:n,iconName:Y(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(la))){const e=bt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||D(),iconName:Y(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=D();return{prefix:e,iconName:Y(e,t)||t}}}},E={noAuto:Ua,config:c,dom:Wa,parse:Ha,library:on,findIconDefinition:Lt,toHtml:at},Ga=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(M.styles).length>0||c.autoFetchSvg)&&_&&c.autoReplaceSvg&&E.dom.i2svg({node:e})};function yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>at(n))}}),Object.defineProperty(t,"node",{get:function(){if(!_)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Xa(t){let{children:e,main:n,mask:a,attributes:r,styles:s,transform:i}=t;if(Bt(i)&&n.found&&!a.found){const{width:o,height:m}=n,u={x:o/m/2,y:.5};r.style=ht(l(l({},s),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Va(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function Jt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:m,titleId:u,extra:d,watchable:h=!1}=t,{width:g,height:v}=n.found?n:e,S=Vn.includes(a),C=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(N=>d.classes.indexOf(N)===-1).filter(N=>N!==""||!!N).concat(d.classes).join(" ");let k={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})};const P=S&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};h&&(k.attributes[U]=""),o&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||tt())},children:[o]}),delete k.attributes.title);const x=l(l({},k),{},{prefix:a,iconName:r,main:e,mask:n,maskId:m,transform:s,symbol:i,styles:l(l({},P),d.styles)}),{children:w,attributes:O}=n.found&&e.found?R("generateAbstractMask",x)||{children:[],attributes:{}}:R("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=w,x.attributes=O,i?Va(x):Xa(x)}function ye(t){const{content:e,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=t,m=l(l(l({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(m[U]="");const u=l({},i.styles);Bt(r)&&(u.transform=xa({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);const d=ht(u);d.length>0&&(m.style=d);const h=[];return h.push({tag:"span",attributes:m,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function Ba(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=ht(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:St}=M;function Dt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const qa={found:!1,width:512,height:512};function Ka(t,e){!He&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Rt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=D()),new Promise((a,r)=>{if(n==="fa"){const s=rn(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&St[e]&&St[e][t]){const s=St[e][t];return a(Dt(s))}Ka(t,e),a(l(l({},qa),{},{icon:c.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}const ve=()=>{},jt=c.measurePerformance&&ot&&ot.mark&&ot.measure?ot:{mark:ve,measure:ve},Q='FA "6.7.2"',Ja=t=>(jt.mark("".concat(Q," ").concat(t," begins")),()=>ln(t)),ln=t=>{jt.mark("".concat(Q," ").concat(t," ends")),jt.measure("".concat(Q," ").concat(t),"".concat(Q," ").concat(t," begins"),"".concat(Q," ").concat(t," ends"))};var Qt={begin:Ja,end:ln};const ct=()=>{};function xe(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function Qa(t){const e=t.getAttribute?t.getAttribute(Ht):null,n=t.getAttribute?t.getAttribute(Gt):null;return e&&n}function Za(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function $a(){return c.autoReplaceSvg===!0?ut.replace:ut[c.autoReplaceSvg]||ut.replace}function tr(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function er(t){return y.createElement(t)}function fn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?tr:er}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){a.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){a.appendChild(fn(s,{ceFn:n}))}),a}function nr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ut={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(fn(n),e)}),e.getAttribute(U)===null&&c.keepOriginalSource){let n=y.createComment(nr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Vt(e).indexOf(c.replacementClass))return ut.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===c.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>at(s)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function Ae(t){t()}function cn(t,e){const n=typeof e=="function"?e:ct;if(t.length===0)n();else{let a=Ae;c.mutateApproach===sa&&(a=L.requestAnimationFrame||Ae),a(()=>{const r=$a(),s=Qt.begin("mutate");t.map(r),s(),n()})}}let Zt=!1;function un(){Zt=!0}function Yt(){Zt=!1}let dt=null;function ke(t){if(!le||!c.observeMutations)return;const{treeCallback:e=ct,nodeCallback:n=ct,pseudoElementsCallback:a=ct,observeMutationsRoot:r=y}=t;dt=new le(s=>{if(Zt)return;const i=D();q(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!xe(o.addedNodes[0])&&(c.searchPseudoElements&&a(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&c.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&xe(o.target)&&~ua.indexOf(o.attributeName))if(o.attributeName==="class"&&Qa(o.target)){const{prefix:m,iconName:u}=bt(Vt(o.target));o.target.setAttribute(Ht,m||i),u&&o.target.setAttribute(Gt,u)}else Za(o.target)&&n(o.target)})}),_&&dt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ar(){dt&&dt.disconnect()}function rr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function sr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=bt(Vt(t));return r.prefix||(r.prefix=D()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ia(r.prefix,t.innerText)||Kt(r.prefix,Tt(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ir(t){const e=q(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||tt()):(e["aria-hidden"]="true",e.focusable="false")),e}function or(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=sr(t),s=ir(t),i=zt("parseNodeAttributes",{},t);let o=e.styleParser?rr(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:lr}=M;function mn(t){const e=c.autoReplaceSvg==="nest"?we(t,{styleParser:!1}):we(t);return~e.extra.classes.indexOf(Xe)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}function fr(){return[...Hn,...Ct]}function Se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_)return Promise.resolve();const n=y.documentElement.classList,a=d=>n.add("".concat(ue,"-").concat(d)),r=d=>n.remove("".concat(ue,"-").concat(d)),s=c.autoFetchSvg?fr():Re.concat(Object.keys(lr));s.includes("fa")||s.push("fa");const i=[".".concat(Xe,":not([").concat(U,"])")].concat(s.map(d=>".".concat(d,":not([").concat(U,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=q(t.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const m=Qt.begin("onTree"),u=o.reduce((d,h)=>{try{const g=mn(h);g&&d.push(g)}catch(g){He||g.name==="MissingIcon"&&console.error(g)}return d},[]);return new Promise((d,h)=>{Promise.all(u).then(g=>{cn(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),m(),d()})}).catch(g=>{m(),h(g)})})}function cr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;mn(t).then(n=>{n&&cn([n],e)})}function ur(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Lt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Lt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const mr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:m=[],attributes:u={},styles:d={}}=e;if(!t)return;const{prefix:h,iconName:g,icon:v}=t;return yt(l({type:"icon"},t),()=>(W("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(i?u["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(o||tt()):(u["aria-hidden"]="true",u.focusable="false")),Jt({icons:{main:Dt(v),mask:r?Dt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:g,transform:l(l({},I),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:u,styles:d,classes:m}})))};var dr={mixout(){return{icon:ur(mr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Se,t.nodeCallback=cr,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Se(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:m,mask:u,maskId:d,extra:h}=n;return new Promise((g,v)=>{Promise.all([Rt(a,i),u.iconName?Rt(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[C,k]=S;g([e,Jt({icons:{main:C,mask:k},prefix:i,iconName:a,transform:o,symbol:m,maskId:d,title:r,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:s,styles:i}=e;const o=ht(i);o.length>0&&(a.style=o);let m;return Bt(s)&&(m=R("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(m||r.icon),{children:n,attributes:a}}}},gr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return yt({type:"layer"},()=>{W("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},hr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=e;return yt({type:"counter",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),Ba({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},pr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:s={},styles:i={}}=e;return yt({type:"text",content:t},()=>(W("beforeDOMElementCreation",{content:t,params:e}),ye({content:t,transform:l(l({},I),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(Le){const m=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();i=u.width/m,o=u.height/m}return c.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,ye({content:e.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const br=new RegExp('"',"ug"),Pe=[1105920,1112319],Ee=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Yn),aa),Jn),Ut=Object.keys(Ee).reduce((t,e)=>(t[e.toLowerCase()]=Ee[e],t),{}),yr=Object.keys(Ut).reduce((t,e)=>{const n=Ut[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function vr(t){const e=t.replace(br,""),n=Pa(e,0),a=n>=Pe[0]&&n<=Pe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Tt(r?e[0]:e),isSecondary:a||r}}function xr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Ut[n]||{})[r]||yr[n]}function Ce(t,e){const n="".concat(ra).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=q(t.children).filter(g=>g.getAttribute(Nt)===e)[0],o=L.getComputedStyle(t,e),m=o.getPropertyValue("font-family"),u=m.match(fa),d=o.getPropertyValue("font-weight"),h=o.getPropertyValue("content");if(i&&!u)return t.removeChild(i),a();if(u&&h!=="none"&&h!==""){const g=o.getPropertyValue("content");let v=xr(m,d);const{value:S,isSecondary:C}=vr(g),k=u[0].startsWith("FontAwesome");let P=Kt(v,S),x=P;if(k){const w=Ma(S);w.iconName&&w.prefix&&(P=w.iconName,v=w.prefix)}if(P&&!C&&(!i||i.getAttribute(Ht)!==v||i.getAttribute(Gt)!==x)){t.setAttribute(n,x),i&&t.removeChild(i);const w=or(),{extra:O}=w;O.attributes[Nt]=e,Rt(P,v).then(N=>{const K=Jt(l(l({},w),{},{icons:{main:N,mask:sn()},prefix:v,iconName:x,extra:O,watchable:!0})),j=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=K.map(J=>at(J)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ar(t){return Promise.all([Ce(t,"::before"),Ce(t,"::after")])}function kr(t){return t.parentNode!==document.head&&!~ia.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Oe(t){if(_)return new Promise((e,n)=>{const a=q(t.querySelectorAll("*")).filter(kr).map(Ar),r=Qt.begin("searchPseudoElements");un(),Promise.all(a).then(()=>{r(),Yt(),e()}).catch(()=>{r(),Yt(),n()})})}var wr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Oe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;c.searchPseudoElements&&Oe(n)}}};let Ne=!1;var Sr={mixout(){return{dom:{unwatch(){un(),Ne=!0}}}},hooks(){return{bootstrap(){ke(zt("mutationObserverCallbacks",{}))},noAuto(){ar()},watch(t){const{observeMutationsRoot:e}=t;Ne?Yt():ke(zt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ie=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Pr={mixout(){return{parse:{transform:t=>Ie(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ie(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:s}=e;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),m="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(o," ").concat(m," ").concat(u)},h={transform:"translate(".concat(s/2*-1," -256)")},g={outer:i,inner:d,path:h};return{tag:"g",attributes:l({},g.outer),children:[{tag:"g",attributes:l({},g.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),g.path)}]}]}}}};const Pt={x:0,y:0,width:"100%",height:"100%"};function Me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Er(t){return t.tag==="g"?t.children:[t]}var Cr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?bt(n.split(" ").map(r=>r.trim())):sn();return a.prefix||(a.prefix=D()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=e;const{width:m,icon:u}=r,{width:d,icon:h}=s,g=va({transform:o,containerWidth:d,iconWidth:m}),v={tag:"rect",attributes:l(l({},Pt),{},{fill:"white"})},S=u.children?{children:u.children.map(Me)}:{},C={tag:"g",attributes:l({},g.inner),children:[Me(l({tag:u.tag,attributes:l(l({},u.attributes),g.path)},S))]},k={tag:"g",attributes:l({},g.outer),children:[C]},P="mask-".concat(i||tt()),x="clip-".concat(i||tt()),w={tag:"mask",attributes:l(l({},Pt),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,k]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Er(h)},w]};return n.push(O,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(P,")")},Pt)}),{children:n,attributes:a}}}},Or={provides(t){let e=!1;L.matchMedia&&(e=L.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=l(l({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},s),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Nr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Ir=[ka,dr,gr,hr,pr,wr,Sr,Pr,Cr,Or,Nr];Ya(Ir,{mixoutsTo:E});E.noAuto;E.config;const Mr=E.library;E.dom;const Fr=E.parse,Tr=E.findIconDefinition;E.toHtml;const _r=E.icon;E.layer;E.text;E.counter;function Fe(t){if(!(!t&&t!=="")){if(Array.isArray(t)&&t.length===2){const[e,n]=t;return{prefix:e,iconName:n}}if(typeof t=="object"&&t.prefix&&t.iconName)return t;if(typeof t=="string")return{prefix:"fas",iconName:t}}}function dn(t,e){xn(e,!0);let n=b(e,"border",7,!1),a=b(e,"fixedWidth",7,!1),r=b(e,"flip",7),s=b(e,"icon",7),i=b(e,"mask",7),o=b(e,"listItem",7,!1),m=b(e,"pull",7),u=b(e,"pulse",7,!1),d=b(e,"rotation",7),h=b(e,"swapOpacity",7,!1),g=b(e,"size",7),v=b(e,"spin",7,!1),S=b(e,"transform",23,()=>({})),C=b(e,"symbol",7,!1),k=b(e,"title",7),P=b(e,"inverse",7,!1),x=b(e,"bounce",7,!1),w=b(e,"shake",7,!1),O=b(e,"beat",7,!1),N=b(e,"fade",7,!1),K=b(e,"beatFade",7,!1),j=b(e,"flash",7,!1),J=b(e,"spinPulse",7,!1),vt=b(e,"spinReverse",7,!1),rt=b(e,"style",7,""),xt=b(e,"class",7,""),$t=Cn(""),te=ae(()=>({"fa-spin":v(),"fa-pulse":u(),"fa-fw":a(),"fa-border":n(),"fa-li":o(),"fa-inverse":P(),"fa-flip":r()===!0,"fa-flip-horizontal":["both","horizontal"].includes(r()),"fa-flip-vertical":["both","vertical"].includes(r()),[`fa-${g()}`]:!!g(),[`fa-rotate-${d()}`]:!!d(),[`fa-pull-${m()}`]:!!m(),"fa-swap-opacity":h(),"fa-bounce":x(),"fa-shake":w(),"fa-beat":O(),"fa-fade":N(),"fa-beat-fade":K(),"fa-flash":j(),"fa-spin-pulse":J(),"fa-spin-reverse":vt()})),gn=ae(()=>(rt()||"").split(";").filter(f=>!!f).map(f=>f.split(":").map(H=>H.trim())).reduce((f,H)=>{const[st,G]=H;return f[st]=G,f},{}));function ee(){const f=Fe(s());if(!f)return;const H=Tr(f),st=_r(H||s(),{symbol:C(),title:k(),styles:rt()?it(gn):{},classes:[...Object.keys(it(te)).map(G=>it(te)[G]?G:"").filter(G=>!!G),...(xt()||"").split(" ")],transform:{...typeof S()=="string"?Fr.transform(S()):S()},mask:Fe(i())});if(!st){console.warn("Could not find one or more icon(s)",H||re(s()),re(i()));return}En($t,st.html.join(),!0)}An(()=>{ee()}),ee();var hn={get border(){return n()},set border(f=!1){n(f),p()},get fixedWidth(){return a()},set fixedWidth(f=!1){a(f),p()},get flip(){return r()},set flip(f){r(f),p()},get icon(){return s()},set icon(f){s(f),p()},get mask(){return i()},set mask(f){i(f),p()},get listItem(){return o()},set listItem(f=!1){o(f),p()},get pull(){return m()},set pull(f){m(f),p()},get pulse(){return u()},set pulse(f=!1){u(f),p()},get rotation(){return d()},set rotation(f){d(f),p()},get swapOpacity(){return h()},set swapOpacity(f=!1){h(f),p()},get size(){return g()},set size(f){g(f),p()},get spin(){return v()},set spin(f=!1){v(f),p()},get transform(){return S()},set transform(f={}){S(f),p()},get symbol(){return C()},set symbol(f=!1){C(f),p()},get title(){return k()},set title(f){k(f),p()},get inverse(){return P()},set inverse(f=!1){P(f),p()},get bounce(){return x()},set bounce(f=!1){x(f),p()},get shake(){return w()},set shake(f=!1){w(f),p()},get beat(){return O()},set beat(f=!1){O(f),p()},get fade(){return N()},set fade(f=!1){N(f),p()},get beatFade(){return K()},set beatFade(f=!1){K(f),p()},get flash(){return j()},set flash(f=!1){j(f),p()},get spinPulse(){return J()},set spinPulse(f=!1){J(f),p()},get spinReverse(){return vt()},set spinReverse(f=!1){vt(f),p()},get style(){return rt()},set style(f=""){rt(f),p()},get class(){return xt()},set class(f=""){xt(f),p()}},ne=kn(),pn=wn(ne);return Nn(pn,()=>it($t)),Sn(t,ne),Pn(hn)}customElements.define("fontawesome-icon",On(dn,{border:{},fixedWidth:{},flip:{},icon:{},mask:{},listItem:{},pull:{},pulse:{},rotation:{},swapOpacity:{},size:{},spin:{},transform:{},symbol:{},title:{},inverse:{},bounce:{},shake:{},beat:{},fade:{},beatFade:{},flash:{},spinPulse:{},spinReverse:{},style:{},class:{}},[],[],!0));/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const zr={prefix:"fas",iconName:"at",icon:[512,512,[61946],"40","M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},Lr={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},Dr={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},Rr=Dr,jr={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"]},Yr={prefix:"fas",iconName:"border-all",icon:[448,512,[],"f84c","M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]},Ur={prefix:"fas",iconName:"rss",icon:[448,512,["feed"],"f09e","M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Wr={prefix:"fab",iconName:"flickr",icon:[448,512,[],"f16e","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5zm159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5 63.5 28.4 63.5 63.5-28.4 63.5-63.5 63.5z"]},Hr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Gr={prefix:"fab",iconName:"dev",icon:[448,512,[],"f6cc","M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"]},Xr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Vr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Br={prefix:"fab",iconName:"mastodon",icon:[448,512,[],"f4f6","M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]};Mr.add(zr,Yr,Gr,Rr,Wr,Xr,jr,Hr,Br,Ur,Vr,Lr);const Zr=dn;export{Zr as F};
