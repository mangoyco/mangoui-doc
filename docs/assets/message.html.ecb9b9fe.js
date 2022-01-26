import{r as c,o as l,c as u,a as s,e as a,w as e,F as i,b as n,d as r}from"./app.e61e015c.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const m={setup(){},methods:{open1(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u9ED8\u8BA4\u6D88\u606F"})},open2(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F",type:"success"})},open3(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u7684\u6D88\u606F",type:"warning"})},open4(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u7684\u6D88\u606F",type:"error"})},open5(){this.$message({message:"\u8FD9\u662F\u4E00\u67618\u79D2\u540E\u5173\u95ED\u7684\u6D88\u606F",duration:8})},open6(){this.$message({message:"\u8FD9\u662F\u4E00\u6761\u9876\u90E8\u95F4\u969460px\u7684\u6D88\u606F",gap:60})}}},b={id:"message-\u6D88\u606F\u63D0\u793A",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#message-\u6D88\u606F\u63D0\u793A","aria-hidden":"true"},"#",-1),g=n(" Message \u6D88\u606F\u63D0\u793A "),h=n(),_=s("h3",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#"),n(" \u57FA\u7840\u7528\u6CD5")],-1),y=s("p",null,[n("\u5C0F\u63D0\u793A\uFF1A\u540E\u7EED\u8FD8\u662F\u4F1A\u4FEE\u6539\u589E\u52A0\u4E00\u79CD\u5176\u4ED6\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4EE5\u65B9\u4FBF\u5728 "),s("code",null,"setup"),n(" \u4E2D\u4F7F\u7528 "),s("span",{small:""},"\u5E26\u6765\u7684\u4E0D\u4FBF\u8BF7\u8C05\u89E3")],-1),q={class:"demo-warp"},f=n("\u9ED8\u8BA4\uFF08info\uFF09"),v=n("\u6210\u529F"),x=n("\u8B66\u544A"),w=n("\u9519\u8BEF"),C=n("8\u79D2\u5173\u95ED"),z=n("\u95F4\u9694"),$=r(`<div class="detail-warp"><details open><summary>\u5C55\u5F00\u67E5\u770B</summary><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div></details></div><h3 id="message-attributes" tabindex="-1"><a class="header-anchor" href="#message-attributes" aria-hidden="true">#</a> Message Attributes</h3><table class="attr-table"><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u6D88\u606F\u5185\u5BB9,\u5FC5\u586B</td><td>string</td><td>-</td><td>-</td></tr><tr><td>type</td><td>\u63D0\u793A\u7C7B\u578B</td><td>string</td><td>info/success/warning/error</td><td>info</td></tr><tr><td>duration</td><td>\u663E\u793A\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2\uFF0C\u4E3A0\u65F6\u4E0D\u5173\u95ED</td><td>number</td><td>-</td><td>3</td></tr><tr><td>gap</td><td>\u9876\u90E8\u7684\u95F4\u9694\uFF0C\u5355\u4F4Dpx</td><td>number</td><td>-</td><td>20</td></tr></tbody></table><h3 id="message-event" tabindex="-1"><a class="header-anchor" href="#message-event" aria-hidden="true">#</a> Message Event</h3><table class="attr-table"><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u53C2</th></tr></thead><tbody><tr><td>onClick</td><td>msg\u5173\u95ED\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,5);function B(N,V,j,M,E,t){const o=c("Badge"),p=c("mg-button");return l(),u(i,null,[s("h1",b,[d,g,a(o,{text:"pass",type:"success"}),h,a(o,{text:"0.0.8+"})]),_,y,s("div",q,[a(p,{size:"mini",onClick:t.open1},{default:e(()=>[f]),_:1},8,["onClick"]),a(p,{size:"mini",onClick:t.open2},{default:e(()=>[v]),_:1},8,["onClick"]),a(p,{size:"mini",onClick:t.open3},{default:e(()=>[x]),_:1},8,["onClick"]),a(p,{size:"mini",onClick:t.open4},{default:e(()=>[w]),_:1},8,["onClick"]),a(p,{size:"mini",onClick:t.open5},{default:e(()=>[C]),_:1},8,["onClick"]),a(p,{size:"mini",onClick:t.open6},{default:e(()=>[z]),_:1},8,["onClick"])]),$],64)}var S=k(m,[["render",B]]);export{S as default};
