import{d as Y,O as j,P as q,L as J,o as s,g as d,u as h,t as V,h as A,b,F as y,E as R,C as $,R as Q,S as ee,U as te,V as ne,W as ae,i as c,X as S,Y as le,_ as re,$ as oe,a0 as ie,a1 as z,a,a2 as D,a3 as M,N as ue,a4 as X}from"./app-30q4uRHi.js";const se={class:"d-flex align-center"},de={key:0},ce={class:"mx-2 flex-1",style:{position:"relative",height:"40px"}},pe=b("div",{style:{position:"absolute",top:"50%",width:"100%",border:"2px solid lightgrey","border-radius":"2px",transform:"translate(0, -50%)"}},null,-1),me={style:{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)"}},ve={style:{position:"absolute",bottom:"12px",left:"50%",transform:"translateX(-50%)","white-space":"pre"}},fe={style:{position:"absolute",top:"35px",color:"crimson",left:"50%",transform:"translateX(-50%)"}},he=b("span",{style:{position:"absolute",bottom:"25px",color:"crimson",left:"50%",transform:"translateX(-50%)"}},"current",-1),ge={key:1},_e=Y({__name:"RangeDisplay",props:j({start:{},end:{},current:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const N=e,{start:p,end:_}=q(N),l=J(e,"modelValue"),t=m=>{const w=_.value-p.value;return`${(m-p.value)/w*100}%`};return(m,w)=>{var v,f;return s(),d("div",se,[(v=l.value)!=null&&v.every(r=>r.value!=h(p))?(s(),d("div",de,V(h(p)),1)):A("",!0),b("div",ce,[pe,(s(!0),d(y,null,R(Math.floor((h(_)-h(p)-1)/10),r=>(s(),d("div",{key:r,style:$([{width:"1px",height:"4px","background-color":"#666",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},{left:t(h(p)+r*10)}])},null,4))),128)),(s(!0),d(y,null,R(l.value,({label:r,value:g,color:o})=>(s(),d("div",{key:r,style:$([{width:"10px",height:"10px","border-radius":"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},{left:t(g),backgroundColor:o,color:o}])},[b("span",me,V(g),1),b("span",ve,V(r),1)],4))),128)),m.current!==void 0?(s(),d("div",{key:0,style:$([{width:"3px",height:"30px","background-color":"crimson",position:"absolute",top:"50%",transform:"translate(-50%, -30px)"},{left:t(m.current)}])},[b("span",fe,V(m.current),1),he],4)):A("",!0)]),(f=l.value)!=null&&f.every(r=>r.value!=h(_))?(s(),d("div",ge,V(h(_)),1)):A("",!0)])}}}),be=Q({controlVariant:{type:String,default:"default"},inset:Boolean,hideInput:Boolean,min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},...ee(te(),["appendInnerIcon","prependInnerIcon"])},"VNumberInput"),ke=ne()({name:"VNumberInput",inheritAttrs:!1,props:{...be()},emits:{"update:modelValue":e=>!0},setup(e,N){let{attrs:p,emit:_,slots:l}=N;const t=ae(e,"modelValue"),m=c(()=>S(e.step)),w=c(()=>t.value!=null?S(t.value):0),v=le(),f=c(()=>e.disabled||e.readonly||(v==null?void 0:v.isReadonly.value)),r=c(()=>f.value?!1:t.value==null?!0:t.value+e.step<=e.max),g=c(()=>f.value?!1:t.value==null?!0:t.value-e.step>=e.min);re(()=>{f.value||t.value!=null&&(t.value<e.min||t.value>e.max)&&(t.value=oe(t.value,e.min,e.max))});const o=c(()=>e.hideInput?"stacked":e.controlVariant),H=c(()=>({click:B})),K=c(()=>({click:F}));function P(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(f.value)return;if(t.value==null){t.value=0;return}const I=Math.max(w.value,m.value);n?r.value&&(t.value=+(t.value+e.step).toFixed(I)):g.value&&(t.value=+(t.value-e.step).toFixed(I))}function B(n){n.stopPropagation(),P()}function F(n){n.stopPropagation(),P(!1)}function O(n){if(!(["Enter","ArrowLeft","ArrowRight","Backspace","Tab"].includes(n.key)||n.ctrlKey)){if(["ArrowDown"].includes(n.key)){n.preventDefault(),P(!1);return}if(["ArrowUp"].includes(n.key)){n.preventDefault(),P();return}/^[0-9\-+.]+$/.test(n.key)||n.preventDefault()}}function Z(n){t.value=n?+n:void 0}function C(n){n.stopPropagation()}ie(()=>{const{modelValue:n,...I}=z.filterProps(e);function E(){const i=o.value==="stacked"?"auto":"100%";return a("div",{class:"v-number-input__control"},[l.decrement?a(X,{key:"decrement-defaults",defaults:{VBtn:{disabled:!g.value,flat:!0,height:i,size:"small",icon:"$expand"}}},{default:()=>[l.decrement(K.value)]}):a(M,{disabled:!g.value,flat:!0,key:"decrement-btn",height:i,name:"decrement-btn",icon:"$expand",size:"small",tabindex:"-1",onClick:F,onMousedown:C},null),a(D,{vertical:o.value!=="stacked"},null),l.increment?a(X,{key:"increment-defaults",defaults:{VBtn:{disabled:!r.value,flat:!0,height:i,size:"small",icon:"$collapse"}}},{default:()=>[l.increment(H.value)]}):a(M,{disabled:!r.value,flat:!0,key:"increment-btn",height:i,name:"increment-btn",icon:"$collapse",onClick:B,onMousedown:C,size:"small",tabindex:"-1"},null)])}function T(){return!e.hideInput&&!e.inset?a(D,{vertical:!0},null):void 0}const U=o.value==="split"?a("div",{class:"v-number-input__control"},[a(D,{vertical:!0},null),a(M,{flat:!0,height:"100%",icon:"$plus",tile:!0,tabindex:"-1",onClick:B,onMousedown:C},null)]):e.reverse?void 0:a(y,null,[T(),E()]),G=l["append-inner"]||U,L=o.value==="split"?a("div",{class:"v-number-input__control"},[a(M,{flat:!0,height:"100%",icon:"$minus",tile:!0,tabindex:"-1",onClick:F,onMousedown:C},null),a(D,{vertical:!0},null)]):e.reverse?a(y,null,[E(),T()]):void 0,W=l["prepend-inner"]||L;return a(z,ue({modelValue:t.value,"onUpdate:modelValue":Z,onKeydown:O,class:["v-number-input",{"v-number-input--default":o.value==="default","v-number-input--hide-input":e.hideInput,"v-number-input--inset":e.inset,"v-number-input--reverse":e.reverse,"v-number-input--split":o.value==="split","v-number-input--stacked":o.value==="stacked"},e.class]},I,{style:e.style,inputmode:"decimal"}),{...l,"append-inner":G?function(){var x;for(var i=arguments.length,k=new Array(i),u=0;u<i;u++)k[u]=arguments[u];return a(y,null,[(x=l["append-inner"])==null?void 0:x.call(l,...k),U])}:void 0,"prepend-inner":W?function(){var x;for(var i=arguments.length,k=new Array(i),u=0;u<i;u++)k[u]=arguments[u];return a(y,null,[L,(x=l["prepend-inner"])==null?void 0:x.call(l,...k)])}:void 0})})}}),xe=[{color:"#1A6C9C",vpd_range:"<0.4 kPa",median_vpd_value:.2,description:"Danger Zone (Under Transpiration)"},{color:"#22AB9C",vpd_range:"0.4-0.8 kPa",median_vpd_value:.6,description:"Early Vegetative Growth / Propagation (Low Transpiration)"},{color:"#9CC55B",vpd_range:"0.8-1.2 kPa",median_vpd_value:1,description:"Late Vegetative / Early Flower (Healthy Transpiration)"},{color:"#E7C12B",vpd_range:"1.2-1.6 kPa",median_vpd_value:1.4,description:"Mid / Late Flower (High Transpiration)"},{color:"#CE4234",vpd_range:">1.6 kPa",median_vpd_value:1.8,description:"Danger Zone (Over Transpiration)"}];export{ke as V,_e as _,xe as a};
