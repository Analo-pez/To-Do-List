(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{uMfO:function(t,e,n){"use strict";n.r(e),n.d(e,"Tab1PageModule",(function(){return h}));var o=n("TEn/"),r=n("ofXK"),a=n("3Pt+"),i=n("tyNb"),l=n("mrSG"),c=n("fXoL"),s=n("D5da"),b=n("UC3L");const d=[{path:"",component:(()=>{class t{constructor(t,e,n){this.toDo=t,this.router=e,this.alertCtrl=n}addList(){return Object(l.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"New List",inputs:[{name:"title",type:"text",placeholder:"list name"}],buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("cancel")}},{text:"Create",handler:t=>{if(console.log(t),0===t.title.length)return;const e=this.toDo.createList(t.title);this.router.navigateByUrl("/tabs/tab1/add/"+e)}}]})).present()}))}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(s.a),c.Hb(i.g),c.Hb(o.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-tab1"]],decls:9,vars:3,consts:[[1,"ion-no-border",3,"translucent"],["color","dark"],["vertical","bottom","horizontal","end","slot","end"],["color","tertiary",3,"click"],["name","add"],["color","dark",3,"fullscreen"],[3,"completed"]],template:function(t,e){1&t&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar",1),c.Kb(2,"ion-title"),c.fc(3," Pending Tasks "),c.Jb(),c.Jb(),c.Jb(),c.Kb(4,"ion-fab",2),c.Kb(5,"ion-fab-button",3),c.Sb("click",(function(){return e.addList()})),c.Ib(6,"ion-icon",4),c.Jb(),c.Jb(),c.Kb(7,"ion-content",5),c.Ib(8,"app-lists",6),c.Jb()),2&t&&(c.Zb("translucent",!0),c.xb(7),c.Zb("fullscreen",!0),c.xb(1),c.Zb("completed",!1))},directives:[o.k,o.A,o.z,o.i,o.j,o.l,o.h,b.a],styles:[""]}),t})()},{path:"add/:listId",loadChildren:()=>n.e(2).then(n.bind(null,"D453")).then(t=>t.AddPageModule)}];let u=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.i.forChild(d)],i.i]}),t})();var p=n("j1ZV");let h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[o.B,r.b,a.a,p.a,u]]}),t})()}}]);