import{S as P,i as q,s as w,a as I,k as p,q as H,y as S,M as j,h as r,c as V,l as v,m as g,r as L,z,n as T,b as k,C as m,A,u as F,g as G,d as J,B as K}from"../chunks/index.8c1dbec0.js";import{P as N}from"../chunks/PostCardList.ba348fd5.js";function M(l){let a,i=l[0].details.html+"";return{c(){a=p("div"),this.h()},l(t){a=v(t,"DIV",{class:!0});var n=g(a);n.forEach(r),this.h()},h(){T(a,"class","tag-content section svelte-2aohp6")},m(t,n){k(t,a,n),a.innerHTML=i},p(t,n){n&1&&i!==(i=t[0].details.html+"")&&(a.innerHTML=i)},d(t){t&&r(a)}}}function O(l){let a,i,t,n,f,b,u=l[0].details.tag+"",$,y,E,h,c,_;document.title=a="🏷️"+l[0].details.tag+" - Tim Bachmann";let s=l[0].details.html&&M(l);return c=new N({props:{posts:l[0].posts}}),{c(){i=I(),t=p("div"),n=p("div"),f=p("h1"),b=H("🏷️ Tag: "),$=H(u),y=I(),s&&s.c(),E=I(),h=p("div"),S(c.$$.fragment),this.h()},l(e){j("svelte-1yrcbj8",document.head).forEach(r),i=V(e),t=v(e,"DIV",{class:!0});var o=g(t);n=v(o,"DIV",{class:!0});var B=g(n);f=v(B,"H1",{});var D=g(f);b=L(D,"🏷️ Tag: "),$=L(D,u),D.forEach(r),B.forEach(r),y=V(o),s&&s.l(o),E=V(o),h=v(o,"DIV",{class:!0});var C=g(h);z(c.$$.fragment,C),C.forEach(r),o.forEach(r),this.h()},h(){T(n,"class","section"),T(h,"class","section"),T(t,"class","container has-text-centered")},m(e,d){k(e,i,d),k(e,t,d),m(t,n),m(n,f),m(f,b),m(f,$),m(t,y),s&&s.m(t,null),m(t,E),m(t,h),A(c,h,null),_=!0},p(e,[d]){(!_||d&1)&&a!==(a="🏷️"+e[0].details.tag+" - Tim Bachmann")&&(document.title=a),(!_||d&1)&&u!==(u=e[0].details.tag+"")&&F($,u),e[0].details.html?s?s.p(e,d):(s=M(e),s.c(),s.m(t,E)):s&&(s.d(1),s=null);const o={};d&1&&(o.posts=e[0].posts),c.$set(o)},i(e){_||(G(c.$$.fragment,e),_=!0)},o(e){J(c.$$.fragment,e),_=!1},d(e){e&&r(i),e&&r(t),s&&s.d(),K(c)}}}function Q(l,a,i){let{data:t}=a;return l.$$set=n=>{"data"in n&&i(0,t=n.data)},[t]}class W extends P{constructor(a){super(),q(this,a,Q,O,w,{data:0})}}export{W as component};