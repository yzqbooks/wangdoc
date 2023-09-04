import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e}from"./app-bede4f5a.js";const c={},o=e(`<h1 id="多文件项目" tabindex="-1"><a class="header-anchor" href="#多文件项目" aria-hidden="true">#</a> 多文件项目</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>一个软件项目往往包含多个源码文件，编译时需要将这些文件一起编译，生成一个可执行文件。</p><p>假定一个项目有两个源码文件<code>foo.c</code>和<code>bar.c</code>，其中<code>foo.c</code>是主文件，<code>bar.c</code>是库文件。所谓“主文件”，就是包含了<code>main()</code>函数的项目入口文件，里面会引用库文件定义的各种函数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// File foo.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 5!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，主文件<code>foo.c</code>调用了函数<code>add()</code>，这个函数是在库文件<code>bar.c</code>里面定义的。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// File bar.c</span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，将这两个文件一起编译。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcc <span class="token parameter variable">-o</span> foo foo.c bar.c

<span class="token comment"># 更省事的写法</span>
$ gcc <span class="token parameter variable">-o</span> foo *.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，gcc 的<code>-o</code>参数指定生成的二进制可执行文件的文件名，本例是<code>foo</code>。</p><p>这个命令运行后，编译器会发出警告，原因是在编译<code>foo.c</code>的过程中，编译器发现一个不认识的函数<code>add()</code>，<code>foo.c</code>里面没有这个函数的原型或者定义。因此，最好修改一下<code>foo.c</code>，在文件头部加入<code>add()</code>的原型。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// File foo.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 5!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在再编译就没有警告了。</p><p>你可能马上就会想到，如果有多个文件都使用这个函数<code>add()</code>，那么每个文件都需要加入函数原型。一旦需要修改函数<code>add()</code>（比如改变参数的数量），就会非常麻烦，需要每个文件逐一改动。所以，通常的做法是新建一个专门的头文件<code>bar.h</code>，放置所有在<code>bar.c</code>里面定义的函数的原型。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// File bar.h</span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用<code>include</code>命令，在用到这个函数的源码文件里面加载这个头文件<code>bar.h</code>。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// File foo.c</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;bar.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 5!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>#include &quot;bar.h&quot;</code>表示加入头文件<code>bar.h</code>。这个文件没有放在尖括号里面，表示它是用户提供的；它没有写路径，就表示与当前源码文件在同一个目录。</p><p>然后，最好在<code>bar.c</code>里面也加载这个头文件，这样可以让编译器验证，函数原型与函数定义是否一致。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// File bar.c</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;bar.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在重新编译，就可以顺利得到二进制可执行文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcc <span class="token parameter variable">-o</span> foo foo.c bar.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重复加载" tabindex="-1"><a class="header-anchor" href="#重复加载" aria-hidden="true">#</a> 重复加载</h2><p>头文件里面还可以加载其他头文件，因此有可能产生重复加载。比如，<code>a.h</code>和<code>b.h</code>都加载了<code>c.h</code>，然后<code>foo.c</code>同时加载了<code>a.h</code>和<code>b.h</code>，这意味着<code>foo.c</code>会编译两次<code>c.h</code>。</p><p>最好避免这种重复加载，虽然多次定义同一个函数原型并不会报错，但是有些语句重复使用会报错，比如多次重复定义同一个 Struct 数据结构。解决重复加载的常见方法是，在头文件里面设置一个专门的宏，加载时一旦发现这个宏存在，就不再继续加载当前文件了。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// File bar.h</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">BAR_H</span></span>
  <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">BAR_H</span></span>
  <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，头文件<code>bar.h</code>使用<code>#ifndef</code>和<code>#endif</code>设置了一个条件判断。每当加载这个头文件时，就会执行这个判断，查看有没有设置过宏<code>BAR_H</code>。如果设置过了，表明这个头文件已经加载过了，就不再重复加载了，反之就先设置一下这个宏，然后加载函数原型。</p><h2 id="extern-说明符" tabindex="-1"><a class="header-anchor" href="#extern-说明符" aria-hidden="true">#</a> extern 说明符</h2><p>当前文件还可以使用其他文件定义的变量，这时要使用<code>extern</code>说明符，在当前文件中声明，这个变量是其他文件定义的。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">extern</span> <span class="token keyword">int</span> myVar<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例中，<code>extern</code>说明符告诉编译器，变量<code>myvar</code>是其他脚本文件声明的，不需要在这里为它分配内存空间。</p><p>由于不需要分配内存空间，所以<code>extern</code>声明数组时，不需要给出数组长度。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">extern</span> <span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种共享变量的声明，可以直接写在源码文件里面，也可以放在头文件中，通过<code>#include</code>指令加载。</p><h2 id="static-说明符" tabindex="-1"><a class="header-anchor" href="#static-说明符" aria-hidden="true">#</a> static 说明符</h2><p>正常情况下，当前文件内部的全局变量，可以被其他文件使用。有时候，不希望发生这种情况，而是希望某个变量只局限在当前文件内部使用，不要被其他文件引用。</p><p>这时可以在声明变量的时候，使用<code>static</code>关键字，使得该变量变成当前文件的私有变量。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">int</span> foo <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例中，变量<code>foo</code>只能在当前文件里面使用，其他文件不能引用。</p><h2 id="编译策略" tabindex="-1"><a class="header-anchor" href="#编译策略" aria-hidden="true">#</a> 编译策略</h2><p>多个源码文件的项目，编译时需要所有文件一起编译。哪怕只是修改了一行，也需要从头编译，非常耗费时间。</p><p>为了节省时间，通常的做法是将编译拆分成两个步骤。第一步，使用 GCC 的<code>-c</code>参数，将每个源码文件单独编译为对象文件（object file）。第二步，将所有对象文件链接在一起，合并生成一个二进制可执行文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcc <span class="token parameter variable">-c</span> foo.c <span class="token comment"># 生成 foo.o</span>
$ gcc <span class="token parameter variable">-c</span> bar.c <span class="token comment"># 生成 bar.o</span>

<span class="token comment"># 更省事的写法</span>
$ gcc <span class="token parameter variable">-c</span> *.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令为源码文件<code>foo.c</code>和<code>bar.c</code>，分别生成对象文件<code>foo.o</code>和<code>bar.o</code>。</p><p>对象文件不是可执行文件，只是编译过程中的一个阶段性产物，文件名与源码文件相同，但是后缀名变成了<code>.o</code>。</p><p>得到所有的对象文件以后，再次使用<code>gcc</code>命令，将它们通过链接，合并生成一个可执行文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gcc <span class="token parameter variable">-o</span> foo foo.o bar.o

<span class="token comment"># 更省事的写法</span>
$ gcc <span class="token parameter variable">-o</span> foo *.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以后，修改了哪一个源文件，就将这个文件重新编译成对象文件，其他文件不用重新编译，可以继续使用原来的对象文件，最后再将所有对象文件重新链接一次就可以了。由于链接的耗时大大短于编译，这样做就节省了大量时间。</p><h2 id="make-命令" tabindex="-1"><a class="header-anchor" href="#make-命令" aria-hidden="true">#</a> make 命令</h2><p>大型项目的编译，如果全部手动完成，是非常麻烦的，容易出错。一般会使用专门的自动化编译工具，比如 make。</p><p>make 是一个命令行工具，使用时会自动在当前目录下搜索配置文件 makefile（也可以写成 Makefile）。该文件定义了所有的编译规则，每个编译规则对应一个编译产物。为了得到这个编译产物，它需要知道两件事。</p><ul><li>依赖项（生成该编译产物，需要用到哪些文件）</li><li>生成命令（生成该编译产物的命令）</li></ul><p>比如，对象文件<code>foo.o</code>是一个编译产物，它的依赖项是<code>foo.c</code>，生成命令是<code>gcc -c foo.c</code>。对应的编译规则如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>foo<span class="token punctuation">.</span>o<span class="token operator">:</span> foo<span class="token punctuation">.</span>c
  gcc <span class="token operator">-</span>c foo<span class="token punctuation">.</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，编译规则由两行组成。第一行首先是编译产物，冒号后面是它的依赖项，第二行则是生成命令。</p><p>注意，第二行的缩进必须使用 Tab 键，如果使用空格键会报错。</p><p>完整的配置文件 makefile 由多个编译规则组成，可能是下面的样子。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>foo<span class="token operator">:</span> foo<span class="token punctuation">.</span>o bar<span class="token punctuation">.</span>o
  gcc <span class="token operator">-</span>o foo foo<span class="token punctuation">.</span>o bar<span class="token punctuation">.</span>o

foo<span class="token punctuation">.</span>o<span class="token operator">:</span> bar<span class="token punctuation">.</span>h foo<span class="token punctuation">.</span>c
  gcc <span class="token operator">-</span>c foo<span class="token punctuation">.</span>c

bar<span class="token punctuation">.</span>o<span class="token operator">:</span> bar<span class="token punctuation">.</span>h bar<span class="token punctuation">.</span>c
  gcc <span class="token operator">-</span>c bar<span class="token punctuation">.</span>c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是 makefile 的一个示例文件。它包含三个编译规则，对应三个编译产物（<code>foo.o</code>、<code>bar.o</code>和<code>foo</code>），每个编译规则之间使用空行分隔。</p><p>有了 makefile，编译时，只要在 make 命令后面指定编译目标（编译产物的名字），就会自动调用对应的编译规则。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">make</span> foo.o

<span class="token comment"># or</span>
$ <span class="token function">make</span> bar.o

<span class="token comment"># or</span>
$ <span class="token function">make</span> foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，make 命令会根据不同的命令，生成不同的编译产物。</p><p>如果省略了编译目标，<code>make</code>命令会执行第一条编译规则，构建相应的产物。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例中，<code>make</code>后面没有编译目标，所以会执行 makefile 的第一条编译规则，本例是<code>make foo</code>。由于用户期望执行<code>make</code>后得到最终的可执行文件，所以建议总是把最终可执行文件的编译规则，放在 makefile 文件的第一条。makefile 本身对编译规则没有顺序要求。</p><p>make 命令的强大之处在于，它不是每次执行命令，都会进行编译，而是会检查是否有必要重新编译。具体方法是，通过检查每个源码文件的时间戳，确定在上次编译之后，哪些文件发生过变动。然后，重新编译那些受到影响的编译产物（即编译产物直接或间接依赖于那些发生变动的源码文件），不受影响的编译产物，就不会重新编译。</p><p>举例来说，上次编译之后，修改了<code>foo.c</code>，没有修改<code>bar.c</code>和<code>bar.h</code>。于是，重新运行<code>make foo</code>命令时，Make 就会发现<code>bar.c</code>和<code>bar.h</code>没有变动过，因此不用重新编译<code>bar.o</code>，只需要重新编译<code>foo.o</code>。有了新的<code>foo.o</code>以后，再跟<code>bar.o</code>一起，重新编译成新的可执行文件<code>foo</code>。</p><p>Make 这样设计的最大好处，就是自动处理编译过程，只重新编译变动过的文件，因此大大节省了时间。</p>`,68),p=[o];function i(d,t){return a(),s("div",null,p)}const u=n(c,[["render",i],["__file","multifile.html.vue"]]);export{u as default};