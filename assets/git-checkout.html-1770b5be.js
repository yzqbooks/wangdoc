import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as n}from"./app-bede4f5a.js";const c={},i=n(`<h1 id="git-checkout" tabindex="-1"><a class="header-anchor" href="#git-checkout" aria-hidden="true">#</a> git checkout</h1><p><code>git checkout</code>命令有多种用途。</p><p>（1）用来切换分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令表示回到先前所在的分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令表示切换到<code>develop</code>分支。</p><p>（2）切换到指定快照（commit）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token operator">&lt;</span>commitID<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）将工作区指定的文件恢复到上次提交的状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -- <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令将指定文件从暂存区复制到工作区，同时丢弃工作区对该文件的修改。所以，使用的时候必须小心，它会丢失对当前文件的修改，回到上一次保存到暂存区的状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout HEAD~ -- <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它还可以从其他分支或提交恢复指定文件，上例是<code>HEAD~</code>，这会同时改变暂存区和工作区。</p><p><code>-p</code>参数表示进入交互模式，手动选择恢复哪些文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）切换到某个tag</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout tags/1.1.4
<span class="token comment"># 或者</span>
$ <span class="token function">git</span> checkout <span class="token number">1.1</span>.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面第二种用法的前提是，本地不能有叫做1.1.4的分支。</p><p>（5）生成新的分支。</p><p><code>-b</code>参数用于生成一个新的分支，并切换到该分支。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> new_branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),d=[i];function t(l,o){return a(),s("div",null,d)}const u=e(c,[["render",t],["__file","git-checkout.html.vue"]]);export{u as default};