import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-bede4f5a.js";const c={},p=e(`<h1 id="signal-h" tabindex="-1"><a class="header-anchor" href="#signal-h" aria-hidden="true">#</a> signal.h</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>signal.h</code>提供了信号（即异常情况）的处理工具。所谓“信号”（signal），可以理解成系统与程序之间的短消息，主要用来表示运行时错误，或者发生了异常事件。</p><p>头文件<code>signal.h</code>定义了一系列宏，表示不同的信号。</p><ul><li>SIGABRT：异常中止（可能由于调用了 abort() 方法）。</li><li>SIGFPE：算术运算发生了错误（可能是除以 0 或者溢出）。</li><li>SIGILL：无效指令。</li><li>SIGINT：中断。</li><li>SIGSEGV：无效内存访问。</li><li>SIGTERM：终止请求。</li></ul><p>上面每个宏的值都是一个正整数常量。</p><h2 id="signal" tabindex="-1"><a class="header-anchor" href="#signal" aria-hidden="true">#</a> signal()</h2><p>头文件<code>signal.h</code>还定义了一个<code>signal()</code>函数，用来指定某种信号的处理函数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>signal()</code>接受两个参数，第一个参数是某种信号的宏，第二个参数是处理这个信号的函数指针<code>handler</code>。</p><p>信号处理函数<code>handler</code>接受一个 int 类型的参数，表示信号类型。它的原型如下。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>func<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>handler</code>函数体内部可以根据这个整数，判断到底接受到了哪种信号，因为多个信号可以共用同一个处理函数。一旦处理函数执行完成，程序会从信号发生点恢复执行。但是，如果遇到 SIGABRT 信号，处理函数执行完成，系统会让程序中止。</p><p>当系统向程序发送信号时，程序可以忽略信号，即不指定处理函数。</p><p><code>signal()</code>的返回值是前一个处理函数的指针，常常把它保存在变量之中，当新的处理函数执行完，再恢复以前的处理函数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>orig_handler<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
orig_handler <span class="token operator">=</span> <span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// SIGINT 信号发生之后</span>
<span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> orig_handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>signal()</code>为信号<code>SIGINT</code>指定了新的处理函数<code>handler</code>，把原来的处理函数保存在变量<code>orig_handler</code>里面。等到<code>handler</code>这个函数用过之后，再恢复原来的处理函数。</p><h2 id="信号相关的宏" tabindex="-1"><a class="header-anchor" href="#信号相关的宏" aria-hidden="true">#</a> 信号相关的宏</h2><p><code>signal.h</code>还提供了信号相关的宏。</p><p>（1）SIG_DFL</p><p>SIG_DFL 表示默认的处理函数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> SIG_DFL<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例中，SIGINT 的处理函数是默认处理函数，由当前实现决定。</p><p>（2）SIG_IGN</p><p>SIG_IGN 表示忽略该信号。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> SIG_IGN<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例表示不对 SIGINT 信号进行处理。由于程序运行时按下 Ctrl + c 是发出 SIGINT 信号，所以使用该语句后，程序无法用 Ctrl + c 终止。</p><p>（3）SIG_ERR</p><p>SIG_ERR 是信号处理函数发生错误时，<code>signal()</code>的返回值。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> handler<span class="token punctuation">)</span> <span class="token operator">==</span> SIG_ERR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">perror</span><span class="token punctuation">(</span><span class="token string">&quot;signal(SIGINT, handler) failed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例可以判断<code>handler</code>处理 SIGINT 时，是否发生错误。</p><h2 id="raise" tabindex="-1"><a class="header-anchor" href="#raise" aria-hidden="true">#</a> raise()</h2><p><code>raise()</code>函数用来在程序中发出信号。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">raise</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它接受一个信号值作为参数，表示发出该信号。它的返回值是一个整数，可以用来判断信号发出是否成功，0 表示成功，非 0 表示失败。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">int</span> sig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Handler called for signal %d\\n&quot;</span><span class="token punctuation">,</span> sig<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">signal</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">raise</span><span class="token punctuation">(</span>SIGINT<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>raise()</code>触发 SIGINT 信号，导致 handler 函数执行。</p>`,37),t=[p];function i(o,l){return a(),s("div",null,t)}const r=n(c,[["render",i],["__file","signal.h.html.vue"]]);export{r as default};