"use strict";(self.webpackChunkKaguraGithubPages=self.webpackChunkKaguraGithubPages||[]).push([[23],{7023:($,I,h)=>{h.r(I),h.d(I,{ForecastMapModule:()=>l});var S=h(177),b=h(1188),C=h(467),m=h(5312),E=h(9568),f=h(6977),u=h(1413),n=h(1692),t=h(3953),e=h(8001);const a=[{path:"map/index.htm",redirectTo:"map"},{path:"map",component:(()=>{class s{http;destroy$=new u.B;constructor(c){this.http=c}ngOnInit(){var c=this;return(0,C.A)(function*(){const p=yield new n.aH({apiKey:m.cA.googleMapApiKey,version:"weekly",libraries:["places"]}).load();(0,m.C_)("Google API loaded",p);const y={center:{lat:m.cA.MapDefaultLocation.lat,lng:m.cA.MapDefaultLocation.lng},zoom:12},d=document.getElementById("toolsForecastMapMain");if(!d)throw new Error("No valid Map container element found.");new p.maps.Map(d,y),c.http.fetchJson("https://www.jma.go.jp/bosai/common/const/area.json").pipe((0,E.t)(1),(0,f.Q)(c.destroy$)).subscribe(w=>{console.log("TODO",w)})})()}ngOnDestroy(){this.destroy$.next()}static \u0275fac=function(o){return new(o||s)(t.rXU(e.kl))};static \u0275cmp=t.VBU({type:s,selectors:[["app-forecastmap-main"]],decls:1,vars:0,consts:[["id","toolsForecastMapMain",2,"width","100%","height","600px"]],template:function(o,p){1&o&&t.nrm(0,"div",0)}})}return s})()}];let r=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275mod=t.$C({type:s});static \u0275inj=t.G2t({imports:[b.iI.forChild(a),b.iI]})}return s})(),l=(()=>{class s{static \u0275fac=function(o){return new(o||s)};static \u0275mod=t.$C({type:s});static \u0275inj=t.G2t({imports:[S.MD,r]})}return s})()},1692:($,I,h)=>{function b(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}h.d(I,{aH:()=>u}),"function"==typeof SuppressedError&&SuppressedError;var m=b(function n(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){if(t.constructor!==e.constructor)return!1;var i,a,r;if(Array.isArray(t)){if((i=t.length)!=e.length)return!1;for(a=i;0!=a--;)if(!n(t[a],e[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if((i=(r=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(a=i;0!=a--;)if(!Object.prototype.hasOwnProperty.call(e,r[a]))return!1;for(a=i;0!=a--;){var l=r[a];if(!n(t[l],e[l]))return!1}return!0}return t!=t&&e!=e});const E="__googleMapsScriptId";var f=function(n){return n[n.INITIALIZED=0]="INITIALIZED",n[n.LOADING=1]="LOADING",n[n.SUCCESS=2]="SUCCESS",n[n.FAILURE=3]="FAILURE",n}(f||{});class u{constructor({apiKey:t,authReferrerPolicy:e,channel:i,client:a,id:r=E,language:l,libraries:s=[],mapIds:g,nonce:c,region:o,retries:p=3,url:y="https://maps.googleapis.com/maps/api/js",version:d}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=e,this.channel=i,this.client=a,this.id=r||E,this.language=l,this.libraries=s,this.mapIds=g,this.nonce=c,this.region=o,this.retries=p,this.url=y,this.version=d,u.instance){if(!m(this.options,u.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(u.instance.options)}`);return u.instance}u.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?f.FAILURE:this.done?f.SUCCESS:this.loading?f.LOADING:f.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),this.libraries.length>0&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(t+=`&auth_referrer_policy=${this.authReferrerPolicy}`),t}deleteScript(){const t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((t,e)=>{this.loadCallback(i=>{i?e(i.error):t(window.google)})})}importLibrary(t){return this.execute(),google.maps.importLibrary(t)}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){var t,e;if(document.getElementById(this.id))return void this.callback();const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(r=>!i[r]&&delete i[r]),null!==(e=null===(t=window?.google)||void 0===t?void 0:t.maps)&&void 0!==e&&e.importLibrary||(r=>{let l,s,g,c="The Google Maps JavaScript API",o="google",p="importLibrary",y="__ib__",d=document,v=window;v=v[o]||(v[o]={});const w=v.maps||(v.maps={}),P=new Set,M=new URLSearchParams,k=()=>l||(l=new Promise((O,j)=>function S(n,t,e,i){return new(e||(e=Promise))(function(r,l){function s(o){try{c(i.next(o))}catch(p){l(p)}}function g(o){try{c(i.throw(o))}catch(p){l(p)}}function c(o){o.done?r(o.value):function a(r){return r instanceof e?r:new e(function(l){l(r)})}(o.value).then(s,g)}c((i=i.apply(n,t||[])).next())})}(this,void 0,void 0,function*(){var A;for(g in yield s=d.createElement("script"),s.id=this.id,M.set("libraries",[...P]+""),r)M.set(g.replace(/[A-Z]/g,F=>"_"+F[0].toLowerCase()),r[g]);M.set("callback",o+".maps."+y),s.src=this.url+"?"+M,w[y]=O,s.onerror=()=>l=j(Error(c+" could not load.")),s.nonce=this.nonce||(null===(A=d.querySelector("script[nonce]"))||void 0===A?void 0:A.nonce)||"",d.head.append(s)})));w[p]?console.warn(c+" only loads once. Ignoring:",r):w[p]=(O,...j)=>P.add(O)&&k().then(()=>w[p](O,...j))})(i);const a=this.libraries.map(r=>this.importLibrary(r));a.length||a.push(this.importLibrary("core")),Promise.all(a).then(()=>this.callback(),r=>{const l=new ErrorEvent("error",{error:r});this.loadErrorCallback(l)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.onerrorEvent=t,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(t=>{t(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setScript())}}}}}]);