import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as l,c as p,a as n,b as e,F as c,e as o,d as s}from"./app.52613ed4.js";const d={},u=o(`<h1 id="table-\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#table-\u5E03\u5C40" aria-hidden="true">#</a> Table \u5E03\u5C40</h1><p>CSS \u53EF\u4EE5\u8BA9 HTML \u5143\u7D20\u50CF\u8868\u683C\u90A3\u6837\u6392\u5217\u3002</p><p>\u4E0B\u9762\u662F\u8868\u683C\u7684\u5404\u4E2A HTML \u6807\u7B7E\uFF0C\u6240\u5BF9\u5E94\u7684\u5E03\u5C40\u6A21\u5F0F\u3002</p><ul><li>table { display: table }</li><li>tr { display: table-row }</li><li>thead { display: table-header-group }</li><li>tbody { display: table-row-group }</li><li>tfoot { display: table-footer-group }</li><li>col { display: table-column }</li><li>colgroup { display: table-column-group }</li><li>td, th { display: table-cell }</li><li>caption { display: table-caption }</li></ul><p>\u8868\u683C\u5E03\u5C40\u53EF\u4EE5\u5F88\u7B80\u5355\u5730\u505A\u5230\u5782\u76F4\u5C45\u4E2D\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u79CD\u5199\u6CD5\u76F8\u6BD4\u4E0B\u9762\u7684\u5199\u6CD5\uFF0C\u66F4\u5BB9\u6613\u7406\u89E3\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8868\u683C\u5E03\u5C40\u7684\u53E6\u4E00\u4E2A\u7528\u9014\u662F\uFF0C\u8BA9\u9875\u5C3E\u603B\u662F\u663E\u793A\u5728\u6D4F\u89C8\u5668\u7684\u6700\u4F4E\u90E8\uFF0C\u5373\u4F7F\u9875\u9762\u9AD8\u5EA6\u4E0D\u8DB3\u4E00\u9875\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*
  HTML \u4EE3\u7801\u5982\u4E0B
  &lt;body&gt;
    &lt;div class=&quot;main&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;footer&quot;&gt;&lt;/div&gt;
  &lt;/body&gt;
*/</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u4E8E\u4E0A\u9762\u8FD9\u79CD\u5E95\u90E8\u56FA\u5B9A\u7684\u6280\u5DE7\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8868\u683C\u5E03\u5C40\uFF0C\u5B8C\u6210\u5723\u676F\u5E03\u5C40\uFF0C\u5373\u9875\u9762\u4ECE\u4E0A\u5230\u4E0B\u5206\u6210\u9875\u9996 + \u5185\u5BB9 + \u9875\u5C3E\u4E09\u90E8\u5206\uFF0C\u5176\u4E2D\u5185\u5BB9\u90E8\u5206\u53C8\u5206\u6210\u5DE6\u8FB9\u680F\u548C\u53F3\u8FB9\u680F\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/*
  HTML \u4EE3\u7801\u5982\u4E0B
&lt;div class=&quot;wrapper&quot;&gt;
  &lt;div class=&quot;header&quot;&gt;HEADER&lt;/div&gt;
  &lt;div class=&quot;main&quot;&gt;
    &lt;div class=&quot;box sidebar&quot;&gt;Left-sidebar&lt;/div&gt;
    &lt;div class=&quot;box content&quot;&gt;Main Content&lt;/div&gt;
    &lt;div class=&quot;box sidebar&quot;&gt;Right-sidebar&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;footer&quot;&gt;FOOTER&lt;/div&gt;
&lt;/div&gt;
*/</span>

<span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.main</span> <span class="token punctuation">{</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.footer</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-row<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u8868\u683C\u7684\u4E0D\u540C\u6027\u8D28\u7684\u884C\uFF0C\u53EF\u4EE5\u8C03\u6574\u884C\u7684\u663E\u793A\u4F4D\u7F6E\u3002</p><ul><li><code>display:table-caption</code>\u4F7F\u5F97\u8BE5\u884C\u663E\u793A\u5728\u8868\u683C\u7684\u6700\u9876\u90E8\u3002</li><li><code>display:table-header-group</code>\u4F7F\u5F97\u8BE5\u884C\u663E\u793A\u5728\u8868\u683C\u7684\u5934\u90E8\uFF0C\u4F46\u662F\u4F4D\u7F6E\u4F4E\u4E8E<code>table-caption</code>\u7684\u884C\u3002</li><li><code>display:table-footer-group</code>\u4F7F\u5F97\u8BE5\u884C\u663E\u793A\u5728\u8868\u683C\u7684\u5E95\u90E8\u3002</li></ul><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,15),r=s("Colin Toh, "),v={href:"https://colintoh.com/blog/display-table-anti-hero",target:"_blank",rel:"noopener noreferrer"},b=s('The Anti-hero of CSS Layout - "display:table"'),k=s("Ian Devlin, "),m={href:"https://iandevlin.com/blog/2013/06/css/css-stacking-with-display-table/",target:"_blank",rel:"noopener noreferrer"},h=s("CSS stacking with display:table"),g=s("Ben Frain, "),y={href:"https://benfrain.com/css-performance-test-flexbox-v-css-table-fight/",target:"_blank",rel:"noopener noreferrer"},_=s("CSS performance test: Flexbox v CSS Table");function f(x,q){const a=i("ExternalLinkIcon");return l(),p(c,null,[u,n("ul",null,[n("li",null,[r,n("a",v,[b,e(a)])]),n("li",null,[k,n("a",m,[h,e(a)])]),n("li",null,[g,n("a",y,[_,e(a)])])])],64)}var T=t(d,[["render",f],["__file","table.html.vue"]]);export{T as default};
