(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/pnO":function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/views/users/[id]",function(){return r("mVU1")}])},"9Jkg":function(n,e,r){n.exports=r("oh+g")},mVU1:function(n,e,r){"use strict";r.r(e);var t=r("ln6h"),a=r.n(t),i=r("q1tI"),s=r.n(i),o=r("vcXL"),u=r.n(o),l=r("JaQg"),c=r("w68O"),p=r("WxVa"),f=(r("Aio7"),r("9Jkg")),w=r.n(f),m=s.a.createElement;function d(n){var e=n.user;return m(s.a.Fragment,null,m("div",{className:"w-40"},m("img",{src:e.photo,alt:"user photo"})),m("span",{className:"inline-block mt-4 text-violet_primary"},m("strong",null,e.login)),m("a",{target:"_blank",href:"https://github.com/".concat(e.login)},m("img",{src:"/static/images/github-icon.svg",className:"mt-3 opacity-50 hover:opacity-100",alt:"github icon"})),m("p",null))}var g=r("/EVp"),v=s.a.createElement,h=function(n){var e=n.children;return v(g.a,{orientation:"left",size:"2xl",font:"thin",tracking:"wide"},e)};function x(n){var e=n.user;return v("div",{className:"flex flex-wrap -mx-1 overflow-hidden"},v("div",{className:"my-1 px-1 w-full overflow-hidden sm:w-1/4 sm:order-last"},v(d,{user:e})),v("div",{className:"my-1 px-1 w-full overflow-hidden sm:w-3/4 sm:order-first"},v(h,null,"Twoje rozwi\u0105zania"),v("pre",null,w()(e._solutions,null,2)),v(h,null,"Twoje zadania"),v("pre",null,w()(e._tasks,null,2))))}var y=s.a.createElement,N=function(n){var e=n.userProfile,r=Object(i.useContext)(c.a).user;return y(p.a,{user:r},y(x,{user:e}))};N.getInitialProps=function(n){var e,r,t;return a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e=n.query.id,i.next=3,a.a.awrap(u()("".concat(l.a,"/api/users/").concat(e)));case 3:return r=i.sent,i.next=6,a.a.awrap(r.json());case 6:return t=i.sent,i.abrupt("return",{userProfile:t});case 8:case"end":return i.stop()}}))};e.default=N},"oh+g":function(n,e,r){var t=r("WEpk"),a=t.JSON||(t.JSON={stringify:JSON.stringify});n.exports=function(n){return a.stringify.apply(a,arguments)}}},[["/pnO",0,1]]]);