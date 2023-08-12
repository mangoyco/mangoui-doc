import{r as c,o as u,c as i,a,e as s,w as e,F as r,b as n,d as l}from"./app.c29e360f.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const b={methods:{open1(){this.$notify({title:"\u8FD9\u662F\u6807\u9898",content:"\u8FD9\u662F\u4E00\u6761\u9ED8\u8BA4\u901A\u77E5"})},open2(){this.$notify({title:"success",content:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u901A\u77E5",type:"success"})},open3(){this.$notify({title:"warning",content:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u901A\u77E5",type:"warning"})},open4(){this.$notify({title:"error",content:"\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u901A\u77E5",type:"error"})},open5(){this.$notify({title:"info",content:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5",type:"info"})},open6(){this.$notify({content:"\u8FD9\u662F\u4E00\u6761\u9876\u90E8\u504F\u79FB60px\u7684\u901A\u77E5",title:"\u504F\u79FB",gap:60})},open7(){this.$notify({content:"\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u901A\u77E5",title:"\u53EF\u5173\u95ED",closable:!0})},open8(){this.$notify({content:"\u8FD9\u662F\u4E00\u6761\u4F4D\u4E8E\u53F3\u4E0B\u89D2\u7684\u901A\u77E5",title:"\u5176\u4ED6\u4F4D\u7F6E",position:"bottomRight"})},open9(){this.$notify({content:"\u8FD9\u662F\u4E00\u67618\u79D2\u540E\u5173\u95ED\u7684\u901A\u77E5",title:"8s\u540E\u5173\u95ED",duration:8e3})},open0(){this.$notify({content:"\u8FD9\u662F\u4E00\u6761\u5E26\u6709\u81EA\u5B9A\u4E49icon\u901A\u77E5",title:"\u81EA\u5B9A\u4E49icon",icon:'<i class="mg-icon-info"></i>'})}}},m={id:"notify-\u901A\u77E5",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#notify-\u901A\u77E5","aria-hidden":"true"},"#",-1),g=n(" Notify \u901A\u77E5 "),y=n(),h=a("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),n(" \u57FA\u7840\u7528\u6CD5")],-1),f=a("p",null,[n("\u9ED8\u8BA4\u6837\u5F0F\u4EE5\u53CA "),a("code",null,"type"),n(" \u5C5E\u6027")],-1),_={class:"demo-warp"},q=n("\u9ED8\u8BA4\uFF08info\uFF09"),v=n("\u6210\u529F"),w=n("\u8B66\u544A"),x=n("\u9519\u8BEF"),C=n("info"),z=l(`<div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9ED8\u8BA4\uFF08info\uFF09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6210\u529F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8B66\u544A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9519\u8BEF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u8FD9\u662F\u6807\u9898&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u9ED8\u8BA4\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u6210\u529F\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">open5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div></details></div><h4 id="\u5728-setup-\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728-setup-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728 <code>setup</code> \u4E2D\u4F7F\u7528</h4><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> mgNotify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mango-ui-vue/packages/notify&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">mgNotify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u6807\u9898&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u9ED8\u8BA4\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><p>\u5982\u679C\u4EC5\u4EC5\u6253\u5305 <code>notify</code> \u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u4E0A\u9762\u7684\u5F15\u5165\u65B9\u5F0F<br> \u5982\u679C\u5DF2\u7ECF\u5F15\u5165\u5168\u91CF\u7684\u4F9D\u8D56\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mgNotify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mango-ui-vue&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="\u5176\u4ED6\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u6837\u5F0F" aria-hidden="true">#</a> \u5176\u4ED6\u6837\u5F0F</h3>`,5),$=a("p",null,[n("\u5305\u62EC\u504F\u79FB\uFF0C\u663E\u793A\u5173\u95ED\u6309\u94AE\uFF0C\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u81EA\u5B9A\u4E49 icon \u7B49"),a("br"),a("span",{small:""},"\u76F8\u5BF9\u6765\u8BF4\u6BD4\u8F83\u89C1\u540D\u77E5\u610F...\u8FD9\u91CC\u5C31\u5199\u5728\u4E00\u8D77\u4E86")],-1),N={class:"demo-warp"},j=n("\u504F\u79FB"),B=n("\u53EF\u5173\u95ED"),R=n("\u5176\u4ED6\u4F4D\u7F6E"),V=n("8\u79D2\u5173\u95ED"),E=n("icon"),F=l(`<div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u504F\u79FB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u53EF\u5173\u95ED<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5176\u4ED6\u4F4D\u7F6E<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>8\u79D2\u5173\u95ED<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u9876\u90E8\u504F\u79FB60px\u7684\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u504F\u79FB&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">gap</span><span class="token operator">:</span><span class="token number">60</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u5173\u95ED\u7684\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u53EF\u5173\u95ED&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">closable</span><span class="token operator">:</span><span class="token boolean">true</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u4F4D\u4E8E\u53F3\u4E0B\u89D2\u7684\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u5176\u4ED6\u4F4D\u7F6E&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span><span class="token string">&#39;bottomRight&#39;</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&#39;\u8FD9\u662F\u4E00\u67618\u79D2\u540E\u5173\u95ED\u7684\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;8s\u540E\u5173\u95ED&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">duration</span><span class="token operator">:</span><span class="token number">8000</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">open5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$notify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
          <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u5E26\u6709\u81EA\u5B9A\u4E49icon\u901A\u77E5&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">&#39;\u81EA\u5B9A\u4E49icon&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">icon</span><span class="token operator">:</span><span class="token string">&#39;&lt;i class=&quot;mg-icon-info&quot;&gt;&lt;/i&gt;&#39;</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></details></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4F7F\u7528 <code>icon</code> \u5C5E\u6027\u65F6\u4E5F\u53EF\u4EE5\u914D\u5408 <code>type</code> \u5C5E\u6027\uFF0C\u6216\u8005\u884C\u95F4\u6837\u5F0F\u5B9E\u73B0\u4E0D\u540C\u989C\u8272\u7684 icon</p></div><h3 id="notify-attributes" tabindex="-1"><a class="header-anchor" href="#notify-attributes" aria-hidden="true">#</a> Notify Attributes</h3><table class="attr-table"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u901A\u77E5\u7684\u6807\u9898</td><td>string</td><td>-</td><td>-</td></tr><tr><td>content</td><td>\u901A\u77E5\u7684\u5185\u5BB9</td><td>string</td><td>-</td><td>-</td></tr><tr><td>position</td><td>\u4F4D\u7F6E</td><td>string</td><td>topLeft/topRight/bottomLeft/bottomRight</td><td>topRight</td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>success/warning/error/info</td><td>-</td></tr><tr><td>icon</td><td>\u56FE\u6807</td><td>string</td><td>-</td><td>-</td></tr><tr><td>duration</td><td>\u6301\u7EED\u65F6\u95F4\uFF0Cms</td><td>number</td><td>-</td><td>3500</td></tr><tr><td>gap</td><td>\u504F\u79FB\u91CF\uFF0Cpx</td><td>number</td><td>-</td><td>-</td></tr></tbody></table><h3 id="notify-event" tabindex="-1"><a class="header-anchor" href="#notify-event" aria-hidden="true">#</a> Notify Event</h3><table class="attr-table"><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u53C2</th></tr></thead><tbody><tr><td>onClose</td><td>\u901A\u77E5\u5173\u95ED\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,6);function L(A,S,T,D,G,t){const o=c("Badge"),p=c("mg-button");return u(),i(r,null,[a("h1",m,[d,g,s(o,{text:"pass",type:"tip"}),y,s(o,{text:"0.0.13+"})]),h,f,a("div",_,[s(p,{size:"mini",onClick:t.open1},{default:e(()=>[q]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open2},{default:e(()=>[v]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open3},{default:e(()=>[w]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open4},{default:e(()=>[x]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open5},{default:e(()=>[C]),_:1},8,["onClick"])]),z,$,a("div",N,[s(p,{size:"mini",onClick:t.open6},{default:e(()=>[j]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open7},{default:e(()=>[B]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open8},{default:e(()=>[R]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open9},{default:e(()=>[V]),_:1},8,["onClick"]),s(p,{size:"mini",onClick:t.open0},{default:e(()=>[E]),_:1},8,["onClick"])]),F],64)}var J=k(b,[["render",L]]);export{J as default};
