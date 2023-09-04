import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as i,a as n,b as s,d as t,e as p}from"./app-bede4f5a.js";const l={},u=p(`<h1 id="css高级功能" tabindex="-1"><a class="header-anchor" href="#css高级功能" aria-hidden="true">#</a> CSS高级功能</h1><h2 id="自定义属性" tabindex="-1"><a class="header-anchor" href="#自定义属性" aria-hidden="true">#</a> 自定义属性</h2><p>CSS 提供的属性（比如<code>font-weight</code>、<code>line-height</code>）都是标准给定的，但是 CSS 也允许用户自定义属性，这又称为“CSS 变量”。</p><p>自定义属性跟普通属性一样，也是定义在某个选择器里面，而且只对该选择器有效。因此自定义属性所在区块，相当于变量的作用域。</p><p><code>:root</code>选择器之中，可以设置全局的自定义属性。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--base</span><span class="token punctuation">:</span> #ffc600<span class="token punctuation">;</span>
  <span class="token property">--spacing</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">--blur</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量也可以在行内定义。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token special-attr"><span class="token attr-name">style</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">--color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所有自定义属性都必须以两个连词线开头，并且大小写敏感。</p><p>使用时，通过<code>var()</code>函数取出变量。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--spacing<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--base<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--blur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">blur</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--blur<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>var()</code>函数接受第二个参数，指定默认值。如果某个自定义属性没有设置，默认值就会生效。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--custom-width<span class="token punctuation">,</span> 20%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是另一个例子。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">foo</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--gutter<span class="token punctuation">,</span> 10px 0 0 5px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果默认值包含逗号，那么<code>var()</code>会将第一个逗号后面的所有值，当作默认值。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.someElement</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--main-font<span class="token punctuation">,</span> <span class="token string">&quot;lucida grande&quot;</span> <span class="token punctuation">,</span> tahoma<span class="token punctuation">,</span> Arial<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>--main-font</code>的默认值是<code>&quot;lucida grande&quot; , tahoma, Arial</code>。</p><p><code>var()</code>内部还可以使用<code>var()</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.someElement</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--first-color<span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--second-color<span class="token punctuation">,</span> white<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，如果没有设置<code>--first-color</code>，默认值<code>var(--second-color, white)</code>就会生效。如果<code>--second-color</code>也没有设置，那么<code>white</code>就会生效。</p><p>自定义属性可以是全局的，也可以是局部的。在<code>:root</code>选择器里面定义的，就是全局变量，可以在任何其他选择器里面读取。而在其他选择器里面定义，就是局部变量，只能在该选择器里面读取。</p><p>下面代码中，局部变量可以覆盖全局变量。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span> <span class="token property">--text-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span> <span class="token property">--text-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.error</span> <span class="token punctuation">{</span> <span class="token property">--text-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--text-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，一般文字是绿色，<code>div</code>元素的文字是蓝色，<code>error</code>类的文字是红色。</p><p>定义变量的时候，也可以读取其他变量。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--brand-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">--header-text-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--brand-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量也可以与<code>calc</code>函数结合使用。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--container-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--container-width<span class="token punctuation">)</span> / 2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量不包含单位时，不能直接添加单位。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 无效 */</span>
<span class="token selector">.quote</span> <span class="token punctuation">{</span>
  <span class="token property">--t-padding</span><span class="token punctuation">:</span> 20<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--t-padding<span class="token punctuation">)</span>px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 有效 */</span>
<span class="token selector">.quote</span> <span class="token punctuation">{</span>
  <span class="token property">--t-padding</span><span class="token punctuation">:</span> 20<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--t-padding<span class="token punctuation">)</span> * 1px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JavaScript 可以操作这些变量。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--my-color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rebeccapurple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;--my-color&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;rebeccapurple&quot;</span>
element<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">removeProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--my-color&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 取得变量值</span>
<span class="token keyword">var</span> styles <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bgValue <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>styles<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">&#39;--background&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置变量值</span>
document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--background&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;black&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 另一种写法</span>
document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--h-color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;var(--p-color)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个监听事件的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> docStyle <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">;</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  docStyle<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--mouse-x&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>clientX<span class="token punctuation">)</span><span class="token punctuation">;</span>
  docStyle<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&#39;--mouse-y&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>clientY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个使用CSS变量的例子，只要<code>&lt;input&gt;</code>的值发生变化，样式就会随之发生变化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// get the inputs</span>
<span class="token keyword">const</span> inputs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.controls input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// listen for changes</span>
inputs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">input</span> <span class="token operator">=&gt;</span> input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> handleUpdate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inputs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">input</span> <span class="token operator">=&gt;</span> input<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span> handleUpdate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// append &#39;px&#39; to the end of spacing and blur variables</span>
  <span class="token keyword">const</span> suffix <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">===</span> <span class="token string">&#39;base&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">--</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">+</span> suffix<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,40),r={href:"https://nearsoft.com/blog/css-variables-guide/",target:"_blank",rel:"noopener noreferrer"},d=p(`<h2 id="supports" tabindex="-1"><a class="header-anchor" href="#supports" aria-hidden="true">#</a> supports</h2><p><code>supports</code>命令用来判断浏览器是否支持某项CSS功能。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@supports <span class="token function">not</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">display</span><span class="token operator">:</span> grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不支持网格布局</span>
  <span class="token comment">// 老式浏览器代码</span>
<span class="token punctuation">}</span>
@<span class="token function">supports</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">display</span><span class="token operator">:</span> grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 支持网格布局</span>
  <span class="token comment">// 新式浏览器代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>@<span class="token function">supports</span> <span class="token punctuation">(</span><span class="token parameter">object<span class="token operator">-</span>fit<span class="token operator">:</span> cover</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  img <span class="token punctuation">{</span>
    object<span class="token operator">-</span>fit<span class="token operator">:</span> cover<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  div <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> green<span class="token punctuation">;</span>
   <span class="token comment">// some other complex code for the fancy new layout</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initial-letter" tabindex="-1"><a class="header-anchor" href="#initial-letter" aria-hidden="true">#</a> initial-letter</h2><p><code>initial-letter</code>决定首字母的下沉样式。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 默认值 */</span>
