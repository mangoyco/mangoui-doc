import{r,o as m,c as b,a as e,e as o,w as u,h as d,i as p,F as g,p as h,f as y,b as s,d as f}from"./app.4baef249.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const x={data(){return{content:void 0,fullscreen:!1,fontSize:16,rotate:-24,fontStyle:"rgba(156, 162, 169, 0.3)",fontFamily:"Arial",blockWidth:328,blockHeight:138,xGap:0,yGap:48}}},l=v=>(h("data-v-efeda7a2"),v=v(),y(),v),w={id:"watermark-\u6C34\u5370",tabindex:"-1"},q=l(()=>e("a",{class:"header-anchor",href:"#watermark-\u6C34\u5370","aria-hidden":"true"},"#",-1)),S=s(" Watermark \u6C34\u5370 "),G=s(),U=l(()=>e("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),s(" \u57FA\u7840\u7528\u6CD5")],-1)),W={class:"demo-warp"},V=l(()=>e("div",{class:"div-withwatermark"},"\u6211\u662F\u4E2A 120px \u9AD8\u7684div",-1)),z=f(`<div class="detail-warp" data-v-efeda7a2><details open data-v-efeda7a2><summary data-v-efeda7a2>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-efeda7a2><pre class="language-vue" data-v-efeda7a2><code data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>mg-watermark</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
  <span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>div</span> <span class="token attr-name" data-v-efeda7a2>id</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>div<span class="token punctuation" data-v-efeda7a2>&quot;</span></span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>\u6211\u662F\u4E2A 120px \u9AD8\u7684div<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>div</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>

<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>style</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span><span class="token style" data-v-efeda7a2><span class="token language-css" data-v-efeda7a2>
<span class="token selector" data-v-efeda7a2>#div</span><span class="token punctuation" data-v-efeda7a2>{</span>
  <span class="token property" data-v-efeda7a2>border</span><span class="token punctuation" data-v-efeda7a2>:</span>1px solid #666<span class="token punctuation" data-v-efeda7a2>;</span>
  <span class="token property" data-v-efeda7a2>height</span><span class="token punctuation" data-v-efeda7a2>:</span>120px<span class="token punctuation" data-v-efeda7a2>;</span>
  <span class="token property" data-v-efeda7a2>text-align</span><span class="token punctuation" data-v-efeda7a2>:</span>center<span class="token punctuation" data-v-efeda7a2>;</span>
<span class="token punctuation" data-v-efeda7a2>}</span>
</span></span><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>style</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-efeda7a2><span class="line-number" data-v-efeda7a2>1</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>2</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>3</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>4</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>5</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>6</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>7</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>8</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>9</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>10</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>11</span><br data-v-efeda7a2></div></div></details></div><h3 id="help-yourself" tabindex="-1" data-v-efeda7a2><a class="header-anchor" href="#help-yourself" aria-hidden="true" data-v-efeda7a2>#</a> Help Yourself</h3><p data-v-efeda7a2>em...\u5C31\u4E0D\u8FC7\u591A\u89E3\u91CA\u4E86\uFF0C\u53EF\u4EE5\u81EA\u884C\u5C1D\u8BD5\u4E0B~\u{1F636}<br data-v-efeda7a2> \u{1F605}\u4E0D\u8FC7\u8FD9\u4E2Ademo\u561B...\u770B\u6765\u5DEE\u4E0D\u591A\u8BE5\u51C6\u5907 input \u7EC4\u4EF6\u4E86</p>`,3),H={class:"demo-warp"},F=l(()=>e("div",{class:"div-withwatermark",style:{height:"320px"}},"\u6211\u662F\u4E2A 320px \u9AD8\u7684div",-1)),I={class:"col"},B=s(" content: "),j=s(" fontSize: "),A=s(" fontStyle: "),C=s(" fontFamily: "),D=s(" rotate: "),N={class:"col"},M=s(" blockWidth: "),L=s(" blockHeight: "),O=s(" xGap: "),P=s(" yGap: "),R=s(" fullscreen "),T=f(`<div class="detail-warp" data-v-efeda7a2><details open data-v-efeda7a2><summary data-v-efeda7a2>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-efeda7a2><pre class="language-vue" data-v-efeda7a2><code data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>mg-watermark</span>
  <span class="token attr-name" data-v-efeda7a2>:content</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>content<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:fontSize</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>fontSize<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:fullscreen</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>fullscreen<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:rotate</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>rotate<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:fontStyle</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>fontStyle<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:fontFamily</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>fontFamily<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:blockWidth</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>blockWidth<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:blockHeight</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>blockHeight<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:xGap</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>xGap<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
  <span class="token attr-name" data-v-efeda7a2>:yGap</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>yGap<span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
