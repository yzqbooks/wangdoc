import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as t,e as a}from"./app-bede4f5a.js";const o={},c=a(`<h1 id="input-元素" tabindex="-1"><a class="header-anchor" href="#input-元素" aria-hidden="true">#</a> <code>&lt;input&gt;</code> 元素</h1><p><code>&lt;input&gt;</code>元素主要用于表单组件，它继承了 HTMLInputElement 接口。</p><h2 id="htmlinputelement-的实例属性" tabindex="-1"><a class="header-anchor" href="#htmlinputelement-的实例属性" aria-hidden="true">#</a> HTMLInputElement 的实例属性</h2><h3 id="特征属性" tabindex="-1"><a class="header-anchor" href="#特征属性" aria-hidden="true">#</a> 特征属性</h3><ul><li><code>name</code>：字符串，表示<code>&lt;input&gt;</code>节点的名称。该属性可读写。</li><li><code>type</code>：字符串，表示<code>&lt;input&gt;</code>节点的类型。该属性可读写。</li><li><code>disabled</code>：布尔值，表示<code>&lt;input&gt;</code>节点是否禁止使用。一旦被禁止使用，表单提交时不会包含该<code>&lt;input&gt;</code>节点。该属性可读写。</li><li><code>autofocus</code>：布尔值，表示页面加载时，该元素是否会自动获得焦点。该属性可读写。</li><li><code>required</code>：布尔值，表示表单提交时，该<code>&lt;input&gt;</code>元素是否必填。该属性可读写。</li><li><code>value</code>：字符串，表示该<code>&lt;input&gt;</code>节点的值。该属性可读写。</li><li><code>validity</code>：返回一个<code>ValidityState</code>对象，表示<code>&lt;input&gt;</code>节点的校验状态。该属性只读。</li><li><code>validationMessage</code>：字符串，表示该<code>&lt;input&gt;</code>节点的校验失败时，用户看到的报错信息。如果该节点不需要校验，或者通过校验，该属性为空字符串。该属性只读。</li><li><code>willValidate</code>：布尔值，表示表单提交时，该<code>&lt;input&gt;</code>元素是否会被校验。该属性只读。</li></ul><h3 id="表单相关属性" tabindex="-1"><a class="header-anchor" href="#表单相关属性" aria-hidden="true">#</a> 表单相关属性</h3><ul><li><code>form</code>：返回<code>&lt;input&gt;</code>元素所在的表单（<code>&lt;form&gt;</code>）节点。该属性只读。</li><li><code>formAction</code>：字符串，表示表单提交时的服务器目标。该属性可读写，一旦设置了这个属性，会覆盖表单元素的<code>action</code>属性。</li><li><code>formEncType</code>：字符串，表示表单提交时数据的编码方式。该属性可读写，一旦设置了这个属性，会覆盖表单元素的<code>enctype</code>的属性。</li><li><code>formMethod</code>：字符串，表示表单提交时的 HTTP 方法。该属性可读写，一旦设置了这个属性，会覆盖表单元素的<code>method</code>属性。</li><li><code>formNoValidate</code>：布尔值，表示表单提交时，是否要跳过校验。该属性可读写，一旦设置了这个属性，会覆盖表单元素的<code>formNoValidate</code>属性。</li><li><code>formTarget</code>：字符串，表示表单提交后，服务器返回数据的打开位置。该属性可读写，一旦设置了这个属性，会覆盖表单元素的<code>target</code>属性。</li></ul><h3 id="文本输入框的特有属性" tabindex="-1"><a class="header-anchor" href="#文本输入框的特有属性" aria-hidden="true">#</a> 文本输入框的特有属性</h3><p>以下属性只有在<code>&lt;input&gt;</code>元素可以输入文本时才有效。</p><ul><li><code>autocomplete</code>：字符串<code>on</code>或<code>off</code>，表示该<code>&lt;input&gt;</code>节点的输入内容可以被浏览器自动补全。该属性可读写。</li><li><code>maxLength</code>：整数，表示可以输入的字符串最大长度。如果设为负整数，会报错。该属性可读写。</li><li><code>size</code>：整数，表示<code>&lt;input&gt;</code>节点的显示长度。如果类型是<code>text</code>或<code>password</code>，该属性的单位是字符个数，否则单位是像素。该属性可读写。</li><li><code>pattern</code>：字符串，表示<code>&lt;input&gt;</code>节点的值应该满足的正则表达式。该属性可读写。</li><li><code>placeholder</code>：字符串，表示该<code>&lt;input&gt;</code>节点的占位符，作为对元素的提示。该字符串不能包含回车或换行。该属性可读写。</li><li><code>readOnly</code>：布尔值，表示用户是否可以修改该节点的值。该属性可读写。</li><li><code>min</code>：字符串，表示该节点的最小数值或日期，且不能大于<code>max</code>属性。该属性可读写。</li><li><code>max</code>：字符串，表示该节点的最大数值或日期，且不能小于<code>min</code>属性。该属性可读写。</li><li><code>selectionStart</code>：整数，表示选中文本的起始位置。如果没有选中文本，返回光标在<code>&lt;input&gt;</code>元素内部的位置。该属性可读写。</li><li><code>selectionEnd</code>：整数，表示选中文本的结束位置。如果没有选中文本，返回光标在<code>&lt;input&gt;</code>元素内部的位置。该属性可读写。</li><li><code>selectionDirection</code>：字符串，表示选中文本的方向。可能的值包括<code>forward</code>（与文字书写方向一致）、<code>backward</code>（与文字书写方向相反）和<code>none</code>（文字方向未知）。该属性可读写。</li></ul><h3 id="复选框和单选框的特有属性" tabindex="-1"><a class="header-anchor" href="#复选框和单选框的特有属性" aria-hidden="true">#</a> 复选框和单选框的特有属性</h3><p>如果<code>&lt;input&gt;</code>元素的类型是复选框（checkbox）或单选框（radio），会有下面的特有属性。</p><ul><li><code>checked</code>：布尔值，表示该<code>&lt;input&gt;</code>元素是否选中。该属性可读写。</li><li><code>defaultChecked</code>：布尔值，表示该<code>&lt;input&gt;</code>元素默认是否选中。该属性可读写。</li><li><code>indeterminate</code>：布尔值，表示该<code>&lt;input&gt;</code>元素是否还没有确定的状态。一旦用户点击过一次，该属性就会变成<code>false</code>，表示用户已经给出确定的状态了。该属性可读写。</li></ul><h3 id="图像按钮的特有属性" tabindex="-1"><a class="header-anchor" href="#图像按钮的特有属性" aria-hidden="true">#</a> 图像按钮的特有属性</h3><p>如果<code>&lt;input&gt;</code>元素的类型是<code>image</code>，就会变成一个图像按钮，会有下面的特有属性。</p><ul><li><code>alt</code>：字符串，图像无法显示时的替代文本。该属性可读写。</li><li><code>height</code>：字符串，表示该元素的高度（单位像素）。该属性可读写。</li><li><code>src</code>：字符串，表示该元素的图片来源。该属性可读写。</li><li><code>width</code>：字符串，表示该元素的宽度（单位像素）。该属性可读写。</li></ul><h3 id="文件上传按钮的特有属性" tabindex="-1"><a class="header-anchor" href="#文件上传按钮的特有属性" aria-hidden="true">#</a> 文件上传按钮的特有属性</h3><p>如果<code>&lt;input&gt;</code>元素的类型是<code>file</code>，就会变成一个文件上传按钮，会有下面的特有属性。</p><ul><li><code>accept</code>：字符串，表示该元素可以接受的文件类型，类型之间使用逗号分隔。该属性可读写。</li><li><code>files</code>：返回一个<code>FileList</code>实例对象，包含了选中上传的一组<code>File</code>实例对象。</li></ul><h3 id="其他属性" tabindex="-1"><a class="header-anchor" href="#其他属性" aria-hidden="true">#</a> 其他属性</h3><ul><li><code>defaultValue</code>：字符串，表示该<code>&lt;input&gt;</code>节点的原始值。</li><li><code>dirName</code>：字符串，表示文字方向。</li><li><code>accessKey</code>：字符串，表示让该<code>&lt;input&gt;</code>节点获得焦点的某个字母键。</li><li><code>list</code>：返回一个<code>&lt;datalist&gt;</code>节点，该节点必须绑定<code>&lt;input&gt;</code>元素，且<code>&lt;input&gt;</code>元素的类型必须可以输入文本，否则无效。该属性只读。</li><li><code>multiple</code>：布尔值，表示是否可以选择多个值。</li><li><code>labels</code>：返回一个<code>NodeList</code>实例，代表绑定当前<code>&lt;input&gt;</code>节点的<code>&lt;label&gt;</code>元素。该属性只读。</li><li><code>step</code>：字符串，表示在<code>min</code>属性到<code>max</code>属性之间，每次递增或递减时的数值或时间。</li><li><code>valueAsDate</code>：<code>Date</code>实例，一旦设置，该<code>&lt;input&gt;</code>元素的值会被解释为指定的日期。如果无法解析该属性的值，<code>&lt;input&gt;</code>节点的值将是<code>null</code>。</li><li><code>valueAsNumber</code>：浮点数，当前<code>&lt;input&gt;</code>元素的值会被解析为这个数值。如果输入框为空，该属性返回<code>NaN</code>。</li></ul><p>下面是<code>valueAsNumber</code>属性的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* HTML 代码如下
   &lt;input type=&quot;number&quot; value=&quot;1.234&quot; /&gt;
*/</span>

input<span class="token punctuation">.</span>value <span class="token comment">// &quot;1.234&quot;</span>
input<span class="token punctuation">.</span>valueAsNumber <span class="token comment">// 1.234</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="htmlinputelement-的实例方法" tabindex="-1"><a class="header-anchor" href="#htmlinputelement-的实例方法" aria-hidden="true">#</a> HTMLInputElement 的实例方法</h2><ul><li><code>focus()</code>：当前<code>&lt;input&gt;</code>元素获得焦点。</li><li><code>blur()</code>：移除<code>&lt;input&gt;</code>元素的焦点。</li><li><code>select()</code>：选中<code>&lt;input&gt;</code>元素内部的所有文本。该方法不能保证<code>&lt;input&gt;</code>获得焦点，最好先用<code>focus()</code>方法，再用这个方法。</li><li><code>click()</code>：模拟鼠标点击当前的<code>&lt;input&gt;</code>元素。</li><li><code>setSelectionRange()</code>：选中<code>&lt;input&gt;</code>元素内部的一段文本，但不会将焦点转移到选中的文本。该方法接受三个参数，第一个参数是开始的位置（从0开始），第二个参数是结束的位置（不包括该位置），第三个参数是可选的，表示选择的方向，有三个可能的值（<code>forward</code>、<code>backward</code>和默认值<code>none</code>）。</li><li><code>setRangeText()</code>：新文本替换选中的文本。该方法接受四个参数，第一个参数是新文本，第二个参数是替换的开始位置(从<code>0</code>开始计算)，第三个参数是结束位置（该位置不包括在内），第四个参数表示替换后的行为（可选），有四个可能的值：<code>select</code>（选中新插入的文本）、<code>start</code>（光标位置移到插入的文本之前）、<code>end</code>（光标位置移到插入的文本之后）、<code>preserve</code>（默认值，如果原先就有文本被选中且本次替换位置与原先选中位置有交集，则替换后同时选中新插入的文本与原先选中的文本，否则保持原先选中的文本）。</li><li><code>setCustomValidity()</code>：该方法用于自定义校验失败时的报错信息。它的参数就是报错的提示信息。注意，一旦设置了自定义报错信息，该字段就不会校验通过了，因此用户重新输入时，必须将自定义报错信息设为空字符串，请看下面的例子。</li><li><code>checkValidity()</code>：返回一个布尔值，表示当前节点的校验结果。如果返回<code>false</code>，表示不满足校验要求，否则就是校验成功或不必校验。</li><li><code>stepDown()</code>：将当前<code>&lt;input&gt;</code>节点的值减少一个步长。该方法可以接受一个整数<code>n</code>作为参数，表示一次性减少<code>n</code>个步长，默认是<code>1</code>。有几种情况会抛错：当前<code>&lt;input&gt;</code>节点不适合递减或递增、当前节点没有<code>step</code>属性、<code>&lt;input&gt;</code>节点的值不能转为数字、递减之后的值小于<code>min</code>属性或大于<code>max</code>属性。</li><li><code>stepUp()</code>：将当前<code>&lt;input&gt;</code>节点的值增加一个步长。其他与<code>stepDown()</code>方法相同。</li></ul><p>下面是<code>setSelectionRange()</code>方法的一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* HTML 代码如下
  &lt;p&gt;&lt;input type=&quot;text&quot; id=&quot;mytextbox&quot; size=&quot;20&quot; value=&quot;HelloWorld&quot;/&gt;&lt;/p&gt;
  &lt;p&gt;&lt;button onclick=&quot;SelectText()&quot;&gt;选择文本&lt;/button&gt;&lt;/p&gt;
*/</span>

<span class="token keyword">function</span> <span class="token function">SelectText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;mytextbox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  input<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  input<span class="token punctuation">.</span><span class="token function">setSelectionRange</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，点击按钮以后，会选中<code>llo</code>三个字符。</p><p>下面是<code>setCustomValidity()</code>的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* HTML 代码如下
  &lt;form id=&quot;form&quot;&gt;
    &lt;input id=&quot;field&quot; type=&quot;text&quot; pattern=&quot;[a-f,0-9]{4}&quot; autocomplete=off&gt;
  &lt;/form&gt;
*/</span>

<span class="token keyword">const</span> form   <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> field  <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#field&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

form<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 防止这个例子发出 POST 请求</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

field<span class="token punctuation">.</span><span class="token function-variable function">oninvalid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">setCustomValidity</span><span class="token punctuation">(</span><span class="token string">&#39;必须是一个 4 位十六进制数&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

field<span class="token punctuation">.</span><span class="token function-variable function">oninput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">setCustomValidity</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，输入框必须输入一个4位的十六进制数。如果不满足条件（比如输入<code>xxx</code>），按下回车键以后，就会提示自定义的报错信息。一旦自定义了报错信息，输入框就会一直处于校验失败状态，因此重新输入时，必须把自定义报错信息设为空字符串。另外，为了避免自动补全提示框遮住报错信息，必须将输入框的<code>autocomplete</code>属性关闭。</p>`,31),s=[c];function d(i,l){return n(),t("div",null,s)}const r=e(o,[["render",d],["__file","input.html.vue"]]);export{r as default};