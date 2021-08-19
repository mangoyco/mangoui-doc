(function(t,r){typeof exports=="object"&&typeof module!="undefined"?module.exports=r(require("vue")):typeof define=="function"&&define.amd?define(["vue"],r):(t=typeof globalThis!="undefined"?globalThis:t||self,t.n=r(t.Vue))})(this,function(t){"use strict";const r=e=>{const o=document.getElementById(e)||document.documentElement,a=o.querySelectorAll("h1,h2,h3");return t.reactive({parentDom:o,parentIsRoot:o===document.documentElement,catalogs:Array.from(a),activeIndex:0})},p=(e,o)=>{(document.getElementById(e)||document).addEventListener("scroll",o)};var c=t.defineComponent({name:"MgCatalog",props:{targetId:{type:[String]},widthHash:{default:!1,type:Boolean},title:{type:[Boolean,String]},position:{default:"right",type:String,validator:e=>["left","right"].indexOf(e)!==-1}},setup(e){const o=r(e.targetId);function a(n=0){let i=o.catalogs.findIndex(d=>d.getBoundingClientRect().top>=n+12);return i<=0?0:i-1}let l=()=>{o.activeIndex=a()};if(!o.parentIsRoot){let n,i;l=()=>{i===void 0&&(i=o.parentDom.getBoundingClientRect().top),o.activeIndex=a(i),clearTimeout(n),n=setTimeout(()=>{i=void 0},800)}}l(),p(e.targetId,l);let s=n=>{o.parentDom.scrollTo({top:n.offsetTop-6,behavior:"smooth"})};return o.parentDom!==document.documentElement&&getComputedStyle(o.parentDom).position==="static"&&(s=n=>{const i=o.parentDom;i.scrollTo({top:n.offsetTop-i.offsetTop-6,behavior:"smooth"})}),{Data:o,goTop:s}}});const m={class:"mg-catalog"},g={key:0,class:"mg-catalog-title"};function f(e,o,a,l,s,h){return t.openBlock(),t.createBlock("div",m,[typeof e.title=="string"?(t.openBlock(),t.createBlock("div",g,t.toDisplayString(e.title),1)):t.createCommentVNode("v-if",!0),t.createVNode("ul",{class:["cata-"+e.position,e.title===!0?"mg-catatitle-line":""]},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.Data.catalogs,(n,i)=>(t.openBlock(),t.createBlock("li",{class:`log_for_${n.tagName}${e.Data.activeIndex==i?" active":""}`,key:i},[t.createVNode("a",{onClick:d=>e.goTop(n),href:e.widthHash?`#${n.innerText}`:null},t.toDisplayString(n.innerText),9,["onClick","href"])],2))),128))],2)])}c.render=f;var u={name:"MgCatalog",install(e,o={}){e.component(c.name,c)}};return u});
