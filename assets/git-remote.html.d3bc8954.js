import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e as i}from"./app.e9596517.js";const a={},t=i(`<h1 id="git-remote" tabindex="-1"><a class="header-anchor" href="#git-remote" aria-hidden="true">#</a> git remote</h1><p>\u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u6DFB\u52A0\u522B\u540D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> remote <span class="token function">add</span> john git@github.com:johnsomeone/someproject.git

<span class="token comment"># \u663E\u793A\u6240\u6709\u7684\u8FDC\u7A0B\u4E3B\u673A</span>
$ <span class="token function">git</span> remote -v

<span class="token comment"># \u5217\u51FA\u67D0\u4E2A\u4E3B\u673A\u7684\u8BE6\u7EC6\u4FE1\u606F</span>
$ <span class="token function">git</span> remote show name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>git remote</code>\u547D\u4EE4\u7684\u5B9E\u8D28\u662F\u5728<code>.git/config</code>\u6587\u4EF6\u6DFB\u52A0\u4E0B\u9762\u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ git remote add bravo ../bravo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[remote &quot;bravo&quot;]
    url = ../bravo/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[t];function d(r,c){return n(),s("div",null,o)}var v=e(a,[["render",d],["__file","git-remote.html.vue"]]);export{v as default};
