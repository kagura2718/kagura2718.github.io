"use strict";(self.webpackChunkKaguraGithubPages=self.webpackChunkKaguraGithubPages||[]).push([[594],{1639:(X,K,a)=>{a.d(K,{EY:()=>$,fm:()=>b});var o=a(3953),D=a(177),O=a(4572),B=a(7673),T=a(8141),h=a(5558),C=a(6354),I=a(9568),j=a(6697),x=a(9974),M=a(4360),F=a(3669),w=a(1584),i=a(8750),U=a(9437),v=a(5312),R=a(8001),G=a(3955);const b=new o.nKC("USE_ASSET");new o.nKC("USE_ASSET_FULLPATH");let $=(()=>{class E{locale;assetPrefix;http;translate;SUPPORTED_LOCALES;PRIMARY_LOCALE;initializeTranslations$;constructor(g,f="app/",S,u){this.locale=g,this.assetPrefix=f,this.http=S,this.translate=u,(0,v.Oi)("LocalTranslationService.constructor",f,u),this.SUPPORTED_LOCALES=this.getSupportedLocales(),(0,v.rD)(`Supported locales are ${this.SUPPORTED_LOCALES}.`),this.PRIMARY_LOCALE=this.SUPPORTED_LOCALES[0];const d=`/assets/i18n/${f}`,c=this.SUPPORTED_LOCALES.map(L=>this.safeFetchJson(`${d}${L}.json`));this.initializeTranslations$=(0,O.z)(c).pipe((0,T.M)(L=>{for(let n=0;n<L.length;n++)this.translate.setTranslation(this.SUPPORTED_LOCALES[n],L[n],!0);(0,v.Oi)("New translation data",this.translate.translations)}),(0,h.n)(L=>this.translate.use(this.PRIMARY_LOCALE)),(0,C.T)(L=>{}),(0,I.t)(1)),this.initializeTranslations$.pipe((0,j.s)(1)).subscribe({next:L=>{},complete:()=>(0,v.rD)(`Initialize path:${d} translation finished.`),error:L=>(0,v.sJ)("Failed to initialize path:${requestPath} translation.",L)})}safeFetchJson(g){return this.http.fetchJson(g).pipe(function V(E=1/0){let N;N=E&&"object"==typeof E?E:{count:E};const{count:g=1/0,delay:f,resetOnSuccess:S=!1}=N;return g<=0?F.D:(0,x.N)((u,m)=>{let c,d=0;const L=()=>{let n=!1;c=u.subscribe((0,M._)(m,p=>{S&&(d=0),m.next(p)},void 0,p=>{if(d++<g){const t=()=>{c?(c.unsubscribe(),c=null,L()):n=!0};if(null!=f){const e="number"==typeof f?(0,w.O)(f):(0,i.Tg)(f(p,d)),s=(0,M._)(m,()=>{s.unsubscribe(),t()},()=>{m.complete()});e.subscribe(s)}else t()}else m.error(p)})),n&&(c.unsubscribe(),c=null,L())};L()})}(2),(0,U.W)(f=>((0,v.sJ)(`Error while fetching ${g}`,f),(0,B.of)({}))))}get(g,f){return this.initializeTranslations$.pipe((0,h.n)(()=>this.translate.get(g,f)))}maybePush(g,f){g.includes(f)||g.push(f)}washLang(g){if(2===g.length)return g;const f=/^([a-zA-Z0-9]{2})/.exec(g);return f?f[1]:null}getSupportedLocales(){const g=[];for(const S of[navigator.language,...navigator.languages]){if(!S)continue;const u=this.washLang(S);u&&this.maybePush(g,u)}const f=(0,D.kF)(this.locale);return f&&this.maybePush(g,f.toLowerCase()),this.maybePush(g,"en"),g}static \u0275fac=function(f){return new(f||E)(o.KVO(o.xe9),o.KVO(b),o.KVO(R.kl),o.KVO(G.c$))};static \u0275prov=o.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},7281:(X,K,a)=>{a.d(K,{$:()=>h});var o=a(177),D=a(5312),O=a(1639),B=a(3955),T=a(3953);let h=(()=>{class C{constructor(){(0,D.Oi)("ToolsSharedModule.constructor()")}static forRoot(){return{ngModule:C,providers:[]}}static forChild(){return{ngModule:C,providers:[]}}static \u0275fac=function(x){return new(x||C)};static \u0275mod=T.$C({type:C});static \u0275inj=T.G2t({providers:[O.EY],imports:[o.MD,B.h]})}return C})()},2594:(X,K,a)=>{a.r(K),a.d(K,{ToolsModule:()=>S});var o=a(177),D=a(9417),O=a(5427),B=a(7281),T=a(1188),h=a(9969),C=a(1413),I=a(7673),j=a(7786),x=a(5964),M=a(6354),F=a(6977),w=a(5558),i=a(3953),V=a(1639),U=a(4715),v=a(1033),R=a(3955);function G(u,m){if(1&u&&(i.j41(0,"div",1)(1,"a",2)(2,"span",3),i.EFF(3,"TITLE_BACK_TO_TOOL_TOP"),i.k0s()()()),2&u){const d=i.XpG();i.R7$(),i.FS9("routerLink",d.toolsTopUrl)}}let b=(()=>{class u{router;translate;activatedRoute;dom;navigatorState;destroy$=new C.B;constructor(d,c,L,n){this.router=d,this.translate=c,this.activatedRoute=L,this.dom=n}isSubComponent$;toolsTopUrl="/Tools";ngOnDestroy(){this.destroy$.next()}getLeafRouteTitleOfActive(){let d=this.activatedRoute.firstChild;if(!d)return null;for(;d.firstChild;)d=d.firstChild;return d.snapshot.data.gitweeTitle?d.snapshot.data.gitweeTitle:null}ngOnInit(){const d=this.dom.getTitle(),c=(0,I.of)(this.router.url),L=this.router.events.pipe((0,x.p)(t=>t instanceof T.wF),(0,M.T)(t=>t.urlAfterRedirects));this.isSubComponent$=(0,j.h)(c,L).pipe((0,M.T)(t=>t!==this.toolsTopUrl));const n=this.router.events.pipe((0,x.p)(t=>t instanceof T.wF),(0,M.T)(t=>t));n.pipe((0,F.Q)(this.destroy$)).subscribe(t=>{this.navigatorState=t.urlAfterRedirects});const p=n.pipe((0,M.T)(t=>this.getLeafRouteTitleOfActive()));(0,j.h)((0,I.of)(this.getLeafRouteTitleOfActive()),p).pipe((0,w.n)(t=>t?this.translate.get(t):(0,I.of)(d)),(0,F.Q)(this.destroy$)).subscribe(t=>{this.dom.setTitle(t)})}static \u0275fac=function(c){return new(c||u)(i.rXU(T.Ix),i.rXU(V.EY),i.rXU(T.nX),i.rXU(U.K))};static \u0275cmp=i.VBU({type:u,selectors:[["app-tools-root"]],decls:5,vars:4,consts:[["class","p-3",4,"ngIf"],[1,"p-3"],[3,"routerLink"],["translate",""]],template:function(c,L){1&c&&(i.j41(0,"div"),i.nrm(1,"router-outlet"),i.k0s(),i.DNE(2,G,4,1,"div",0),i.nI1(3,"async"),i.nrm(4,"app-ad-fragment")),2&c&&(i.Y8G("@navigatorAnimation",L.navigatorState),i.R7$(2),i.Y8G("ngIf",i.bMT(3,2,L.isSubComponent$)))},dependencies:[o.bT,T.n3,T.Wk,v.j,R.Mm,o.Jj],data:{animation:[(0,h.hZ)("navigatorAnimation",[(0,h.kY)("* => *",[(0,h.iF)({height:"1024px",position:"relative"}),(0,h.P)(":enter, :leave",[(0,h.iF)({position:"absolute",top:0,left:0,width:"100%"})],{optional:!0}),(0,h.P)(":leave",[(0,h.iF)({opacity:1})],{optional:!0}),(0,h.P)(":enter",[(0,h.iF)({transform:"translateY(10px)",opacity:0})],{optional:!0}),(0,h.P)(":leave",(0,h.MA)(),{optional:!0}),(0,h.Os)([(0,h.P)(":leave",[(0,h.i0)("200ms ease-in-out",(0,h.iF)({opacity:0}))],{optional:!0}),(0,h.P)(":enter",[(0,h.i0)("200ms 500ms ease-in-out",(0,h.iF)({transform:"none",opacity:1}))],{optional:!0})]),(0,h.P)(":enter",(0,h.MA)(),{optional:!0}),(0,h.iF)({height:"*"})])])]}})}return u})();var W=a(5312);function $(u,m){1&u&&(i.j41(0,"li",4)(1,"a",9)(2,"span",2),i.EFF(3,"TITLE_TOOL_ROADCAMERA_MAP"),i.k0s()()())}function E(u,m){1&u&&(i.j41(0,"li",4)(1,"a",10)(2,"span"),i.EFF(3,"\u5929\u5019\u30de\u30c3\u30d7"),i.k0s()()())}const g=[{path:"",component:b,data:{gitweeTitle:"TITLE_TOOL_ENTRANCE"},children:[{path:"index.htm",redirectTo:""},{path:"testings",redirectTo:"testings.htm"},{path:"pokemongo",loadChildren:()=>a.e(520).then(a.bind(a,6520)).then(u=>u.PokemongoModule)},{path:"raid",redirectTo:"pokemongo/raid.htm"},{path:"Road",loadChildren:()=>Promise.all([a.e(433),a.e(978)]).then(a.bind(a,5978)).then(u=>u.RoadModule)},{path:"Forecast",loadChildren:()=>a.e(23).then(a.bind(a,7023)).then(u=>u.ForecastMapModule)},{path:"S2",loadChildren:()=>Promise.all([a.e(433),a.e(91)]).then(a.bind(a,5091)).then(u=>u.S2mapModule)},{path:"GrowUpSimulator",redirectTo:"pokemongo/GrowUpSimulator"},{path:"",component:(()=>{class u{translate;isProduction=W.cA.production;constructor(d){this.translate=d}ngOnInit(){}static \u0275fac=function(c){return new(c||u)(i.rXU(V.EY))};static \u0275cmp=i.VBU({type:u,selectors:[["app-tools-entrance"]],decls:27,vars:5,consts:[[1,"card","m-3"],[1,"card-header"],["translate",""],[1,"list-group","list-group-flush"],[1,"list-group-item"],["routerLink","/Road/index.htm"],["class","list-group-item",4,"ngIf"],["routerLink","/Tools/S2/map"],["routerLink","./pokemongo/RaidInvitation"],["routerLink","/Tools/Road/map"],["routerLink","/Tools/Forecast/map"]],template:function(c,L){1&c&&(i.j41(0,"h1"),i.EFF(1),i.nI1(2,"translate"),i.k0s(),i.j41(3,"div",0)(4,"div",1)(5,"span",2),i.EFF(6,"TITLE_TOOL_LIVELIHOOD"),i.k0s()(),i.j41(7,"ul",3)(8,"li",4)(9,"a",5)(10,"span",2),i.EFF(11,"TITLE_TOOL_ROAD_INFO"),i.k0s()()(),i.DNE(12,$,4,0,"li",6)(13,E,4,0,"li",6),i.j41(14,"li",4)(15,"a",7)(16,"span",2),i.EFF(17,"TITLE_TOOL_S2GEO_MAP"),i.k0s()()()()(),i.j41(18,"div",0)(19,"div",1)(20,"span",2),i.EFF(21,"TITLE_TOOL_JUNK"),i.k0s()(),i.j41(22,"ul",3)(23,"li",4)(24,"a",8)(25,"span",2),i.EFF(26,"TITLE_POKEMON_RAID_INVITATION"),i.k0s()()()()()),2&c&&(i.R7$(),i.JRh(i.bMT(2,3,"TITLE_TOOL_ENTRANCE")),i.R7$(11),i.Y8G("ngIf",!L.isProduction),i.R7$(),i.Y8G("ngIf",!L.isProduction))},dependencies:[o.bT,T.Wk,R.Mm,R.D9]})}return u})()}]}];let f=(()=>{class u{static \u0275fac=function(c){return new(c||u)};static \u0275mod=i.$C({type:u});static \u0275inj=i.G2t({imports:[T.iI.forChild(g),T.iI]})}return u})(),S=(()=>{class u{constructor(){(0,W.rD)("Dynamically loaded ToolsModule")}static \u0275fac=function(c){return new(c||u)};static \u0275mod=i.$C({type:u});static \u0275inj=i.G2t({providers:[{provide:V.fm,useValue:"app/tools/tools/"}],imports:[o.MD,D.YN,f,O.j,B.$,R.h.forRoot({defaultLanguage:"en",useDefaultLang:!0})]})}return u})()},3955:(X,K,a)=>{a.d(K,{D9:()=>c,Mm:()=>d,c$:()=>m,h:()=>L});var o=a(3953),D=a(7673),O=a(4402),B=a(7468),T=a(8793),h=a(9030),C=a(6697),I=a(9568),j=a(6354),x=a(274),M=a(5558);class F{}let w=(()=>{class n extends F{getTranslation(t){return(0,D.of)({})}static \u0275fac=(()=>{let t;return function(s){return(t||(t=o.xGo(n)))(s||n)}})();static \u0275prov=o.jDH({token:n,factory:n.\u0275fac})}return n})();class i{}let V=(()=>{class n{handle(t){return t.key}static \u0275fac=function(e){return new(e||n)};static \u0275prov=o.jDH({token:n,factory:n.\u0275fac})}return n})();function U(n,p){if(n===p)return!0;if(null===n||null===p)return!1;if(n!=n&&p!=p)return!0;let s,r,l,t=typeof n;if(t==typeof p&&"object"==t){if(!Array.isArray(n)){if(Array.isArray(p))return!1;for(r in l=Object.create(null),n){if(!U(n[r],p[r]))return!1;l[r]=!0}for(r in p)if(!(r in l)&&typeof p[r]<"u")return!1;return!0}if(!Array.isArray(p))return!1;if((s=n.length)==p.length){for(r=0;r<s;r++)if(!U(n[r],p[r]))return!1;return!0}}return!1}function v(n){return typeof n<"u"&&null!==n}function R(n){return n&&"object"==typeof n&&!Array.isArray(n)}function G(n,p){let t=Object.assign({},n);return R(n)&&R(p)&&Object.keys(p).forEach(e=>{R(p[e])?e in n?t[e]=G(n[e],p[e]):Object.assign(t,{[e]:p[e]}):Object.assign(t,{[e]:p[e]})}),t}class b{}let W=(()=>{class n extends b{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(t,e){let s;return s="string"==typeof t?this.interpolateString(t,e):"function"==typeof t?this.interpolateFunction(t,e):t,s}getValue(t,e){let s="string"==typeof e?e.split("."):[e];e="";do{e+=s.shift(),!v(t)||!v(t[e])||"object"!=typeof t[e]&&s.length?s.length?e+=".":t=void 0:(t=t[e],e="")}while(s.length);return t}interpolateFunction(t,e){return t(e)}interpolateString(t,e){return e?t.replace(this.templateMatcher,(s,r)=>{let l=this.getValue(e,r);return v(l)?l:s}):t}static \u0275fac=(()=>{let t;return function(s){return(t||(t=o.xGo(n)))(s||n)}})();static \u0275prov=o.jDH({token:n,factory:n.\u0275fac})}return n})();class ${}let E=(()=>{class n extends ${compile(t,e){return t}compileTranslations(t,e){return t}static \u0275fac=(()=>{let t;return function(s){return(t||(t=o.xGo(n)))(s||n)}})();static \u0275prov=o.jDH({token:n,factory:n.\u0275fac})}return n})();class N{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new o.bkB;onLangChange=new o.bkB;onDefaultLangChange=new o.bkB}const g=new o.nKC("USE_STORE"),f=new o.nKC("USE_DEFAULT_LANG"),S=new o.nKC("DEFAULT_LANGUAGE"),u=new o.nKC("USE_EXTEND");let m=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new o.bkB;_onLangChange=new o.bkB;_onDefaultLangChange=new o.bkB;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(t){this.isolate?this._defaultLang=t:this.store.defaultLang=t}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(t){this.isolate?this._currentLang=t:this.store.currentLang=t}get langs(){return this.isolate?this._langs:this.store.langs}set langs(t){this.isolate?this._langs=t:this.store.langs=t}get translations(){return this.isolate?this._translations:this.store.translations}set translations(t){this.isolate?this._translations=t:this.store.translations=t}constructor(t,e,s,r,l,P=!0,A=!1,y=!1,H){this.store=t,this.currentLoader=e,this.compiler=s,this.parser=r,this.missingTranslationHandler=l,this.useDefaultLang=P,this.isolate=A,this.extend=y,H&&this.setDefaultLang(H)}setDefaultLang(t){if(t===this.defaultLang)return;let e=this.retrieveTranslations(t);typeof e<"u"?(null==this.defaultLang&&(this.defaultLang=t),e.pipe((0,C.s)(1)).subscribe(s=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(t===this.currentLang)return(0,D.of)(this.translations[t]);let e=this.retrieveTranslations(t);return typeof e<"u"?(this.currentLang||(this.currentLang=t),e.pipe((0,C.s)(1)).subscribe(s=>{this.changeLang(t)}),e):(this.changeLang(t),(0,D.of)(this.translations[t]))}retrieveTranslations(t){let e;return(typeof this.translations[t]>"u"||this.extend)&&(this._translationRequests[t]=this._translationRequests[t]||this.getTranslation(t),e=this._translationRequests[t]),e}getTranslation(t){this.pending=!0;const e=this.currentLoader.getTranslation(t).pipe((0,I.t)(1),(0,C.s)(1));return this.loadingTranslations=e.pipe((0,j.T)(s=>this.compiler.compileTranslations(s,t)),(0,I.t)(1),(0,C.s)(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[t]=this.extend&&this.translations[t]?{...s,...this.translations[t]}:s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),e}setTranslation(t,e,s=!1){e=this.compiler.compileTranslations(e,t),this.translations[t]=(s||this.extend)&&this.translations[t]?G(this.translations[t],e):e,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){t.forEach(e=>{-1===this.langs.indexOf(e)&&this.langs.push(e)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(t,e,s){let r;if(e instanceof Array){let l={},P=!1;for(let A of e)l[A]=this.getParsedResult(t,A,s),(0,O.A)(l[A])&&(P=!0);if(P){const A=e.map(y=>(0,O.A)(l[y])?l[y]:(0,D.of)(l[y]));return(0,B.p)(A).pipe((0,j.T)(y=>{let H={};return y.forEach((Y,J)=>{H[e[J]]=Y}),H}))}return l}if(t&&(r=this.parser.interpolate(this.parser.getValue(t,e),s)),typeof r>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(r=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],e),s)),typeof r>"u"){let l={key:e,translateService:this};typeof s<"u"&&(l.interpolateParams=s),r=this.missingTranslationHandler.handle(l)}return typeof r<"u"?r:e}get(t,e){if(!v(t)||!t.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,x.H)(s=>(s=this.getParsedResult(s,t,e),(0,O.A)(s)?s:(0,D.of)(s))));{let s=this.getParsedResult(this.translations[this.currentLang],t,e);return(0,O.A)(s)?s:(0,D.of)(s)}}getStreamOnTranslationChange(t,e){if(!v(t)||!t.length)throw new Error('Parameter "key" required');return(0,T.x)((0,h.v)(()=>this.get(t,e)),this.onTranslationChange.pipe((0,M.n)(s=>{const r=this.getParsedResult(s.translations,t,e);return"function"==typeof r.subscribe?r:(0,D.of)(r)})))}stream(t,e){if(!v(t)||!t.length)throw new Error('Parameter "key" required');return(0,T.x)((0,h.v)(()=>this.get(t,e)),this.onLangChange.pipe((0,M.n)(s=>{const r=this.getParsedResult(s.translations,t,e);return(0,O.A)(r)?r:(0,D.of)(r)})))}instant(t,e){if(!v(t)||!t.length)throw new Error('Parameter "key" required');let s=this.getParsedResult(this.translations[this.currentLang],t,e);if((0,O.A)(s)){if(t instanceof Array){let r={};return t.forEach((l,P)=>{r[t[P]]=t[P]}),r}return t}return s}set(t,e,s=this.currentLang){this.translations[s][t]=this.compiler.compile(e,s),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeLang(t){this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),null==this.defaultLang&&this.changeDefaultLang(t)}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.getTranslation(t)}resetLang(t){this._translationRequests[t]=void 0,this.translations[t]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof t>"u"?void 0:(-1!==t.indexOf("-")&&(t=t.split("-")[0]),-1!==t.indexOf("_")&&(t=t.split("_")[0]),t)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,t}static \u0275fac=function(e){return new(e||n)(o.KVO(N),o.KVO(F),o.KVO($),o.KVO(b),o.KVO(i),o.KVO(f),o.KVO(g),o.KVO(u),o.KVO(S))};static \u0275prov=o.jDH({token:n,factory:n.\u0275fac})}return n})(),d=(()=>{class n{translateService;element;_ref;key;lastParams;currentParams;onLangChangeSub;onDefaultLangChangeSub;onTranslationChangeSub;set translate(t){t&&(this.key=t,this.checkNodes())}set translateParams(t){U(this.currentParams,t)||(this.currentParams=t,this.checkNodes(!0))}constructor(t,e,s){this.translateService=t,this.element=e,this._ref=s,this.onTranslationChangeSub||(this.onTranslationChangeSub=this.translateService.onTranslationChange.subscribe(r=>{r.lang===this.translateService.currentLang&&this.checkNodes(!0,r.translations)})),this.onLangChangeSub||(this.onLangChangeSub=this.translateService.onLangChange.subscribe(r=>{this.checkNodes(!0,r.translations)})),this.onDefaultLangChangeSub||(this.onDefaultLangChangeSub=this.translateService.onDefaultLangChange.subscribe(r=>{this.checkNodes(!0)}))}ngAfterViewChecked(){this.checkNodes()}checkNodes(t=!1,e){let s=this.element.nativeElement.childNodes;s.length||(this.setContent(this.element.nativeElement,this.key),s=this.element.nativeElement.childNodes);for(let r=0;r<s.length;++r){let l=s[r];if(3===l.nodeType){let P;if(t&&(l.lastKey=null),v(l.lookupKey))P=l.lookupKey;else if(this.key)P=this.key;else{let A=this.getContent(l),y=A.trim();y.length&&(l.lookupKey=y,A!==l.currentValue?(P=y,l.originalContent=A||l.originalContent):l.originalContent?P=l.originalContent.trim():A!==l.currentValue&&(P=y,l.originalContent=A||l.originalContent))}this.updateValue(P,l,e)}}}updateValue(t,e,s){if(t){if(e.lastKey===t&&this.lastParams===this.currentParams)return;this.lastParams=this.currentParams;let r=l=>{l!==t&&(e.lastKey=t),e.originalContent||(e.originalContent=this.getContent(e)),e.currentValue=v(l)?l:e.originalContent||t,this.setContent(e,this.key?e.currentValue:e.originalContent.replace(t,e.currentValue)),this._ref.markForCheck()};if(v(s)){let l=this.translateService.getParsedResult(s,t,this.currentParams);(0,O.A)(l)?l.subscribe({next:r}):r(l)}else this.translateService.get(t,this.currentParams).subscribe(r)}}getContent(t){return v(t.textContent)?t.textContent:t.data}setContent(t,e){v(t.textContent)?t.textContent=e:t.data=e}ngOnDestroy(){this.onLangChangeSub&&this.onLangChangeSub.unsubscribe(),this.onDefaultLangChangeSub&&this.onDefaultLangChangeSub.unsubscribe(),this.onTranslationChangeSub&&this.onTranslationChangeSub.unsubscribe()}static \u0275fac=function(e){return new(e||n)(o.rXU(m),o.rXU(o.aKT),o.rXU(o.gRc))};static \u0275dir=o.FsC({type:n,selectors:[["","translate",""],["","ngx-translate",""]],inputs:{translate:"translate",translateParams:"translateParams"}})}return n})(),c=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(t,e){this.translate=t,this._ref=e}updateValue(t,e,s){let r=l=>{this.value=void 0!==l?l:t,this.lastKey=t,this._ref.markForCheck()};if(s){let l=this.translate.getParsedResult(s,t,e);(0,O.A)(l.subscribe)?l.subscribe(r):r(l)}this.translate.get(t,e).subscribe(r)}transform(t,...e){if(!t||!t.length)return t;if(U(t,this.lastKey)&&U(e,this.lastParams))return this.value;let s;if(v(e[0])&&e.length)if("string"==typeof e[0]&&e[0].length){let r=e[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{s=JSON.parse(r)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${e[0]}`)}}else"object"==typeof e[0]&&!Array.isArray(e[0])&&(s=e[0]);return this.lastKey=t,this.lastParams=e,this.updateValue(t,s),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(r=>{this.lastKey&&r.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,s,r.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(r=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,s,r.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,s))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(e){return new(e||n)(o.rXU(m,16),o.rXU(o.gRc,16))};static \u0275pipe=o.EJ8({name:"translate",type:n,pure:!1});static \u0275prov=o.jDH({token:n,factory:n.\u0275fac})}return n})(),L=(()=>{class n{static forRoot(t={}){return{ngModule:n,providers:[t.loader||{provide:F,useClass:w},t.compiler||{provide:$,useClass:E},t.parser||{provide:b,useClass:W},t.missingTranslationHandler||{provide:i,useClass:V},N,{provide:g,useValue:t.isolate},{provide:f,useValue:t.useDefaultLang},{provide:u,useValue:t.extend},{provide:S,useValue:t.defaultLanguage},m]}}static forChild(t={}){return{ngModule:n,providers:[t.loader||{provide:F,useClass:w},t.compiler||{provide:$,useClass:E},t.parser||{provide:b,useClass:W},t.missingTranslationHandler||{provide:i,useClass:V},{provide:g,useValue:t.isolate},{provide:f,useValue:t.useDefaultLang},{provide:u,useValue:t.extend},{provide:S,useValue:t.defaultLanguage},m]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=o.$C({type:n});static \u0275inj=o.G2t({})}return n})()}}]);