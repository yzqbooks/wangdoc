import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-bede4f5a.js";const c={},d=s(`<h1 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h1><p>分支是 Git 最重要的概念之一，也是最常用的操作之一。几乎所有 Git 操作流程都离不开分支。</p><p><code>git branch</code>命令可以列出本地的所有分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个名为<code>MyBranch</code>的新分支，但是依然停留在当前分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在远程主机<code>origin</code>上创建一个<code>MyBranch</code>的分支，并与本地的同名分支建立追踪关系。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前分支改名为<code>MyBranch</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-m</span> MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除<code>MyBranch</code>分支，前提是该分支没有未合并的变动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>强制删除<code>MyBranch</code>分支，不管有没有未合并变化。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-D</span> MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换到<code>MyBranch</code>分支，当前的工作区会变为<code>MyBranch</code>分支的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>基于<code>MyBranch</code>分支创建一个新的<code>NewBranch</code>分支，新的<code>NewBranch</code>分支将成为当前的工作区。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> NewBranch MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),i=[d];function r(l,o){return e(),n("div",null,i)}const p=a(c,[["render",r],["__file","branch.html.vue"]]);export{p as default};