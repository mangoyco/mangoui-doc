import{r as c,o as g,c as h,a as t,e,w as b,F as y,p as f,f as _,b as p,d as r,h as d,j as o}from"./app.1e7f04a4.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const w={data(){return{content:void 0,fullscreen:!1,fontSize:16,rotate:-24,fontStyle:"rgba(156, 162, 169, 0.3)",fontFamily:"Arial",blockWidth:328,blockHeight:138,xGap:0,yGap:48}}},l=v=>(f("data-v-5b707681"),v=v(),_(),v),q={id:"watermark-\u6C34\u5370",tabindex:"-1"},S=l(()=>t("a",{class:"header-anchor",href:"#watermark-\u6C34\u5370","aria-hidden":"true"},"#",-1)),G=p(" Watermark \u6C34\u5370 "),U=p(),W=l(()=>t("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),p(" \u57FA\u7840\u7528\u6CD5")],-1)),V={class:"demo-warp"},z=l(()=>t("div",{class:"div-withwatermark"},"\u6211\u662F\u4E2A 120px \u9AD8\u7684div",-1)),H=r(`<div class="detail-warp" data-v-5b707681><details open data-v-5b707681><summary data-v-5b707681>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-5b707681><pre class="language-vue" data-v-5b707681><code data-v-5b707681><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>mg-watermark</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
  <span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>div</span> <span class="token attr-name" data-v-5b707681>id</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>div<span class="token punctuation" data-v-5b707681>&quot;</span></span><span class="token punctuation" data-v-5b707681>&gt;</span></span>\u6211\u662F\u4E2A 120px \u9AD8\u7684div<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>div</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>

<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>style</span><span class="token punctuation" data-v-5b707681>&gt;</span></span><span class="token style" data-v-5b707681><span class="token language-css" data-v-5b707681>
<span class="token selector" data-v-5b707681>#div</span><span class="token punctuation" data-v-5b707681>{</span>
  <span class="token property" data-v-5b707681>border</span><span class="token punctuation" data-v-5b707681>:</span>1px solid #666<span class="token punctuation" data-v-5b707681>;</span>
  <span class="token property" data-v-5b707681>height</span><span class="token punctuation" data-v-5b707681>:</span>120px<span class="token punctuation" data-v-5b707681>;</span>
  <span class="token property" data-v-5b707681>text-align</span><span class="token punctuation" data-v-5b707681>:</span>center<span class="token punctuation" data-v-5b707681>;</span>
