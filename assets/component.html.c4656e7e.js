import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as e,a as n,b as o,e as c,d as i}from"./app.e9596517.js";const l={},u=c(`<h1 id="\u5E38\u7528\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7EC4\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u7EC4\u4EF6</h1><h2 id="\u5BF9\u8BDD\u6846" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8BDD\u6846" aria-hidden="true">#</a> \u5BF9\u8BDD\u6846</h2><p>\u663E\u793A\u5C4F\u5E55\u5C45\u4E2D\u7684\u5BF9\u8BDD\u6846\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>I am the dialog&#39;s content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>close dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#dialog</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 100% solid <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 2.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#dialog:before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 999<span class="token punctuation">;</span>

  <span class="token comment">/* fade in */</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.2s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#dialog[hidden]</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
    [hidden] usually sets display:none, which we
    need to revert in order to allow animations
  */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token comment">/*
    actually hide the element,
    making its contents unaccessible
  */</span>
  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token comment">/*
    make sure the element is out of viewport
  */</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate3d</span><span class="token punctuation">(</span>0px<span class="token punctuation">,</span> -1px<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/*
    delay transform until animations are done
  */</span>
  <span class="token property">transition</span><span class="token punctuation">:</span>
    visibility 0s linear 0.2s<span class="token punctuation">,</span>
    transform 0s linear 0.2s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2>`,6),r={href:"https://allyjs.io/tutorials/accessible-dialog.html",target:"_blank",rel:"noopener noreferrer"},d=i("Accessible dialog tutorial");function k(v,m){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[d,o(s)])])])])}var g=a(l,[["render",k],["__file","component.html.vue"]]);export{g as default};
