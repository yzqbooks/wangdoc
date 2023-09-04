import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as n}from"./app-bede4f5a.js";const d={},c=n(`<h1 id="bash-行操作" tabindex="-1"><a class="header-anchor" href="#bash-行操作" aria-hidden="true">#</a> Bash 行操作</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>Bash 内置了 Readline 库，具有这个库提供的很多“行操作”功能，比如命令的自动补全，可以大大加快操作速度。</p><p>这个库默认采用 Emacs 快捷键，也可以改成 Vi 快捷键。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的命令可以改回 Emacs 快捷键。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> emacs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想永久性更改编辑模式（Emacs / Vi），可以将命令写在<code>~/.inputrc</code>文件，这个文件是 Readline 的配置文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> editing-mode <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本章介绍的快捷键都属于 Emacs 模式。Vi 模式的快捷键，读者可以参考 Vi 编辑器的教程。</p><p>Bash 默认开启这个库，但是允许关闭。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">bash</span> <span class="token parameter variable">--noediting</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code>--noediting</code>参数关闭了 Readline 库，启动的 Bash 就不带有行操作功能。</p><h2 id="光标移动" tabindex="-1"><a class="header-anchor" href="#光标移动" aria-hidden="true">#</a> 光标移动</h2><p>Readline 提供快速移动光标的快捷键。</p><ul><li><code>Ctrl + a</code>：移到行首。</li><li><code>Ctrl + b</code>：向行首移动一个字符，与左箭头作用相同。</li><li><code>Ctrl + e</code>：移到行尾。</li><li><code>Ctrl + f</code>：向行尾移动一个字符，与右箭头作用相同。</li><li><code>Alt + f</code>：移动到当前单词的词尾。</li><li><code>Alt + b</code>：移动到当前单词的词首。</li></ul><p>上面快捷键的 Alt 键，也可以用 ESC 键代替。</p><h2 id="清除屏幕" tabindex="-1"><a class="header-anchor" href="#清除屏幕" aria-hidden="true">#</a> 清除屏幕</h2><p><code>Ctrl + l</code>快捷键可以清除屏幕，即将当前行移到屏幕的第一行，与<code>clear</code>命令作用相同。</p><h2 id="编辑操作" tabindex="-1"><a class="header-anchor" href="#编辑操作" aria-hidden="true">#</a> 编辑操作</h2><p>下面的快捷键可以编辑命令行内容。</p><ul><li><code>Ctrl + d</code>：删除光标位置的字符（delete）。</li><li><code>Ctrl + w</code>：删除光标前面的单词。</li><li><code>Ctrl + t</code>：光标位置的字符与它前面一位的字符交换位置（transpose）。</li><li><code>Alt + t</code>：光标位置的词与它前面一位的词交换位置（transpose）。</li><li><code>Alt + l</code>：将光标位置至词尾转为小写（lowercase）。</li><li><code>Alt + u</code>：将光标位置至词尾转为大写（uppercase）。</li></ul><p>使用<code>Ctrl + d</code>的时候，如果当前行没有任何字符，会导致退出当前 Shell，所以要小心。</p><p>剪切和粘贴快捷键如下。</p><ul><li><code>Ctrl + k</code>：剪切光标位置到行尾的文本。</li><li><code>Ctrl + u</code>：剪切光标位置到行首的文本。</li><li><code>Alt + d</code>：剪切光标位置到词尾的文本。</li><li><code>Alt + Backspace</code>：剪切光标位置到词首的文本。</li><li><code>Ctrl + y</code>：在光标位置粘贴文本。</li></ul><p>同样地，Alt 键可以用 Esc 键代替。</p><h2 id="自动补全" tabindex="-1"><a class="header-anchor" href="#自动补全" aria-hidden="true">#</a> 自动补全</h2><p>命令输入到一半的时候，可以按一下 Tab 键，Readline 会自动补全命令或路径。比如，输入<code>cle</code>，再按下 Tab 键，Bash 会自动将这个命令补全为<code>clear</code>。</p><p>如果符合条件的命令或路径有多个，就需要连续按两次 Tab 键，Bash 会提示所有符合条件的命令或路径。</p><p>除了命令或路径，Tab 还可以补全其他值。如果一个值以<code>$</code>开头，则按下 Tab 键会补全变量；如果以<code>~</code>开头，则补全用户名；如果以<code>@</code>开头，则补全主机名（hostname），主机名以列在<code>/etc/hosts</code>文件里面的主机为准。</p><p>自动补全相关的快捷键如下。</p><ul><li>Tab：完成自动补全。</li><li><code>Alt + ?</code>：列出可能的补全，与连按两次 Tab 键作用相同。</li><li><code>Alt + /</code>：尝试文件路径补全。</li><li><code>Ctrl + x /</code>：先按<code>Ctrl + x</code>，再按<code>/</code>，等同于<code>Alt + ?</code>，列出可能的文件路径补全。</li><li><code>Alt + !</code>：命令补全。</li><li><code>Ctrl + x !</code>：先按<code>Ctrl + x</code>，再按<code>!</code>，等同于<code>Alt + !</code>，命令补全。</li><li><code>Alt + ~</code>：用户名补全。</li><li><code>Ctrl + x ~</code>：先按<code>Ctrl + x</code>，再按<code>~</code>，等同于<code>Alt + ~</code>，用户名补全。</li><li><code>Alt + $</code>：变量名补全。</li><li><code>Ctrl + x $</code>：先按<code>Ctrl + x</code>，再按<code>$</code>，等同于<code>Alt + $</code>，变量名补全。</li><li><code>Alt + @</code>：主机名补全。</li><li><code>Ctrl + x @</code>：先按<code>Ctrl + x</code>，再按<code>@</code>，等同于<code>Alt + @</code>，主机名补全。</li><li><code>Alt + *</code>：在命令行一次性插入所有可能的补全。</li><li><code>Alt + Tab</code>：尝试用<code>.bash_history</code>里面以前执行命令，进行补全。</li></ul><p>上面的<code>Alt</code>键也可以用 ESC 键代替。</p><h2 id="操作历史" tabindex="-1"><a class="header-anchor" href="#操作历史" aria-hidden="true">#</a> 操作历史</h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3><p>Bash 会保留用户的操作历史，即用户输入的每一条命令都会记录。有了操作历史以后，就可以使用方向键的<code>↑</code>和<code>↓</code>，快速浏览上一条和下一条命令。</p><p>退出当前 Shell 的时候，Bash 会将用户在当前 Shell 的操作历史写入<code>~/.bash_history</code>文件，该文件默认储存500个操作。</p><p>环境变量<code>HISTFILE</code>总是指向这个文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HISTFILE</span>
/home/me/.bash_history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>history</code>命令会输出这个文件的全部内容。用户可以看到最近执行过的所有命令，每条命令之前都有行号。越近的命令，排在越后面。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">history</span>
<span class="token punctuation">..</span>.
<span class="token number">498</span> <span class="token builtin class-name">echo</span> Goodbye
<span class="token number">499</span> <span class="token function">ls</span> ~
<span class="token number">500</span> <span class="token builtin class-name">cd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入命令时，按下<code>Ctrl + r</code>快捷键，就可以搜索操作历史，选择以前执行过的命令。这时键入命令的开头部分，Shell 就会自动在历史文件中，查询并显示最近一条匹配的结果，这时按下回车键，就会执行那条命令。</p><p>下面的方法可以快速执行以前执行过的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> Hello World
Hello World

$ <span class="token builtin class-name">echo</span> Goodbye
Goodbye

$ <span class="token operator">!</span>e
<span class="token builtin class-name">echo</span> Goodbye
Goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code>!e</code>表示找出操作历史之中，最近的那一条以<code>e</code>开头的命令并执行。Bash 会先输出那一条命令<code>echo Goodbye</code>，然后直接执行。</p><p>同理，<code>!echo</code>也会执行最近一条以<code>echo</code>开头的命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token operator">!</span>echo
<span class="token builtin class-name">echo</span> Goodbye
Goodbye

$ <span class="token operator">!</span>echo H
<span class="token builtin class-name">echo</span> Goodbye H
Goodbye H

$ <span class="token operator">!</span>echo H G
<span class="token builtin class-name">echo</span> Goodbye H G
Goodbye H G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>!string</code>语法只会匹配命令，不会匹配参数。所以<code>!echo H</code>不会执行<code>echo Hello World</code>，而是会执行<code>echo Goodbye</code>，并把参数<code>H</code>附加在这条命令之后。同理，<code>!echo H G</code>也是等同于<code>echo Goodbye</code>命令之后附加<code>H G</code>。</p><p>由于<code>!string</code>语法会扩展成以前执行过的命令，所以含有<code>!</code>的字符串放在双引号里面，必须非常小心，如果它后面有非空格的字符，就很有可能报错。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;I say:<span class="token entity" title="\\&quot;">\\&quot;</span>hello!<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
bash: <span class="token operator">!</span><span class="token punctuation">\\</span>: event not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令会报错，原因是感叹号后面是一个反斜杠，Bash 会尝试寻找，以前是否执行过反斜杠开头的命令，一旦找不到就会报错。解决方法就是在感叹号前面，也加上反斜杠。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;I say:<span class="token entity" title="\\&quot;">\\&quot;</span>hello\\!<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
I say:<span class="token string">&quot;hello\\!&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history-命令" tabindex="-1"><a class="header-anchor" href="#history-命令" aria-hidden="true">#</a> history 命令</h3><p>前面说过，<code>history</code>命令能显示操作历史，即<code>.bash_history</code>文件的内容。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">history</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用该命令，而不是直接读取<code>.bash_history</code>文件的好处是，它会在所有的操作前加上行号，最近的操作在最后面，行号最大。</p><p>通过定制环境变量<code>HISTTIMEFORMAT</code>，可以显示每个操作的时间。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">HISTTIMEFORMAT</span><span class="token operator">=</span><span class="token string">&#39;%F %T  &#39;</span>
$ <span class="token function">history</span>
<span class="token number">1</span>  <span class="token number">2013</span>-06-09 <span class="token number">10</span>:40:12   <span class="token function">cat</span> /etc/issue
<span class="token number">2</span>  <span class="token number">2013</span>-06-09 <span class="token number">10</span>:40:12   <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>%F</code>相当于<code>%Y - %m - %d</code>，<code>%T</code>相当于<code> %H : %M : %S</code>。</p><p>只要设置<code>HISTTIMEFORMAT</code>这个环境变量，就会在<code>.bash_history</code>文件保存命令的执行时间戳。如果不设置，就不会保存时间戳。</p><p>环境变量<code>HISTSIZE</code>设置保存历史操作的数量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令设置保存过去10000条操作历史。</p><p>如果不希望保存本次操作的历史，可以设置<code>HISTSIZE</code>等于0。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果<code>HISTSIZE=0</code>写入用户主目录的<code>~/.bashrc</code>文件，那么就不会保留该用户的操作历史。如果写入<code>/etc/profile</code>，整个系统都不会保留操作历史。</p><p>环境变量<code>HISTIGNORE</code>可以设置哪些命令不写入操作历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">HISTIGNORE</span><span class="token operator">=</span><span class="token string">&#39;pwd:ls:exit&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例设置，<code>pwd</code>、<code>ls</code>、<code>exit</code>这三个命令不写入操作历史。</p><p>如果想搜索某个以前执行的命令，可以配合<code>grep</code>命令搜索操作历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">history</span> <span class="token operator">|</span> <span class="token function">grep</span> /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令返回<code>.bash_history</code>文件里面，那些包含<code>/usr/bin</code>的命令。</p><p>操作历史的每一条记录都有编号。知道了命令的编号以后，可以用<code>感叹号 + 编号</code>执行该命令。如果想要执行<code>.bash_history</code>里面的第8条命令，可以像下面这样操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token operator">!</span><span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>history</code>命令的<code>-c</code>参数可以清除操作历史。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">history</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="相关快捷键" tabindex="-1"><a class="header-anchor" href="#相关快捷键" aria-hidden="true">#</a> 相关快捷键</h3><p>下面是一些与操作历史相关的快捷键。</p><ul><li><code>Ctrl + p</code>：显示上一个命令，与向上箭头效果相同（previous）。</li><li><code>Ctrl + n</code>：显示下一个命令，与向下箭头效果相同（next）。</li><li><code>Alt + &lt;</code>：显示第一个命令。</li><li><code>Alt + &gt;</code>：显示最后一个命令，即当前的命令。</li><li><code>Ctrl + o</code>：执行历史文件里面的当前条目，并自动显示下一条命令。这对重复执行某个序列的命令很有帮助。</li></ul><p>感叹号<code>!</code>的快捷键如下。</p><ul><li><code>!!</code>：执行上一个命令。</li><li><code>!n</code>：<code>n</code>为数字，执行历史文件里面行号为<code>n</code>的命令。</li><li><code>!-n</code>：执行当前命令之前<code>n</code>条的命令。</li><li><code>!string</code>：执行最近一个以指定字符串<code>string</code>开头的命令。</li><li><code>!?string</code>：执行最近一条包含字符串<code>string</code>的命令。</li><li><code>!$</code>：代表上一个命令的最后一个参数。</li><li><code>!*</code>：代表上一个命令的所有参数，即除了命令以外的所有部分。</li><li><code>^string1^string2</code>：执行最近一条包含<code>string1</code>的命令，将其替换成<code>string2</code>。</li></ul><p>下面是<code>!$</code>和<code>!*</code>的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cp</span> a.txt b.txt
$ <span class="token builtin class-name">echo</span> <span class="token operator">!</span>$
b.txt

$ <span class="token function">cp</span> a.txt b.txt
$ <span class="token builtin class-name">echo</span> <span class="token operator">!</span>*
a.txt b.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>!$</code>代表上一个命令的最后一个参数（<code>b.txt</code>），<code>!*</code>代表上一个命令的所有参数（<code>a.txt b.txt</code>）。</p><p>下面是<code>^string1^string2</code>的例子。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">rm</span> /var/log/httpd/error.log
$ ^error^access
<span class="token function">rm</span> /var/log/httpd/access.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code>^error^access</code>将最近一条含有<code>error</code>的命令里面的<code>error</code>，替换成<code>access</code>。</p><p>如果希望确定是什么命令，然后再执行，可以打开<code>histverify</code>选项。这样的话，使用<code>!</code>快捷键所产生的命令，会先打印出来，等到用户按下回车键后再执行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> histverify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="其他快捷键" tabindex="-1"><a class="header-anchor" href="#其他快捷键" aria-hidden="true">#</a> 其他快捷键</h2><ul><li><code>Ctrl + j</code>：等同于回车键（LINEFEED）。</li><li><code>Ctrl + m</code>：等同于回车键（CARRIAGE RETURN）。</li><li><code>Ctrl + o</code>：等同于回车键，并展示操作历史的下一个命令。</li><li><code>Ctrl + v</code>：将下一个输入的特殊字符变成字面量，比如回车变成<code>^M</code>。</li><li><code>Ctrl + [</code>：等同于 ESC。</li><li><code>Alt + .</code>：插入上一个命令的最后一个词。</li><li><code>Alt + _</code>：等同于<code>Alt + .</code>。</li></ul><p>上面的<code>Alt + .</code>快捷键，对于很长的文件路径，有时会非常方便。因为 Unix 命令的最后一个参数通常是文件路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> foo_bar
$ <span class="token builtin class-name">cd</span> <span class="token comment">#按下 Alt + .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，在<code>cd</code>命令后按下<code>Alt + .</code>，就会自动插入<code>foo_bar</code>。</p>`,94),o=[c];function l(i,t){return s(),a("div",null,o)}const u=e(d,[["render",l],["__file","readline.html.vue"]]);export{u as default};