import{_ as n,e as s}from"./app.397bc9ea.js";const a={},e=s(`<h1 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff" aria-hidden="true">#</a> git diff</h1><p><code>git diff</code>\u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u6587\u4EF6\u4E4B\u95F4\u7684\u5DEE\u5F02\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># \u67E5\u770B\u67D0\u4E2A\u6587\u4EF6\u7684\u5DE5\u4F5C\u533A\u4E0E\u6682\u5B58\u533A\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> file.txt

<span class="token comment"># \u67E5\u770B\u6682\u5B58\u533A\u4E0E\u5F53\u524D commit \u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached

<span class="token comment"># \u67E5\u770B\u4E24\u4E2Acommit\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commitBefore<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>commitAfter<span class="token operator">&gt;</span>

<span class="token comment"># \u67E5\u770B\u6682\u5B58\u533A\u4E0E\u4ED3\u5E93\u533A\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> --cached

<span class="token comment"># \u67E5\u770B\u5DE5\u4F5C\u533A\u4E0E\u4E0A\u4E00\u6B21commit\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
<span class="token comment"># \u5373\u5982\u679C\u6267\u884C git commit -a\uFF0C\u5C06\u63D0\u4EA4\u7684\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># \u67E5\u770B\u5DE5\u4F5C\u533A\u4E0E\u67D0\u4E2A commit \u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token operator">&lt;</span>commit<span class="token operator">&gt;</span>

<span class="token comment"># \u663E\u793A\u4E24\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># \u67E5\u770B\u5DE5\u4F5C\u533A\u4E0E\u5F53\u524D\u5206\u652F\u4E0A\u4E00\u6B21\u63D0\u4EA4\u7684\u5DEE\u5F02\uFF0C\u4F46\u662F\u5C40\u9650\u4E8Etest\u6587\u4EF6</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD -- ./test

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u5206\u652F\u4E0A\u4E00\u6B21\u63D0\u4EA4\u4E0E\u4E0A\u4E0A\u4E00\u6B21\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD -- ./test

<span class="token comment"># \u751F\u6210patch</span>
$ <span class="token function">git</span> format-patch master --stdout <span class="token operator">&gt;</span> mypatch.patch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u6BD4\u8F83\u4E24\u4E2A\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770Btopic\u5206\u652F\u4E0Emaster\u5206\u652F\u6700\u65B0\u63D0\u4EA4\u4E4B\u95F4\u7684\u5DEE\u5F02</span>
$ <span class="token function">git</span> <span class="token function">diff</span> topic master

<span class="token comment"># \u4E0E\u4E0A\u4E00\u6761\u547D\u4EE4\u76F8\u540C</span>
$ <span class="token function">git</span> <span class="token function">diff</span> topic<span class="token punctuation">..</span>master

<span class="token comment"># \u67E5\u770B\u81EA\u4ECEtopic\u5206\u652F\u5EFA\u7ACB\u4EE5\u540E\uFF0Cmaster\u5206\u652F\u53D1\u751F\u7684\u53D8\u5316</span>
$ <span class="token function">git</span> <span class="token function">diff</span> topic<span class="token punctuation">..</span>.master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,5);function p(t,c){return e}var i=n(a,[["render",p],["__file","git-diff.html.vue"]]);export{i as default};
