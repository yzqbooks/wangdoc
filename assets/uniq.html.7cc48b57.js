import{_ as n,e as s}from"./app.a6634989.js";const a={},e=s(`<h1 id="uniq" tabindex="-1"><a class="header-anchor" href="#uniq" aria-hidden="true">#</a> uniq</h1><p><code>uniq</code>\u7528\u4E8E\u8FC7\u6EE4\u6389\u91CD\u590D\u7684\u884C\uFF0C\u8BE5\u547D\u4EE4\u53EA\u5BF9\u6392\u5E8F\u540E\u7684\u6587\u4EF6\u6709\u6548\u3002</p><p>\u4E0B\u9762\u662F<code>example.txt</code>\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>a
a
b
a
b
c
d
c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5BF9\u8BE5\u6587\u4EF6\u8FDB\u884C\u6392\u5E8F\u540E\uFF0C\u518D\u8FC7\u6EE4\u6389\u91CD\u590D\u7684\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span>
a
b
c
d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p><code>-c</code>\u53C2\u6570\u4F1A\u663E\u793A\u6BCF\u884C\u4E00\u5171\u51FA\u73B0\u4E86\u591A\u5C11\u6B21\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sort</span> example.txt <span class="token operator">|</span> <span class="token function">uniq</span> -c
    <span class="token number">3</span> a
    <span class="token number">2</span> b
    <span class="token number">2</span> c
    <span class="token number">1</span> d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9);function r(p,l){return e}var i=n(a,[["render",r],["__file","uniq.html.vue"]]);export{i as default};
