(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(71)},50:function(e,t,n){},51:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(26),l=n.n(i),c=(n(50),n(51),n(43)),o=n(21),u=n(13),s=n(14),p=n(17),m=n(15),d=n(18),E=n(41),h=n.n(E),b=n(42),f=n.n(b),v=n(29),O=n.n(v),y=n(16),j=n(11),g=n.n(j),T=n(22),w=n.n(T),D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t=n.getTitle.value,a=n.getDescription.value,r={id:new Date,title:t,description:a,editing:!1};console.log(r),n.props.dispatch({type:"ADD_POST",data:r}),n.getTitle.value="",n.getDescription.value=""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Crear nuevo elemento"),r.a.createElement(g.a,{onSubmit:this.handleSubmit},r.a.createElement(g.a.Label,null,"Titulo"),r.a.createElement(g.a.Control,{required:!0,type:"text",ref:function(t){return e.getTitle=t},placeholder:"Titulo elemento"}),r.a.createElement("br",null),r.a.createElement(g.a.Label,null,"Descripci\xf3n"),r.a.createElement(g.a.Control,{style:{height:"10em"},required:!0,type:"text",ref:function(t){return e.getDescription=t},cols:"28",placeholder:"Descripci\xf3n elemento"}),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"info",type:"submit"},"Crear")))}}]),t}(r.a.Component),k=Object(y.b)()(D),C=n(25),S=n.n(C),P=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S.a,{style:{width:"18rem"}},r.a.createElement(S.a.Body,null,r.a.createElement(S.a.Title,null,this.props.post.title),r.a.createElement(S.a.Text,null,this.props.post.description),r.a.createElement(w.a,{onClick:function(){return e.props.dispatch({type:"EDIT_POST",id:e.props.post.id})},variant:"info"},"Editar"),r.a.createElement(w.a,{onClick:function(){return e.props.dispatch({type:"DELETE_POST",id:e.props.post.id})},variant:"warning"},"Borra"))))}}]),t}(r.a.Component),x=Object(y.b)()(P),A=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleEdit=function(e){e.preventDefault();var t={newTitle:n.getTitle.value,newDescription:n.getDescription.value};n.props.dispatch({type:"UPDATE",id:n.props.post.id,data:t})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Editar elemento"),r.a.createElement(g.a,{onSubmit:this.handleEdit},r.a.createElement(g.a.Label,null,"Titulo"),r.a.createElement(g.a.Control,{required:!0,type:"text",ref:function(t){return e.getTitle=t},defaultValue:this.props.post.title,placeholder:"Enter Post Edit"}),r.a.createElement("br",null),r.a.createElement(g.a.Label,null,"Descripci\xf3n"),r.a.createElement(g.a.Control,{required:!0,type:"text",ref:function(t){return e.getDescription=t},defaultValue:this.props.post.description,cols:"28",placeholder:"Enter Post Edit"}),r.a.createElement("br",null),r.a.createElement(w.a,{variant:"primary",type:"submit"},"Subir Cambio")))}}]),t}(r.a.Component),_=Object(y.b)()(A),L=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Vistas"),r.a.createElement("div",{className:"conteiner_all"},this.props.posts.map(function(e){return r.a.createElement("div",{key:e.id},e.editing?r.a.createElement(_,{post:e,key:e.id}):r.a.createElement(x,{post:e,key:e.id}))})))}}]),t}(a.Component),N=Object(y.b)(function(e){return{posts:e}})(L),q=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"100%",margin:"auto"}},r.a.createElement(h.a,{className:"home-container"},r.a.createElement(f.a,null,r.a.createElement(O.a,{xs:6,className:"home-post"},r.a.createElement(k,null)),r.a.createElement(O.a,{xs:6,className:"home-post"},r.a.createElement(N,null)))))}}]),t}(r.a.Component);var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(28),V=n(34),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return e.concat([t.data]);case"DELETE_POST":return e.filter(function(e){return e.id!==t.id});case"EDIT_POST":return e.map(function(e){return e.id===t.id?Object(V.a)({},e,{editing:!e.editing}):e});case"UPDATE":return e.map(function(e){return e.id===t.id?Object(V.a)({},e,{title:t.data.newTitle,description:t.data.newDescription,editing:!e.editing}):e});default:return e}},U=Object(I.b)(J);l.a.render(r.a.createElement(y.a,{store:U},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[45,1,2]]]);
//# sourceMappingURL=main.dfda73f0.chunk.js.map