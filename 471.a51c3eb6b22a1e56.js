"use strict";(self.webpackChunkKaguraGithubPages=self.webpackChunkKaguraGithubPages||[]).push([[471],{471:(ft,k,a)=>{a.r(k),a.d(k,{GitfireChatModule:()=>lt});var m=a(9417),h=a(177),g=a(5794),F=a(4871),I=a(467),$=a(7935),v=a(8455),G=a(6354),d=a(5312),t=a(4438),y=a(896),N=a(1474),A=a(8079),B=a(9243);class M{id;nick;isOwned=!1}class b extends M{isExisting;constructor(u){super(),this.isExisting=u}}let C=(()=>{class n{tos;auth;store;funcs;user;room;roomIndex;constructor(o,e,i,r,c){this.tos=o,this.auth=e,this.store=i,this.funcs=r,this.user=c,this.room=this.store.collection("/chat/v1/room"),this.roomIndex=this.store.collection("/index/chat/roomnick")}fieldTimestamp(){return $.A.firestore.FieldValue.serverTimestamp()}confirmTos$(){return this.tos.confirmTos$(`${this.auth.myUid}/chatAgreement`,d.cA.ChatServiceTosUrl)}readChitchat$(o){return this.room.doc(o).collection("chitchat",e=>e.orderBy("createdAt","desc").limit(30))}postComment$(o,e){return(0,v.H)(this.funcs.call("postChat",{roomId:o,text:e}))}deleteRoom$(o){var e=this;if(!o)throw new Error("roomId is not supplied");const i=this.room.doc(o);return(0,v.H)(this.store.firestore.runTransaction(function(){var r=(0,I.A)(function*(c){const l=(yield c.get(i.ref)).data().nick,p=e.roomIndex.doc(l);yield c.delete(i.ref),yield c.delete(p.ref)});return function(c){return r.apply(this,arguments)}}()))}ensureRoom$(o){var e=this;if(!o)throw new Error("room nick is not supplied");const r=this.roomIndex.doc(o);return(0,v.H)(this.store.firestore.runTransaction(function(){var c=(0,I.A)(function*(s){const E=yield s.get(r.ref),l=new b(!0);if(l.nick=o,E.exists){const D=E.data();return l.id=D.value,l.isOwned=D.owner===e.auth.myUid,l}const p=e.room.ref.doc(),ht={nick:o,owner:e.auth.myUid,createdAt:e.fieldTimestamp()};yield s.set(p,ht);const dt={value:p.id,owner:e.auth.myUid};return yield s.set(r.ref,dt),l.id=p.id,l.isExisting=!1,l.isOwned=!0,l});return function(s){return c.apply(this,arguments)}}()))}maybeRoomInfo$(o){return this.roomIndex.doc(o).get().pipe((0,G.T)(i=>{const r=new b(!!i.exists);if(r.nick=o,!i.exists)return r;const c=i.data();return r.isOwned=c.owner===this.auth.myUid,r.id=c.value,r}))}static \u0275fac=function(e){return new(e||n)(t.KVO(y.u),t.KVO(N.u),t.KVO(A.Qe),t.KVO(F.Y),t.KVO(B.D))};static \u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var V=a(3691),f=a(1188),R=a(1413),S=a(4412),Y=a(4779),T=a(7673),w=a(6697),x=a(5558),U=a(1033);class _{id;text;admin;html;createdAt;user$;constructor(u,o,e,i,r,c){this.id=u,this.text=o,this.admin=e,this.html=i,this.createdAt=r,this.user$=c}}var j=a(2275),O=a(4416),X=a(681),H=a(4906);const K=["chatBox"];function P(n,u){1&n&&t.nrm(0,"div",9)}function Q(n,u){1&n&&t.nrm(0,"gitfire-user-box",16),2&n&&t.Y8G("userPublic",u.ngIf)}function J(n,u){if(1&n&&t.nrm(0,"div",17),2&n){const o=t.XpG().$implicit;t.Y8G("innerHTML",o.html,t.npT)}}function L(n,u){if(1&n&&(t.j41(0,"div",18),t.EFF(1),t.k0s()),2&n){const o=t.XpG().$implicit;t.R7$(),t.JRh(o.text)}}function z(n,u){if(1&n&&(t.j41(0,"div",10)(1,"div",11),t.EFF(2),t.nI1(3,"relativeTime"),t.k0s(),t.j41(4,"div",12),t.DNE(5,Q,1,1,"gitfire-user-box",13),t.nI1(6,"async"),t.k0s(),t.DNE(7,J,1,1,"div",14)(8,L,2,1,"div",15),t.k0s()),2&n){const o=u.$implicit;t.Y8G("ngClass",o.admin?"bg-info text-white":"text-muted"),t.R7$(2),t.SpI("",t.bMT(3,5,o.createdAt)," "),t.R7$(3),t.Y8G("ngIf",t.bMT(6,7,o.user$)),t.R7$(2),t.Y8G("ngIf",o.html),t.R7$(),t.Y8G("ngIf",!o.html)}}let W=(()=>{class n{chat;dialog;toastr;destroy$=new R.B;roomInfo;exitRoom=new t.bkB;message="";chatBox;chitchat=[];chitchatMap={};constructor(o,e,i){this.chat=o,this.dialog=e,this.toastr=i}ngOnInit(){this.chat.readChitchat$(this.roomInfo.id).valueChanges({idField:"id"}).subscribe(e=>{(0,d.Oi)("Receive ChitChat",e);for(const i of e){const r=i.id;let c=this.chitchatMap[r];const s=i;c||(c=new _(r,s.text,!!s.admin,s.html,s.createdAt?s.createdAt.toDate():new Date,this.chat.user.user$(s.uid)),this.chitchat.push(c),this.chitchatMap[r]=c)}this.chitchat=this.chitchat.sort((i,r)=>this.descDate(i.createdAt,r.createdAt))})}descDate(o,e){return o===e?0:o<e?1:-1}ngOnDestroy(){this.destroy$.next()}doDeleteRoom(){this.chat.deleteRoom$(this.roomInfo.id).subscribe(()=>{this.exitRoom.emit(),this.toastr.info("\u524a\u9664\u3057\u307e\u3057\u305f\u3002")})}onClickDeleteRoom(o){this.dialog.createSimpleBuilder().setType(j.hs.Warn).setSize(j.EV.Default).setTitle("\u78ba\u8a8d").setMessage("\u672c\u5f53\u306b\u524a\u9664\u3057\u307e\u3059\u304b\uff1f").okButton(()=>{this.doDeleteRoom()}).cancelButton(()=>{}).open()}onClickExitRoom(o){this.exitRoom.emit()}onPostComment(o){this.chatBox.invalid||this.chat.postComment$(this.roomInfo.id,this.message).subscribe(e=>{const i=this.chatBox.control;i.setValue(""),i.markAsPristine()},e=>{(0,d.sJ)("Error while post chat",e);const i=e instanceof Error?e.message:"Unknown error";this.toastr.error(`\u5931\u6557\u3057\u307e\u3057\u305f\u3002 ( ${i} )`)})}static \u0275fac=function(e){return new(e||n)(t.rXU(C),t.rXU(O.o3),t.rXU(g.tw))};static \u0275cmp=t.VBU({type:n,selectors:[["gitfire-chat-room"]],viewQuery:function(e,i){if(1&e&&t.GBs(K,5),2&e){let r;t.mGM(r=t.lsd())&&(i.chatBox=r.first)}},inputs:{roomInfo:"roomInfo"},outputs:{exitRoom:"exitRoom"},decls:12,vars:8,consts:[["chatBox","ngModel"],[1,"row","m-3"],["tabindex","-1",1,"col-5","btn","btn-danger",3,"click","disabled","title"],["title","\u5165\u53e3\u306b\u623b\u308a\u307e\u3059\u3002",1,"col-3","btn","btn-secondary",3,"click"],[1,"row","m-3","input-group"],["name","chatText","type","text","required","","maxlength","1024",1,"col-9","form-control",3,"ngModelChange","keyup.enter","ngModel"],[1,"col-3","btn","btn-primary",3,"click","disabled"],["class","valid-feedback",4,"ngIf"],["class","row m-3",3,"ngClass",4,"ngFor","ngForOf"],[1,"valid-feedback"],[1,"row","m-3",3,"ngClass"],[1,"col-2"],[1,"col-2",2,"height","2rem"],[3,"userPublic",4,"ngIf"],["class","col-8",3,"innerHTML",4,"ngIf"],["class","col-8",4,"ngIf"],[3,"userPublic"],[1,"col-8",3,"innerHTML"],[1,"col-8"]],template:function(e,i){if(1&e){const r=t.RV6();t.j41(0,"div",1)(1,"button",2),t.bIt("click",function(s){return t.eBV(r),t.Njj(i.onClickDeleteRoom(s))}),t.EFF(2,"\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u306e\u524a\u9664"),t.k0s(),t.j41(3,"button",3),t.bIt("click",function(s){return t.eBV(r),t.Njj(i.onClickExitRoom(s))}),t.EFF(4,"\u9000\u5ba4"),t.k0s()(),t.j41(5,"div",4)(6,"input",5,0),t.mxI("ngModelChange",function(s){return t.eBV(r),t.DH7(i.message,s)||(i.message=s),t.Njj(s)}),t.bIt("keyup.enter",function(s){return t.eBV(r),t.Njj(i.onPostComment(s))}),t.k0s(),t.j41(8,"button",6),t.bIt("click",function(s){return t.eBV(r),t.Njj(i.onPostComment(s))}),t.EFF(9,"\u9001\u4fe1"),t.k0s(),t.DNE(10,P,1,0,"div",7),t.k0s(),t.DNE(11,z,9,9,"div",8)}if(2&e){const r=t.sdS(7);t.R7$(),t.Y8G("disabled",!i.roomInfo.isOwned)("title",i.roomInfo.isOwned?"":"\u30eb\u30fc\u30e0\u3092\u958b\u8a2d\u3057\u305f\u4eba\u3060\u3051\u304c\u524a\u9664\u3067\u304d\u307e\u3059\u3002"),t.R7$(4),t.AVh("was-validated",r.dirty||r.touched),t.R7$(),t.R50("ngModel",i.message),t.R7$(2),t.Y8G("disabled",!r.valid),t.R7$(2),t.Y8G("ngIf",r.valid),t.R7$(),t.Y8G("ngForOf",i.chitchat)}},dependencies:[h.YU,h.Sq,h.bT,m.me,m.BC,m.YS,m.tU,m.vS,X.g,h.Jj,H.C]})}return n})();var Z=a(5964);const q=["inputRoomForm"];function tt(n,u){1&n&&(t.j41(0,"div",15),t.EFF(1,"\u90e8\u5c4b\u306e\u540d\u524d(\u30cb\u30c3\u30af\u30cd\u30fc\u30e0)\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),t.k0s())}function ot(n,u){1&n&&(t.j41(0,"div",15),t.EFF(1,"\u77ed\u3059\u304e\u307e\u3059\u3002"),t.k0s())}function et(n,u){1&n&&(t.j41(0,"div",15),t.EFF(1,"\u9577\u3059\u304e\u307e\u3059\u3002"),t.k0s())}function nt(n,u){if(1&n&&(t.qex(0),t.DNE(1,tt,2,0,"div",14)(2,ot,2,0,"div",14)(3,et,2,0,"div",14),t.bVm()),2&n){t.XpG();const o=t.sdS(23);t.R7$(),t.Y8G("ngIf",null==o.errors?null:o.errors.required),t.R7$(),t.Y8G("ngIf",null==o.errors?null:o.errors.minlength),t.R7$(),t.Y8G("ngIf",null==o.errors?null:o.errors.maxlength)}}let it=(()=>{class n{chat;toastr;roomSelected=new t.bkB;initialRoomNick;inputRoomForm;roomNick;nickname;constructor(o,e){this.chat=o,this.toastr=e}ngOnInit(){this.roomNick=this.initialRoomNick,this.chat.user.myNickname$().subscribe(o=>{this.nickname=o})}onEnterRoom(o){if(!this.inputRoomForm.valid)return;const e=this.roomNick;this.chat.confirmTos$().pipe((0,Z.p)(i=>i),(0,x.n)(i=>this.chat.ensureRoom$(e))).subscribe(i=>{(0,d.Oi)(`Creating room id: ${i.id} with ${i.nick}`),this.roomNick="",this.toastr.info(i.isExisting?`chat \u30eb\u30fc\u30e0 "${e}" \u306b\u5165\u5ba4\u3057\u307e\u3059\u3002`:`\u65b0\u3057\u3044 chat \u30eb\u30fc\u30e0 "${e}" \u3092\u4f5c\u308a\u307e\u3057\u305f\u3002`),this.roomSelected.emit(i)})}static \u0275fac=function(e){return new(e||n)(t.rXU(C),t.rXU(g.tw))};static \u0275cmp=t.VBU({type:n,selectors:[["gitfire-chat-entrance"]],viewQuery:function(e,i){if(1&e&&t.GBs(q,5),2&e){let r;t.mGM(r=t.lsd())&&(i.inputRoomForm=r.first)}},inputs:{initialRoomNick:"initialRoomNick"},outputs:{roomSelected:"roomSelected"},decls:27,vars:9,consts:[["chatConfigureForm","ngForm"],["nickNameBox","ngModel"],["inputRoomForm","ngForm"],["roomBox","ngModel"],["routerLink","/Gitfire/settings"],[1,""],[1,"input-group","p-3"],["for","appGitfireChatUserNickanmeInput",1,"visually-hidden"],["id","appGitfireChatUserNickanmeInput","type","text","name","nickname","placeholder","\u4f8b: hogehoge1032","require","","maxlength","19","minlength","4",1,"form-control",3,"ngModelChange","ngModel","disabled"],["title","\u5165\u5ba4\u3059\u308b\u30c1\u30e3\u30c3\u30c8\u30eb\u30fc\u30e0\u306e\u540d\u524d\u3067\u3059\u3002\u5b58\u5728\u3057\u306a\u3044\u540d\u524d\u306e\u5834\u5408\u306f\u65b0\u3057\u3044\u90e8\u5c4b\u304c\u4f5c\u3089\u308c\u307e\u3059\u3002","src","/assets/octicons/question.svg",1,"m-3","octicon-info"],["for","appGitfireRoomnickNameInput",1,"visually-hidden"],["id","appGitfireRoomnickNameInput","type","text","name","roomNickname","maxlength","9","minlength","4","required","",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click","disabled"],[4,"ngIf"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"]],template:function(e,i){if(1&e){const r=t.RV6();t.j41(0,"div")(1,"p"),t.EFF(2,"Chat \u3067\u4f7f\u3046\u30cb\u30c3\u30af\u30cd\u30fc\u30e0\u3067\u3059\u3002"),t.j41(3,"a",4),t.EFF(4,"[\u8a2d\u5b9a]"),t.k0s(),t.EFF(5,"\u304b\u3089\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"),t.k0s(),t.j41(6,"form",5,0)(8,"div",6)(9,"label",7),t.EFF(10,"\u30cb\u30c3\u30af\u30cd\u30fc\u30e0"),t.k0s(),t.j41(11,"input",8,1),t.mxI("ngModelChange",function(s){return t.eBV(r),t.DH7(i.nickname,s)||(i.nickname=s),t.Njj(s)}),t.k0s()()()(),t.j41(13,"div")(14,"h2"),t.EFF(15,"Chat Room \u306e\u540d\u524d"),t.nrm(16,"img",9),t.k0s(),t.j41(17,"form",null,2)(19,"div",6)(20,"label",10),t.EFF(21,"Room"),t.k0s(),t.j41(22,"input",11,3),t.mxI("ngModelChange",function(s){return t.eBV(r),t.DH7(i.roomNick,s)||(i.roomNick=s),t.Njj(s)}),t.k0s(),t.j41(24,"button",12),t.bIt("click",function(s){return t.eBV(r),t.Njj(i.onEnterRoom(s))}),t.EFF(25,"\u5165\u5ba4"),t.k0s(),t.DNE(26,nt,4,3,"ng-container",13),t.k0s()()()}if(2&e){const r=t.sdS(12),c=t.sdS(18),s=t.sdS(23);t.R7$(8),t.AVh("was-validated",r.dirty||r.touched),t.R7$(3),t.R50("ngModel",i.nickname),t.Y8G("disabled",!0),t.R7$(8),t.AVh("was-validated",s.dirty||s.touched),t.R7$(3),t.R50("ngModel",i.roomNick),t.R7$(2),t.Y8G("disabled",!c.valid),t.R7$(2),t.Y8G("ngIf",s.invalid)}},dependencies:[h.bT,m.qT,m.me,m.BC,m.cb,m.YS,m.xh,m.tU,m.vS,m.cV,f.Wk]})}return n})();function rt(n,u){1&n&&(t.qex(0),t.nrm(1,"span",2),t.bVm())}function st(n,u){if(1&n){const o=t.RV6();t.qex(0),t.j41(1,"gitfire-chat-entrance",3),t.bIt("roomSelected",function(i){t.eBV(o);const r=t.XpG();return t.Njj(r.onRoomSelected(i))}),t.k0s(),t.bVm()}if(2&n){const o=t.XpG();t.R7$(),t.Y8G("initialRoomNick",o.roomNick)}}function at(n,u){if(1&n){const o=t.RV6();t.qex(0),t.j41(1,"gitfire-chat-room",4),t.bIt("exitRoom",function(){t.eBV(o);const i=t.XpG();return t.Njj(i.onExitedRoom())}),t.k0s(),t.bVm()}if(2&n){const o=t.XpG();t.R7$(),t.Y8G("roomInfo",o.roomInfo)}}const ct=[{path:"",component:(()=>{class n{chat;router;route;destroy$=new R.B;state$=new S.t("loading");roomInfo;roomNick;ensureTos$=new R.B;constructor(o,e,i){this.chat=o,this.router=e,this.route=i}ngOnInit(){this.route.fragment.pipe((0,w.s)(1),(0,x.n)(o=>this.maybeRoomInfo$(o))).subscribe(o=>{if(!o||!o.id)return this.state$.next("entrance"),void(o&&o.nick&&(this.roomNick=o.nick));this.ensureTos$.next(o)}),this.ensureTos$.pipe((0,x.n)(o=>(0,Y.y)((0,T.of)(o),this.chat.confirmTos$()))).subscribe(([o,e])=>{e?(this.state$.next("room"),this.roomInfo=o):(this.state$.next("entrance"),this.roomNick=o.nick)})}ngOnDestroy(){this.destroy$.next()}onRoomSelected(o){(0,d.Oi)("onRoomSelected()",o),this.state$.next("room"),this.roomInfo=o,this.router.navigate(["/Gitfire/chat"],{fragment:o.nick})}onExitedRoom(){(0,d.Oi)("onExitedRoom()"),this.state$.next("entrance"),this.roomInfo=null,this.router.navigate(["/Gitfire/chat"])}maybeRoomInfo$(o){return null==o||o.length<4||10<=o.length?(0,T.of)(null):this.chat.maybeRoomInfo$(o)}get isAdActive(){return!!d.cA.production}static \u0275fac=function(e){return new(e||n)(t.rXU(C),t.rXU(f.Ix),t.rXU(f.nX))};static \u0275cmp=t.VBU({type:n,selectors:[["ng-component"]],decls:6,vars:6,consts:[[3,"ngSwitch"],[4,"ngSwitchCase"],["role","status",1,"spinner-border","text-primary"],[3,"roomSelected","initialRoomNick"],[3,"exitRoom","roomInfo"]],template:function(e,i){1&e&&(t.qex(0,0),t.nI1(1,"async"),t.DNE(2,rt,2,0,"ng-container",1)(3,st,2,1,"ng-container",1)(4,at,2,1,"ng-container",1),t.bVm(),t.nrm(5,"app-ad-fragment")),2&e&&(t.Y8G("ngSwitch",t.bMT(1,4,i.state$)),t.R7$(2),t.Y8G("ngSwitchCase","loading"),t.R7$(),t.Y8G("ngSwitchCase","entrance"),t.R7$(),t.Y8G("ngSwitchCase","room"))},dependencies:[h.ux,h.e1,U.j,W,it,h.Jj]})}return n})()}];let ut=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=t.$C({type:n});static \u0275inj=t.G2t({imports:[f.iI.forChild(ct),f.iI]})}return n})();var mt=a(5427);let lt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=t.$C({type:n});static \u0275inj=t.G2t({providers:[B.D,C,g.tw,F.Y,y.u],imports:[h.MD,m.YN,g._B.forRoot(d.cA.toastrConfig),mt.j,ut,V.Q]})}return n})()}}]);