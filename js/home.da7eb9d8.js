(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"13d5":function(t,i,e){"use strict";var n=e("23e7"),a=e("d58f").left,r=e("a640"),c=e("ae40"),s=r("reduce"),o=c("reduce",{1:0});n({target:"Array",proto:!0,forced:!s||!o},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},a640:function(t,i,e){"use strict";var n=e("d039");t.exports=function(t,i){var e=[][t];return!!e&&n((function(){e.call(null,i||function(){throw 1},1)}))}},ae40:function(t,i,e){var n=e("83ab"),a=e("d039"),r=e("5135"),c=Object.defineProperty,s={},o=function(t){throw t};t.exports=function(t,i){if(r(s,t))return s[t];i||(i={});var e=[][t],l=!!r(i,"ACCESSORS")&&i.ACCESSORS,u=r(i,0)?i[0]:o,f=r(i,1)?i[1]:void 0;return s[t]=!!e&&!a((function(){if(l&&!n)return!0;var t={length:-1};l?c(t,1,{enumerable:!0,get:o}):t[1]=1,e.call(t,u,f)}))}},b63e:function(t,i,e){"use strict";e("13d5");i["a"]=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return i<=0?[t]:t.reduce((function(t,e,n){var a=Math.floor(n/i);return t[a]=t[a]||[],t[a].push(e),t}),[])}},bbf5:function(t){t.exports=[{t:"Github",l:"https://github.com/Tiim",ico:["fab","github"]},{t:"Dev.to",l:"https://dev.to/tiim",ico:["fab","dev"]},{t:"Twitter",l:"https://twitter.com/TiimB",ico:["fab","twitter"]},{t:"Instagram",l:"https://instagram.com/tiim.ba",ico:["fab","instagram"]},{t:"Flickr",l:"https://www.flickr.com/people/152309161@N02/",ico:["fab","flickr"]}]},d58f:function(t,i,e){var n=e("1c0b"),a=e("7b0b"),r=e("44ad"),c=e("50c4"),s=function(t){return function(i,e,s,o){n(e);var l=a(i),u=r(l),f=c(l.length),d=t?f-1:0,m=t?-1:1;if(s<2)while(1){if(d in u){o=u[d],d+=m;break}if(d+=m,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=m)d in u&&(o=e(o,u[d],d,l));return o}};t.exports={left:s(!1),right:s(!0)}},f4a9:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"section content"},[t._m(0),e("div",{staticClass:"section content"},[e("SocialMedia")],1)])])},a=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("h1",{staticClass:"title"},[t._v("Hey, I'm Tim😊")]),e("p",{staticClass:"subtitle"},[t._v(" I'm a swimmer, swim coach and CS student in Switzerland ")]),e("p",{staticClass:"subtitle"},[t._v("🏊💻")])]),e("div",{staticClass:"column is-4"},[e("figure",{staticClass:"image is-128x128 is-inline-block"},[e("img",{staticClass:"is-rounded",attrs:{alt:"profile picture",src:"https://avatars.io/twitter/tiimb/medium"}})])])])}],r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("h2",[t._v("Social Media")]),t._l(t.cols,(function(i){return e("div",{key:i.id,staticClass:"columns is-centered"},t._l(i,(function(i){return e("div",{key:i.id,staticClass:"column is-one-fifth"},[e("a",{attrs:{target:"_blank",href:i.l}},[i.ico?e("font-awesome-icon",{attrs:{icon:i.ico}}):t._e(),t._v(" "+t._s(i.t)+" ")],1)])})),0)}))],2)},c=[],s=e("b63e"),o=e("bbf5"),l={name:"SocialMedia",data:function(){return{socialMedia:o}},computed:{cols:function(){return Object(s["a"])(this.socialMedia,5)}}},u=l,f=e("2877"),d=Object(f["a"])(u,r,c,!1,null,null,null),m=d.exports,v={name:"HomePage",components:{SocialMedia:m}},h=v,b=Object(f["a"])(h,n,a,!1,null,null,null);i["default"]=b.exports}}]);
//# sourceMappingURL=home.da7eb9d8.js.map