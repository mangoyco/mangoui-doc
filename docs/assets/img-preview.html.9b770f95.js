import{r as o,o as c,c as d,a as t,e as s,F as i,b as a,d as p}from"./app.e8ccc982.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const l={},u={id:"imgpreview-\u56FE\u7247\u9884\u89C8",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#imgpreview-\u56FE\u7247\u9884\u89C8","aria-hidden":"true"},"#",-1),h=a(" ImgPreview \u56FE\u7247\u9884\u89C8 "),g=a(),v=t("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),a(" \u57FA\u7840\u7528\u6CD5")],-1),_=t("p",null,[a("\u6E32\u67D3\u7684\u6548\u679C\u548C\u539F\u751F\u7684 "),t("code",null,"<img/>"),a(" \u662F\u4E00\u6837\u7684\uFF0C\u539F\u751F\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528")],-1),k={class:"demo-warp"},b=p(`<div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-img-preview</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xxx/mango.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u70B9\u51FB\u9884\u89C8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details></div><h3 id="\u53EF\u64CD\u4F5C\u7684\u9884\u89C8" tabindex="-1"><a class="header-anchor" href="#\u53EF\u64CD\u4F5C\u7684\u9884\u89C8" aria-hidden="true">#</a> \u53EF\u64CD\u4F5C\u7684\u9884\u89C8</h3><p><code>ops</code> \u9009\u9879\u53EF\u4EE5\u5BF9\u9884\u89C8\u7684\u56FE\u7247\u8FDB\u884C\u4E00\u4E9B\u7B80\u6613\u7684\u64CD\u4F5C\u5982\u653E\u5927\uFF0C\u7F29\u5C0F\u7B49</p>`,3),x={class:"demo-warp"},w=p(`<div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-img-preview</span> <span class="token attr-name">:ops</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/xxx/mango.png<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u70B9\u51FB\u9884\u89C8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53EF\u4EE5\u4F7F\u7528 <code>disabled</code> \u5C5E\u6027\u505C\u7528\u9884\u89C8\u7684\u529F\u80FD</p></div><h3 id="imgpreview-attributes" tabindex="-1"><a class="header-anchor" href="#imgpreview-attributes" aria-hidden="true">#</a> ImgPreview Attributes</h3><table class="attr-table"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>src</td><td>\u56FE\u7247\u8DEF\u5F84</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>ops</td><td>\u662F\u5426\u5C55\u793A\u9ED8\u8BA4\u7684\u9884\u89C8\u64CD\u4F5C\u680F</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9884\u89C8\u529F\u80FD</td><td>boolean</td><td>-</td><td>-</td></tr></tbody></table><h3 id="imgpreview-event" tabindex="-1"><a class="header-anchor" href="#imgpreview-event" aria-hidden="true">#</a> ImgPreview Event</h3><table class="attr-table"><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u53C2</th></tr></thead><tbody><tr><td>close</td><td>\u7ED3\u675F\u9884\u89C8\u65F6\u89E6\u53D1\uFF08\u70B9\u51FB\u906E\u7F69\u5C42\uFF09</td><td>-</td></tr><tr><td>closed</td><td>\u7ED3\u675F\u9884\u89C8\u65F6\u89E6\u53D1\uFF08\u52A8\u753B\u7ED3\u675F\uFF09</td><td>-</td></tr></tbody></table>`,6),q=t("details",{class:"custom-container details"},[t("summary",null,"\u5173\u4E8EImgPreview Event"),t("p",null,[a("\u76EE\u524D\u7684\u7248\u672C\u53EA\u5F00\u653E\u4E86\u5173\u95ED\u65F6\u7684\u4E8B\u4EF6\uFF0C\u5F00\u542F\u65F6\u7684\u4E8B\u4EF6\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u7ED1\u5B9Aclick\u4E8B\u4EF6\u5B8C\u6210"),t("br"),a(" \u6682\u65F6\u672A\u652F\u6301\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u65F6\u7684\u94A9\u5B50\u51FD\u6570..."),t("br"),t("span",{mini:""},"\u5BF9\u4E0D\u8D77\u8FD9\u6CE2\u662F\u6211\u5FD8\u505A\u4E86...\u{1F468}\u200D\u{1F3ED}")])],-1);function f(y,B){const e=o("Badge"),n=o("mg-img-preview");return c(),d(i,null,[t("h1",u,[m,h,s(e,{text:"pass",type:"tip"}),g,s(e,{text:"0.0.13+"})]),v,_,t("div",k,[s(n,{src:"/mangoui-doc/img/mango.png",title:"\u70B9\u51FB\u9884\u89C8"})]),b,t("div",x,[s(n,{ops:!0,src:"/mangoui-doc/img/mango.png",title:"\u70B9\u51FB\u9884\u89C8"})]),w,q],64)}var N=r(l,[["render",f]]);export{N as default};
