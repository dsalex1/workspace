import{u as P,B as x,H as D,l as J,J as G,z as T,y as K,K as R,L as B,s as I}from"./app-BYtMWjeZ.js";function $(e){return R()?(B(e),!0):!1}function F(e){return typeof e=="function"?e():P(e)}const q=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Q=Object.prototype.toString,U=e=>Q.call(e)==="[object Object]",X=()=>{};function Y(e,r){function t(...i){return new Promise((s,u)=>{Promise.resolve(e(()=>r.apply(this,i),{fn:r,thisArg:this,args:i})).then(s).catch(u)})}return t}const z=e=>e();function Z(e=z){const r=J(!0);function t(){r.value=!1}function i(){r.value=!0}const s=(...u)=>{r.value&&e(...u)};return{isActive:G(r),pause:t,resume:i,eventFilter:s}}function k(e){return K()}function ee(e,r,t={}){const{eventFilter:i=z,...s}=t;return T(e,Y(i,r),s)}function te(e,r,t={}){const{eventFilter:i,...s}=t,{eventFilter:u,pause:g,resume:m,isActive:h}=Z(i);return{stop:ee(e,r,{...s,eventFilter:u}),pause:g,resume:m,isActive:h}}function ne(e,r=!0,t){k()?x(e,t):r?e():D(e)}function re(e){var r;const t=F(e);return(r=t==null?void 0:t.$el)!=null?r:t}const E=q?window:void 0;function j(...e){let r,t,i,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,i,s]=e,r=E):[r,t,i,s]=e,!r)return X;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const u=[],g=()=>{u.forEach(l=>l()),u.length=0},m=(l,a,w,c)=>(l.addEventListener(a,w,c),()=>l.removeEventListener(a,w,c)),h=T(()=>[re(r),F(s)],([l,a])=>{if(g(),!l)return;const w=U(a)?{...a}:a;u.push(...t.flatMap(c=>i.map(b=>m(l,c,b,w))))},{immediate:!0,flush:"post"}),p=()=>{h(),g()};return $(p),p}const A=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__",ie=oe();function oe(){return O in A||(A[O]=A[O]||{}),A[O]}function se(e,r){return ie[e]||r}function ae(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ue={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},C="vueuse-storage";function ce(e,r,t,i={}){var s;const{flush:u="pre",deep:g=!0,listenToStorageChanges:m=!0,writeDefaults:h=!0,mergeDefaults:p=!1,shallow:l,window:a=E,eventFilter:w,onError:c=n=>{console.error(n)},initOnMounted:b}=i,d=(l?I:J)(r);if(!t)try{t=se("getDefaultStorage",()=>{var n;return(n=E)==null?void 0:n.localStorage})()}catch(n){c(n)}if(!t)return d;const y=F(r),N=ae(y),S=(s=i.serializer)!=null?s:ue[N],{pause:M,resume:_}=te(d,()=>L(d.value),{flush:u,deep:g,eventFilter:w});a&&m&&ne(()=>{j(a,"storage",v),j(a,C,H),b&&v()}),b||v();function W(n,o){a&&a.dispatchEvent(new CustomEvent(C,{detail:{key:e,oldValue:n,newValue:o,storageArea:t}}))}function L(n){try{const o=t.getItem(e);if(n==null)W(o,null),t.removeItem(e);else{const f=S.write(n);o!==f&&(t.setItem(e,f),W(o,f))}}catch(o){c(o)}}function V(n){const o=n?n.newValue:t.getItem(e);if(o==null)return h&&y!=null&&t.setItem(e,S.write(y)),y;if(!n&&p){const f=S.read(o);return typeof p=="function"?p(f,y):N==="object"&&!Array.isArray(f)?{...y,...f}:f}else return typeof o!="string"?o:S.read(o)}function v(n){if(!(n&&n.storageArea!==t)){if(n&&n.key==null){d.value=y;return}if(!(n&&n.key!==e)){M();try{(n==null?void 0:n.newValue)!==S.write(d.value)&&(d.value=V(n))}catch(o){c(o)}finally{n?D(_):_()}}}}function H(n){v(n.detail)}return d}export{ce as u};
