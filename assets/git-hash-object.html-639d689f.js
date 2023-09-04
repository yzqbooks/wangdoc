import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as e,e as n}from"./app-bede4f5a.js";const t={},i=n(`<h1 id="git-hash-object" tabindex="-1"><a class="header-anchor" href="#git-hash-object" aria-hidden="true">#</a> git hash-object</h1><p><code>git hash-object</code>命令计算一个文件的git对象ID，即SHA1的哈希值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">|</span> <span class="token function">git</span> hash-object <span class="token parameter variable">--stdin</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hola&quot;</span> <span class="token operator">|</span> <span class="token function">git</span> hash-object <span class="token parameter variable">-w</span> <span class="token parameter variable">--stdin</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数</p><ul><li>w 将对象写入对象数据库</li><li>stdin 表示从标准输入读取，而不是从本地文件读取。</li></ul>`,5),o=[i];function c(l,r){return s(),e("div",null,o)}const h=a(t,[["render",c],["__file","git-hash-object.html.vue"]]);export{h as default};