<span class="token punctuation" data-v-5b707681>}</span>
</span></span><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>style</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-5b707681><span class="line-number" data-v-5b707681>1</span><br data-v-5b707681><span class="line-number" data-v-5b707681>2</span><br data-v-5b707681><span class="line-number" data-v-5b707681>3</span><br data-v-5b707681><span class="line-number" data-v-5b707681>4</span><br data-v-5b707681><span class="line-number" data-v-5b707681>5</span><br data-v-5b707681><span class="line-number" data-v-5b707681>6</span><br data-v-5b707681><span class="line-number" data-v-5b707681>7</span><br data-v-5b707681><span class="line-number" data-v-5b707681>8</span><br data-v-5b707681><span class="line-number" data-v-5b707681>9</span><br data-v-5b707681><span class="line-number" data-v-5b707681>10</span><br data-v-5b707681><span class="line-number" data-v-5b707681>11</span><br data-v-5b707681></div></div></details></div><h3 id="help-yourself" tabindex="-1" data-v-5b707681><a class="header-anchor" href="#help-yourself" aria-hidden="true" data-v-5b707681>#</a> Help Yourself</h3><p data-v-5b707681>em...\u5C31\u4E0D\u8FC7\u591A\u89E3\u91CA\u4E86\uFF0C\u53EF\u4EE5\u81EA\u884C\u5C1D\u8BD5\u4E0B~\u{1F636}<br data-v-5b707681> \u{1F605}\u4E0D\u8FC7\u8FD9\u4E2Ademo\u561B...\u770B\u6765\u5DEE\u4E0D\u591A\u8BE5\u51C6\u5907 input \u7EC4\u4EF6\u4E86</p>`,3),F={class:"demo-warp"},I=l(()=>t("div",{class:"div-withwatermark",style:{height:"320px"}},"\u6211\u662F\u4E2A 320px \u9AD8\u7684div",-1)),C={class:"col"},j=p(" content: "),B=p(" fontSize: "),A=p(" fontStyle: "),D=p(" fontFamily: "),N=p(" rotate: "),O={class:"col"},M=p(" blockWidth: "),L=p(" blockHeight: "),P=p(" xGap: "),R=p(" yGap: "),T=p(" fullscreen "),E=r(`<div class="detail-warp" data-v-5b707681><details open data-v-5b707681><summary data-v-5b707681>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-5b707681><pre class="language-vue" data-v-5b707681><code data-v-5b707681><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>mg-watermark</span>
  <span class="token attr-name" data-v-5b707681>:content</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>content<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:fontSize</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>fontSize<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:fullscreen</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>fullscreen<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:rotate</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>rotate<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:fontStyle</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>fontStyle<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:fontFamily</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>fontFamily<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:blockWidth</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>blockWidth<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:blockHeight</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>blockHeight<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:xGap</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>xGap<span class="token punctuation" data-v-5b707681>&quot;</span></span>
  <span class="token attr-name" data-v-5b707681>:yGap</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>yGap<span class="token punctuation" data-v-5b707681>&quot;</span></span>
<span class="token punctuation" data-v-5b707681>&gt;</span></span>
  <span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>div</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>\u6211\u662F\u4E2A 320px \u9AD8\u7684div<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>div</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>script</span><span class="token punctuation" data-v-5b707681>&gt;</span></span><span class="token script" data-v-5b707681><span class="token language-javascript" data-v-5b707681>
  <span class="token keyword" data-v-5b707681>export</span> <span class="token keyword" data-v-5b707681>default</span><span class="token punctuation" data-v-5b707681>{</span>
    <span class="token function" data-v-5b707681>data</span><span class="token punctuation" data-v-5b707681>(</span><span class="token punctuation" data-v-5b707681>)</span><span class="token punctuation" data-v-5b707681>{</span>
      <span class="token keyword" data-v-5b707681>return</span><span class="token punctuation" data-v-5b707681>{</span>
        <span class="token literal-property property" data-v-5b707681>content</span><span class="token operator" data-v-5b707681>:</span><span class="token keyword" data-v-5b707681>undefined</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>fullscreen</span><span class="token operator" data-v-5b707681>:</span> <span class="token boolean" data-v-5b707681>false</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>fontSize</span><span class="token operator" data-v-5b707681>:</span> <span class="token number" data-v-5b707681>16</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>rotate</span><span class="token operator" data-v-5b707681>:</span> <span class="token operator" data-v-5b707681>-</span><span class="token number" data-v-5b707681>24</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>fontStyle</span><span class="token operator" data-v-5b707681>:</span> <span class="token string" data-v-5b707681>&quot;rgba(156, 162, 169, 0.3)&quot;</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>fontFamily</span><span class="token operator" data-v-5b707681>:</span> <span class="token string" data-v-5b707681>&#39;Arial&#39;</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>blockWidth</span><span class="token operator" data-v-5b707681>:</span> <span class="token number" data-v-5b707681>328</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>blockHeight</span><span class="token operator" data-v-5b707681>:</span> <span class="token number" data-v-5b707681>138</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>xGap</span><span class="token operator" data-v-5b707681>:</span> <span class="token number" data-v-5b707681>0</span><span class="token punctuation" data-v-5b707681>,</span>
        <span class="token literal-property property" data-v-5b707681>yGap</span><span class="token operator" data-v-5b707681>:</span> <span class="token number" data-v-5b707681>48</span><span class="token punctuation" data-v-5b707681>,</span>
      <span class="token punctuation" data-v-5b707681>}</span>
    <span class="token punctuation" data-v-5b707681>}</span><span class="token punctuation" data-v-5b707681>,</span>
  <span class="token punctuation" data-v-5b707681>}</span>
