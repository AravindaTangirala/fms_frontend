(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{30:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/team.efda9a03.png"},48:function(e,t,a){e.exports=a(83)},53:function(e,t,a){},59:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),u=(a(53),a(30),a(14)),o={rating:["Excellent","Good","Average","Fair","Poor"]};var s=function(e){var t=e.ratings,a=e.setRadio;return c.a.createElement("div",null,c.a.createElement("input",{id:t,type:"radio",name:"rating",value:t,onClick:function(e){return a(t)},required:"required"}),c.a.createElement("label",null,t))},m=a(41),i=a.n(m),d=a(5),E=a(18),f=Object(E.a)({name:"user",initialState:{user:null},reducers:{setUser:function(e,t){e.user=t.payload}}}),p=f.actions.setUser,b=function(e){return e.user.user},v=f.reducer,g=Object(E.a)({name:"course",initialState:{course:null,rating:null},reducers:{setCourse:function(e,t){e.course=t.payload.course,e.rating=t.payload.rating}}}),h=g.actions,y=h.setCourse,_=(h.setRating,function(e){return e.course.course}),O=function(e){return e.course.rating},j=g.reducer,k=a(6);var x=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),m=Object(u.a)(l,2),E=m[0],f=m[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),h=g[0],j=g[1],x=Object(d.b)(),N=Object(k.f)(),I=Object(d.c)(b),C=Object(d.c)(_),S=Object(d.c)(O);Object(n.useEffect)((function(){I&&r(I.user),C&&f(C),S&&(j(S),document.getElementById(S).checked=!0)}),[]);var w=function(e){j(e)};return c.a.createElement("div",{className:"feedback__submission"},c.a.createElement("form",{className:"feedback__form",onSubmit:function(e){e.preventDefault(),x(p({user:a})),x(y({course:E,rating:h})),N.push("/feedback_submit")}},c.a.createElement("p",null,"Please input UserName:"),c.a.createElement("input",{required:!0,type:"text",placeholder:"username",onChange:function(e){e.target.value!==a&&r(e.target.value)},value:a}),c.a.createElement("p",null,"Please input CourseName:"),c.a.createElement("input",{required:!0,type:"text",placeholder:"coursename",onChange:function(e){return f(e.target.value)},value:E}),c.a.createElement("p",null,"Please rate your course"),o.rating.map((function(e){return c.a.createElement("div",{className:"ratings__selection"},c.a.createElement(s,{ratings:e,setRadio:w}))})),c.a.createElement("button",null,"Next")),c.a.createElement("img",{src:i.a,alt:""}),c.a.createElement("div",null,c.a.createElement("h1",null)))};var N=function(){return c.a.createElement("div",{className:"feedback__management__system"},c.a.createElement("div",{className:"feedback__header"},c.a.createElement("h1",null,"Feedback Management System"),c.a.createElement("h3",null,"Please Rate your course")),c.a.createElement("div",{className:"feedback__submission_form"},c.a.createElement(x,null)))},I=a(24),C=Object(E.a)({name:"comments",initialState:{comments:null},reducers:{setUserComment:function(e,t){e.comments=t.payload.comments}}}),S=C.actions.setUserComment,w=function(e){return e.course.comments},B=C.reducer,R=(a(59),a(20)),U=a.n(R),M=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(k.f)(),s=Object(d.c)(b),m=Object(d.c)(_),i=Object(d.c)(O),E=Object(d.c)(w),f=Object(d.b)();Object(n.useEffect)((function(){E&&l(E)}),[]);return c.a.createElement("div",{className:"comments"},c.a.createElement("div",{className:"confirm__container"},c.a.createElement("form",{className:"form__comments"},c.a.createElement("h4",null,"Please provide additional comments"),c.a.createElement("label",null,"Name:"),c.a.createElement("input",{type:"text",value:"".concat(s?s.user:"No one")}),c.a.createElement("br",null),c.a.createElement("label",null,"Course Name:"),c.a.createElement("input",{type:"text",value:m}),c.a.createElement("br",null),c.a.createElement("label",null,"Rating:"),c.a.createElement("input",{type:"text",value:i}),c.a.createElement("br",null),c.a.createElement("label",null,"Additional Comments:"),c.a.createElement("input",{type:"text",value:E,onChange:function(e){return l(e.target.value)}}),c.a.createElement("br",null),c.a.createElement("button",{onClick:function(){o.push("/feedback")}},"Back"),c.a.createElement("input",{type:"submit",onClick:function(e){console.log("comments ",E),e.preventDefault(),f(S({comments:r})),U.a.post("https://secure-shelf-01993.herokuapp.com/feedback_summary",{username:s.user,coursename:m,rating:i,comments:r}).then((function(e){console.log("successfully posted"),console.log(o),o.push("/feedback_summary")})).catch((function(e){console.log("coming from comments.js handle submit",e)}))},value:"Submit"}))))},F=a(43),T=a.n(F),q=Object(E.a)({name:"userInfo",initialState:{userInfo:[]},reducers:{setUserInfo:function(e,t){e.userInfo=t.payload}}}),H=q.actions.setUserInfo,A=function(e){return e.userInfo.userInfo},D=q.reducer;var P=function(e){return(0,e.fn)(Object(d.c)(A)),c.a.createElement("div",null)};var L=function(e){return(0,e.fn)(Object(d.c)(A)),c.a.createElement("div",null)},W=(a(77),function(){Object(d.c)(A),Object(d.c)(b),Object(d.c)(_),Object(d.c)(O),Object(d.c)(w);var e=Object(d.b)(),t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],i=s[1],E=Object(n.useState)(""),f=Object(u.a)(E,2),p=f[0],v=f[1],g=Object(n.useState)(!1),h=Object(u.a)(g,2),y=h[0],j=h[1];Object(n.useEffect)((function(){console.log("Is this getting called"),e({type:"FETCH_USER_INFO"}),""!=p&&(e({type:"FETCH_USER_INFO"}),j(!0))}),[p]);return c.a.createElement("div",{className:"summary"},c.a.createElement("h1",null,"SUMMARY OF FEEDBACK"),console.log("Summary Response ",r),c.a.createElement("table",{style:{width:"100%"}},c.a.createElement("tr",null,c.a.createElement("th",null,"Username"),c.a.createElement("th",null,"Coursename"),c.a.createElement("th",null,"Rating"),c.a.createElement("th",null,"Comments"),c.a.createElement("th",null)),r.map((function(e,t){return c.a.createElement("tr",{key:e._id,id:e._id},c.a.createElement("td",null,e.username),c.a.createElement("td",null,e.coursename),c.a.createElement("td",null,e.rating),c.a.createElement("td",null,e.comments),c.a.createElement("td",null,c.a.createElement(T.a,{className:"edit__button",onClick:function(){!function(e){i(e);var t=document.getElementById(e);document.getElementById("edit__userName").value=t.cells[0].innerHTML,document.getElementById("edit__courseName").value=t.cells[1].innerHTML,document.getElementById("edit__rating").value=t.cells[2].innerHTML,document.getElementById("edit__comment").value=t.cells[3].innerHTML,document.getElementById("unique_id").value=e,console.log("This is working"),console.log(document.getElementById("unique_id").value),$("#myModal").modal("show")}(e._id)}})))}))),c.a.createElement("div",{class:"modal",tabindex:"-1",role:"dialog",id:"myModal"},c.a.createElement("div",{class:"modal-dialog",role:"document"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("div",{class:"modal-header"},c.a.createElement("h5",{class:"modal-title"},"EDIT USER FEEDBACK"),c.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{class:"modal-body"},c.a.createElement("form",{action:"",className:"edit__summary"},c.a.createElement("input",{type:"text",placeholder:"User Name",id:"edit__userName"}),c.a.createElement("input",{type:"text",placeholder:"Course Name",id:"edit__courseName"}),c.a.createElement("input",{type:"text",placeholder:"Rating",id:"edit__rating"}),c.a.createElement("input",{type:"text",placeholder:"Comments",id:"edit__comment"}),c.a.createElement("input",{type:"text",hidden:!0,id:"unique_id"}))),c.a.createElement("div",{class:"modal-footer"},c.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){var e=document.getElementById("edit__userName").value,t=document.getElementById("edit__courseName").value,a=document.getElementById("edit__rating").value,n=document.getElementById("edit__comment").value,c="https://secure-shelf-01993.herokuapp.com/edit/".concat(m);U.a.put(c,{username:e,coursename:t,rating:a,comments:n}).then((function(e){console.log("put update successfully posted")})).catch((function(e){console.log("coming from summary.js handle edit and save",e)})),v("Editing done"),$("#myModal").modal("hide")}},"Save"),c.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),c.a.createElement(P,{fn:l}),y&&c.a.createElement(L,{fn:l}))});a(80);var J=function(){return Object(k.f)(),c.a.createElement(I.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(k.c,null,c.a.createElement(k.a,{path:"/feedback_submit",exact:!0},c.a.createElement(M,null)),c.a.createElement(k.a,{path:"/feedback_summary",exact:!0},c.a.createElement(W,null)),c.a.createElement(k.a,{path:"/feedback"},c.a.createElement(N,null)))))},K=a(8),G=a(13),Y=a.n(G),z=a(21),Q=a(44);function V(){return(V=Object(Q.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.get("https://secure-shelf-01993.herokuapp.com/feedback_summary").then((function(e){return console.log("successfully received ",e),e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){return V.apply(this,arguments)},Z=Y.a.mark(te),ee=Y.a.mark(ae);function te(){var e;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("Redux Saga has started to run"),t.next=4,Object(z.b)(X);case 4:return e=t.sent,console.log("Why is it not coming here"),console.log(e),t.next=9,Object(z.c)({type:H,payload:e});case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),Z,null,[[0,11]])}function ae(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Is it even coming here"),e.next=3,Object(z.d)("FETCH_USER_INFO",te);case 3:case"end":return e.stop()}}),ee)}var ne=Y.a.mark(ce);function ce(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.a)([ae()]);case 2:case"end":return e.stop()}}),ne)}var re=a(45),le=a(46),ue=Object(le.a)(),oe=Object(K.combineReducers)({user:v,course:j,comments:B,userInfo:D}),se=Object(K.createStore)(oe,Object(re.composeWithDevTools)(Object(K.applyMiddleware)(ue)));ue.run(ce);var me=se;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d.a,{store:me},c.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.46a49877.chunk.js.map