<span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
  <span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>div</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>\u6211\u662F\u4E2A 320px \u9AD8\u7684div<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>div</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>script</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span><span class="token script" data-v-efeda7a2><span class="token language-javascript" data-v-efeda7a2>
  <span class="token keyword" data-v-efeda7a2>export</span> <span class="token keyword" data-v-efeda7a2>default</span><span class="token punctuation" data-v-efeda7a2>{</span>
    <span class="token function" data-v-efeda7a2>data</span><span class="token punctuation" data-v-efeda7a2>(</span><span class="token punctuation" data-v-efeda7a2>)</span><span class="token punctuation" data-v-efeda7a2>{</span>
      <span class="token keyword" data-v-efeda7a2>return</span><span class="token punctuation" data-v-efeda7a2>{</span>
        <span class="token literal-property property" data-v-efeda7a2>content</span><span class="token operator" data-v-efeda7a2>:</span><span class="token keyword" data-v-efeda7a2>undefined</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>fullscreen</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token boolean" data-v-efeda7a2>false</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>fontSize</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token number" data-v-efeda7a2>16</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>rotate</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token operator" data-v-efeda7a2>-</span><span class="token number" data-v-efeda7a2>24</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>fontStyle</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token string" data-v-efeda7a2>&quot;rgba(156, 162, 169, 0.3)&quot;</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>fontFamily</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token string" data-v-efeda7a2>&#39;Arial&#39;</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>blockWidth</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token number" data-v-efeda7a2>328</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>blockHeight</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token number" data-v-efeda7a2>138</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>xGap</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token number" data-v-efeda7a2>0</span><span class="token punctuation" data-v-efeda7a2>,</span>
        <span class="token literal-property property" data-v-efeda7a2>yGap</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token number" data-v-efeda7a2>48</span><span class="token punctuation" data-v-efeda7a2>,</span>
      <span class="token punctuation" data-v-efeda7a2>}</span>
    <span class="token punctuation" data-v-efeda7a2>}</span><span class="token punctuation" data-v-efeda7a2>,</span>
  <span class="token punctuation" data-v-efeda7a2>}</span>
</span></span><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>script</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>