</span></span><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>script</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>

</code></pre><div class="line-numbers" data-v-5b707681><span class="line-number" data-v-5b707681>1</span><br data-v-5b707681><span class="line-number" data-v-5b707681>2</span><br data-v-5b707681><span class="line-number" data-v-5b707681>3</span><br data-v-5b707681><span class="line-number" data-v-5b707681>4</span><br data-v-5b707681><span class="line-number" data-v-5b707681>5</span><br data-v-5b707681><span class="line-number" data-v-5b707681>6</span><br data-v-5b707681><span class="line-number" data-v-5b707681>7</span><br data-v-5b707681><span class="line-number" data-v-5b707681>8</span><br data-v-5b707681><span class="line-number" data-v-5b707681>9</span><br data-v-5b707681><span class="line-number" data-v-5b707681>10</span><br data-v-5b707681><span class="line-number" data-v-5b707681>11</span><br data-v-5b707681><span class="line-number" data-v-5b707681>12</span><br data-v-5b707681><span class="line-number" data-v-5b707681>13</span><br data-v-5b707681><span class="line-number" data-v-5b707681>14</span><br data-v-5b707681><span class="line-number" data-v-5b707681>15</span><br data-v-5b707681><span class="line-number" data-v-5b707681>16</span><br data-v-5b707681><span class="line-number" data-v-5b707681>17</span><br data-v-5b707681><span class="line-number" data-v-5b707681>18</span><br data-v-5b707681><span class="line-number" data-v-5b707681>19</span><br data-v-5b707681><span class="line-number" data-v-5b707681>20</span><br data-v-5b707681><span class="line-number" data-v-5b707681>21</span><br data-v-5b707681><span class="line-number" data-v-5b707681>22</span><br data-v-5b707681><span class="line-number" data-v-5b707681>23</span><br data-v-5b707681><span class="line-number" data-v-5b707681>24</span><br data-v-5b707681><span class="line-number" data-v-5b707681>25</span><br data-v-5b707681><span class="line-number" data-v-5b707681>26</span><br data-v-5b707681><span class="line-number" data-v-5b707681>27</span><br data-v-5b707681><span class="line-number" data-v-5b707681>28</span><br data-v-5b707681><span class="line-number" data-v-5b707681>29</span><br data-v-5b707681><span class="line-number" data-v-5b707681>30</span><br data-v-5b707681><span class="line-number" data-v-5b707681>31</span><br data-v-5b707681><span class="line-number" data-v-5b707681>32</span><br data-v-5b707681><span class="line-number" data-v-5b707681>33</span><br data-v-5b707681></div></div></details></div><p data-v-5b707681>\u5168\u5C4F\u4F7F\u7528\u65F6\u53EF\u4EE5\u4E0D\u5FC5\u8BBE\u7F6E <code data-v-5b707681>slot</code></p>`,2),Y=l(()=>t("p",null,[t("span",{mini:""},[p("\u60A8\u53EF\u80FD\u53D1\u73B0\u4E86\u5168\u5C4F\u7684\u65F6\u5019\u597D\u50CF\u6CA1\u6709...\u90A3\u4E48\u7684\u5168\u5C4F\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728\u8FD9\u4E2A\u9875\u9762\u4E2D\uFF0C \u9876\u90E8\u680F\u548C\u5DE6\u4FA7\u5BFC\u822A\u680F\u662F\u6709\u80CC\u666F\u989C\u8272\u7684\uFF0C\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E"),t("code",null,"zIndex"),p(" \u5C5E\u6027\u6765\u89E3\u51B3~\u{1F4CC}")])],-1)),J=r(`<div class="language-vue ext-vue line-numbers-mode" data-v-5b707681><pre class="language-vue" data-v-5b707681><code data-v-5b707681><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>mg-watermark</span> <span class="token attr-name" data-v-5b707681>:content</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>content<span class="token punctuation" data-v-5b707681>&quot;</span></span> <span class="token attr-name" data-v-5b707681>:fullscreen</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>true<span class="token punctuation" data-v-5b707681>&quot;</span></span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-5b707681><span class="line-number" data-v-5b707681>1</span><br data-v-5b707681><span class="line-number" data-v-5b707681>2</span><br data-v-5b707681></div></div><h3 id="\u4F7F\u7528\u56FE\u7247" tabindex="-1" data-v-5b707681><a class="header-anchor" href="#\u4F7F\u7528\u56FE\u7247" aria-hidden="true" data-v-5b707681>#</a> \u4F7F\u7528\u56FE\u7247</h3><p data-v-5b707681>\u4F20\u5165 <code data-v-5b707681>imgUrl</code> \u65F6\u4F1A\u5FFD\u7565\u6587\u672C\u76F8\u5173\u7684\u5C5E\u6027\u4EE5\u53CA <code data-v-5b707681>rotate</code> \u5C5E\u6027 \u2757</p>`,3),K={class:"demo-warp"},Q=l(()=>t("div",{class:"div-withwatermark",style:{height:"200px"}},"\u6211\u662F\u4E2A 200px \u9AD8\u7684div",-1)),X=r(`<div class="detail-warp" data-v-5b707681><details open data-v-5b707681><summary data-v-5b707681>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-5b707681><pre class="language-vue" data-v-5b707681><code data-v-5b707681><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>mg-watermark</span>
  <span class="token attr-name" data-v-5b707681>:imgUrl</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span><span class="token punctuation" data-v-5b707681>&#39;</span>/mango.png<span class="token punctuation" data-v-5b707681>&#39;</span><span class="token punctuation" data-v-5b707681>&quot;</span></span>
