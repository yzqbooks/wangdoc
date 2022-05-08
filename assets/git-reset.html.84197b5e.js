import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e as s}from"./app.7f9fc225.js";const a={},e=s(`<h1 id="git-reset" tabindex="-1"><a class="header-anchor" href="#git-reset" aria-hidden="true">#</a> git reset</h1><p><code>git reset</code>\u547D\u4EE4\u7528\u4E8E\u5C06\u5F53\u524D\u5206\u652F\u6307\u5411\u53E6\u4E00\u4E2A\u4F4D\u7F6E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u5F53\u671F\u5206\u652F\u7684\u6307\u9488\u5012\u9000\u4E09\u4E2A commit\uFF0C</span>
<span class="token comment"># \u5E76\u4E14\u4F1A\u6539\u53D8\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> reset HEAD~3

<span class="token comment"># \u5012\u9000\u6307\u9488\u7684\u540C\u65F6\uFF0C\u4E0D\u6539\u53D8\u6682\u5B58\u533A</span>
$ <span class="token function">git</span> reset --soft HEAD~3

<span class="token comment"># \u5012\u9000\u6307\u9488\u7684\u540C\u65F6\uFF0C\u6539\u53D8\u5DE5\u4F5C\u533A</span>
$ <span class="token function">git</span> reset --hard HEAD~3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u4E0D\u6307\u5B9A\u56DE\u6EDA\u7684\u4F4D\u7F6E\uFF0C\u90A3\u4E48\u7B49\u540C\u4E8E\u64A4\u9500\u4FEE\u6539\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u64A4\u9500\u4E0A\u4E00\u6B21\u5411\u6682\u5B58\u533A\u6DFB\u52A0\u7684\u6240\u6709\u6587\u4EF6</span>
$ <span class="token function">git</span> reset

<span class="token comment"># \u65E0\u4EFB\u4F55\u6548\u679C</span>
$ <span class="token function">git</span> reset --soft

<span class="token comment"># \u540C\u65F6\u64A4\u9500\u6682\u5B58\u533A\u548C\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539\uFF0C</span>
<span class="token comment"># \u56DE\u590D\u5230\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684\u72B6\u6001</span>
$ <span class="token function">git</span> reset --hard

<span class="token comment"># \u64A4\u9500\u4E0A\u4E00\u6B21\u5411\u6682\u5B58\u533A\u6DFB\u52A0\u7684\u67D0\u4E2A\u6307\u5B9A\u6587\u4EF6\uFF0C</span>
<span class="token comment"># \u4E0D\u5F71\u54CD\u5DE5\u4F5C\u533A\u4E2D\u7684\u8BE5\u6587\u4EF6</span>
$ <span class="token function">git</span> reset -- <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><ul><li>soft: \u4E0D\u6539\u53D8\u5DE5\u4F5C\u533A\u548C\u7F13\u5B58\u533A\uFF0C\u53EA\u79FB\u52A8 HEAD \u5230\u6307\u5B9A commit\u3002</li><li>mixed: \u53EA\u6539\u53D8\u7F13\u5B58\u533A\uFF0C\u4E0D\u6539\u53D8\u5DE5\u4F5C\u533A\u3002\u8FD9\u662F\u9ED8\u8BA4\u53C2\u6570\uFF0C\u901A\u5E38\u7528\u4E8E\u64A4\u9500<code>git add</code>\u3002</li><li>hard\uFF1A\u6539\u53D8\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u5230\u6307\u5B9A commit\u3002\u8BE5\u53C2\u6570\u7B49\u540C\u4E8E\u91CD\u7F6E\uFF0C\u53EF\u80FD\u4F1A\u5F15\u8D77\u6570\u636E\u635F\u5931\u3002<code>git reset --hard</code>\u7B49\u540C\u4E8E<code>git reset --hard HEAD</code>\u3002</li><li><code>-p</code>\u8868\u793A\u952E\u5165\u4EA4\u4E92\u6A21\u5F0F\uFF0C\u6307\u5B9A\u6682\u5B58\u533A\u7684\u54EA\u4E9B\u90E8\u5206\u9700\u8981\u64A4\u9500\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Undo add</span>
$ <span class="token function">git</span> reset

<span class="token comment"># Undo a commit\uFF0C\u4E0D\u91CD\u7F6E\u5DE5\u4F5C\u533A\u548C\u7F13\u5B58\u533A</span>
<span class="token comment"># \u56DE\u5230 HEAD \u4E4B\u524D\u7684\u90A3\u4E2A commit</span>
$ <span class="token function">git</span> reset --soft HEAD^

<span class="token comment"># Undo a commit\uFF0C\u91CD\u7F6E\u5DE5\u4F5C\u533A\u548C\u7F13\u5B58\u533A</span>
<span class="token comment"># \u8FDE\u7EED\u64A4\u9500\u4E09\u4E2A commit\uFF1AHEAD, HEAD^, and HEAD~2</span>
$ <span class="token function">git</span> reset --hard HEAD~3

<span class="token comment"># \u4ECE\u6682\u5B58\u533A\u79FB\u9664\u6307\u5B9A\u6587\u4EF6\uFF0C\u4F46\u4E0D\u6539\u53D8\u5DE5\u4F5C\u533A\u4E2D\u7684\u8BE5\u6587\u4EF6</span>
$ <span class="token function">git</span> reset -- frotz.c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,8);function p(r,c){return e}var i=n(a,[["render",p],["__file","git-reset.html.vue"]]);export{i as default};
