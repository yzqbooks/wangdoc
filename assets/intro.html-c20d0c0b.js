import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e as t}from"./app-bede4f5a.js";const e={},p=t(`<h1 id="css-概述" tabindex="-1"><a class="header-anchor" href="#css-概述" aria-hidden="true">#</a> CSS 概述</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>CSS 用于定义网页的样式，比如每个网页元素的位置、大小、颜色等等。</p><p>CSS 随着网页的诞生而诞生。1996年12月，CSS 1.0 标准问世，目前广泛使用的是2000年4月发布的 CSS 3 标准。</p><p>CSS 3 采用模块化结构，每个模块都是独立定义的，定义完成以后，再加入 CSS 标准。截止2017年，CSS 共有88个模块，下面是其中一次主要模块。</p><blockquote><ul><li>Display</li><li>Box alignment</li><li>Flexible box</li><li>CSS Grid</li><li>Inline Layout</li><li>Position Layout</li><li>CSS Shapes</li><li>CSS Transforms</li></ul></blockquote><p>CSS 样式表就是一个文本文件，定义每个网页元素的样式规则。</p><h2 id="样式规则" tabindex="-1"><a class="header-anchor" href="#样式规则" aria-hidden="true">#</a> 样式规则</h2><p>CSS 样式表由大量样式规则组成。每条样式规则分成两个部分：选择器（selector）和声明块（declaration block）。</p><p>选择器指明本条规则对哪些网页元素生效，声明块描述样式规则的具体内容。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是一条样式规则，其中<code>h1</code>是选择器，大括号的部分就是声明块。这个规则的意思是，<code>h1</code>元素的颜色为红色。</p><p>声明块的内容，放在一对大括号里面。大括号之中是一个或多个键值对，每个键值对用分号结尾，给出一条样式描述。键值对的顺序并不重要。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，声明块里面包含两条样式描述，它们的顺序不重要，完全可以对调位置。</p><p>声明块可以写成多行，也可以写成一行。缩进和换行只是为了增加可读性，CSS 引擎会忽略它们。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，声明块写成了一行。它与写成多行的效果是一样的。</p><p>CSS 允许重复声明某个样式，这时最后声明的键值对会覆盖前面的键值对。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，颜色属性申明了两次。后面声明的黑色，会覆盖前面声明的红色。</p><p>声明块里面的键值对，由键名和键值组成。键名称为 CSS 属性（property），由 CSS 标准给出，键值是该属性允许被赋予的一个值。</p><p>学习 CSS，主要就是学习各种各样的 CSS 属性。</p><h2 id="css-注释" tabindex="-1"><a class="header-anchor" href="#css-注释" aria-hidden="true">#</a> CSS 注释</h2><p>CSS 使用<code>/* ... */</code>表示注释，可以是单行，也可以是多行。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span> <span class="token comment">/* 这是单行注释 */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 这是多行注释
h1 {
  color: red;
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，多行注释包含整个<code>h1</code>的样式规则，这意味着这个样式规则不会生效。</p><p>注意：注释不能嵌套。</p><h2 id="css-的继承" tabindex="-1"><a class="header-anchor" href="#css-的继承" aria-hidden="true">#</a> CSS 的继承</h2><p>某些 CSS 属性不仅影响网页元素本身，还会影响该元素的后代元素，这称为 CSS 的继承。</p><p>最典型的例子就是字体属性<code>font-family</code>，网页根元素<code>html</code>设置了字体以后，该网页的所有元素都会默认使用指定的字体。</p><p>以下是常见的可以继承的 CSS 属性。</p><blockquote><p>文本</p><ul><li>color（颜色，a元素除外）</li><li>direction（方向）</li><li>font（字体）</li><li>font-family（字体系列）</li><li>font-size（字体大小）</li><li>font-style（用于设置斜体）</li><li>font-variant（用于设置小型大写字母）</li><li>font-weight（用于设置粗体）</li><li>letter-spacing（字母间距）</li><li>line-height（行高）</li><li>text-align（用于设置对齐方式）</li><li>text-indent（用于设置首行缩进）</li><li>text-transform（用于修改大小写）</li><li>visibility（可见性）</li><li>white-space（用于指定如何处理空格）</li><li>word-spacing（字间距）</li></ul><p>列表</p><ul><li>list-style（列表样式）</li><li>list-style-image（用于为列表指定定制的标记）</li><li>list-style-position（用于确定列表标记的位置）</li><li>list-style-type（用于设置列表的标记）</li></ul><p>表格</p><ul><li>border-collapse（用于控制表格相邻单元格的边框是否合并为单一边框）</li><li>border-spacing（用于指定表格边框之间的空隙大小）</li><li>caption-side（用于设置表格标题的位置）</li><li>empty-cells（用于设置是否显示表格中的空单元格）</li></ul><p>页面设置（对于印刷物）</p><ul><li>orphans（用于设置当元素内部发生分页时在页面底部需要保留的最少行数）</li><li>page-break-inside（用于设置元素内部的分页方式）</li><li>widows（用于设置当元素内部发生分页时在页面顶部需要保留的最少行数）</li></ul><p>其他</p><ul><li>cursor（鼠标指针）</li><li>quotes（用于指定引号样式）</li></ul></blockquote><h2 id="样式的优先级" tabindex="-1"><a class="header-anchor" href="#样式的优先级" aria-hidden="true">#</a> 样式的优先级</h2><p>如果多条规则都对同一个网页元素指定样式，只要 CSS 属性不发生冲突，那么这些规则都是有效的。</p><p>如果 CSS 属性发生冲突，那就存在一个优先级的问题：哪一条规则优先生效？</p><p>CSS 采用以下规则，决定样式规则的优先级。</p><ul><li>特殊性（specificity）</li><li>顺序（order）</li><li>重要性（importance）</li></ul><p>特殊性指的是选择器的具体程度，选择器越特殊，规则就越强。遇到冲突时，优先应用特殊性强的规则。特殊性最低的是元素名本身，然后是元素的<code>class</code>属性，特殊性最高的是<code>id</code>属性。建议在样式表中多使用<code>class</code>选择器，避免使用<code>id</code>选择器，这样的灵活性最好。</p><p>规则指的是，同样特殊性的规则，晚出现的优先级高。</p><p>重要性指的是，特别注明某条规则的重要程度要比其他所有规则高，方法是在声明的末尾加上<code>!important</code>。由于可维护性很差，一旦出现问题，很难排查，除非是殊情况，否则不推荐使用这种方法。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>p {
  color: orange !important;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式表嵌入网页的方法" tabindex="-1"><a class="header-anchor" href="#样式表嵌入网页的方法" aria-hidden="true">#</a> 样式表嵌入网页的方法</h2><p>HTML 网页采用<code>&lt;link&gt;</code>标签将 CSS 样式表嵌入网页。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  ... ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>&lt;link&gt;</code>标签放在<code>&lt;head&gt;</code>内部，<code>rel=&quot;stylesheet&quot;</code>指明这是样式表，<code>href</code>属性给出样式表文件的网址。浏览器解析到这一行代码，就会去加载样式表。</p><p>上例的样式表文件是<code>style.css</code>。样式表的后缀名通常是<code>.css</code>，但也可以是其他后缀名。</p><p>网页也可以使用<code>&lt;style&gt;</code>标签，直接包含样式规则。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">img</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 4px solid red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  ... ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>&lt;head&gt;</code>内部的<code>&lt;style&gt;</code>标签直接包含了样式规则。</p><p>最后，针对某个网页元素的样式，也可以写在该元素的<code>style</code>属性。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.jpg<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 4px solid red<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code>style</code>属性指定了<code>img</code>元素的样式。</p><p><code>style</code>属性只对当前元素生效，需要一个个指定，非常麻烦。由于多个样式表可以同时对一个元素生效，<code>style</code>属性维护起来非也常困难，所以不建议使用，一般只用于 JavaScript 脚本指定动态样式，以及某些特殊情况。</p><p>内联样式由于位于外部样式表和嵌入样式表之后，优先级高于其他所有样式，除非其他地方与之冲突的样式标记了<code>!important</code>。</p>`,55),l=[p];function c(o,i){return n(),a("div",null,l)}const r=s(e,[["render",c],["__file","intro.html.vue"]]);export{r as default};