<span class="token punctuation" data-v-5b707681>&gt;</span></span>
  <span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>div</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>\u6211\u662F\u4E2A 200px \u9AD8\u7684div<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>div</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
<span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-5b707681><span class="line-number" data-v-5b707681>1</span><br data-v-5b707681><span class="line-number" data-v-5b707681>2</span><br data-v-5b707681><span class="line-number" data-v-5b707681>3</span><br data-v-5b707681><span class="line-number" data-v-5b707681>4</span><br data-v-5b707681><span class="line-number" data-v-5b707681>5</span><br data-v-5b707681></div></div></details></div><h3 id="\u53E6\u4E00\u79CD\u65B9\u5F0F" tabindex="-1" data-v-5b707681><a class="header-anchor" href="#\u53E6\u4E00\u79CD\u65B9\u5F0F" aria-hidden="true" data-v-5b707681>#</a> \u53E6\u4E00\u79CD\u65B9\u5F0F</h3><p data-v-5b707681>\u573A\u666F\uFF1A \u6211\u53EA\u9700\u8981\u4E00\u5F20\u56FE\u7247\uFF0C\u5177\u4F53\u600E\u4E48\u6392\u7248\u6211\u81EA\u5DF1\u6765</p><div class="detail-warp" data-v-5b707681><details data-v-5b707681><summary data-v-5b707681>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-5b707681><pre class="language-vue" data-v-5b707681><code data-v-5b707681><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;</span>script</span> <span class="token attr-name" data-v-5b707681>lang</span><span class="token attr-value" data-v-5b707681><span class="token punctuation attr-equals" data-v-5b707681>=</span><span class="token punctuation" data-v-5b707681>&quot;</span>ts<span class="token punctuation" data-v-5b707681>&quot;</span></span><span class="token punctuation" data-v-5b707681>&gt;</span></span><span class="token script" data-v-5b707681><span class="token language-javascript" data-v-5b707681>
<span class="token keyword" data-v-5b707681>import</span> <span class="token punctuation" data-v-5b707681>{</span> createWatermarkDataURL <span class="token punctuation" data-v-5b707681>}</span> <span class="token keyword" data-v-5b707681>from</span> <span class="token string" data-v-5b707681>&#39;mango-ui-vue/packages/water-mark&#39;</span>
<span class="token comment" data-v-5b707681>// \u5982\u679C\u5DF2\u7ECF\u4F7F\u7528\u5168\u91CF\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5 from &#39;mango-ui-vue&#39;</span>