</code></pre><div class="line-numbers" data-v-efeda7a2><span class="line-number" data-v-efeda7a2>1</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>2</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>3</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>4</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>5</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>6</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>7</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>8</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>9</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>10</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>11</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>12</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>13</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>14</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>15</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>16</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>17</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>18</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>19</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>20</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>21</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>22</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>23</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>24</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>25</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>26</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>27</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>28</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>29</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>30</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>31</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>32</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>33</span><br data-v-efeda7a2></div></div></details></div><p data-v-efeda7a2>\u5168\u5C4F\u4F7F\u7528\u65F6\u53EF\u4EE5\u4E0D\u5FC5\u8BBE\u7F6E <code data-v-efeda7a2>slot</code></p>`,2),E=l(()=>e("p",null,[e("span",{mini:""},[s("\u60A8\u53EF\u80FD\u53D1\u73B0\u4E86\u5168\u5C4F\u7684\u65F6\u5019\u597D\u50CF\u6CA1\u6709...\u90A3\u4E48\u7684\u5168\u5C4F\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728\u8FD9\u4E2A\u9875\u9762\u4E2D\uFF0C \u9876\u90E8\u680F\u548C\u5DE6\u4FA7\u5BFC\u822A\u680F\u662F\u6709\u80CC\u666F\u989C\u8272\u7684\uFF0C\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E"),e("code",null,"zIndex"),s(" \u5C5E\u6027\u6765\u89E3\u51B3~\u{1F4CC}")])],-1)),Y=f(`<div class="language-vue ext-vue line-numbers-mode" data-v-efeda7a2><pre class="language-vue" data-v-efeda7a2><code data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>mg-watermark</span> <span class="token attr-name" data-v-efeda7a2>:content</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>content<span class="token punctuation" data-v-efeda7a2>&quot;</span></span> <span class="token attr-name" data-v-efeda7a2>:fullscreen</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>true<span class="token punctuation" data-v-efeda7a2>&quot;</span></span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-efeda7a2><span class="line-number" data-v-efeda7a2>1</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>2</span><br data-v-efeda7a2></div></div><h3 id="\u4F7F\u7528\u56FE\u7247" tabindex="-1" data-v-efeda7a2><a class="header-anchor" href="#\u4F7F\u7528\u56FE\u7247" aria-hidden="true" data-v-efeda7a2>#</a> \u4F7F\u7528\u56FE\u7247</h3><p data-v-efeda7a2>\u4F20\u5165 <code data-v-efeda7a2>imgUrl</code> \u65F6\u4F1A\u5FFD\u7565\u6587\u672C\u76F8\u5173\u7684\u5C5E\u6027\u4EE5\u53CA <code data-v-efeda7a2>rotate</code> \u5C5E\u6027 \u2757</p>`,3),J={class:"demo-warp"},K=l(()=>e("div",{class:"div-withwatermark",style:{height:"200px"}},"\u6211\u662F\u4E2A 200px \u9AD8\u7684div",-1)),Q=f(`<div class="detail-warp" data-v-efeda7a2><details open data-v-efeda7a2><summary data-v-efeda7a2>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-efeda7a2><pre class="language-vue" data-v-efeda7a2><code data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>mg-watermark</span>
  <span class="token attr-name" data-v-efeda7a2>:imgUrl</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span><span class="token punctuation" data-v-efeda7a2>&#39;</span>/mango.png<span class="token punctuation" data-v-efeda7a2>&#39;</span><span class="token punctuation" data-v-efeda7a2>&quot;</span></span>
<span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
  <span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>div</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>\u6211\u662F\u4E2A 200px \u9AD8\u7684div<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>div</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
<span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>mg-watermark</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-efeda7a2><span class="line-number" data-v-efeda7a2>1</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>2</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>3</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>4</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>5</span><br data-v-efeda7a2></div></div></details></div><h3 id="\u53E6\u4E00\u79CD\u65B9\u5F0F" tabindex="-1" data-v-efeda7a2><a class="header-anchor" href="#\u53E6\u4E00\u79CD\u65B9\u5F0F" aria-hidden="true" data-v-efeda7a2>#</a> \u53E6\u4E00\u79CD\u65B9\u5F0F</h3><p data-v-efeda7a2>\u573A\u666F\uFF1A \u6211\u53EA\u9700\u8981\u4E00\u5F20\u56FE\u7247\uFF0C\u5177\u4F53\u600E\u4E48\u6392\u7248\u6211\u81EA\u5DF1\u6765</p><div class="detail-warp" data-v-efeda7a2><details data-v-efeda7a2><summary data-v-efeda7a2>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode" data-v-efeda7a2><pre class="language-vue" data-v-efeda7a2><code data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;</span>script</span> <span class="token attr-name" data-v-efeda7a2>lang</span><span class="token attr-value" data-v-efeda7a2><span class="token punctuation attr-equals" data-v-efeda7a2>=</span><span class="token punctuation" data-v-efeda7a2>&quot;</span>ts<span class="token punctuation" data-v-efeda7a2>&quot;</span></span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span><span class="token script" data-v-efeda7a2><span class="token language-javascript" data-v-efeda7a2>
<span class="token keyword" data-v-efeda7a2>import</span> <span class="token punctuation" data-v-efeda7a2>{</span> createWatermarkDataURL <span class="token punctuation" data-v-efeda7a2>}</span> <span class="token keyword" data-v-efeda7a2>from</span> <span class="token string" data-v-efeda7a2>&#39;mango-ui-vue/packages/water-mark&#39;</span>
<span class="token comment" data-v-efeda7a2>// \u5982\u679C\u5DF2\u7ECF\u4F7F\u7528\u5168\u91CF\u7EC4\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5 from &#39;mango-ui-vue&#39;</span>

