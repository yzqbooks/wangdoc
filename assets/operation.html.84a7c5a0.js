import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as t,a as n,b as c,F as o,e as s,d as l,o as u}from"./app.6c47058e.js";const r={},i=s(`<h1 id="\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u57FA\u672C\u64CD\u4F5C</h1><h2 id="\u5782\u76F4\u7F6E\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u5782\u76F4\u7F6E\u4E2D" aria-hidden="true">#</a> \u5782\u76F4\u7F6E\u4E2D</h2><p>\uFF081\uFF09\u65B9\u6CD5\u4E00</p><p>\u539F\u7406\uFF1A\u5B50\u5143\u7D20\u7684 top, right, bottom, left, margin, and padding\u5C5E\u6027\uFF0C\u9488\u5BF9\u7684\u662F\u7236\u5143\u7D20\u7684\u7EF4\u5EA6\uFF1Btransform\u9488\u5BF9\u7684\u5B50\u5143\u7D20\u672C\u8EAB\u7684\u7EF4\u5EA6\u3002</p><p>\u7236\u5143\u7D20\u3001\u5B50\u5143\u7D20\u9700\u6709\u660E\u786E\u9AD8\u5EA6\uFF0C\u4E0D\u80FD\u662Fauto\u3002</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>
<span class="token selector">.children</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #ffdb4c<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\uFF082\uFF09\u65B9\u6CD5\u4E8C</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>
<span class="token selector">.parent</span> <span class="token punctuation">{</span> <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>

    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>

    <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-moz-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-ms-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">-o-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\uFF083\uFF09\u65B9\u6CD5\u4E09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\uFF085\uFF09\u884C\u5185\u7F6E\u4E2D</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span> <span class="token property">line-height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\uFF086\uFF09\u65B9\u6CD5\u56DB\uFF08\u53EA\u5BF9\u56FE\u7247\u6709\u6548\uFF09</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.thumb</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>my-img.jpg<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token comment">/* is this supported by IE8? I don&#39;t know */</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>

  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\uFF087\uFF09\u65B9\u6CD5\u4E94</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.children</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>50% - 12.5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\uFF088\uFF09\u65B9\u6CD5\u516D</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\uFF089\uFF09\u53C2\u8003\u94FE\u63A5</p>`,19),k={href:"https://github.com/timseverien/timseverien.github.io/blob/master/_posts/2013-11-25-css-alignment-and-sizing.md",target:"_blank",rel:"noopener noreferrer"},b=l("Alignment and sizing in CSS"),m=s(`<h2 id="\u6E05\u7406\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7406\u6D6E\u52A8" aria-hidden="true">#</a> \u6E05\u7406\u6D6E\u52A8</h2><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>
<span class="token selector">.clearfix:after</span><span class="token punctuation">{</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.clearfix</span><span class="token punctuation">{</span>
  <span class="token property">zoom</span><span class="token punctuation">:</span>1<span class="token punctuation">;</span> <span class="token comment">/* for IE6 IE7 */</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,2);function d(g,h){const a=e("ExternalLinkIcon");return u(),t(o,null,[i,n("ul",null,[n("li",null,[n("a",k,[b,c(a)])])]),m],64)}var f=p(r,[["render",d],["__file","operation.html.vue"]]);export{f as default};
