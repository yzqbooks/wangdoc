import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-bede4f5a.js";const i={},c=s(`<h1 id="git-branch" tabindex="-1"><a class="header-anchor" href="#git-branch" aria-hidden="true">#</a> git branch</h1><p><code>git branch</code>是分支操作命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有本地分支</span>
$ <span class="token function">git</span> branch

<span class="token comment"># 列出所有本地分支和远程分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）新建一个分支</p><p>直接在<code>git branch</code>后面跟上分支名，就表示新建该分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>新建一个分支，指向当前 commit。本质是在<code>refs/heads/</code>目录中生成一个文件，文件名为分支名，内容为当前 commit 的哈希值。</p><p>注意，创建后，还是停留在原来分支，需要用<code>git checkout</code>切换到新建分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>-b</code>参数，可以新建的同时，切换到新分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> NewBranch MyBranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）删除分支</p><p><code>-d</code>参数用来删除一个分支，前提是该分支没有未合并的变动。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>强制删除一个分支，不管有没有未合并变化。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>分支名<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）分支改名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> twitter-experiment feature132
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> feature132
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种写法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 为当前分支改名</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-m</span> twitter-experiment

<span class="token comment"># 为指定分支改名</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-m</span> feature132 twitter-experiment

<span class="token comment"># 如果有重名分支，强制改名</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-m</span> feature132 twitter-experiment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）查看 merge 情况</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Shows branches that are all merged in to your current branch</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">--merged</span>

<span class="token comment"># Shows branches that are not merged in to your current branch</span>
$ <span class="token function">git</span> branch --no-merged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令行参数" tabindex="-1"><a class="header-anchor" href="#命令行参数" aria-hidden="true">#</a> 命令行参数</h2><h3 id="d" tabindex="-1"><a class="header-anchor" href="#d" aria-hidden="true">#</a> -d</h3><p><code>-d</code>参数用于删除一个指定分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branchname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),r=[c];function d(t,l){return e(),n("div",null,r)}const u=a(i,[["render",d],["__file","git-branch.html.vue"]]);export{u as default};