<span class="token property">initial-letter</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>

<span class="token comment">/* 占据1.5行高度 */</span>
<span class="token property">initial-letter</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>

<span class="token comment">/* 占据3行高度 */</span>
<span class="token property">initial-letter</span><span class="token punctuation">:</span> 3.0<span class="token punctuation">;</span>

<span class="token comment">/* 占据3行高度，下沉2行高度 */</span>
<span class="token property">initial-letter</span><span class="token punctuation">:</span> 3.0 2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="滤镜" tabindex="-1"><a class="header-anchor" href="#滤镜" aria-hidden="true">#</a> 滤镜</h2><p>网页的灰度显示。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">filter</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-shape" tabindex="-1"><a class="header-anchor" href="#css-shape" aria-hidden="true">#</a> CSS Shape</h2><p><code>shape-outside</code>属性使得行内（inline）的内容，围绕<code>outside</code>指定的曲线排列。</p><p><code>shape-margin</code>属性指定<code>shape-outside</code>与内容之间的<code>margin</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.circle</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #40a977<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
  <span class="token property">-webkit-shape-outside</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">shape-outside</span><span class="token punctuation">:</span> <span class="token function">circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>circle</code>函数可以使用<code>circle(r at x y)</code>这样的形式，定义半径和圆心的坐标。注意，这里的坐标是相对于原始形状，而不是相对于父容器。</p><p>其他形状的函数。</p><ul><li>ellipse()</li><li>polygon()</li></ul><p>参考链接</p>`,19),k={href:"https://webdesign.tutsplus.com/tutorials/how-to-use-css-shapes-in-your-web-design--cms-27498",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("CSS Variables Guide"),t(a)]),s(", Tony Martinez")])]),d,n("ul",null,[n("li",null,[n("a",k,[s("How to Use CSS Shapes in Your Web Design"),t(a)]),s(", by Louie R.")])])])}const f=e(l,[["render",v],["__file","advanced.html.vue"]]);export{f as default};