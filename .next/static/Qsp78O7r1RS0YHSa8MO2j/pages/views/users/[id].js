(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/pnO":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/views/users/[id]",function(){return a("mVU1")}])},mUGe:function(e,t,a){"use strict";a.d(t,"b",(function(){return v})),a.d(t,"a",(function(){return f}));var n=a("q1tI"),s=a.n(n),r=s.a.createElement;function i(e){var t=e.children;return r("span",{className:" flex-initial block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded"},"#",t)}var l=s.a.createElement;function o(e){var t=e.children,a=e.url;return l("a",{className:"block text-violet_primary hover:text-gray-800 underline font-semibold",href:a},t)}var c=s.a.createElement;function u(e){var t=e.solution,a=new Date(t.createdAt);return c("section",{className:"w-full px-3 py-4 rounded text-sm shadow hover:shadow-md"},c("div",{className:"flex items-center"},c("img",{className:"h-8 w-8 rounded overflow-hidden shadow-md",src:t._user.photo,alt:"solution image"}),c("span",{className:"pl-2"},t._user.login)),c("span",{className:"text-gray-600 text-xs"},a.toDateString()),c("div",{className:"mt-2 flex items-center"},c(i,null,t.phase),c("div",{className:"ml-3"},c(o,{url:t.repo},"GitHub")),c("div",{className:"ml-3"},c(o,{url:t.demo},"Live"))))}var m=s.a.createElement;function d(e){var t=e.solution,a=new Date(t.createdAt);return m("section",{className:"w-full px-3 py-4 rounded text-sm shadow hover:shadow-md"},m("div",{className:"flex items-center"},m("img",{className:"h-8 w-8 rounded overflow-hidden shadow-md",src:t._task.images[0],alt:"solution image"}),m("span",{className:"pl-2"},t._task.title)),m("span",{className:"text-gray-600 text-xs"},a.toDateString()),m("div",{className:"mt-2 flex items-center"},m(i,null,t.phase),m("div",{className:"ml-3"},m(o,{url:t.repo},"GitHub")),m("div",{className:"ml-3"},m(o,{url:t.demo},"Live"))))}var f,p=s.a.createElement;function v(e){var t=e.solutions,a=e.type;return t.length?a===f.WithoutTaskData?p("div",{className:"w-full flex justify-between flex-wrap flex-list__container"},t.map((function(e){return p("div",{key:e._id,className:"w-full px-2 mb-2 md:w-1/2"},p(u,{solution:e}))}))):p("div",{className:"w-full flex justify-between flex-wrap flex-list__container"},t.map((function(e){return p("div",{key:e._id,className:"w-full px-2 mb-2 md:w-1/2"},p(d,{solution:e}))}))):null}!function(e){e[e.WithoutUserData=0]="WithoutUserData",e[e.WithoutTaskData=1]="WithoutTaskData"}(f||(f={}))},mVU1:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),s=a.n(n),r=a("q1tI"),i=a.n(r),l=a("vcXL"),o=a.n(l),c=a("JaQg"),u=a("w68O"),m=a("WxVa"),d=(a("Aio7"),i.a.createElement);function f(e){var t=e.userProfile;return d(i.a.Fragment,null,d("div",{className:"w-40"},d("img",{src:t.photo,alt:"userProfile photo"})),d("span",{className:"inline-block mt-4 text-violet_primary"},d("strong",null,t.login)),d("a",{target:"_blank",href:"https://github.com/".concat(t.login)},d("img",{src:"/static/images/github-icon.svg",className:"mt-3 opacity-50 hover:opacity-100",alt:"github icon"})),d("p",null))}var p=a("/EVp"),v=a("mUGe"),w=a("oF7s"),x=i.a.createElement,h=function(e){var t=e.children;return x(p.a,{orientation:"left",size:"2xl",font:"thin",tracking:"wide"},t)};function g(e){var t=e.userProfile,a=e.isAdmin;return x("div",{className:"flex flex-wrap -mx-1 overflow-hidden"},x("div",{className:"my-1 px-1 w-full overflow-hidden sm:w-1/4 sm:order-last"},x(f,{userProfile:t})),x("div",{className:"my-1 px-1 w-full overflow-hidden sm:w-3/4 sm:order-first"},x(h,null,"Twoje rozwi\u0105zania"),x(v.b,{type:v.a.WithoutUserData,solutions:t._solutions}),x(h,null,"Twoje zadania"),x("div",{className:"flex flex-wrap md:-mx-2 flex-list__container"},t._tasks.length&&t._tasks.map((function(e){return x(w.a,{key:e._id,task:e,admin:a})})))))}var N=i.a.createElement,b=function(e){var t=e.userProfile,a=Object(r.useContext)(u.a).user,n=t._id===a._id;return N(m.a,{user:a},N(g,{userProfile:t,isAdmin:n}))};b.getInitialProps=function(e){var t,a,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query.id,r.next=3,s.a.awrap(o()("".concat(c.a,"/api/users/").concat(t)));case 3:return a=r.sent,r.next=6,s.a.awrap(a.json());case 6:return n=r.sent,r.abrupt("return",{userProfile:n});case 8:case"end":return r.stop()}}),null,null,null,Promise)};t.default=b},oF7s:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",(function(){return m}));var s=a("q1tI"),r=a.n(s),i=a("YFqc"),l=a.n(i),o=r.a.createElement;function c(e){var t=e.children;return o("span",{className:"inline-block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded"},"#",t)}function u(e){var t=e.id;return o(l.a,{href:"/tasks/[id]/edit",as:"/tasks/".concat(t.toString(),"/edit")},o("span",{className:"text-blue-300"},"Edit"))}function m(e){var t=e.task,a=e.admin,s=void 0!==a&&a;return o("div",{className:"w-full my-4 sm:px-2 sm:w-1/2 md:w-1/3 lg:w-1/3"},o(l.a,{href:"/tasks/[id]",as:"/tasks/".concat(t._id.toString())},o("a",null,o("div",{className:"relative pb-5/12 sm:pb-2/3 md:pb-5/6"},o("img",{className:"absolute h-full w-full object-cover rounded-lg overflow-hidden shadow-md",src:t.images[0],alt:t.title})),o("div",{className:"relative -mt-16"},o("div",{className:"bg-white p-6 rounded-lg shadow-lg"},s&&o(u,{id:t._id.toString()}),o("div",{className:"text-gray-600 text-xs font-semibold uppercase tracking-widest"},t._user.login),o("h4",{className:"font-semibold text-lg leading-tight"},t.title),t.tags&&o("div",{className:"mt-1"},t.tags.map((function(e,t){return o(c,{key:t},e)}))),o("div",{className:"mt-4 flex items-center text-xs"},n(Array(5)).map((function(e,t){return o("svg",{key:t,className:"w-4 h4 fill-current text-pink__accent",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o("path",{d:"M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"}))}))," ",t.reviewCount&&o("span",{className:"text-xs text-gray-600 ml-2"},"(",t.reviewCount," g\u0142os\xf3w)")))))))}},vcXL:function(e,t,a){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["/pnO",0,2,4,1,3,6,5]]]);