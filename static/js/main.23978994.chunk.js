(this["webpackJsonpgithub-orgs-repos"]=this["webpackJsonpgithub-orgs-repos"]||[]).push([[0],{34:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(13),r={getUser:"https://api.github.com/users/"},a=function(e){return function(t){return c({method:"get",url:r.getUser+e}).then((function(e){if(200===e.status)return t({type:"SET_USER",payload:e.data}),Promise.resolve()})).catch((function(e){if(404===e.response.status)return t({type:"EMPTY_USER"}),Promise.reject(e.response.data.message)}))}},s=function(e){return function(t){return c({method:"get",url:r.getUser+e+"/orgs"}).then((function(e){if(200===e.status)return t({type:"SET_ORGS",payload:e.data}),Promise.resolve()})).catch((function(e){t({type:"EMPTY_ORGS"})}))}},i=function(e){return function(t){return c({method:"get",url:r.getUser+e+"/repos"}).then((function(e){if(200===e.status)return t({type:"SET_REPOS",payload:e.data}),Promise.resolve()})).catch((function(e){t({type:"EMPTY_REPOS"})}))}}},47:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(16),s=n.n(a),i=(n(47),n(35)),o=n(15),u=n(4),l=n(7),j=n(11),b=n(37),h=n(20),p=n(12),d=n(34),O=(n(70),n(1)),f=function(e){var t=e.type,n=e.placeholder,c=e.value,r=e.onInput,a=e.onSubmit;return Object(O.jsx)("input",{type:t,value:c,onInput:r,onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||!a||a()},placeholder:n})},x=(n(72),function(e){var t=e.type,n=e.label,c=e.onClick;return Object(O.jsx)("button",{type:t,onClick:c,children:n})}),y=(n(73),function(e){var t=Object(c.useState)(""),n=Object(h.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(h.a)(s,2),l=i[0],j=i[1],b=Object(o.b)(),y=function(e){if(""===r)return j("Search field is empty, please fill it."),void b({type:"EMPTY_USER"});b(Object(d.c)(r.split(" ").join(""))).then((function(e){a(""),j("")})).catch((function(e){console.clear(),j(e)}))};return Object(O.jsx)("header",{children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",children:Object(O.jsxs)("div",{className:"search-place",children:[Object(O.jsx)("h1",{className:"search-place-title",children:"Github"}),Object(O.jsxs)("div",{className:"search-top-place",children:[Object(O.jsx)("div",{className:"search-inp-place",children:Object(O.jsx)(f,{type:"text",value:r,placeholder:"Search user by name...",onInput:function(e){j(""),a(e.target.value)},onSubmit:y})}),Object(O.jsx)("div",{className:"search-btn btn-place",children:Object(O.jsx)(x,{type:"button",label:"Search",onClick:y})})]}),Object(O.jsx)("p",{className:"searcch-error-text",children:l})]})}),Object(O.jsx)(u.a,{children:Object(O.jsx)("div",{className:"back-btn-place",children:Object(O.jsx)("div",{className:"back-btn",children:Object(O.jsx)(p.a,{to:"/",children:Object(O.jsx)(x,{type:"button",label:"Back to search",onClick:function(e){b({type:"EMPTY_USER"}),b({type:"EMPTY_REPOS"}),b({type:"EMPTY_ORGS"})}})})})})})]})})}),m=n(33),v=n.n(m),g=(n(42),n(93),Object(c.lazy)((function(e){return n.e(3).then(n.bind(null,100))}))),S=Object(c.lazy)((function(e){return n.e(4).then(n.bind(null,101))})),E=Object(c.lazy)((function(e){return n.e(5).then(n.bind(null,102))})),P=function(){return Object(O.jsx)("div",{className:"content",children:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(v.a,{width:75,height:75,timeout:-1,color:"#00BFFF",type:"BallTriangle",style:{position:"fixed",left:"50%",top:"50%"}}),children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{exact:!0,path:"/",children:Object(O.jsx)(g,{})}),Object(O.jsx)(u.a,{exact:!0,path:"/user",children:Object(O.jsx)(S,{})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(E,{})})]})})})},T=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(P,{})]})},R=n(38),_=n(39),k=n(41),I=n(40),M=function(e){Object(k.a)(n,e);var t=Object(I.a)(n);function n(){return Object(R.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(c.Component),U=Object(u.f)(M),Y=n(5),w={userItem:null},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"SET_USER":return Object(Y.a)(Object(Y.a)({},e),{},{userItem:c});case"EMPTY_USER":return Object(Y.a)(Object(Y.a)({},e),{},{userItem:null});default:return e}},N={orgItems:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"SET_ORGS":return Object(Y.a)(Object(Y.a)({},e),{},{orgItems:c});case"EMPTY_ORGS":return Object(Y.a)(Object(Y.a)({},e),{},{orgItems:null});default:return e}},G={repoItems:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case"SET_REPOS":return Object(Y.a)(Object(Y.a)({},e),{},{repoItems:c});case"EMPTY_REPOS":return Object(Y.a)(Object(Y.a)({},e),{},{repoItems:null});default:return e}},z=Object(j.combineReducers)({user:C,orgs:F,repos:B}),D=[i.a],J=Object(l.a)(),L=Object(j.createStore)(z,Object(b.composeWithDevTools)(j.applyMiddleware.apply(void 0,D))),K=function(){return Object(O.jsx)(o.a,{store:L,children:Object(O.jsx)(u.b,{history:J,children:Object(O.jsx)(U,{children:Object(O.jsx)(T,{})})})})},W=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,99)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(K,{})}),document.getElementById("root")),W()}},[[94,1,2]]]);
//# sourceMappingURL=main.23978994.chunk.js.map