<span class="token keyword" data-v-efeda7a2>export</span> <span class="token keyword" data-v-efeda7a2>default</span><span class="token punctuation" data-v-efeda7a2>{</span>
  <span class="token function" data-v-efeda7a2>setup</span><span class="token punctuation" data-v-efeda7a2>(</span><span class="token punctuation" data-v-efeda7a2>)</span><span class="token punctuation" data-v-efeda7a2>{</span>
    <span class="token keyword" data-v-efeda7a2>const</span> <span class="token literal-property property" data-v-efeda7a2>someConfig</span><span class="token operator" data-v-efeda7a2>:</span> waterMarkParams <span class="token operator" data-v-efeda7a2>=</span> <span class="token punctuation" data-v-efeda7a2>{</span><span class="token punctuation" data-v-efeda7a2>}</span>
    <span class="token function" data-v-efeda7a2>createWatermarkDataURL</span><span class="token punctuation" data-v-efeda7a2>(</span>someConfig<span class="token punctuation" data-v-efeda7a2>)</span><span class="token punctuation" data-v-efeda7a2>.</span><span class="token function" data-v-efeda7a2>then</span><span class="token punctuation" data-v-efeda7a2>(</span><span class="token parameter" data-v-efeda7a2>dataUrl</span><span class="token operator" data-v-efeda7a2>=&gt;</span><span class="token punctuation" data-v-efeda7a2>{</span>
      document<span class="token punctuation" data-v-efeda7a2>.</span><span class="token function" data-v-efeda7a2>querySelector</span><span class="token punctuation" data-v-efeda7a2>(</span><span class="token string" data-v-efeda7a2>&#39;#myDom&#39;</span><span class="token punctuation" data-v-efeda7a2>)</span><span class="token punctuation" data-v-efeda7a2>.</span>style<span class="token punctuation" data-v-efeda7a2>.</span>backgroundImage <span class="token operator" data-v-efeda7a2>=</span> <span class="token template-string" data-v-efeda7a2><span class="token template-punctuation string" data-v-efeda7a2>\`</span><span class="token string" data-v-efeda7a2>url(</span><span class="token interpolation" data-v-efeda7a2><span class="token interpolation-punctuation punctuation" data-v-efeda7a2>\${</span>dataUrl<span class="token interpolation-punctuation punctuation" data-v-efeda7a2>}</span></span><span class="token string" data-v-efeda7a2>)</span><span class="token template-punctuation string" data-v-efeda7a2>\`</span></span>
    <span class="token punctuation" data-v-efeda7a2>}</span><span class="token punctuation" data-v-efeda7a2>)</span>
    <span class="token keyword" data-v-efeda7a2>return</span> <span class="token punctuation" data-v-efeda7a2>{</span><span class="token punctuation" data-v-efeda7a2>}</span>
  <span class="token punctuation" data-v-efeda7a2>}</span>
<span class="token punctuation" data-v-efeda7a2>}</span>
</span></span><span class="token tag" data-v-efeda7a2><span class="token tag" data-v-efeda7a2><span class="token punctuation" data-v-efeda7a2>&lt;/</span>script</span><span class="token punctuation" data-v-efeda7a2>&gt;</span></span>
</code></pre><div class="line-numbers" data-v-efeda7a2><span class="line-number" data-v-efeda7a2>1</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>2</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>3</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>4</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>5</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>6</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>7</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>8</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>9</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>10</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>11</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>12</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>13</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>14</span><br data-v-efeda7a2></div></div><div class="language-typescript ext-ts line-numbers-mode" data-v-efeda7a2><pre class="language-typescript" data-v-efeda7a2><code data-v-efeda7a2><span class="token keyword" data-v-efeda7a2>interface</span> <span class="token class-name" data-v-efeda7a2>waterMarkParams</span> <span class="token punctuation" data-v-efeda7a2>{</span>
  content<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>string</span>
  fontSize<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  fontStyle<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>string</span>
  fontFamily<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>string</span>
  rotate<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  blockWidth<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  blockHeight<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  xGap<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  yGap<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  imgUrl<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>string</span>
  imgOpacity<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  imgWidth<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
  imgHeight<span class="token operator" data-v-efeda7a2>?</span><span class="token operator" data-v-efeda7a2>:</span> <span class="token builtin" data-v-efeda7a2>number</span>
<span class="token punctuation" data-v-efeda7a2>}</span>
</code></pre><div class="line-numbers" data-v-efeda7a2><span class="line-number" data-v-efeda7a2>1</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>2</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>3</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>4</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>5</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>6</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>7</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>8</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>9</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>10</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>11</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>12</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>13</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>14</span><br data-v-efeda7a2><span class="line-number" data-v-efeda7a2>15</span><br data-v-efeda7a2></div></div></details></div><details class="custom-container details" data-v-efeda7a2><summary data-v-efeda7a2>\u4E00\u4E9B\u8D58\u8FF0</summary><p data-v-efeda7a2>\u4E0A\u9762\u8FD9\u79CD\u65B9\u5F0F\u4E4D\u770B\u4E0A\u53BB\u6709\u4E00\u4E9B\u9E21\u808B\uFF0C\u5176\u5B9E\u5F00\u53D1\u8FD9\u4E2A\u65B9\u6CD5\u7684\u76EE\u7684\u4E5F\u662F\u4E3A\u4E86\u5E94\u5BF9\u4E00\u4E9B\u6781\u7AEF\u60C5\u51B5<br data-v-efeda7a2> \u5982\u7279\u6B8A\u6392\u7248\u7684\u6C34\u5370\uFF0C\u6709\u5B89\u5168\u6027\u8981\u6C42\u7684\u573A\u666F</p><p data-v-efeda7a2>\u5173\u4E8E\u5B89\u5168\u6027\uFF0C<code data-v-efeda7a2>watermark</code> \u672C\u8EAB\u662F\u4F7F\u7528 dom \u5B9E\u73B0\u7684\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u751F\u6210\u7684\u6C34\u5370\u53EF\u4EE5\u88AB\u8F7B\u6613\u7684\u5220\u9664\uFF0C\u56E0\u6B64\u5728\u6709\u4E00\u4E9B\u5B89\u5168\u6027\u8981\u6C42 <strong data-v-efeda7a2>\u76F8\u5BF9</strong> \u8F83\u9AD8\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u6765\u4FBF\u5229\u7684\u751F\u6210\u80CC\u666F\u56FE\uFF0C \u7136\u540E\u9488\u5BF9\u81EA\u5DF1\u7684 dom \u8FDB\u884C\u4E00\u4E9B\u5B89\u5168\u7684\uFF0C\u6216\u8005\u8BF4\u9632\u5220\u9664\u7684\u63AA\u65BD</p></details><h3 id="watermark-attributes" tabindex="-1" data-v-efeda7a2><a class="header-anchor" href="#watermark-attributes" aria-hidden="true" data-v-efeda7a2>#</a> Watermark Attributes</h3><table class="attr-table" data-v-efeda7a2><thead data-v-efeda7a2><tr data-v-efeda7a2><th data-v-efeda7a2>\u53C2\u6570</th><th data-v-efeda7a2>\u8BF4\u660E</th><th data-v-efeda7a2>\u7C7B\u578B</th><th data-v-efeda7a2>\u53EF\u9009\u503C</th><th data-v-efeda7a2>\u9ED8\u8BA4\u503C</th></tr></thead><tbody data-v-efeda7a2><tr data-v-efeda7a2><td data-v-efeda7a2>content</td><td data-v-efeda7a2>\u6587\u672C</td><td data-v-efeda7a2>string</td><td data-v-efeda7a2>-</td><td data-v-efeda7a2>mango-ui\u{1F601}</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>fullscreen</td><td data-v-efeda7a2>\u662F\u5426\u5168\u5C4F</td><td data-v-efeda7a2>boolean</td><td data-v-efeda7a2>-</td><td data-v-efeda7a2>false</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>fontSize</td><td data-v-efeda7a2>\u5B57\u4F53\u5927\u5C0F\uFF08px\uFF09</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>16</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>fontStyle</td><td data-v-efeda7a2>\u5B57\u4F53\u6837\u5F0F</td><td data-v-efeda7a2>string</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>rgba(156, 162, 169, 0.3)</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>fontFamily</td><td data-v-efeda7a2>\u5B57\u4F53</td><td data-v-efeda7a2>string</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>Arial</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>rotate</td><td data-v-efeda7a2>\u65CB\u8F6C\u89D2\u5EA6</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>-24</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>blockWidth</td><td data-v-efeda7a2>\u4E00\u4E2A\u80CC\u666F\u5757\u7684\u5BBD\u5EA6(px)</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>328</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>blockHeight</td><td data-v-efeda7a2>\u4E00\u4E2A\u80CC\u666F\u5757\u7684\u9AD8\u5EA6(px)</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>138</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>xGap</td><td data-v-efeda7a2>\u56FE\u7247\u6216\u6587\u5B57x\u8F74\u504F\u79FB\u91CF</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>0</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>yGap</td><td data-v-efeda7a2>\u56FE\u7247\u6216\u6587\u5B57y\u8F74\u504F\u79FB\u91CF</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>48</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>imgUrl</td><td data-v-efeda7a2>\u56FE\u7247\u8DEF\u5F84</td><td data-v-efeda7a2>string</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>-</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>imgOpacity</td><td data-v-efeda7a2>\u56FE\u7247\u900F\u660E\u5EA6</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>0.3</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>imgWidth</td><td data-v-efeda7a2>\u56FE\u7247\u5BBD\u5EA6\uFF08\u7565\u7F29\u56FE\u7247\u65F6\u4F7F\u7528\uFF09</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>-</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>imgHeight</td><td data-v-efeda7a2>\u56FE\u7247\u9AD8\u5EA6\uFF08\u7565\u7F29\u56FE\u7247\u65F6\u4F7F\u7528\uFF09</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>-</td></tr><tr data-v-efeda7a2><td data-v-efeda7a2>zIndex</td><td data-v-efeda7a2>\u6C34\u5370\u7684zIndex</td><td data-v-efeda7a2>number</td><td data-v-efeda7a2>\u2014</td><td data-v-efeda7a2>-1</td></tr></tbody></table>`,7);function X(v,t,Z,$,a,aa){const i=r("Badge"),c=r("mg-watermark"),k=r("mg-switch");return m(),b(g,null,[e("h1",w,[q,S,o(i,{text:"pass",type:"tip"}),G,o(i,{text:"0.0.12+"})]),U,e("div",W,[o(c,null,{default:u(()=>[V]),_:1})]),z,e("div",H,[o(c,{content:a.content,fontSize:a.fontSize,fullscreen:a.fullscreen,rotate:a.rotate,fontStyle:a.fontStyle,fontFamily:a.fontFamily,blockWidth:a.blockWidth,blockHeight:a.blockHeight,xGap:a.xGap,yGap:a.yGap},{default:u(()=>[F]),_:1},8,["content","fontSize","fullscreen","rotate","fontStyle","fontFamily","blockWidth","blockHeight","xGap","yGap"]),e("div",I,[B,d(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>a.content=n)},null,512),[[p,a.content]]),j,d(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>a.fontSize=n)},null,512),[[p,a.fontSize]]),A,d(e("input",{"onUpdate:modelValue":t[2]||(t[2]=n=>a.fontStyle=n)},null,512),[[p,a.fontStyle]]),C,d(e("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>a.fontFamily=n)},null,512),[[p,a.fontFamily]]),D,d(e("input",{"onUpdate:modelValue":t[4]||(t[4]=n=>a.rotate=n)},null,512),[[p,a.rotate]])]),e("div",N,[M,d(e("input",{"onUpdate:modelValue":t[5]||(t[5]=n=>a.blockWidth=n)},null,512),[[p,a.blockWidth]]),L,d(e("input",{"onUpdate:modelValue":t[6]||(t[6]=n=>a.blockHeight=n)},null,512),[[p,a.blockHeight]]),O,d(e("input",{"onUpdate:modelValue":t[7]||(t[7]=n=>a.xGap=n)},null,512),[[p,a.xGap]]),P,d(e("input",{"onUpdate:modelValue":t[8]||(t[8]=n=>a.yGap=n)},null,512),[[p,a.yGap]]),R,o(k,{modelValue:a.fullscreen,"onUpdate:modelValue":t[9]||(t[9]=n=>a.fullscreen=n)},null,8,["modelValue"])])]),T,E,Y,e("div",J,[o(c,{imgUrl:"/mangoui-doc/img/mango.png",xGap:0,yGap:0},{default:u(()=>[K]),_:1},8,["imgUrl"])]),Q],64)}var na=_(x,[["render",X],["__scopeId","data-v-efeda7a2"]]);export{na as default};