(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jUjS:function(a,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/views/tasks",function(){return t("yKmG")}])},yKmG:function(a,n,t){"use strict";t.r(n);var e=t("ln6h"),r=t.n(e),s=t("q1tI"),u=t.n(s),c=t("vcXL"),i=t.n(c),o=t("JaQg"),p=t("w68O"),l=t("oF7s"),w=t("/EVp"),m=u.a.createElement;function f(a){var n=a.tasks;return n?m(u.a.Fragment,null,m("div",{className:"mb-4"},m(w.a,{CustomTag:"span",size:"xsm",color:"pink_primary"},"Sprawd\u017a i rozwi\u0105\u017c..."),m(w.a,{CustomTag:"h2"},"Najnowsze Zadania")),m("div",{className:"flex flex-wrap md:-mx-2 flex-list__container"},n.length&&n.map((function(a){return m(l.a,{key:a._id,task:a})})))):null}var d=t("WxVa"),k=(t("Aio7"),u.a.createElement),v=function(a){var n=a.tasks,t=Object(s.useContext)(p.a).user;return k(d.a,{user:t,withHero:!0},k(f,{tasks:n}))};v.getInitialProps=function(){var a,n;return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.a.awrap(i()("".concat(o.a,"/api/tasks")));case 3:return a=t.sent,t.next=6,r.a.awrap(a.json());case 6:return n=t.sent,t.abrupt("return",{tasks:n});case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",{tasks:[]});case 13:case"end":return t.stop()}}),null,null,[[0,10]])};n.default=v}},[["jUjS",0,1]]]);