import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as t,c as p,a as n,b as c,d as o,e as i}from"./app-bede4f5a.js";const l={},u=i(`<h1 id="time-h" tabindex="-1"><a class="header-anchor" href="#time-h" aria-hidden="true">#</a> time.h</h1><h2 id="time-t" tabindex="-1"><a class="header-anchor" href="#time-t" aria-hidden="true">#</a> time_t</h2><p>time_t 是一个表示时间的类型别名，可以视为国际标准时 UTC。它可能是浮点数，也可能是整数，Unix 系统一般是整数。</p><p>许多系统上，time_t 表示自时间纪元（time epoch）以来的秒数。Unix 的时间纪元是国际标准时 UTC 的1970年1月1日的零分零秒。time_t 如果为负数，则表示时间纪元之前的时间。</p><p>time_t 一般是32位或64位整数类型的别名，具体类型取决于当前系统。如果是32位带符号整数，time_t 可以表示的时间到 2038年1月19日03:14:07 UTC 为止；如果是32位无符号整数，则表示到2106年。如果是64位带符号整数，可以表示<code>-2930</code>亿年到<code>+2930</code>亿年的时间范围。</p><h2 id="struct-tm" tabindex="-1"><a class="header-anchor" href="#struct-tm" aria-hidden="true">#</a> struct tm</h2><p>struct tm 是一个数据结构，用来保存时间的各个组成部分，比如小时、分钟、秒、日、月、年等。下面是它的结构。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">tm</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> tm_sec<span class="token punctuation">;</span>    <span class="token comment">// 秒数 [0, 60]</span>
  <span class="token keyword">int</span> tm_min<span class="token punctuation">;</span>    <span class="token comment">// 分钟 [0, 59]</span>
  <span class="token keyword">int</span> tm_hour<span class="token punctuation">;</span>   <span class="token comment">// 小时 [0, 23]</span>
  <span class="token keyword">int</span> tm_mday<span class="token punctuation">;</span>   <span class="token comment">// 月份的天数 [1, 31]</span>
  <span class="token keyword">int</span> tm_mon<span class="token punctuation">;</span>    <span class="token comment">// 月份 [0, 11]，一月用 0 表示</span>
  <span class="token keyword">int</span> tm_year<span class="token punctuation">;</span>   <span class="token comment">// 距离 1900 的年数</span>
  <span class="token keyword">int</span> tm_wday<span class="token punctuation">;</span>   <span class="token comment">// 星期几 [0, 6]，星期天用 0 表示</span>
  <span class="token keyword">int</span> tm_yday<span class="token punctuation">;</span>   <span class="token comment">// 距离1月1日的天数 [0, 365]</span>
  <span class="token keyword">int</span> tm_isdst<span class="token punctuation">;</span>  <span class="token comment">// 是否采用夏令时，1 表示采用，0 表示未采用</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time()</h2><p><code>time()</code>函数返回从时间纪元到现在经过的秒数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">time_t</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token class-name">time_t</span><span class="token operator">*</span> returned_value<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>time()</code>接受一个 time_t 指针作为参数，返回值会写入指针地址。参数可以是空指针 NULL。</p><p><code>time()</code>的返回值是 time_t 类型的当前时间。 如果计算机无法提供当前的秒数，或者返回值太大，无法用<code>time_t</code>类型表示，<code>time()</code>函数就返回<code>-1</code>。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">time_t</span> now<span class="token punctuation">;</span>

<span class="token comment">// 写法一    </span>
now <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 写法二    </span>
<span class="token function">time</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例展示了将当前时间存入变量<code>now</code>的两种写法。</p><p>如果要知道某个操作耗费的精确时间，需要调用两次<code>time()</code>，再将两次的返回值相减。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">time_t</span> begin <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ... 执行某些操作</span>

<span class="token class-name">time_t</span> end <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> end <span class="token operator">-</span> begin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，上面的方法只能精确到秒。</p><h2 id="ctime" tabindex="-1"><a class="header-anchor" href="#ctime" aria-hidden="true">#</a> ctime()</h2><p><code>ctime()</code>用来将 time_t 类型的值直接输出为人类可读的格式。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span><span class="token operator">*</span> <span class="token function">ctime</span><span class="token punctuation">(</span> <span class="token class-name">time_t</span> <span class="token keyword">const</span> <span class="token operator">*</span> time_value <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ctime()</code>的参数是一个 time_t 指针，返回一个字符串指针。该字符串的格式类似“Sun Jul 4 04:02:48 1976\\n\\0”，尾部包含换行符和字符串终止标志。</p><p>下面是一个例子。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">time_t</span> now<span class="token punctuation">;</span> 

now <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 Sun Feb 28 18:47:25 2021</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> <span class="token function">ctime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code>ctime()</code>会在字符串尾部自动添加换行符。</p><h2 id="localtime-gmtime" tabindex="-1"><a class="header-anchor" href="#localtime-gmtime" aria-hidden="true">#</a> localtime()，gmtime()</h2><p><code>localtime()</code>函数用来将 time_t 类型的时间，转换为当前时区的 struct tm 结构。</p><p><code>gmtime()</code>函数用来将 time_t 类型的时间，转换为 UTC 时间的 struct tm 结构。</p><p>它们的区别就是返回值，前者是本地时间，后者是 UTC 时间。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">tm</span><span class="token operator">*</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">time_t</span><span class="token operator">*</span> timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">tm</span><span class="token operator">*</span> <span class="token function">gmtime</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">time_t</span><span class="token operator">*</span> timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个例子。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">time_t</span> now <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 Local: Sun Feb 28 20:15:27 2021</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Local: %s&quot;</span><span class="token punctuation">,</span> <span class="token function">asctime</span><span class="token punctuation">(</span><span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 UTC  : Mon Mar  1 04:15:27 2021</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;UTC  : %s&quot;</span><span class="token punctuation">,</span> <span class="token function">asctime</span><span class="token punctuation">(</span><span class="token function">gmtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="asctime" tabindex="-1"><a class="header-anchor" href="#asctime" aria-hidden="true">#</a> asctime()</h2><p><code>asctime()</code>函数用来将 struct tm 结构，直接输出为人类可读的格式。该函数会自动在输出的尾部添加换行符。</p><p>用法示例参考上一小节。</p><h2 id="mktime" tabindex="-1"><a class="header-anchor" href="#mktime" aria-hidden="true">#</a> mktime()</h2><p><code>mktime()</code>函数用于把一个 struct tm 结构转换为 time_t 值。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">time_t</span>　<span class="token function">mktime</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">tm</span><span class="token operator">*</span> tm_ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>mktime()</code>的参数是一个 struct tm 指针。</p><p><code>mktime()</code>会自动设置 struct tm 结构里面的<code>tm_wday</code>属性和<code>tm_yday</code>属性，开发者自己不必填写这两个属性。所以，这个函数常用来获得指定时间是星期几（<code>tm_wday</code>）。</p><p>struct tm 结构的<code>tm_isdst</code>属性也可以设为<code>-1</code>，让<code>mktime()</code>决定是否应该采用夏令时。</p><p>下面是一个例子。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">tm</span> some_time <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>tm_year<span class="token operator">=</span><span class="token number">82</span><span class="token punctuation">,</span>   <span class="token comment">// 距离 1900 的年数</span>
  <span class="token punctuation">.</span>tm_mon<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>     <span class="token comment">// 月份 [0, 11]</span>
  <span class="token punctuation">.</span>tm_mday<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">,</span>   <span class="token comment">// 天数 [1, 31]</span>
  <span class="token punctuation">.</span>tm_hour<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">,</span>   <span class="token comment">// 小时 [0, 23]</span>
  <span class="token punctuation">.</span>tm_min<span class="token operator">=</span><span class="token number">00</span><span class="token punctuation">,</span>    <span class="token comment">// 分钟 [0, 59]</span>
  <span class="token punctuation">.</span>tm_sec<span class="token operator">=</span><span class="token number">04</span><span class="token punctuation">,</span>    <span class="token comment">// 秒数 [0, 60]</span>
  <span class="token punctuation">.</span>tm_isdst<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>  <span class="token comment">// 夏令时</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
    
<span class="token class-name">time_t</span> some_time_epoch<span class="token punctuation">;</span>
some_time_epoch <span class="token operator">=</span> <span class="token function">mktime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>some_time<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">// 输出 Mon Apr 12 12:00:04 1982</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> <span class="token function">ctime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>some_time_epoch<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 Is DST: 0</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Is DST: %d\\n&quot;</span><span class="token punctuation">,</span> some_time<span class="token punctuation">.</span>tm_isdst<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="difftime" tabindex="-1"><a class="header-anchor" href="#difftime" aria-hidden="true">#</a> difftime()</h2><p><code>difftime()</code>用来计算两个时间之间的差异。Unix 系统上，直接相减两个 time_t 值，就可以得到相差的秒数，但是为了程序的可移植性，最好还是使用这个函数。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">double</span> <span class="token function">difftime</span><span class="token punctuation">(</span> <span class="token class-name">time_t</span> time1<span class="token punctuation">,</span> <span class="token class-name">time_t</span> time2 <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>difftime()</code>函数接受两个 time_t 类型的时间作为参数，计算 time1 - time2 的差，并把结果转换为秒。</p><p>注意它的返回值是 double 类型。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>
    
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">struct</span> <span class="token class-name">tm</span> time_a <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>tm_year<span class="token operator">=</span><span class="token number">82</span><span class="token punctuation">,</span> 
    <span class="token punctuation">.</span>tm_mon<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span>   
    <span class="token punctuation">.</span>tm_mday<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">,</span> 
    <span class="token punctuation">.</span>tm_hour<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span>  
    <span class="token punctuation">.</span>tm_min<span class="token operator">=</span><span class="token number">00</span><span class="token punctuation">,</span>  
    <span class="token punctuation">.</span>tm_sec<span class="token operator">=</span><span class="token number">04</span><span class="token punctuation">,</span>  
    <span class="token punctuation">.</span>tm_isdst<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
  <span class="token keyword">struct</span> <span class="token class-name">tm</span> time_b <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>tm_year<span class="token operator">=</span><span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>tm_mon<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>  
    <span class="token punctuation">.</span>tm_mday<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">,</span> 
    <span class="token punctuation">.</span>tm_hour<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">,</span> 
    <span class="token punctuation">.</span>tm_min<span class="token operator">=</span><span class="token number">27</span><span class="token punctuation">,</span>  
    <span class="token punctuation">.</span>tm_sec<span class="token operator">=</span><span class="token number">00</span><span class="token punctuation">,</span>  
    <span class="token punctuation">.</span>tm_isdst<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
    
  <span class="token class-name">time_t</span> cal_a <span class="token operator">=</span> <span class="token function">mktime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>time_a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">time_t</span> cal_b <span class="token operator">=</span> <span class="token function">mktime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>time_b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token keyword">double</span> diff <span class="token operator">=</span> <span class="token function">difftime</span><span class="token punctuation">(</span>cal_b<span class="token punctuation">,</span> cal_a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
  <span class="token keyword">double</span> years <span class="token operator">=</span> diff <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">/</span> <span class="token number">24</span> <span class="token operator">/</span> <span class="token number">365.2425</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 输出 1217996816.000000 seconds (38.596783 years) between events</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f seconds (%f years) between events\\n&quot;</span><span class="token punctuation">,</span> diff<span class="token punctuation">,</span> years<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，折算年份时，为了尽量准确，使用了一年的准确长度 365.2425 天，这样可以抵消闰年的影响。</p><h2 id="strftime" tabindex="-1"><a class="header-anchor" href="#strftime" aria-hidden="true">#</a> strftime()</h2><p><code>strftime()</code>函数用来将 struct tm 结构转换为一个指定格式的字符串，并复制到指定地址。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">size_t</span> <span class="token function">strftime</span><span class="token punctuation">(</span>
  <span class="token keyword">char</span><span class="token operator">*</span> str<span class="token punctuation">,</span> 
  <span class="token class-name">size_t</span> maxsize<span class="token punctuation">,</span> 
  <span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> format<span class="token punctuation">,</span> 
  <span class="token keyword">const</span> <span class="token keyword">struct</span> <span class="token class-name">tm</span><span class="token operator">*</span> timeptr
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>strftime()</code>接受四个参数。</p><ul><li>第一个参数：目标字符串的指针。</li><li>第二个参数：目标字符串可以接受的最大长度。</li><li>第三个参数：格式字符串。</li><li>第四个参数：struct tm 结构。</li></ul><p>如果执行成功（转换并复制），<code>strftime()</code>函数返回复制的字符串长度；如果执行失败，返回<code>-1</code>。</p><p>下面是一个例子。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;time.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">char</span> s<span class="token punctuation">[</span><span class="token number">128</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token class-name">time_t</span> now <span class="token operator">=</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// %c: 本地时间</span>
  <span class="token function">strftime</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token keyword">sizeof</span> s<span class="token punctuation">,</span> <span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">puts</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Sun Feb 28 22:29:00 2021</span>

  <span class="token comment">// %A: 完整的星期日期的名称</span>
  <span class="token comment">// %B: 完整的月份名称</span>
  <span class="token comment">// %d: 月份的天数</span>
  <span class="token function">strftime</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token keyword">sizeof</span> s<span class="token punctuation">,</span> <span class="token string">&quot;%A, %B %d&quot;</span><span class="token punctuation">,</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">puts</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Sunday, February 28</span>

  <span class="token comment">// %I: 小时（12小时制）</span>
  <span class="token comment">// %M: 分钟</span>
  <span class="token comment">// %S: 秒数</span>
  <span class="token comment">// %p: AM 或 PM</span>
  <span class="token function">strftime</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token keyword">sizeof</span> s<span class="token punctuation">,</span> <span class="token string">&quot;It&#39;s %I:%M:%S %p&quot;</span><span class="token punctuation">,</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">puts</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// It&#39;s 10:29:00 PM</span>

  <span class="token comment">// %F: ISO 8601 yyyy-mm-dd 格式</span>
  <span class="token comment">// %T: ISO 8601 hh:mm:ss 格式</span>
  <span class="token comment">// %z: ISO 8601 时区</span>
  <span class="token function">strftime</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> <span class="token keyword">sizeof</span> s<span class="token punctuation">,</span> <span class="token string">&quot;ISO 8601: %FT%T%z&quot;</span><span class="token punctuation">,</span> <span class="token function">localtime</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>now<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">puts</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// ISO 8601: 2021-02-28T22:29:00-0800</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是常用的格式占位符。</p><ul><li>%%：输出 % 字符。</li><li>%a：星期几的简写形式，以当地时间计算。</li><li>%A：星期几的完整形式，以当地时间计算。</li><li>%b：月份的简写形式，以当地时间计算。</li><li>%B：月份的完整形式，以当地时间计算。</li><li>%c：日期和时间，使用“%x %X”。</li><li>%d：月份的天数（01-31）。</li><li>%H：小时，采用24小时制（00-23）。</li><li>%I：小时，采用12小时制（00-12）。</li><li>%J：一年的第几天（001-366）。</li><li>%m：月数（01-12）。</li><li>%M：分钟（00～59）。</li><li>%P：AM 或 PM。</li><li>%R：相当于&quot;%H:%M&quot;。</li><li>%S：秒（00-61）。</li><li>%U：一年的第几星期（00-53），以星期日为第1天。</li><li>%w：一星期的第几天，星期日为第0天。</li><li>%W：一年的第几星期(00-53)，以星期一为第1天。</li><li>%x：完整的年月日的日期，以当地时间计算。</li><li>%X：完整的时分秒的时间，以当地时间计算。</li><li>%y：两位数年份（00-99）。</li><li>%Y：四位数年份（例如 1984）。</li><li>%Z：时区的简写。</li></ul><h2 id="timespec-get" tabindex="-1"><a class="header-anchor" href="#timespec-get" aria-hidden="true">#</a> timespec_get()</h2><p><code>timespec_get()</code>用来将当前时间转成距离时间纪元的纳秒数（十亿分之一秒）。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">timespec_get</span> <span class="token punctuation">(</span> <span class="token keyword">struct</span> <span class="token class-name">timespec</span><span class="token operator">*</span> ts<span class="token punctuation">,</span> <span class="token keyword">int</span> base <span class="token punctuation">)</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>timespec_get()</code>接受两个参数。</p><p>第一个参数是 struct timespec 结构指针，用来保存转换后的时间信息。struct timespec 的结构如下。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">timespec</span> <span class="token punctuation">{</span>
  <span class="token class-name">time_t</span> tv_sec<span class="token punctuation">;</span>   <span class="token comment">// 秒数</span>
  <span class="token keyword">long</span>   tv_nsec<span class="token punctuation">;</span>  <span class="token comment">// 纳秒</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个参数是一个整数，表示时间计算的起点。标准只给出了宏 TIME_UTC 这一个可能的值，表示返回距离时间纪元的秒数。</p><p>下面是一个例子。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">timespec</span> ts<span class="token punctuation">;</span>
    
<span class="token function">timespec_get</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>ts<span class="token punctuation">,</span> TIME_UTC<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">// 1614581530 s, 806325800 ns</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%ld s, %ld ns\\n&quot;</span><span class="token punctuation">,</span> ts<span class="token punctuation">.</span>tv_sec<span class="token punctuation">,</span> ts<span class="token punctuation">.</span>tv_nsec<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token keyword">double</span> float_time <span class="token operator">=</span> ts<span class="token punctuation">.</span>tv_sec <span class="token operator">+</span> ts<span class="token punctuation">.</span>tv_nsec<span class="token operator">/</span><span class="token number">1000000000.0</span><span class="token punctuation">;</span>

<span class="token comment">// 1614581530.806326 seconds since epoch</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f seconds since epoch\\n&quot;</span><span class="token punctuation">,</span> float_time<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clock" tabindex="-1"><a class="header-anchor" href="#clock" aria-hidden="true">#</a> clock()</h2><p><code>clock()</code>函数返回从程序开始执行到当前的 CPU 时钟周期。一个时钟周期等于 CPU 频率的倒数，比如 CPU 的频率如果是 1G Hz，表示1秒内时钟信号可以变化 10^9 次，那么每个时钟周期就是 10^-9 秒。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">clock_t</span>　<span class="token function">clock</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>clock()</code>函数返回一个数字，表示从程序开始到现在的 CPU 时钟周期的次数。这个值的类型是 clock_t，一般是 long int 类型。</p><p>为了把这个值转换为秒，应该把它除以常量<code>CLOCKS_PER_SEC</code>（每秒的时钟周期），这个常量也由<code>time.h</code>定义。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;CPU time: %f\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span>CLOCKS_PER_SEC<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面示例可以输出程序从开始到运行到这一行所花费的秒数。</p><p>如果计算机无法提供 CPU 时间，或者返回值太大，无法用<code>clock_t</code>类型表示，<code>clock()</code>函数就返回<code>-1</code>。</p><p>为了知道某个操作所耗费的精确时间，需要调用两次<code>clock()</code>，然后将两次的返回值相减。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token class-name">clock_t</span> start <span class="token operator">=</span> <span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ... 执行某些操作</span>

<span class="token class-name">clock_t</span> end <span class="token operator">=</span> <span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">long</span> <span class="token keyword">double</span> seconds <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span><span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> CLOCKS_PER_SEC<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,80),d={href:"https://serhack.me/articles/measure-execution-time-program/",target:"_blank",rel:"noopener noreferrer"};function r(k,m){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[c("How to Measure Execution Time of a Program"),o(s)])])])])}const h=a(l,[["render",r],["__file","time.h.html.vue"]]);export{h as default};