<span class="token keyword" data-v-5b707681>export</span> <span class="token keyword" data-v-5b707681>default</span><span class="token punctuation" data-v-5b707681>{</span>
  <span class="token function" data-v-5b707681>setup</span><span class="token punctuation" data-v-5b707681>(</span><span class="token punctuation" data-v-5b707681>)</span><span class="token punctuation" data-v-5b707681>{</span>
    <span class="token keyword" data-v-5b707681>const</span> <span class="token literal-property property" data-v-5b707681>someConfig</span><span class="token operator" data-v-5b707681>:</span> waterMarkParams <span class="token operator" data-v-5b707681>=</span> <span class="token punctuation" data-v-5b707681>{</span><span class="token punctuation" data-v-5b707681>}</span>
    <span class="token function" data-v-5b707681>createWatermarkDataURL</span><span class="token punctuation" data-v-5b707681>(</span>someConfig<span class="token punctuation" data-v-5b707681>)</span><span class="token punctuation" data-v-5b707681>.</span><span class="token function" data-v-5b707681>then</span><span class="token punctuation" data-v-5b707681>(</span><span class="token parameter" data-v-5b707681>dataUrl</span><span class="token operator" data-v-5b707681>=&gt;</span><span class="token punctuation" data-v-5b707681>{</span>
      document<span class="token punctuation" data-v-5b707681>.</span><span class="token function" data-v-5b707681>querySelector</span><span class="token punctuation" data-v-5b707681>(</span><span class="token string" data-v-5b707681>&#39;#myDom&#39;</span><span class="token punctuation" data-v-5b707681>)</span><span class="token punctuation" data-v-5b707681>.</span>style<span class="token punctuation" data-v-5b707681>.</span>backgroundImage <span class="token operator" data-v-5b707681>=</span> <span class="token template-string" data-v-5b707681><span class="token template-punctuation string" data-v-5b707681>\`</span><span class="token string" data-v-5b707681>url(</span><span class="token interpolation" data-v-5b707681><span class="token interpolation-punctuation punctuation" data-v-5b707681>\${</span>dataUrl<span class="token interpolation-punctuation punctuation" data-v-5b707681>}</span></span><span class="token string" data-v-5b707681>)</span><span class="token template-punctuation string" data-v-5b707681>\`</span></span>
    <span class="token punctuation" data-v-5b707681>}</span><span class="token punctuation" data-v-5b707681>)</span>
    <span class="token keyword" data-v-5b707681>return</span> <span class="token punctuation" data-v-5b707681>{</span><span class="token punctuation" data-v-5b707681>}</span>
  <span class="token punctuation" data-v-5b707681>}</span>
<span class="token punctuation" data-v-5b707681>}</span>
</span></span><span class="token tag" data-v-5b707681><span class="token tag" data-v-5b707681><span class="token punctuation" data-v-5b707681>&lt;/</span>script</span><span class="token punctuation" data-v-5b707681>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-5b707681><span class="line-number" data-v-5b707681>1</span><br data-v-5b707681><span class="line-number" data-v-5b707681>2</span><br data-v-5b707681><span class="line-number" data-v-5b707681>3</span><br data-v-5b707681><span class="line-number" data-v-5b707681>4</span><br data-v-5b707681><span class="line-number" data-v-5b707681>5</span><br data-v-5b707681><span class="line-number" data-v-5b707681>6</span><br data-v-5b707681><span class="line-number" data-v-5b707681>7</span><br data-v-5b707681><span class="line-number" data-v-5b707681>8</span><br data-v-5b707681><span class="line-number" data-v-5b707681>9</span><br data-v-5b707681><span class="line-number" data-v-5b707681>10</span><br data-v-5b707681><span class="line-number" data-v-5b707681>11</span><br data-v-5b707681><span class="line-number" data-v-5b707681>12</span><br data-v-5b707681><span class="line-number" data-v-5b707681>13</span><br data-v-5b707681><span class="line-number" data-v-5b707681>14</span><br data-v-5b707681></div></div><div class="language-typescript ext-ts line-numbers-mode" data-v-5b707681><pre class="language-typescript" data-v-5b707681><code data-v-5b707681><span class="token keyword" data-v-5b707681>interface</span> <span class="token class-name" data-v-5b707681>waterMarkParams</span> <span class="token punctuation" data-v-5b707681>{</span>
  content<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>string</span>
  fontSize<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  fontStyle<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>string</span>
  fontFamily<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>string</span>
  rotate<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  blockWidth<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  blockHeight<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  xGap<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  yGap<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  imgUrl<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>string</span>
  imgOpacity<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  imgWidth<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
  imgHeight<span class="token operator" data-v-5b707681>?</span><span class="token operator" data-v-5b707681>:</span> <span class="token builtin" data-v-5b707681>number</span>
<span class="token punctuation" data-v-5b707681>}</span>
</code></pre><div class="line-numbers" data-v-5b707681><span class="line-number" data-v-5b707681>1</span><br data-v-5b707681><span class="line-number" data-v-5b707681>2</span><br data-v-5b707681><span class="line-number" data-v-5b707681>3</span><br data-v-5b707681><span class="line-number" data-v-5b707681>4</span><br data-v-5b707681><span class="line-number" data-v-5b707681>5</span><br data-v-5b707681><span class="line-number" data-v-5b707681>6</span><br data-v-5b707681><span class="line-number" data-v-5b707681>7</span><br data-v-5b707681><span class="line-number" data-v-5b707681>8</span><br data-v-5b707681><span class="line-number" data-v-5b707681>9</span><br data-v-5b707681><span class="line-number" data-v-5b707681>10</span><br data-v-5b707681><span class="line-number" data-v-5b707681>11</span><br data-v-5b707681><span class="line-number" data-v-5b707681>12</span><br data-v-5b707681><span class="line-number" data-v-5b707681>13</span><br data-v-5b707681><span class="line-number" data-v-5b707681>14</span><br data-v-5b707681><span class="line-number" data-v-5b707681>15</span><br data-v-5b707681></div></div></details></div><details class="custom-container details" data-v-5b707681><summary data-v-5b707681>\u4E00\u4E9B\u8D58\u8FF0</summary><p data-v-5b707681>\u4E0A\u9762\u8FD9\u79CD\u65B9\u5F0F\u4E4D\u770B\u4E0A\u53BB\u6709\u4E00\u4E9B\u9E21\u808B\uFF0C\u5176\u5B9E\u5F00\u53D1\u8FD9\u4E2A\u65B9\u6CD5\u7684\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u5E94\u5BF9\u4E00\u4E9B\u6781\u7AEF\u60C5\u51B5<br data-v-5b707681> \u5982\u7279\u6B8A\u6392\u7248\u7684\u6C34\u5370\uFF0C\u6709\u5B89\u5168\u6027\u8981\u6C42\u7684\u573A\u666F</p><p data-v-5b707681>\u5173\u4E8E\u5B89\u5168\u6027\uFF0C<code data-v-5b707681>watermark</code> \u672C\u8EAB\u662F\u4F7F\u7528 dom \u5B9E\u73B0\u7684\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u751F\u6210\u7684\u6C34\u5370\u53EF\u4EE5\u88AB\u8F7B\u6613\u7684\u5220\u9664\uFF0C\u56E0\u6B64\u5728\u6709\u4E00\u4E9B\u5B89\u5168\u6027\u8981\u6C42 <strong data-v-5b707681>\u76F8\u5BF9</strong> \u8F83\u9AD8\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u6765\u4FBF\u5229\u7684\u751F\u6210\u80CC\u666F\u56FE\uFF0C \u7136\u540E\u9488\u5BF9\u81EA\u5DF1\u7684 dom \u8FDB\u884C\u4E00\u4E9B\u5B89\u5168\u7684\uFF0C\u6216\u8005\u8BF4\u9632\u5220\u9664\u7684\u63AA\u65BD</p></details><h3 id="watermark-attributes" tabindex="-1" data-v-5b707681><a class="header-anchor" href="#watermark-attributes" aria-hidden="true" data-v-5b707681>#</a> Watermark Attributes</h3><table class="attr-table" data-v-5b707681><thead data-v-5b707681><tr data-v-5b707681><th data-v-5b707681>\u53C2\u6570</th><th data-v-5b707681>\u8BF4\u660E</th><th data-v-5b707681>\u7C7B\u578B</th><th data-v-5b707681>\u53EF\u9009\u503C</th><th data-v-5b707681>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-5b707681><tr data-v-5b707681><td data-v-5b707681>content</td><td data-v-5b707681>\u6587\u672C</td><td data-v-5b707681>string</td><td data-v-5b707681>-</td><td data-v-5b707681>mango-ui\u{1F601}</td></tr><tr data-v-5b707681><td data-v-5b707681>fullscreen</td><td data-v-5b707681>\u662F\u5426\u5168\u5C4F</td><td data-v-5b707681>boolean</td><td data-v-5b707681>-</td><td data-v-5b707681>false</td></tr><tr data-v-5b707681><td data-v-5b707681>fontSize</td><td data-v-5b707681>\u5B57\u4F53\u5927\u5C0F\uFF08px\uFF09</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>16</td></tr><tr data-v-5b707681><td data-v-5b707681>fontStyle</td><td data-v-5b707681>\u5B57\u4F53\u6837\u5F0F</td><td data-v-5b707681>string</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>rgba(156, 162, 169, 0.3)</td></tr><tr data-v-5b707681><td data-v-5b707681>fontFamily</td><td data-v-5b707681>\u5B57\u4F53</td><td data-v-5b707681>string</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>Arial</td></tr><tr data-v-5b707681><td data-v-5b707681>rotate</td><td data-v-5b707681>\u65CB\u8F6C\u89D2\u5EA6</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>-24</td></tr><tr data-v-5b707681><td data-v-5b707681>blockWidth</td><td data-v-5b707681>\u4E00\u4E2A\u80CC\u666F\u5757\u7684\u5BBD\u5EA6(px)</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>328</td></tr><tr data-v-5b707681><td data-v-5b707681>blockHeight</td><td data-v-5b707681>\u4E00\u4E2A\u80CC\u666F\u5757\u7684\u9AD8\u5EA6(px)</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>138</td></tr><tr data-v-5b707681><td data-v-5b707681>xGap</td><td data-v-5b707681>\u56FE\u7247\u6216\u6587\u5B57x\u8F74\u504F\u79FB\u91CF</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>0</td></tr><tr data-v-5b707681><td data-v-5b707681>yGap</td><td data-v-5b707681>\u56FE\u7247\u6216\u6587\u5B57y\u8F74\u504F\u79FB\u91CF</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>48</td></tr><tr data-v-5b707681><td data-v-5b707681>imgUrl</td><td data-v-5b707681>\u56FE\u7247\u8DEF\u5F84</td><td data-v-5b707681>string</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>-</td></tr><tr data-v-5b707681><td data-v-5b707681>imgOpacity</td><td data-v-5b707681>\u56FE\u7247\u900F\u660E\u5EA6</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>0.3</td></tr><tr data-v-5b707681><td data-v-5b707681>imgWidth</td><td data-v-5b707681>\u56FE\u7247\u5BBD\u5EA6\uFF08\u7565\u7F29\u56FE\u7247\u65F6\u4F7F\u7528\uFF09</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>-</td></tr><tr data-v-5b707681><td data-v-5b707681>imgHeight</td><td data-v-5b707681>\u56FE\u7247\u9AD8\u5EA6\uFF08\u7565\u7F29\u56FE\u7247\u65F6\u4F7F\u7528\uFF09</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>-</td></tr><tr data-v-5b707681><td data-v-5b707681>zIndex</td><td data-v-5b707681>\u6C34\u5370\u7684zIndex</td><td data-v-5b707681>number</td><td data-v-5b707681>\u2014</td><td data-v-5b707681>-1</td></tr></tbody></table>`,7);function Z(v,n,$,aa,a,ta){const k=c("Badge"),u=c("mg-watermark"),i=c("ClientOnly"),m=c("mg-switch");return g(),h(y,null,[t("h1",q,[S,G,e(k,{text:"pass",type:"tip"}),U,e(k,{text:"0.0.13+"})]),W,e(i,null,{default:b(()=>[t("div",V,[e(u,null,{default:b(()=>[z]),_:1})])]),_:1}),H,e(i,null,{default:b(()=>[t("div",F,[e(u,{content:a.content,fontSize:a.fontSize,fullscreen:a.fullscreen,rotate:a.rotate,fontStyle:a.fontStyle,fontFamily:a.fontFamily,blockWidth:a.blockWidth,blockHeight:a.blockHeight,xGap:a.xGap,yGap:a.yGap},{default:b(()=>[I]),_:1},8,["content","fontSize","fullscreen","rotate","fontStyle","fontFamily","blockWidth","blockHeight","xGap","yGap"]),t("div",C,[j,d(t("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>a.content=s)},null,512),[[o,a.content]]),B,d(t("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>a.fontSize=s)},null,512),[[o,a.fontSize]]),A,d(t("input",{"onUpdate:modelValue":n[2]||(n[2]=s=>a.fontStyle=s)},null,512),[[o,a.fontStyle]]),D,d(t("input",{"onUpdate:modelValue":n[3]||(n[3]=s=>a.fontFamily=s)},null,512),[[o,a.fontFamily]]),N,d(t("input",{"onUpdate:modelValue":n[4]||(n[4]=s=>a.rotate=s)},null,512),[[o,a.rotate]])]),t("div",O,[M,d(t("input",{"onUpdate:modelValue":n[5]||(n[5]=s=>a.blockWidth=s)},null,512),[[o,a.blockWidth]]),L,d(t("input",{"onUpdate:modelValue":n[6]||(n[6]=s=>a.blockHeight=s)},null,512),[[o,a.blockHeight]]),P,d(t("input",{"onUpdate:modelValue":n[7]||(n[7]=s=>a.xGap=s)},null,512),[[o,a.xGap]]),R,d(t("input",{"onUpdate:modelValue":n[8]||(n[8]=s=>a.yGap=s)},null,512),[[o,a.yGap]]),T,e(m,{modelValue:a.fullscreen,"onUpdate:modelValue":n[9]||(n[9]=s=>a.fullscreen=s)},null,8,["modelValue"])])])]),_:1}),E,Y,J,t("div",K,[e(i,null,{default:b(()=>[e(u,{imgUrl:"/mangoui-doc/img/mango.png",xGap:0,yGap:0},{default:b(()=>[Q]),_:1},8,["imgUrl"])]),_:1})]),X],64)}var pa=x(w,[["render",Z],["__scopeId","data-v-5b707681"]]);export{pa as default};
