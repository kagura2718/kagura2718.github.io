"use strict";(self.webpackChunkKaguraGithubPages=self.webpackChunkKaguraGithubPages||[]).push([[284],{3284:(st,x,l)=>{l.r(x),l.d(x,{GitfirePostModule:()=>it});var a=l(5739),C=l(6814),y=l(2425),F=l(2413),f=l(5861),E=l(2459),k=l(2096),d=l(553),t=l(9212),U=l(9782),P=l(4186);let T=(()=>{class n{auth;storage;funcs;constructor(i,e,o){this.auth=i,this.storage=e,this.funcs=o,(0,d.eM)("PostService.constructor()",i,e,o)}listDraftImages(){return(0,E.D)(this.funcs.call("listDraftImages",{}))}generateImageId(i){var e=this;return(0,f.Z)(function*(){const o={count:i},s=yield e.funcs.call("generateImageId_V2",o);return(0,d.eM)(`Fetched count: ${i} ids`,s),s})()}uploadImage(i,e){var o=this;return(0,f.Z)(function*(){(0,d.eM)(`Uploading ${i.id} from ${e.name} with size: ${e.size}`);const u=o.storage.ref(i.imagePath),c={contentType:e.type};yield u.put(e,c)})()}getThumbnailUrl$(i){return i.imageError?(0,k.of)(null):this.storage.ref(i.thumbnailPath).getDownloadURL()}postComment(i,e,o){var s=this;return(0,f.Z)(function*(){const u={text:e,commentType:i,images:o};yield s.funcs.call("doPost_V2",u)})()}deleteImage(i){var e=this;return(0,f.Z)(function*(){const o={imageId:i};yield e.funcs.call("deleteImage",o)})()}static \u0275fac=function(e){return new(e||n)(t.LFG(U.e),t.LFG(P.Q1),t.LFG(F.c))};static \u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Z=l(5187);const b=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],M=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],_=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],w=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],I=(n,r,i)=>{let e=n;return"string"==typeof r||Array.isArray(r)?e=n.toLocaleString(r,i):(!0===r||void 0!==i)&&(e=n.toLocaleString(void 0,i)),e};function A(n,r){if(!Number.isFinite(n))throw new TypeError(`Expected a finite number, got ${typeof n}: ${n}`);const i=(r={bits:!1,binary:!1,space:!0,...r}).bits?r.binary?w:_:r.binary?M:b,e=r.space?" ":"";if(r.signed&&0===n)return` 0${e}${i[0]}`;const o=n<0,s=o?"-":r.signed?"+":"";let u;if(o&&(n=-n),void 0!==r.minimumFractionDigits&&(u={minimumFractionDigits:r.minimumFractionDigits}),void 0!==r.maximumFractionDigits&&(u={maximumFractionDigits:r.maximumFractionDigits,...u}),n<1)return s+I(n,r.locale,u)+e+i[0];const c=Math.min(Math.floor(r.binary?Math.log(n)/Math.log(1024):Math.log10(n)/3),i.length-1);return n/=(r.binary?1024:1e3)**c,u||(n=n.toPrecision(3)),s+I(Number(n),r.locale,u)+e+i[c]}var v=l(8645);class N extends Error{constructor(r){super(r)}}class S extends Error{constructor(r){super(r)}}class B extends Error{constructor(r){super(r)}}function G(n){const r=new v.x,i=new FileReader;return i.onload=()=>{const e=i.result;if(null===e)throw new B(`${n} is not readable.`);r.next(e)},i.readAsDataURL(n),r}var z=l(8180),J=l(9773),p=l(6825),q=l(9009);function O(n,r){1&n&&t.GkF(0)}function Q(n,r){1&n&&(t.TgZ(0,"div",33),t._uU(1,"OK!"),t.qZA())}function Y(n,r){1&n&&(t.TgZ(0,"div",35),t._uU(1,"\u5165\u529b\u5fc5\u9808\u3067\u3059\u3002"),t.qZA())}function R(n,r){1&n&&(t.TgZ(0,"div",35),t._uU(1,"\u9577\u3059\u304e\u307e\u3059\u3002"),t.qZA())}function j(n,r){if(1&n&&(t.ynx(0),t.YNc(1,Y,2,0,"div",34)(2,R,2,0,"div",34),t.BQk()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",null==i.commentControl.errors?null:i.commentControl.errors.required),t.xp6(1),t.Q6J("ngIf",null==i.commentControl.errors?null:i.commentControl.errors.maxlength)}}function L(n,r){1&n&&(t.TgZ(0,"div",36)(1,"div",37)(2,"span",38),t._uU(3,"File storage changing..."),t.qZA()()())}function W(n,r){if(1&n&&(t.TgZ(0,"div",44),t._uU(1),t.qZA()),2&n){const i=r.$implicit,e=t.oxw().$implicit;t.xp6(1),t.AsE("",null==e.file?null:e.file.name,": ",i,"")}}function H(n,r){if(1&n&&(t.TgZ(0,"div",45),t._UZ(1,"img",46),t.ALo(2,"async"),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.MGl("alt","\u9078\u629e\u3057\u305f\u753b\u50cf ",i.id,""),t.s9C("src",t.lcZ(2,2,i.thumbUrl$),t.LSH)}}function K(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"div",39),t._UZ(2,"label"),t.TgZ(3,"input",40),t.NdJ("change",function(o){const u=t.CHM(i).$implicit,c=t.oxw();return t.KtG(c.onChangeDeleteCheck(o,u))}),t.qZA()(),t.TgZ(4,"div",41),t.YNc(5,W,2,2,"div",42)(6,H,3,4,"div",43),t.TgZ(7,"div")(8,"span"),t._uU(9),t.qZA()()()()}if(2&n){const i=r.$implicit,e=r.index;t.xp6(3),t.MGl("id","appGitfirePostThumb-",i.id,""),t.Q6J("formControlName",e),t.xp6(2),t.Q6J("ngIf",i.errorMessage),t.xp6(1),t.Q6J("ngIf",!i.errorMessage),t.xp6(3),t.hij("Size: ",i.displayBytes,"")}}function X(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div")(1,"button",47),t.NdJ("click",function(o){t.CHM(i);const s=t.oxw();return t.KtG(s.onClickDeleteImages(o))}),t._uU(2,"\u524a\u9664"),t.qZA()()}}function V(n,r){if(1&n&&(t.TgZ(0,"div")(1,"div",48)(2,"div",49)(3,"div",50),t._uU(4),t.qZA(),t.TgZ(5,"div",51)(6,"span",38),t._uU(7,"Posting..."),t.qZA()()()()()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("@maskTrigger",void 0),t.xp6(3),t.Oqu(i.postProgressMessage)}}const tt=[{path:"",component:(()=>{class n{serv;toastr;isMask=!1;destroy$=new v.x;imageItems=[];inputForm;ImageMaxCount=d.NZ.POST_IMAGE_MAX_COUNT;managingFiles=!1;postProgressMessage=null;constructor(i,e){this.serv=i,this.toastr=e}ngOnDestroy(){this.destroy$.next()}ngOnInit(){this.serv.listDraftImages().pipe((0,z.q)(1),(0,J.R)(this.destroy$)).subscribe(i=>{for(const e of i){const o=new a.NI(!1),s={id:e.id,thumbUrl$:this.serv.getThumbnailUrl$(e),displayBytes:A(e.fileSize),form:o};this.deletionControls.push(o),this.imageItems.push(s)}}),this.inputForm=new a.cw({}),this.inputForm.addControl("commentType",new a.NI("none",[])),this.inputForm.addControl("comment",new a.NI(null,[a.kI.required])),this.inputForm.addControl("deletion",new a.Oe([])),this.inputForm.addControl("confirmTosCheck",new a.NI(!1,[a.kI.required])),this.inputForm.addControl("rawImageCheck",new a.NI(!1,[]))}get typeControl(){return this.inputForm.get("commentType")}get commentControl(){return this.inputForm.get("comment")}get rawImageControl(){return this.inputForm.get("rawImageCheck")}get deletionControls(){return this.inputForm.get("deletion")}get confirmControl(){return this.inputForm.get("confirmTosCheck")}resizeImage(i){return(0,f.Z)(function*(){return function $(n,r){if(!n.type.match(/^image\//))throw new B(`Not a supported file type: ${n.type}`);let i;i="number"==typeof r?{maxSize:r}:r;const e=new v.x,o=new Image,s=new FileReader;return s.onload=()=>{o.src=s.result,o.onload=()=>{const[c,m]=function D(n,r){const i=n.width/n.height;if(r.maxSize){const e=r.maxSize;if(n.width>n.height){if(n.width>e)return[e,Math.floor(e/i)]}else if(n.height>e)return[Math.floor(e*i),e];return[n.width,n.height]}if(r.maxWidth||r.maxHeight){let e=1,o=1;r.maxWidth&&r.maxWidth>0&&n.width>r.maxWidth&&(e=r.maxWidth/n.width),r.maxHeight&&r.maxHeight>0&&n.height>r.maxHeight&&(o=r.maxHeight/n.height);const s=Math.min(e,o,1);return[n.width*s,n.height*s]}throw new N("Not a supported configuration. You should add maxSize.")}(o,i);console.log(`Resize ${o.width}x${o.height} -> ${c}x${m}`);const g=document.createElement("canvas");g.width=c,g.height=m;const h=g.getContext("2d");if(!h)throw new S("Unable to create context on canvas.");h.drawImage(o,0,0,c,m),h.canvas.toBlob(ot=>{e.next(ot),e.complete()},i.outputType||"image/jpeg")}},o.onerror=u=>e.error(u),s.readAsDataURL(n),e}(i,{maxSize:512}).toPromise()})()}onChangeFiles(i){var e=this;return(0,f.Z)(function*(){(0,d.eM)("onChangeFiles()",i);const o=i.target,s=o.files;if(!(s.length<=0)){if(s.length+e.imageItems.length>d.NZ.POST_IMAGE_MAX_COUNT)return void e.toastr.error(`\u6dfb\u4ed8\u53ef\u80fd\u306a\u30d5\u30a1\u30a4\u30eb\u306f ${d.NZ.POST_IMAGE_MAX_COUNT} \u500b\u307e\u3067\u3067\u3059\u3002`);e.managingFiles=!0;try{for(let u=0;u<s.length;u++){const c=s[u];let m;if(m=e.rawImageControl.value?c:yield e.resizeImage(c),m.size>=20971520)return void e.toastr.error("\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c\u5927\u304d\u3059\u304e\u307e\u3059\u3002(\u7d04 20MB \u307e\u3067)");const g=new a.NI(!1),h={file:m,form:g,thumbUrl$:G(m),displayBytes:A(m.size)};e.imageItems.push(h),e.deletionControls.push(g)}o.files=null}finally{e.managingFiles=!1}}})()}onClickDeleteImages(i){var e=this;return(0,f.Z)(function*(){(0,d.eM)("onClickDeleteImages()",i);let o=!1;e.managingFiles=!0;try{for(const s of e.imageItems){const u=e.imageItems.indexOf(s);if(e.deletionControls.at(u).value){if(s.id)try{yield e.serv.deleteImage(s.id)}catch{s.errorMessage="\u524a\u9664\u306b\u5931\u6557\u3057\u307e\u3057\u305f",o=!0;continue}e.imageItems=e.imageItems.filter(m=>m!==s),e.deletionControls.removeAt(u)}}}finally{e.managingFiles=!1}e.deletionSelected=!1,o?e.toastr.error("\u4e00\u90e8\u306e\u753b\u50cf\u306e\u524a\u9664\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"):e.toastr.info("\u753b\u50cf\u3092\u524a\u9664\u3057\u307e\u3057\u305f\u3002")})()}doUploadImages(){var i=this;return(0,f.Z)(function*(){const e=[],o=i.imageItems.filter(s=>!s.id);if(0<o.length){let s=null;try{s=yield i.serv.generateImageId(o.length)}catch(u){throw(0,d.wb)("Upload \u30d5\u30a1\u30a4\u30eb\u306e id \u751f\u6210\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"),i.toastr.error("\u30d5\u30a1\u30a4\u30eb\u306e upload \u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"),u}for(let u=0;u<o.length;u++){i.postProgressMessage=`\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u3044\u307e\u3059\u2026 ( ${u} / ${o.length})`;const c=o[u],m=s[u];try{yield i.serv.uploadImage(m,c.file),c.id=m.id,c.errorMessage=null}catch(g){throw c.errorMessage="Upload \u306b\u5931\u6557\u3057\u307e\u3057\u305f",g}}for(const u of i.imageItems)e.push(u.id)}return e})()}deletionSelected=!1;onChangeDeleteCheck(i,e){(0,d.eM)("onClickDeleteCheck()",i);for(const o of this.deletionControls.controls)if(o.value)return void(this.deletionSelected=!0);this.deletionSelected=!1}onClickPost(i){var e=this;return(0,f.Z)(function*(){if((0,d.eM)("onClickPost()",i),e.inputForm.invalid||e.commentControl.invalid||e.typeControl.invalid||e.confirmControl.invalid)return;const o=e.commentControl.value,s=e.typeControl.value;e.isMask=!0;try{e.postProgressMessage="\u6295\u7a3f\u306e\u6e96\u5099\u3092\u3057\u3066\u3044\u307e\u3059\u2026";const u=yield e.doUploadImages();e.postProgressMessage="\u6295\u7a3f\u3057\u3066\u3044\u307e\u3059\u2026",yield e.serv.postComment(s,o,u),e.commentControl.setValue(""),e.confirmControl.setValue(!1),e.typeControl.setValue("none"),e.deletionControls.clear(),e.imageItems=[],e.resetFormControl(e.commentControl),e.resetFormControl(e.typeControl),e.resetFormControl(e.deletionControls),e.resetFormControl(e.confirmControl),e.toastr.info("\u6295\u7a3f\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3057\u305f\u3002\u30e1\u30fc\u30eb\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")}finally{e.postProgressMessage=null,e.isMask=!1}})()}resetFormControl(i){i.markAsPristine(),i.markAsUntouched()}get isAdActive(){return!!d.NZ.production}static \u0275fac=function(e){return new(e||n)(t.Y36(T),t.Y36(y._W))};static \u0275cmp=t.Xpm({type:n,selectors:[["gitfire-post"]],decls:56,vars:14,consts:[[1,"m-3"],[1,"container",3,"formGroup"],["mainForm",""],[1,"input-group","m-2"],["for","appGitfirePostType",1,"visually-hidden"],["title","\u30b3\u30e1\u30f3\u30c8\u306e\u7a2e\u985e\u306b\u8a72\u5f53\u3059\u308b\u3082\u306e\u304c\u3042\u308c\u3070\u3001\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002","src","/assets/octicons/question.svg",1,"m-1","octicon-info","help-icon"],["id","appGitfirePostType","name","commentType","formControlName","commentType",1,"form-select"],["value","none"],["value","provisioning"],["value","thanks"],["value","commission"],["value","inquiry"],["value","dislike"],["value","others"],[4,"ngIf"],["id","appGitfirePostTextArea","name","comment","formControlName","comment","maxlength","4096","required","","type","text","placeholder","\u30b3\u30e1\u30f3\u30c8",1,"form-control",2,"height","150px"],["class","valid-feedback",4,"ngIf"],[2,"position","relative"],["class","gitfire-mask d-flex justify-content-center",4,"ngIf"],["title","\u9ad8\u89e3\u50cf\u5ea6\u304c\u5fc5\u8981\u306a\u753b\u50cf\u3092 upload \u3057\u305f\u3044\u5834\u5408\u306f check \u3092\u5165\u308c\u3066\u304b\u3089\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002",1,"form-check"],["aria-label","Check if not shrinkg all images.","formControlName","rawImageCheck","type","checkbox",1,"form-check-input"],[1,"custom-file"],["id","appGitfirePostFilesInput","multiple","","type","file","accept","image/*","aria-label","Choose images to upload.",1,"custom-file-input","form-control",3,"change"],["imageBox",""],["for","appPostFilesInput",1,"custom-file-label"],["src","/assets/octicons/question.svg",1,"m-1","octicon-info","help-icon",3,"title"],["formArrayName","deletion",1,"input-group","m-2"],[4,"ngFor","ngForOf"],[1,"input-group","my-4","m-2"],[1,"mx-auto"],["type","checkbox","required","","name","confirmTosCheck","formControlName","confirmTosCheck","aria-label","Checkbox for Terms Of Service confirmation",1,"form-check-input"],["target","_blank","href","/terms.htm",1,""],["type","submit","title","\u7ba1\u7406\u4eba\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u307e\u3059\u3002",1,"btn","btn-lg","btn-primary","mx-auto",3,"disabled","click"],[1,"valid-feedback"],["class","invalid-feedback",4,"ngIf"],[1,"invalid-feedback"],[1,"gitfire-mask","d-flex","justify-content-center"],["role","status",1,"spinner-border","text-info"],[1,"visually-hidden"],[1,"form-check"],["title","Upload \u3057\u306a\u3044\u3067\u524a\u9664\u3059\u308b\u5834\u5408\u306f\u30c1\u30a7\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002","aria-label","Choose images for deletion.","type","checkbox",1,"form-check-input",3,"id","formControlName","change"],[1,"m-1",2,"max-height","100px","max-width","100px"],["class","text-danger",4,"ngIf"],["class","border",4,"ngIf"],[1,"text-danger"],[1,"border"],[2,"height","100%","width","100%",3,"alt","src"],["type","submit",1,"btn","btn-danger",2,"height","50px",3,"click"],["id","appGitfirePostMask",1,"gitfire-mask"],[1,"d-flex","justify-content-center"],[2,"position","fixed","text-align","center","width","100%","border-style","dotted","top","50%","left","0px","font-size","2rem","color","#5566ff"],["role","status",1,"spinner-border","spinner-border-xl","text-info",2,"width","200px","height","200px","position","fixed","top","20%"]],template:function(e,o){1&e&&(t.TgZ(0,"p",0),t._uU(1,"\u7ba1\u7406\u4eba\u306b\u30b3\u30e1\u30f3\u30c8\u3092\u9001\u4fe1"),t.qZA(),t.TgZ(2,"div",1,2)(4,"div",3)(5,"label",4),t._uU(6,"\u30b3\u30e1\u30f3\u30c8\u7a2e\u5225 (\u7701\u7565\u53ef\u80fd)"),t._UZ(7,"img",5),t.qZA(),t.TgZ(8,"select",6)(9,"option",7),t._uU(10,"\u30b3\u30e1\u30f3\u30c8\u7a2e\u5225(\u7701\u7565\u53ef\u80fd)"),t.qZA(),t.TgZ(11,"option",8),t._uU(12,"\u60c5\u5831\u63d0\u4f9b (Provisioning)"),t.qZA(),t.TgZ(13,"option",9),t._uU(14,"\u8b1d\u610f (Thanks)"),t.qZA(),t.TgZ(15,"option",10),t._uU(16,"\u4f9d\u983c (Commision)"),t.qZA(),t.TgZ(17,"option",11),t._uU(18,"\u304a\u554f\u3044\u5408\u308f\u305b (Inquiry)"),t.qZA(),t.TgZ(19,"option",12),t._uU(20,"\u6c17\u306b\u5165\u3089\u306a\u3044 (Dislike)"),t.qZA(),t.TgZ(21,"option",13),t._uU(22,"\u305d\u306e\u4ed6 (Others)"),t.qZA()(),t.YNc(23,O,1,0,"ng-container",14),t.qZA(),t.TgZ(24,"div",3),t._UZ(25,"textarea",15),t.YNc(26,Q,2,0,"div",16)(27,j,3,2,"ng-container",14),t.qZA(),t.TgZ(28,"div",17),t.YNc(29,L,4,0,"div",18),t.TgZ(30,"div",3)(31,"div",19),t._UZ(32,"input",20),t.TgZ(33,"label"),t._uU(34,"\u753b\u50cf\u3092\u7e2e\u5c0f\u3057\u306a\u3044"),t.qZA()()(),t.TgZ(35,"div",3)(36,"div",21)(37,"input",22,23),t.NdJ("change",function(u){return o.onChangeFiles(u)}),t.qZA(),t.TgZ(39,"label",24),t._uU(40,"\u753b\u50cf\u3092\u9078\u629e (\u7701\u7565\u53ef\u80fd)"),t.qZA()(),t._UZ(41,"img",25),t.qZA(),t.TgZ(42,"div",26),t.YNc(43,K,10,5,"div",27)(44,X,3,0,"div",14),t.qZA()(),t.TgZ(45,"div",28)(46,"div",29),t._UZ(47,"input",30),t.TgZ(48,"a",31),t._uU(49,"[\u5229\u7528\u898f\u7d04]"),t.qZA(),t._uU(50," \u3092\u78ba\u8a8d\u3057\u307e\u3057\u305f"),t.qZA()(),t.TgZ(51,"div",3)(52,"button",32),t.NdJ("click",function(u){return o.onClickPost(u)}),t._uU(53,"\u9001\u4fe1"),t.qZA()()(),t._UZ(54,"app-ad-fragment"),t.YNc(55,V,8,2,"div",14)),2&e&&(t.xp6(2),t.Q6J("formGroup",o.inputForm),t.xp6(2),t.ekj("was-validated",o.typeControl.dirty||o.typeControl.touched),t.xp6(19),t.Q6J("ngIf",o.typeControl.invalid),t.xp6(1),t.ekj("was-validated",o.commentControl.dirty||o.commentControl.touched),t.xp6(2),t.Q6J("ngIf",!o.commentControl.invalid),t.xp6(1),t.Q6J("ngIf",o.commentControl.invalid),t.xp6(2),t.Q6J("ngIf",o.managingFiles),t.xp6(12),t.MGl("title","\u753b\u50cf\u306f ",o.ImageMaxCount," \u500b\u307e\u3067\u4e00\u5ea6\u306b\u767b\u9332\u3067\u304d\u307e\u3059\u3002"),t.xp6(2),t.Q6J("ngForOf",o.imageItems),t.xp6(1),t.Q6J("ngIf",o.deletionSelected),t.xp6(8),t.Q6J("disabled",o.inputForm.invalid||o.deletionSelected||o.managingFiles),t.xp6(3),t.Q6J("ngIf",o.isMask))},dependencies:[C.sg,C.O5,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.JL,a.Q7,a.nD,a.Zs,a.sg,a.u,a.CE,q.J,C.Ov],styles:[".gitfire-mask[_ngcontent-%COMP%]{opacity:.5;z-index:10000;background:black;position:absolute;width:100%;height:100%}#appGitfirePostMask[_ngcontent-%COMP%]{top:0;left:0}"],data:{animation:[(0,p.X$)("maskTrigger",[(0,p.eR)(":enter",[(0,p.oB)({opacity:0}),(0,p.jt)("300ms ease-in-out",(0,p.oB)({opacity:"*"}))]),(0,p.eR)(":leave",[(0,p.oB)({opacity:"*"}),(0,p.jt)("300ms ease-in-out",(0,p.oB)({opacity:0}))])])]}})}return n})()}];let et=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({imports:[Z.Bz.forChild(tt),Z.Bz]})}return n})();var nt=l(5101);let it=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=t.oAB({type:n});static \u0275inj=t.cJS({providers:[F.c,y._W,T],imports:[C.ez,a.u5,a.UX,nt.R,et]})}return n})()}}]);