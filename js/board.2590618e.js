(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["board"],{2310:function(t,e,c){},"2d27":function(t,e,c){"use strict";c("43c0")},"43c0":function(t,e,c){},"4a51":function(t,e,c){"use strict";c("2310")},"5d6d":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23"),s=function(t){return Object(n["v"])("data-v-0143e167"),t=t(),Object(n["t"])(),t},a=s((function(){return Object(n["g"])("span",null,"Mis Paneles",-1)})),i={class:"row"},d={class:"row"};function o(t,e,c,s,o,l){var r=Object(n["z"])("Column");return Object(n["s"])(),Object(n["f"])("section",null,[Object(n["g"])("h3",null,[a,Object(n["h"])(" ‣ "+Object(n["B"])(c.name),1)]),Object(n["g"])("div",i,[Object(n["G"])(Object(n["g"])("input",{type:"text",class:"col m4 s12",placeholder:"Añade una lista","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.listName=e}),onKeyup:e[1]||(e[1]=Object(n["H"])((function(t){return l.add()}),["enter"]))},null,544),[[n["D"],t.listName]])]),Object(n["g"])("div",d,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(l.boardList,(function(t,e){return Object(n["s"])(),Object(n["d"])(r,{class:"col s12 m4 l4",key:e,listId:t.id,name:t.name},null,8,["listId","name"])})),128))])])}var l=c("5530"),r={class:"container"},u={class:"row"};function b(t,e,c,s,a,i){var d=Object(n["z"])("TaskList");return Object(n["s"])(),Object(n["f"])("section",r,[Object(n["g"])("header",u,[Object(n["g"])("h3",null,Object(n["B"])(c.name),1),Object(n["i"])(d,{class:"col s12 m12",listId:c.listId,tasks:i.tasksList},null,8,["listId","tasks"])])])}var j=["onClick"];function O(t,e,c,s,a,i){return Object(n["s"])(),Object(n["f"])("ul",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.tasks,(function(t,e){return Object(n["s"])(),Object(n["f"])("li",{key:e,class:Object(n["o"])({completed:t.completed}),onClick:function(e){return i.detectClick(t)}},Object(n["B"])(t.title)+" ( "+Object(n["B"])(t.completed?"completa":"incompleta")+" ) ",11,j)})),128)),Object(n["G"])(Object(n["g"])("input",{type:"text",placeholder:"Añade una nueva tarea","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.title=e}),onKeyup:e[1]||(e[1]=Object(n["H"])((function(t){return i.add()}),["enter"]))},null,544),[[n["D"],t.title]])])}var m=c("5502"),f={props:{listId:String,tasks:Array},data:function(){return{title:"",numClicks:0}},methods:Object(l["a"])(Object(l["a"])({},Object(m["c"])(["addTask","deleteTask","markAsCompleted"])),{},{add:function(){this.addTask({tasks:this.listId,title:this.title}),this.title=""},detectClick:function(t){this.numClicks++;var e=t.id;if(1===this.numClicks){var c=this;setTimeout((function(){switch(c.numClicks){case 1:c.markAsCompleted({tasks:t});break;default:c.deleteTask({taskId:e})}c.numClicks=0}),200)}}})},k=(c("2d27"),c("d959")),p=c.n(k);const h=p()(f,[["render",O],["__scopeId","data-v-26ce9de5"]]);var g=h,v={name:"Column",props:{listId:String,name:String},components:{TaskList:g},computed:Object(l["a"])(Object(l["a"])({},Object(m["d"])(["getTasksFromList"])),{},{tasksList:function(){return this.getTasksFromList(this.listId)}}),methods:Object(l["a"])({},Object(m["c"])(["fetchTasks"])),created:function(){this.fetchTasks({tasks:this.listId})}};c("c936");const C=p()(v,[["render",b],["__scopeId","data-v-1ff4b169"]]);var I=C,L={name:"BoardView",components:{Column:I},props:{name:String,id:String},methods:Object(l["a"])(Object(l["a"])({},Object(m["c"])(["fetchList","addColumn"])),{},{add:function(){this.addColumn({board:this.id,name:this.listName}),this.listName=""}}),data:function(){return{listName:""}},computed:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(m["e"])(["fetchingData"])),Object(m["d"])(["getListByBoard"])),{},{boardList:function(){return this.getListByBoard(this.id)}}),created:function(){this.fetchList({board:this.id})}};c("4a51");const w=p()(L,[["render",o],["__scopeId","data-v-0143e167"]]);e["default"]=w},"9d48":function(t,e,c){},c936:function(t,e,c){"use strict";c("9d48")}}]);
//# sourceMappingURL=board.2590618e.js.map