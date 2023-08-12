import{r as c,o as l,c as u,a as e,e as s,w as p,F as i,b as n,d as r}from"./app.c29e360f.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const m={setup(){},methods:{open1(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u9ED8\u8BA4\u6D88\u606F"})},open2(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F",type:"success"})},open3(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u7684\u6D88\u606F",type:"warning"})},open4(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u7684\u6D88\u606F",type:"error"})},open5(){this.$message({message:"\u8FD9\u662F\u4E00\u67618\u79D2\u540E\u5173\u95ED\u7684\u6D88\u606F",duration:8})},open6(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u9876\u90E8\u95F4\u969460px\u7684\u6D88\u606F",gap:60})}}},d={id:"message-\u6D88\u606F\u63D0\u793A",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#message-\u6D88\u606F\u63D0\u793A","aria-hidden":"true"},"#",-1),g=n(" Message \u6D88\u606F\u63D0\u793A "),h=n(),y=e("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),n(" \u57FA\u7840\u7528\u6CD5")],-1),_={class:"demo-warp"},v=n("\u9ED8\u8BA4\uFF08info\uFF09"),f=n("\u6210\u529F"),q=n("\u8B66\u544A"),x=n("\u9519\u8BEF"),w=n("8\u79D2\u5173\u95ED"),C=n("\u95F4\u9694"),z=r(`<div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9ED8\u8BA4\uFF08info\uFF09<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6210\u529F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8B66\u544A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9519\u8BEF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>8\u79D2\u5173\u95ED<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-button</span> <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>mini<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open6<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u95F4\u9694<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mg-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
 <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token function">open1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u9ED8\u8BA4\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
     <span class="token function">open2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;success&#39;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>

     <span class="token function">open3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u7684\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>

     <span class="token function">open4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u7684\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token function">open5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u67618\u79D2\u540E\u5173\u95ED\u7684\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">duration</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token function">open6</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
         <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u4E00\u6761\u9876\u90E8\u95F4\u969460px\u7684\u6D88\u606F&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">60</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></details></div><h4 id="\u5728-setup-\u4E2D\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5728-setup-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a> \u5728 <code>setup</code> \u4E2D\u4F7F\u7528</h4><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> mgMsg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mango-ui-vue/packages/message&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">mgMsg</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;this is msg&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\uFF01</p><p>\u5982\u679C\u4EC5\u4EC5\u6253\u5305 <code>message</code> \u7EC4\u4EF6\uFF0C\u8BF7\u4F7F\u7528\u4E0A\u9762\u7684\u5F15\u5165\u65B9\u5F0F<br> \u5982\u679C\u5DF2\u7ECF\u5F15\u5165\u5168\u91CF\u7684\u4F9D\u8D56\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mgMsg <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;mango-ui-vue&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><h3 id="message-attributes" tabindex="-1"><a class="header-anchor" href="#message-attributes" aria-hidden="true">#</a> Message Attributes</h3><table class="attr-table"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u6D88\u606F\u5185\u5BB9,\u5FC5\u586B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>type</td><td>\u63D0\u793A\u7C7B\u578B</td><td>string</td><td>info/success/warning/error</td><td>info</td></tr><tr><td>duration</td><td>\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u4E3A0\u65F6\u4E0D\u5173\u95ED</td><td>number</td><td>-</td><td>3</td></tr><tr><td>gap</td><td>\u9876\u90E8\u7684\u95F4\u9694\uFF0C\u5355\u4F4Dpx</td><td>number</td><td>-</td><td>20</td></tr><tr><td>zIndex</td><td>z-index \u7684\u503C</td><td>number/string</td><td>-</td><td>-</td></tr></tbody></table><h3 id="message-event" tabindex="-1"><a class="header-anchor" href="#message-event" aria-hidden="true">#</a> Message Event</h3><table class="attr-table"><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u53C2</th></tr></thead><tbody><tr><td>onClick</td><td>msg\u5173\u95ED\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,8);function $(j,M,B,N,V,a){const o=c("Badge"),t=c("mg-button");return l(),u(i,null,[e("h1",d,[b,g,s(o,{text:"pass",type:"tip"}),h,s(o,{text:"0.0.13+"})]),y,e("div",_,[s(t,{size:"mini",onClick:a.open1},{default:p(()=>[v]),_:1},8,["onClick"]),s(t,{size:"mini",onClick:a.open2},{default:p(()=>[f]),_:1},8,["onClick"]),s(t,{size:"mini",onClick:a.open3},{default:p(()=>[q]),_:1},8,["onClick"]),s(t,{size:"mini",onClick:a.open4},{default:p(()=>[x]),_:1},8,["onClick"]),s(t,{size:"mini",onClick:a.open5},{default:p(()=>[w]),_:1},8,["onClick"]),s(t,{size:"mini",onClick:a.open6},{default:p(()=>[C]),_:1},8,["onClick"])]),z],64)}var A=k(m,[["render",$]]);export{A as default};
