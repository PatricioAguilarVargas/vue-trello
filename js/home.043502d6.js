(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"1be6":function(e,t,n){},"20e7":function(e,t,n){"use strict";n("1be6")},"3c2b":function(e,t,n){},b1ee:function(e,t,n){"use strict";n("3c2b")},bb51:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),c=function(e){return Object(a["v"])("data-v-36a3424c"),e=e(),Object(a["t"])(),e},r={class:"container"},o=c((function(){return Object(a["g"])("h3",null,"Mis Paneles",-1)})),d=c((function(){return Object(a["g"])("hr",null,null,-1)})),s=c((function(){return Object(a["g"])("div",{class:"row"},null,-1)})),u={class:"row boards-collection"},b={key:0};function i(e,t,n,c,i,l){var j=Object(a["z"])("BoardCard");return Object(a["s"])(),Object(a["f"])("div",r,[o,d,s,Object(a["G"])(Object(a["g"])("input",{type:"text",class:"col m4 s12",placeholder:"Añade un nuevo panel","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.boardName=t}),onKeyup:t[1]||(t[1]=Object(a["H"])((function(e){return l.add()}),["enter"]))},null,544),[[a["D"],e.boardName]]),Object(a["g"])("div",u,[e.fetchingData?(Object(a["s"])(),Object(a["f"])("span",b,"Cargando...")):Object(a["e"])("",!0),(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(e.boards,(function(e,t){return Object(a["s"])(),Object(a["d"])(j,{class:"col m3 s12",key:t,name:e.name,id:e.id},null,8,["name","id"])})),128))])])}var l=n("5530"),j={class:"board-card-title"};function O(e,t,n,c,r,o){var d=Object(a["z"])("router-link");return Object(a["s"])(),Object(a["d"])(d,{class:"col s12 m12 l3 board-card",to:{name:"Board",params:{name:n.name,id:n.id}}},{default:Object(a["F"])((function(){return[Object(a["g"])("span",j,Object(a["B"])(n.name),1)]})),_:1},8,["to"])}var f={name:"BoardCard",props:{id:String,name:String}},m=(n("20e7"),n("d959")),p=n.n(m);const h=p()(f,[["render",O],["__scopeId","data-v-67225550"]]);var v=h,g=n("5502"),w={name:"Home",components:{BoardCard:v},data:function(){return{boardName:""}},computed:Object(l["a"])({},Object(g["e"])(["boards","fetchingData","user"])),methods:Object(l["a"])(Object(l["a"])({},Object(g["c"])(["fetchBoards","addBoard"])),{},{add:function(){this.addBoard({name:this.boardName,owner:this.user.uid}),this.boardName=""}}),mounted:function(){this.fetchBoards({user:this.user.uid})}};n("b1ee");const B=p()(w,[["render",i],["__scopeId","data-v-36a3424c"]]);t["default"]=B}}]);
//# sourceMappingURL=home.043502d6.js.map