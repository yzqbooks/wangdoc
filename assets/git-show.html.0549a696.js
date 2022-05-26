import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.e9596517.js";const t={},o=e(`<h1 id="git-show" tabindex="-1"><a class="header-anchor" href="#git-show" aria-hidden="true">#</a> git show</h1><p><code>git show</code>\u547D\u4EE4\u7528\u4E8E\u67E5\u770Bcommit\u7684\u5185\u5BB9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8F93\u51FA\u67D0\u6B21\u63D0\u4EA4\u7684\u5143\u6570\u636E\u548C\u5185\u5BB9\u53D8\u5316</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

$ <span class="token function">git</span> show 12a86bc38 <span class="token comment"># By revision</span>
$ <span class="token function">git</span> show v1.0.1 <span class="token comment"># By tag</span>
$ <span class="token function">git</span> show feature132 <span class="token comment"># By branch name</span>
$ <span class="token function">git</span> show 12a86bc38^ <span class="token comment"># Parent of a commit</span>
$ <span class="token function">git</span> show 12a86bc38~2 <span class="token comment"># Grandparent of a commit</span>
$ <span class="token function">git</span> show feature132@<span class="token punctuation">{</span>yesterday<span class="token punctuation">}</span> <span class="token comment"># Time relative</span>
$ <span class="token function">git</span> show feature132@<span class="token punctuation">{</span><span class="token number">2</span>.hours.ago<span class="token punctuation">}</span> <span class="token comment"># Time relative</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[o];function c(l,p){return s(),a("div",null,i)}var u=n(t,[["render",c],["__file","git-show.html.vue"]]);export{u as default};
