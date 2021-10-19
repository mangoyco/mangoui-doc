(function(t,l){typeof exports=="object"&&typeof module!="undefined"?module.exports=l(require("vue")):typeof define=="function"&&define.amd?define(["vue"],l):(t=typeof globalThis!="undefined"?globalThis:t||self,t.n=l(t.Vue))})(this,function(t){"use strict";function l(e){return Object.prototype.toString.call(e)==="[object Object]"}const f=function(){let e=0;return function(){return e++}}();var h=Object.defineProperty,u=Object.prototype.hasOwnProperty,g=Object.getOwnPropertySymbols,B=Object.prototype.propertyIsEnumerable,k=(e,o,r)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,m=(e,o)=>{for(var r in o||(o={}))u.call(o,r)&&k(e,r,o[r]);if(g)for(var r of g(o))B.call(o,r)&&k(e,r,o[r]);return e},c=t.defineComponent({name:"MgProgress",props:{type:{default:"line",validator:e=>["line","circle","dashboard"].includes(e)},active:{},textInside:{},percentage:{default:0,validator:e=>e>=0&&e<=100},width:{},statusFormat:{type:Function},status:{validator:e=>["success","warning","error"].includes(e)},statusStyle:{},bgColor:{},strokeWidth:{},strokeColor:{type:[String,Object]}},setup(e){const o=f(),r=t.computed(()=>{let s={width:e.percentage+"%",height:e.strokeWidth};if(l(e.strokeColor)){const p=e.strokeColor;s.backgroundImage=`linear-gradient(to right, ${p.from} 0%, ${p.to} 100%)`}else s.backgroundColor=e.strokeColor||(e.status?`var(--mg-${e.status})`:null);return s}),a=t.computed(()=>({width:e.width})),n=t.computed(()=>`mg-progress-${e.type} ${e.statusFormat||e.status?"withstatus":""}`),i={circlebgStyle:C(e),circleStrokeStyle:y("circle",e,o)},d={dbStrokeStyle:y("dashboard",e,o)};return m(m({uid:o,strokeStyle:r,progressStyle:a,progressClassName:n},i),d)}});function C(e){return t.computed(()=>({strokeWidth:e.strokeWidth,stroke:e.bgColor}))}function y(e,o,r){const a={circle:2.89,dashboard:2.17};return t.computed(()=>{const n=a[e];let i=o.percentage,d=Math.floor(n*i),s;return l(o.strokeColor)?s=`url(#mg-gradient-${r})`:s=o.strokeColor||(o.status?`var(--mg-${o.status})`:null),{strokeWidth:o.strokeWidth,strokeDasharray:`${d} 300`,stroke:s}})}const S={key:0,class:"mg-progress-insidetext"},b={key:0},N={key:0};function V(e,o,r,a,n,i){return t.openBlock(),t.createBlock("div",{class:["mg-progress",e.progressClassName],style:e.progressStyle},[e.type==="line"?(t.openBlock(),t.createBlock(t.Fragment,{key:0},[t.createVNode("div",{class:"mg-progress-bg",style:{backgroundColor:e.bgColor}},[t.createVNode("div",{class:["mg-progress-inner",e.active===void 0?"":"active"],style:e.strokeStyle},[e.textInside?(t.openBlock(),t.createBlock("div",S,t.toDisplayString(e.percentage+"%"),1)):t.createCommentVNode("v-if",!0)],6)],4),e.statusFormat||e.status?(t.openBlock(),t.createBlock("div",{key:0,class:"mg-progress-status",style:e.statusStyle},[e.status?(t.openBlock(),t.createBlock("i",{key:0,style:{fontSize:e.strokeWidth||null},class:"mg-icon-"+e.status},null,6)):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[t.createTextVNode(t.toDisplayString(e.statusFormat(e.percentage)),1)],64))],4)):t.createCommentVNode("v-if",!0)],64)):t.createCommentVNode("v-if",!0),e.type==="circle"?(t.openBlock(),t.createBlock(t.Fragment,{key:1},[(t.openBlock(),t.createBlock("svg",{width:e.width||100,height:e.width||100,viewBox:"0 0 100 100"},[e.strokeColor&&e.strokeColor.from&&e.strokeColor.to?(t.openBlock(),t.createBlock("defs",b,[t.createVNode("linearGradient",{id:"mg-gradient-"+e.uid,x1:"0%",x2:"0%",y1:"100%",y2:"0%"},[t.createVNode("stop",{offset:"0%","stop-color":e.strokeColor.from},null,8,["stop-color"]),t.createVNode("stop",{offset:"100%","stop-color":e.strokeColor.to},null,8,["stop-color"])],8,["id"])])):t.createCommentVNode("v-if",!0),t.createVNode("circle",{class:"mg-progress-circlebg",cx:"50",cy:"50",r:"46",style:e.circlebgStyle},null,4),t.createVNode("circle",{class:"mg-progress-circlestroke",r:"46",cy:"50",cx:"50",style:e.circleStrokeStyle,transform:"translate(0,100) rotate(-90)"},null,4)],8,["width","height"])),e.statusFormat||e.status?(t.openBlock(),t.createBlock("div",{key:0,class:"mg-progress-circle-status",style:e.statusStyle},[e.status?(t.openBlock(),t.createBlock("i",{key:0,class:"mg-icon-"+e.status},null,2)):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[t.createTextVNode(t.toDisplayString(e.statusFormat(e.percentage)),1)],64))],4)):t.createCommentVNode("v-if",!0)],64)):t.createCommentVNode("v-if",!0),e.type==="dashboard"?(t.openBlock(),t.createBlock(t.Fragment,{key:2},[(t.openBlock(),t.createBlock("svg",{width:e.width||100,height:e.width||100,viewBox:"0 0 100 100"},[e.strokeColor&&e.strokeColor.from&&e.strokeColor.to?(t.openBlock(),t.createBlock("defs",N,[t.createVNode("linearGradient",{id:"mg-gradient-"+e.uid,x1:"0%",x2:"100%",y1:"0%",y2:"0%"},[t.createVNode("stop",{offset:"0%","stop-color":e.strokeColor.from},null,8,["stop-color"]),t.createVNode("stop",{offset:"100%","stop-color":e.strokeColor.to},null,8,["stop-color"])],8,["id"])])):t.createCommentVNode("v-if",!0),t.createVNode("path",{class:"mg-progress-circlebg",d:"M 17 82 A 46 46 0 1 1 83 82",style:e.circlebgStyle},null,4),t.createVNode("path",{class:"mg-progress-circlestroke",d:"M 17 82 A 46 46 0 1 1 83 82",style:e.dbStrokeStyle},null,4)],8,["width","height"])),e.statusFormat||e.status?(t.openBlock(),t.createBlock("div",{key:0,class:"mg-progress-circle-status",style:e.statusStyle},[e.status?(t.openBlock(),t.createBlock("i",{key:0,class:"mg-icon-"+e.status},null,2)):(t.openBlock(),t.createBlock(t.Fragment,{key:1},[t.createTextVNode(t.toDisplayString(e.statusFormat(e.percentage)),1)],64))],4)):t.createCommentVNode("v-if",!0)],64)):t.createCommentVNode("v-if",!0)],6)}c.render=V;var w={name:"MgProgress",install(e,o={}){e.component(c.name,c)}};return w});