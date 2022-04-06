import{_ as n,e as s}from"./app.a6634989.js";const e={},a=s(`<h1 id="fmt" tabindex="-1"><a class="header-anchor" href="#fmt" aria-hidden="true">#</a> fmt</h1><p><code>fmt</code>\u547D\u4EE4\u7528\u4E8E\u5BF9\u6587\u672C\u6307\u5B9A\u6837\u5F0F\u3002</p><p>\u4E0B\u9762\u662F<code>example.txt</code>\u7684\u5185\u5BB9\uFF0C\u662F\u975E\u5E38\u957F\u7684\u4E00\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>fmt</code>\u53EF\u4EE5\u5C06\u5176\u8F93\u51FA\u4E3A\u6BCF\u884C80\u4E2A\u5B57\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">fmt</span> -w <span class="token number">20</span>
Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
<span class="token function">sed</span> diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, <span class="token function">sed</span>
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,6);function r(t,l){return a}var p=n(e,[["render",r],["__file","fmt.html.vue"]]);export{p as default};
