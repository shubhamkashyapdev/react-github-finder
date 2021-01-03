(this["webpackJsonpgithub-finder"]=this["webpackJsonpgithub-finder"]||[]).push([[0],{36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(29),i=c.n(a),l=(c(36),c(8)),o=c(2),j=function(e){var t=e.title,c=e.icon;return Object(n.jsxs)("nav",{className:"navbar bg-primary",children:[Object(n.jsxs)("h1",{children:[Object(n.jsx)("i",{className:c}),t]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/about",children:"About"})})]})]})};j.defaultProps={title:"Github Finder",icon:"fab fa-github"};var b=j,u=c(13),d=Object(r.createContext)(),h=Object(r.createContext)(),O=function(){var e=Object(r.useContext)(d),t=Object(r.useContext)(h),c=Object(r.useState)(""),s=Object(u.a)(c,2),a=s[0],i=s[1];return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{onSubmit:function(c){c.preventDefault(),""===a?t.setAlert("Please enter something","light"):(e.searchUsers(a),i(""))},className:"form",children:[Object(n.jsx)("input",{type:"text",name:"text",placeholder:"search users",value:a,onChange:function(e){return i(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"search",className:"btn btn-dark btn-block"})]}),e.users.length>0&&Object(n.jsx)("button",{className:"btn btn-light btn-block",onClick:e.clearUsers,children:"Clear"})]})},p=c(10),x=function(e){var t=e.user,c=t.login,r=(t.html_url,t.avatar_url);return Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsx)("img",{src:r,alt:"",className:"round-img",style:{width:"60px"}}),Object(n.jsx)("h3",{children:c}),Object(n.jsx)("div",{children:Object(n.jsx)(l.b,{to:"/user/".concat(c),className:"btn btn-dark btn-sm my-1",children:"More.."})})]})};x.prototype={user:c.n(p).a.object.isRequired};var m,g,f=x,v={display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridGap:"1rem"},_=function(){var e=Object(r.useContext)(d),t=(e.loading,e.users);return Object(n.jsx)("div",{style:v,children:t.map((function(e){return Object(n.jsx)(f,{user:e},e.id)}))})},E=function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(_,{})]})},T=function(e){var t=e.repo;return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:t.html_url,children:t.name})})})},C=function(e){return e.repos.map((function(e){return Object(n.jsx)(T,{repo:e},e.id)}))},N=function(e){var t=e.match,c=Object(r.useContext)(d),s=c.getUser,a=c.user,i=(c.loading,c.repos),o=c.getUserRepos;Object(r.useEffect)((function(){s(t.params.login),o(t.params.login)}),[]);var j=a.name,b=a.avatar_url,u=a.location,h=a.bio,O=a.blog,p=a.login,x=a.html_url,m=a.company,g=a.followers,f=a.following,v=a.public_repos,_=a.public_gists,E=a.hireable;return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(l.b,{to:"/",className:"btn btn-light",children:"Back to Search"}),"Hireable: ","",E?Object(n.jsx)("i",{className:"fa fa-check text-green"}):Object(n.jsx)("i",{className:"fas fa-times-circle"}),Object(n.jsxs)("div",{className:"card grid-2",children:[Object(n.jsxs)("div",{className:"all-center",children:[Object(n.jsx)("img",{src:b,className:"round-img",style:{width:"150px"},alt:""}),Object(n.jsx)("h1",{children:j}),Object(n.jsxs)("p",{children:["Location: ",u]})]}),Object(n.jsxs)("div",{children:[h&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("h3",{children:"Bio"}),Object(n.jsx)("p",{children:h})]}),Object(n.jsx)("a",{href:x,className:"btn btn-dark my-1",children:"Visit github profile"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:p&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("strong",{children:"Username :"}),p]})}),Object(n.jsx)("li",{children:m&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("strong",{children:"Company :"}),m]})}),Object(n.jsx)("li",{children:O&&Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("strong",{children:"Website :"}),O]})})]})]})]}),Object(n.jsxs)("div",{className:"card text-center",children:[Object(n.jsxs)("div",{className:"badge badge-primary",children:["Followers: ",g]}),Object(n.jsxs)("div",{className:"badge badge-success",children:["Following: ",f]}),Object(n.jsxs)("div",{className:"badge badge-light",children:["Public Repos: ",v]}),Object(n.jsxs)("div",{className:"badge badge-dark",children:["Public Gists: ",_]})]}),Object(n.jsx)(C,{repos:i})]})},y=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Not Found"}),Object(n.jsx)("p",{className:"lead",children:"Looks like you have lost.."}),Object(n.jsx)("h3",{children:"Go back to home"}),Object(n.jsx)(l.b,{to:"/",className:"btn btn-dark",children:"go back"})]})},S=c(12),R=c.n(S),A=c(14),P=c(15),U=c.n(P),I=c(9),k="SEARCH_USERS",F="GET_USER",L="CLEAR_USERS",w="GET_REPOS",H="SET_LOADING",D="SET_ALERT",G="REMOVE_ALERT",B=function(e,t){switch(t.type){case L:return Object(I.a)(Object(I.a)({},e),{},{users:[],loading:!1});case H:return Object(I.a)(Object(I.a)({},e),{},{loading:!0});case k:return Object(I.a)(Object(I.a)({},e),{},{users:t.payload,loading:!1});case F:return Object(I.a)(Object(I.a)({},e),{},{user:t.payload,loading:!1});case w:return Object(I.a)(Object(I.a)({},e),{},{repos:t.payload,loading:!1});default:return e}};m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"b89f97509bff0de4e721",REACT_APP_GITHUB_CLIENT_SECRET:"9226924a2e9010d3c6857030cca73aea87bf1992"}).GITHUB_CLIENT_ID,g=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"b89f97509bff0de4e721",REACT_APP_GITHUB_CLIENT_SECRET:"9226924a2e9010d3c6857030cca73aea87bf1992"}).GITHUB_CLIENT_SECRET;var W=function(e){var t=Object(r.useReducer)(B,{users:[],user:{},repos:[],loading:!1,alert:null}),c=Object(u.a)(t,2),s=c[0],a=c[1],i=function(){var e=Object(A.a)(R.a.mark((function e(t){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,U.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(m,"&client_secret=").concat(g));case 3:c=e.sent,a({type:k,payload:c.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(A.a)(R.a.mark((function e(t){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,U.a.get("https://api.github.com/users/".concat(t,"?client_id=").concat(m,"&client_secret=").concat(g));case 3:c=e.sent,a({type:F,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(A.a)(R.a.mark((function e(t){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,U.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc&client_id=").concat(m,"&client_secret=").concat(g));case 3:c=e.sent,a({type:w,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){return a({type:H})};return Object(n.jsx)(d.Provider,{value:{users:s.users,user:s.user,repos:s.repos,loading:s.loading,searchUsers:i,clearUsers:function(){return a({type:L})},getUser:l,getUserRepos:o},children:e.children})},K=function(e,t){switch(t.type){case D:return t.payload;case G:return null;default:return e}},V=function(e){var t=Object(r.useReducer)(K,null),c=Object(u.a)(t,2),s=c[0],a=c[1];return Object(n.jsx)(h.Provider,{value:{alert:s,setAlert:function(e,t){a({type:D,payload:{msg:e,type:t}}),setTimeout((function(){return a({type:G})}),5e3)}},children:e.children})},M=function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)("h1",{children:"About This App"}),Object(n.jsx)("p",{children:"App to search Github users"}),Object(n.jsx)("p",{children:"version 1.0.0"})]})},q=function(){return Object(n.jsx)(W,{children:Object(n.jsx)(V,{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",component:E}),Object(n.jsx)(o.a,{exact:!0,path:"/about",component:M}),Object(n.jsx)(o.a,{exact:!0,path:"/user/:login",component:N}),Object(n.jsx)(o.a,{component:y})]})})]})})})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),J()}},[[61,1,2]]]);
//# sourceMappingURL=main.1a51ee58.chunk.js.map