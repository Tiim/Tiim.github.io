import{S as F,i as T,s as z,k as $,q as I,a as S,l as k,m as E,r as P,h as v,c as C,n as d,b as V,C as p,g as D,f as H,d as N,L,y as M,z as j,A as G,u as B,B as J,v as K,E as O}from"../chunks/index.8c1dbec0.js";import{s as Q}from"../chunks/socialmedia.caeda4dc.js";import{F as R}from"../chunks/fa.9f83fec8.js";function q(u,e,r){const n=u.slice();return n[1]=e[r],n}function U(u){let e,r=".",n;return{c(){e=$("span"),n=I(r),this.h()},l(o){e=k(o,"SPAN",{class:!0});var s=E(e);n=P(s,r),s.forEach(v),this.h()},h(){d(e,"class","handle svelte-1s7r06i")},m(o,s){V(o,e,s),p(e,n)},p:O,d(o){o&&v(e)}}}function W(u){let e,r=u[1].handle+"",n;return{c(){e=$("span"),n=I(r),this.h()},l(o){e=k(o,"SPAN",{class:!0});var s=E(e);n=P(s,r),s.forEach(v),this.h()},h(){d(e,"class","handle svelte-1s7r06i")},m(o,s){V(o,e,s),p(e,n)},p(o,s){s&1&&r!==(r=o[1].handle+"")&&B(n,r)},d(o){o&&v(e)}}}function w(u){let e,r,n,o,s,_=u[1].site+"",g,m,l,b,t;n=new R({props:{icon:u[1].icon}});function c(i,f){return i[1].handle?W:U}let a=c(u),h=a(u);return{c(){e=$("a"),r=$("span"),M(n.$$.fragment),o=S(),s=$("div"),g=I(_),m=S(),h.c(),l=S(),this.h()},l(i){e=k(i,"A",{target:!0,class:!0,rel:!0,href:!0});var f=E(e);r=k(f,"SPAN",{class:!0});var y=E(r);j(n.$$.fragment,y),y.forEach(v),o=C(f),s=k(f,"DIV",{class:!0});var A=E(s);g=P(A,_),m=C(A),h.l(A),A.forEach(v),l=C(f),f.forEach(v),this.h()},h(){d(r,"class","ico svelte-1s7r06i"),d(s,"class","text svelte-1s7r06i"),d(e,"target","_blank"),d(e,"class","item svelte-1s7r06i"),d(e,"rel","me"),d(e,"href",b=u[1].link)},m(i,f){V(i,e,f),p(e,r),G(n,r,null),p(e,o),p(e,s),p(s,g),p(s,m),h.m(s,null),p(e,l),t=!0},p(i,f){const y={};f&1&&(y.icon=i[1].icon),n.$set(y),(!t||f&1)&&_!==(_=i[1].site+"")&&B(g,_),a===(a=c(i))&&h?h.p(i,f):(h.d(1),h=a(i),h&&(h.c(),h.m(s,null))),(!t||f&1&&b!==(b=i[1].link))&&d(e,"href",b)},i(i){t||(D(n.$$.fragment,i),t=!0)},o(i){N(n.$$.fragment,i),t=!1},d(i){i&&v(e),J(n),h.d()}}}function X(u){let e,r,n,o,s,_,g,m=u[0],l=[];for(let t=0;t<m.length;t+=1)l[t]=w(q(u,m,t));const b=t=>N(l[t],1,1,()=>{l[t]=null});return{c(){e=$("div"),r=$("h1"),n=I("Contact Tiim"),o=S(),s=$("div"),_=$("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=k(t,"DIV",{class:!0});var c=E(e);r=k(c,"H1",{class:!0});var a=E(r);n=P(a,"Contact Tiim"),a.forEach(v),o=C(c),s=k(c,"DIV",{class:!0});var h=E(s);_=k(h,"DIV",{class:!0});var i=E(_);for(let f=0;f<l.length;f+=1)l[f].l(i);i.forEach(v),h.forEach(v),c.forEach(v),this.h()},h(){d(r,"class","svelte-1s7r06i"),d(_,"class","grid svelte-1s7r06i"),d(s,"class","wrap svelte-1s7r06i"),d(e,"class","container")},m(t,c){V(t,e,c),p(e,r),p(r,n),p(e,o),p(e,s),p(s,_);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(_,null);g=!0},p(t,[c]){if(c&1){m=t[0];let a;for(a=0;a<m.length;a+=1){const h=q(t,m,a);l[a]?(l[a].p(h,c),D(l[a],1)):(l[a]=w(h),l[a].c(),D(l[a],1),l[a].m(_,null))}for(K(),a=m.length;a<l.length;a+=1)b(a);H()}},i(t){if(!g){for(let c=0;c<m.length;c+=1)D(l[c]);g=!0}},o(t){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)N(l[c]);g=!1},d(t){t&&v(e),L(l,t)}}}function Y(u,e,r){let n;return r(0,n=Q.filter(o=>o.type.includes("contact"))),[n]}class te extends F{constructor(e){super(),T(this,e,Y,X,z,{})}}export{te as component};
