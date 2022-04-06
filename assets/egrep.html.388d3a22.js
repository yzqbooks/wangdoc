import{_ as n,e}from"./app.a6634989.js";const s={},a=e(`<h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep" aria-hidden="true">#</a> egrep</h1><p><code>egrep</code>\u547D\u4EE4\u7528\u4E8E\u663E\u793A\u5339\u914D\u6B63\u5219\u6A21\u5F0F\u7684\u884C\uFF0C\u4E0E<code>grep -E</code>\u547D\u4EE4\u7B49\u4EF7\u3002</p><p>\u4E0B\u9762\u662F<code>example.txt</code>\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Lorem ipsum
dolor sit amet, 
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code>egrep</code>\u547D\u4EE4\u663E\u793A\u5305\u62EC<code>Lorem</code>\u6216<code>dolor</code>\u7684\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
<span class="token comment"># \u6216\u8005</span>
$ <span class="token function">grep</span> -E <span class="token string">&#39;(Lorem|dolor)&#39;</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,6);function r(l,p){return a}var i=n(s,[["render",r],["__file","egrep.html.vue"]]);export{i as default};
