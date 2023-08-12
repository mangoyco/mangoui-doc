import{r as p,o as e,c as o,a as s,e as n,F as c,b as t,d as l}from"./app.c29e360f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const i={},r={id:"catalog-\u5BFC\u822A\u7CBE\u7075",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#catalog-\u5BFC\u822A\u7CBE\u7075","aria-hidden":"true"},"#",-1),k=t(" Catalog \u5BFC\u822A\u7CBE\u7075 "),g=t(),m=l(`<h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h3><p>\u5982\u679C\u4F60\u9700\u8981\u4E3A\u6587\u7AE0\u81EA\u52A8\u751F\u6210\u76EE\u5F55\u5BFC\u822A\uFF0C<code>Catalog</code>\u5C06\u6BD4\u8F83\u6709\u7528</p><iframe style="height:500px;" src="/mangoui-doc/demo/catalog.html"></iframe><div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.nav</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-catalog</span> <span class="token attr-name">:target-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>article<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-catalog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details></div><p><code>target-id</code> \u7684\u503C\u4E3A\u6EDA\u52A8\u5143\u7D20\u7684 id \uFF0C\u4E0D\u4F20\u65F6\u5C06\u9ED8\u8BA4\u4E3Abody</p><h3 id="\u6587\u7AE0\u6807\u9898" tabindex="-1"><a class="header-anchor" href="#\u6587\u7AE0\u6807\u9898" aria-hidden="true">#</a> \u6587\u7AE0\u6807\u9898</h3><p>\u4EE5\u4E0Bdemo\u4E3A <code>title</code> \u5C5E\u6027\u4E3A\u6587\u672C\u65F6\u7684\u6548\u679C<br> \u4E5F\u53EF\u4EE5\u63A5\u53D7\u5E03\u5C14\u503C\uFF0C\u5F53<code>title</code> \u4E3A <code>true</code>\u65F6\uFF0C\u5C06\u628A\u7B2C\u4E00\u4E2Ah1\u4F5C\u4E3A\u6807\u9898 \uFF08\u53EF\u89C1\u672C\u7AE0<code>\u5BFC\u822A\u6837\u5F0F</code>\u90E8\u5206\uFF09</p><iframe style="height:500px;" src="/mangoui-doc/demo/catalog.html#title"></iframe><div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-catalog</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>Article Title<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:target-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>article<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-catalog</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details></div><h3 id="\u5BFC\u822A\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u6837\u5F0F" aria-hidden="true">#</a> \u5BFC\u822A\u6837\u5F0F</h3><p>\u4E60\u60EF\u5C06\u5BFC\u822A\u653E\u5230\u5DE6\u4FA7\u4E5F\u662F\u53EF\u4EE5\u7684</p><iframe style="height:500px;" src="/mangoui-doc/demo/catalog.html#position"></iframe><div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.nav-left</span><span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-catalog</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:target-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>article<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>left<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-catalog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></details></div><h3 id="catalog-attributes" tabindex="-1"><a class="header-anchor" href="#catalog-attributes" aria-hidden="true">#</a> Catalog Attributes</h3><table class="attr-table"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>targetId</td><td>\u6EDA\u52A8\uFF08\u6587\u7AE0\uFF09\u533A\u57DFid</td><td>string</td><td>-</td><td>-</td></tr><tr><td>widthHash</td><td>\u662F\u5426\u6539\u53D8\u5F53\u9875 hash</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>title</td><td>\u6587\u7AE0\u6807\u9898</td><td>boolean/string</td><td>-</td><td>false</td></tr><tr><td>position</td><td>\u5C45\u5DE6\uFF08\u53F3\uFF09\u7684\u6837\u5F0F</td><td>string</td><td>left/right</td><td>right</td></tr></tbody></table>`,15);function b(h,v){const a=p("Badge");return e(),o(c,null,[s("h1",r,[d,k,n(a,{text:"pass",type:"tip"}),g,n(a,{text:"0.0.13+"})]),m],64)}var q=u(i,[["render",b]]);export{q as default};
