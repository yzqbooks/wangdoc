import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as n,b as s,d as e,e as i}from"./app-bede4f5a.js";const l={},u=i(`<h1 id="mutation-observer-api" tabindex="-1"><a class="header-anchor" href="#mutation-observer-api" aria-hidden="true">#</a> Mutation Observer API</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。</p><p>概念上，它很接近事件，可以理解为 DOM 发生变动就会触发 Mutation Observer 事件。但是，它与事件有一个本质不同：事件是同步触发，也就是说，DOM 的变动立刻会触发相应的事件；Mutation Observer 则是异步触发，DOM 的变动并不会马上触发，而是要等到当前所有 DOM 操作都结束才触发。</p><p>这样设计是为了应付 DOM 变动频繁的特点。举例来说，如果文档中连续插入1000个<code>&lt;p&gt;</code>元素，就会连续触发1000个插入事件，执行每个事件的回调函数，这很可能造成浏览器的卡顿；而 Mutation Observer 完全不同，只在1000个段落都插入结束后才会触发，而且只触发一次。</p><p>Mutation Observer 有以下特点。</p><ul><li>它等待所有脚本任务完成后，才会运行（即异步触发方式）。</li><li>它把 DOM 变动记录封装成一个数组进行处理，而不是一条条个别处理 DOM 变动。</li><li>它既可以观察 DOM 的所有类型变动，也可以指定只观察某一类变动。</li></ul><h2 id="mutationobserver-构造函数" tabindex="-1"><a class="header-anchor" href="#mutationobserver-构造函数" aria-hidden="true">#</a> MutationObserver 构造函数</h2><p>使用时，首先使用<code>MutationObserver</code>构造函数，新建一个观察器实例，同时指定这个实例的回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中的回调函数，会在每次 DOM 变动后调用。该回调函数接受两个参数，第一个是变动数组，第二个是观察器实例，下面是一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">mutations<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  mutations<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mutation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mutation<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutationobserver-的实例方法" tabindex="-1"><a class="header-anchor" href="#mutationobserver-的实例方法" aria-hidden="true">#</a> MutationObserver 的实例方法</h2><h3 id="observe" tabindex="-1"><a class="header-anchor" href="#observe" aria-hidden="true">#</a> observe()</h3><p><code>observe()</code>方法用来启动监听，它接受两个参数。</p><ul><li>第一个参数：所要观察的 DOM 节点</li><li>第二个参数：一个配置对象，指定所要观察的特定变动</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> article <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;article&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span>  options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;childList&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;attributes&#39;</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span> <span class="token punctuation">;</span>

observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>article<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>observe()</code>方法接受两个参数，第一个是所要观察的DOM元素是<code>article</code>，第二个是所要观察的变动类型（子节点变动和属性变动）。</p><p>观察器所能观察的 DOM 变动类型（即上面代码的<code>options</code>对象），有以下几种。</p><ul><li><strong>childList</strong>：子节点的变动（指新增，删除或者更改）。</li><li><strong>attributes</strong>：属性的变动。</li><li><strong>characterData</strong>：节点内容或节点文本的变动。</li></ul><p>想要观察哪一种变动类型，就在<code>option</code>对象中指定它的值为<code>true</code>。需要注意的是，至少必须同时指定这三种观察的一种，若均未指定将报错。</p><p>除了变动类型，<code>options</code>对象还可以设定以下属性：</p><ul><li><code>subtree</code>：布尔值，表示是否将该观察器应用于该节点的所有后代节点。</li><li><code>attributeOldValue</code>：布尔值，表示观察<code>attributes</code>变动时，是否需要记录变动前的属性值。</li><li><code>characterDataOldValue</code>：布尔值，表示观察<code>characterData</code>变动时，是否需要记录变动前的值。</li><li><code>attributeFilter</code>：数组，表示需要观察的特定属性（比如<code>[&#39;class&#39;,&#39;src&#39;]</code>）。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 开始监听文档根节点（即&lt;html&gt;标签）的变动</span>
mutationObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">characterData</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">attributeOldValue</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">characterDataOldValue</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对一个节点添加观察器，就像使用<code>addEventListener()</code>方法一样，多次添加同一个观察器是无效的，回调函数依然只会触发一次。如果指定不同的<code>options</code>对象，以后面添加的那个为准，类似覆盖。</p><p>下面的例子是观察新增的子节点。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> insertedNodes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mutations</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  mutations<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">mutation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> mutation<span class="token punctuation">.</span>addedNodes<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      insertedNodes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>mutation<span class="token punctuation">.</span>addedNodes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>insertedNodes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="disconnect-takerecords" tabindex="-1"><a class="header-anchor" href="#disconnect-takerecords" aria-hidden="true">#</a> disconnect()，takeRecords()</h3><p><code>disconnect()</code>方法用来停止观察。调用该方法后，DOM 再发生变动，也不会触发观察器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>takeRecords()</code>方法用来清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>observer<span class="token punctuation">.</span><span class="token function">takeRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 保存所有没有被观察器处理的变动</span>
<span class="token keyword">var</span> changes <span class="token operator">=</span> mutationObserver<span class="token punctuation">.</span><span class="token function">takeRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 停止观察</span>
mutationObserver<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mutationrecord-对象" tabindex="-1"><a class="header-anchor" href="#mutationrecord-对象" aria-hidden="true">#</a> MutationRecord 对象</h2><p>DOM 每次发生变化，就会生成一条变动记录（MutationRecord 实例）。该实例包含了与变动相关的所有信息。Mutation Observer 处理的就是一个个<code>MutationRecord</code>实例所组成的数组。</p><p><code>MutationRecord</code>对象包含了DOM的相关信息，有如下属性：</p><ul><li><code>type</code>：观察的变动类型（<code>attributes</code>、<code>characterData</code>或者<code>childList</code>）。</li><li><code>target</code>：发生变动的DOM节点。</li><li><code>addedNodes</code>：新增的DOM节点。</li><li><code>removedNodes</code>：删除的DOM节点。</li><li><code>previousSibling</code>：前一个同级节点，如果没有则返回<code>null</code>。</li><li><code>nextSibling</code>：下一个同级节点，如果没有则返回<code>null</code>。</li><li><code>attributeName</code>：发生变动的属性。如果设置了<code>attributeFilter</code>，则只返回预先指定的属性。</li><li><code>oldValue</code>：变动前的值。这个属性只对<code>attribute</code>和<code>characterData</code>变动有效，如果发生<code>childList</code>变动，则返回<code>null</code>。</li></ul><h2 id="应用示例" tabindex="-1"><a class="header-anchor" href="#应用示例" aria-hidden="true">#</a> 应用示例</h2><h3 id="子元素的变动" tabindex="-1"><a class="header-anchor" href="#子元素的变动" aria-hidden="true">#</a> 子元素的变动</h3><p>下面的例子说明如何读取变动记录。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">records</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  records<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Mutation type: &#39;</span> <span class="token operator">+</span> record<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Mutation target: &#39;</span> <span class="token operator">+</span> record<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> mo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;childList&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;subtree&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

mo<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> option<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的观察器，观察<code>&lt;body&gt;</code>的所有下级节点（<code>childList</code>表示观察子节点，<code>subtree</code>表示观察后代节点）的变动。回调函数会在控制台显示所有变动的类型和目标节点。</p><h3 id="属性的变动" tabindex="-1"><a class="header-anchor" href="#属性的变动" aria-hidden="true">#</a> 属性的变动</h3><p>下面的例子说明如何追踪属性的变动。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">records</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  records<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Previous attribute value: &#39;</span> <span class="token operator">+</span> record<span class="token punctuation">.</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> mo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;#my_element&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;attributes&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;attributeOldValue&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

mo<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码先设定追踪属性变动（<code>&#39;attributes&#39;: true</code>），然后设定记录变动前的值。实际发生变动时，会将变动前的值显示在控制台。</p><h3 id="取代-domcontentloaded-事件" tabindex="-1"><a class="header-anchor" href="#取代-domcontentloaded-事件" aria-hidden="true">#</a> 取代 DOMContentLoaded 事件</h3><p>网页加载的时候，DOM 节点的生成会产生变动记录，因此只要观察 DOM 的变动，就能在第一时间触发相关事件，也就没有必要使用<code>DOMContentLoaded</code>事件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，监听<code>document.documentElement</code>（即网页的<code>&lt;html&gt;</code>HTML 节点）的子节点的变动，<code>subtree</code>属性指定监听还包括后代节点。因此，任意一个网页元素一旦生成，就能立刻被监听到。</p><p>下面的代码，使用<code>MutationObserver</code>对象封装一个监听 DOM 生成的函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">win</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> listeners <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> doc <span class="token operator">=</span> win<span class="token punctuation">.</span>document<span class="token punctuation">;</span>
  <span class="token keyword">var</span> MutationObserver <span class="token operator">=</span> win<span class="token punctuation">.</span>MutationObserver <span class="token operator">||</span> win<span class="token punctuation">.</span>WebKitMutationObserver<span class="token punctuation">;</span>
  <span class="token keyword">var</span> observer<span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">ready</span><span class="token punctuation">(</span><span class="token parameter">selector<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 储存选择器和回调函数</span>
    listeners<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">selector</span><span class="token operator">:</span> selector<span class="token punctuation">,</span>
      <span class="token literal-property property">fn</span><span class="token operator">:</span> fn
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>observer<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 监听document变化</span>
      observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span>check<span class="token punctuation">)</span><span class="token punctuation">;</span>
      observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">subtree</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 检查该节点是否已经在DOM中</span>
    <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 检查是否匹配已储存的节点</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> listeners<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> listener <span class="token operator">=</span> listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// 检查指定节点是否有匹配</span>
      <span class="token keyword">var</span> elements <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span>listener<span class="token punctuation">.</span>selector<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 确保回调函数只会对该元素调用一次</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>element<span class="token punctuation">.</span>ready<span class="token punctuation">)</span><span class="token punctuation">{</span>
          element<span class="token punctuation">.</span>ready <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
          <span class="token comment">// 对该节点调用回调函数</span>
          listener<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 对外暴露ready</span>
  win<span class="token punctuation">.</span>ready <span class="token operator">=</span> ready<span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用方法</span>
<span class="token function">ready</span><span class="token punctuation">(</span><span class="token string">&#39;.foo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,54),r={href:"https://developers.google.com/web/updates/2012/02/Detect-DOM-changes-with-Mutation-Observers",target:"_blank",rel:"noopener noreferrer"},d={href:"http://dev.opera.com/articles/view/mutation-observers-tutorial/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://michalbe.blogspot.com/2013/04/javascript-less-known-parts-dom.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://addyosmani.com/blog/mutation-observers/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://ryanmorr.com/using-mutation-observers-to-watch-for-element-availability/",target:"_blank",rel:"noopener noreferrer"};function h(y,g){const a=p("ExternalLinkIcon");return o(),c("div",null,[u,n("ul",null,[n("li",null,[s("Paul Kinlan, "),n("a",r,[s("Detect DOM changes with Mutation Observers"),e(a)])]),n("li",null,[s("Tiffany Brown, "),n("a",d,[s("Getting to know mutation observers"),e(a)])]),n("li",null,[s("Michal Budzynski, "),n("a",k,[s("JavaScript: The less known parts. DOM Mutations"),e(a)])]),n("li",null,[s("Jeff Griffiths, "),n("a",v,[s("DOM MutationObserver – reacting to DOM changes without killing browser performance"),e(a)])]),n("li",null,[s("Addy Osmani, "),n("a",m,[s("Detect, Undo And Redo DOM Changes With Mutation Observers"),e(a)])]),n("li",null,[s("Ryan Morr, "),n("a",b,[s("Using Mutation Observers to Watch for Element Availability"),e(a)])])])])}const M=t(l,[["render",h],["__file","mutationobserver.html.vue"]]);export{M as default};