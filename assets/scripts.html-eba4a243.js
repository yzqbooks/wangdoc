import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as i,a as n,b as s,d as t,e}from"./app-bede4f5a.js";const c={},l=e(`<h1 id="脚本功能" tabindex="-1"><a class="header-anchor" href="#脚本功能" aria-hidden="true">#</a> 脚本功能</h1><h2 id="npm-run" tabindex="-1"><a class="header-anchor" href="#npm-run" aria-hidden="true">#</a> npm run</h2><p><code>npm</code>不仅可以用于模块管理，还可以用于执行脚本。<code>package.json</code>文件有一个<code>scripts</code>字段，可以用于指定脚本命令，供<code>npm</code>直接调用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myproject&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;jshint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;browserify&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;mocha&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jshint **.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mocha test/&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>scripts</code>字段指定了两项命令<code>lint</code>和<code>test</code>。命令行输入<code>npm run-script lint</code>或者<code>npm run lint</code>，就会执行<code>jshint **.js</code>，输入<code>npm run-script test</code>或者<code>npm run test</code>，就会执行<code>mocha test/</code>。<code>npm run</code>是<code>npm run-script</code>的缩写，一般都使用前者，但是后者可以更好地反应这个命令的本质。</p><p><code>npm run</code>命令会自动在环境变量<code>$PATH</code>添加<code>node_modules/.bin</code>目录，所以<code>scripts</code>字段里面调用命令时不用加上路径，这就避免了全局安装NPM模块。</p><p><code>npm run</code>如果不加任何参数，直接运行，会列出<code>package.json</code>里面所有可以执行的脚本命令。</p><p>npm内置了两个命令简写，<code>npm test</code>等同于执行<code>npm run test</code>，<code>npm start</code>等同于执行<code>npm run start</code>。</p><p><code>npm run</code>会创建一个Shell，执行指定的命令，并临时将<code>node_modules/.bin</code>加入PATH变量，这意味着本地模块可以直接运行。</p><p>举例来说，你执行ESLint的安装命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> i eslint --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行上面的命令以后，会产生两个结果。首先，ESLint被安装到当前目录的<code>node_modules</code>子目录；其次，<code>node_modules/.bin</code>目录会生成一个符号链接<code>node_modules/.bin/eslint</code>，指向ESLint模块的可执行脚本。</p><p>然后，你就可以在<code>package.json</code>的<code>script</code>属性里面，不带路径的引用<code>eslint</code>这个脚本。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test Project&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.10.3&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint .&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等到运行<code>npm run lint</code>的时候，它会自动执行<code>./node_modules/.bin/eslint .</code>。</p><p>如果直接运行<code>npm run</code>不给出任何参数，就会列出<code>scripts</code>属性下所有命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run
Available scripts <span class="token keyword">in</span> the user-service package:
  lint
     jshint **.js
  <span class="token builtin class-name">test</span>
    mocha test/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是另一个<code>package.json</code>文件的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;watchify client/main.js -o public/app.js -v&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;browserify client/main.js -o public/app.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run watch &amp; nodemon server.js&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node test/all.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码在<code>scripts</code>项，定义了四个别名，每个别名都有对应的脚本命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run <span class="token function">watch</span>
$ <span class="token function">npm</span> run build
$ <span class="token function">npm</span> run start
$ <span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>start</code>和<code>test</code>属于特殊命令，可以省略<code>run</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> start
$ <span class="token function">npm</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果希望一个操作的输出，是另一个操作的输入，可以借用Linux系统的管道命令，将两个操作连在一起。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;build-js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;browserify browser/main.js | uglifyjs -mc &gt; static/bundle.js&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，更方便的写法是引用其他<code>npm run</code>命令。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build-js &amp;&amp; npm run build-css&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的写法是先运行<code>npm run build-js</code>，然后再运行<code>npm run build-css</code>，两个命令中间用<code>&amp;&amp;</code>连接。如果希望两个命令同时平行执行，它们中间可以用<code>&amp;</code>连接。</p><p>下面是一个流操作的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;autoprefixer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;cssmin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;build:css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;autoprefixer -b &#39;last 2 versions&#39; &lt; assets/styles/main.css | cssmin &gt; dist/main.css&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写在<code>scripts</code>属性中的命令，也可以在<code>node_modules/.bin</code>目录中直接写成bash脚本。下面是一个bash脚本。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token hashbang comment">#!/bin/bash</span>

cd site<span class="token operator">/</span>main
browserify browser<span class="token operator">/</span>main<span class="token punctuation">.</span>js <span class="token operator">|</span> uglifyjs <span class="token operator">-</span>mc <span class="token operator">&gt;</span> <span class="token keyword">static</span><span class="token operator">/</span>bundle<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假定上面的脚本文件名为build.sh，并且权限为可执行，就可以在scripts属性中引用该文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;build-js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/build.sh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><p><code>npm run</code>命令还可以添加参数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mocha test/&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码指定<code>npm test</code>，实际运行<code>mocha test/</code>。如果要通过<code>npm test</code>命令，将参数传到mocha，则参数之前要加上两个连词线。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run <span class="token builtin class-name">test</span> -- anothertest.js
<span class="token comment"># 等同于</span>
$ mocha test/ anothertest.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令表示，mocha要运行所有<code>test</code>子目录的测试脚本，以及另外一个测试脚本<code>anothertest.js</code>。</p><p><code>npm run</code>本身有一个参数<code>-s</code>，表示关闭npm本身的输出，只输出脚本产生的结果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 输出npm命令头
$ <span class="token function">npm</span> run <span class="token builtin class-name">test</span>

// 不输出npm命令头
$ <span class="token function">npm</span> run <span class="token parameter variable">-s</span> <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scripts脚本命令最佳实践" tabindex="-1"><a class="header-anchor" href="#scripts脚本命令最佳实践" aria-hidden="true">#</a> scripts脚本命令最佳实践</h3><p><code>scripts</code>字段的脚本命令，有一些最佳实践，可以方便开发。首先，安装<code>npm-run-all</code>模块。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> npm-run-all --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个模块用于运行多个<code>scripts</code>脚本命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 继发执行</span>
$ npm-run-all build:html build:js
<span class="token comment"># 等同于</span>
$ <span class="token function">npm</span> run build:html <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run build:js

<span class="token comment"># 并行执行</span>
$ npm-run-all <span class="token parameter variable">--parallel</span> watch:html watch:js
<span class="token comment"># 等同于</span>
$ <span class="token function">npm</span> run watch:html <span class="token operator">&amp;</span> <span class="token function">npm</span> run watch:js

<span class="token comment"># 混合执行</span>
$ npm-run-all clean lint <span class="token parameter variable">--parallel</span> watch:html watch:js
<span class="token comment"># 等同于</span>
$ npm-run-all clean lint
$ npm-run-all <span class="token parameter variable">--parallel</span> watch:html watch:js

<span class="token comment"># 通配符</span>
$ npm-run-all <span class="token parameter variable">--parallel</span> watch:*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）start脚本命令</p><p><code>start</code>脚本命令，用于启动应用程序。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-run-all --parallel dev serve&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令并行执行<code>dev</code>脚本命令和<code>serve</code>脚本命令，等同于下面的形式。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run dev <span class="token operator">&amp;</span> <span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果start脚本没有配置，<code>npm start</code>命令默认执行下面的脚本，前提是模块的根目录存在一个server.js文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> server.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）dev脚本命令</p><p><code>dev</code>脚本命令，规定开发阶段所要做的处理，比如构建网页资源。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-run-all dev:*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令用于继发执行所有<code>dev</code>的子命令。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;predev:sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-sass --source-map src/css/hoodie.css.map --output-style nested src/sass/base.scss src/css/hoodie.css&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令将sass文件编译为css文件，并生成source map文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;dev:sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-sass --source-map src/css/hoodie.css.map --watch --output-style nested src/sass/base.scss src/css/hoodie.css&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令会监视sass文件的变动，只要有变动，就自动将其编译为css文件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;dev:autoprefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;postcss --use autoprefixer --autoprefixer.browsers \\&quot;&gt; 5%\\&quot; --output src/css/hoodie.css src/css/hoodie.css&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令为css文件加上浏览器前缀，限制条件是只考虑市场份额大于5%的浏览器。</p><p>（3）serve脚本命令</p><p><code>serve</code>脚本命令用于启动服务。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;live-server dist/ --port=9090&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,67),d={href:"http://npmjs.com/package/live-server",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"dist",-1),v=e(`<p><code>live-server</code>模块有三个功能。</p><ul><li>启动一个HTTP服务器，展示指定目录的<code>index.html</code>文件，通过该文件加载各种网络资源，这是<code>file://</code>协议做不到的。</li><li>添加自动刷新功能。只要指定目录之中，文件有任何变化，它就会刷新页面。</li><li><code>npm run serve</code>命令执行以后，自动打开浏览器。、</li></ul><p>以前，上面三个功能需要三个模块来完成：<code>http-server</code>、<code>live-reload</code>和<code>opener</code>，现在只要<code>live-server</code>一个模块就够了。</p><p>（4）test脚本命令</p><p><code>test</code>脚本命令用于执行测试。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-run-all test:*&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;test:lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sass-lint --verbose --config .sass-lint.yml src/sass/*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令规定，执行测试时，运行<code>lint</code>脚本，检查脚本之中的语法错误。</p><p>（5）prod脚本命令</p><p><code>prod</code>脚本命令，规定进入生产环境时需要做的处理。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;prod&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm-run-all prod:*&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;prod:sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node-sass --output-style compressed src/sass/base.scss src/css/prod/hoodie.min.css&quot;</span><span class="token punctuation">,</span>
<span class="token string-property property">&quot;prod:autoprefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;postcss --use autoprefixer --autoprefixer.browsers &quot;</span><span class="token operator">&gt;</span> <span class="token number">5</span><span class="token operator">%</span><span class="token string">&quot; --output src/css/prod/hoodie.min.css src/css/prod/hoodie.min.css&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令将sass文件转为css文件，并加上浏览器前缀。</p><p>（6）help脚本命令</p><p><code>help</code>脚本命令用于展示帮助信息。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;help&quot;</span><span class="token operator">:</span> <span class="token string">&quot;markdown-chalk --input DEVELOPMENT.md&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令之中，<code>markdown-chalk</code>模块用于将指定的markdown文件，转为彩色文本显示在终端之中。</p><p>（7）docs脚本命令</p><p><code>docs</code>脚本命令用于生成文档。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;docs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kss-node --source src/sass --homepage ../../styleguide.md&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令使用<code>kss-node</code>模块，提供源码的注释生成markdown格式的文档。</p><h3 id="pre-和-post-脚本" tabindex="-1"><a class="header-anchor" href="#pre-和-post-脚本" aria-hidden="true">#</a> pre- 和 post- 脚本</h3><p><code>npm run</code>为每条命令提供了<code>pre-</code>和<code>post-</code>两个钩子（hook）。以<code>npm run lint</code>为例，执行这条命令之前，npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行<code>npm run prelint</code>，然后执行<code>npm run lint</code>，最后执行<code>npm run postlint</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myproject&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>
    <span class="token string-property property">&quot;karma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --cache --ext .js --ext .jsx src&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;karma start --log-leve=error karma.config.js --single-run=true&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;pretest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run lint&quot;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;posttest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo &#39;Finished running tests&#39;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是一个<code>package.json</code>文件的例子。如果执行<code>npm test</code>，会按下面的顺序执行相应的命令。</p><ol><li><code>pretest</code></li><li><code>test</code></li><li><code>posttest</code></li></ol><p>如果执行过程出错，就不会执行排在后面的脚本，即如果prelint脚本执行出错，就不会接着执行lint和postlint脚本。</p><p>下面是一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;karma start&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;test:lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint . --ext .js --ext .jsx&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;pretest&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run test:lint&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，在运行<code>npm run test</code>之前，会自动检查代码，即运行<code>npm run test:lint</code>命令。</p><p>下面是一些常见的<code>pre-</code>和<code>post-</code>脚本。</p><ul><li><code>prepublish</code>：发布一个模块前执行。</li><li><code>postpublish</code>：发布一个模块后执行。</li><li><code>preinstall</code>：用户执行<code>npm install</code>命令时，先执行该脚本。</li><li><code>postinstall</code>：用户执行<code>npm install</code>命令时，安装结束后执行该脚本，通常用于将下载的源码编译成用户需要的格式，比如有些模块需要在用户机器上跟本地的C++模块一起编译。</li><li><code>preuninstall</code>：卸载一个模块前执行。</li><li><code>postuninstall</code>：卸载一个模块后执行。</li><li><code>preversion</code>：更改模块版本前执行。</li><li><code>postversion</code>：更改模块版本后执行。</li><li><code>pretest</code>：运行<code>npm test</code>命令前执行。</li><li><code>posttest</code>：运行<code>npm test</code>命令后执行。</li><li><code>prestop</code>：运行<code>npm stop</code>命令前执行。</li><li><code>poststop</code>：运行<code>npm stop</code>命令后执行。</li><li><code>prestart</code>：运行<code>npm start</code>命令前执行。</li><li><code>poststart</code>：运行<code>npm start</code>命令后执行。</li><li><code>prerestart</code>：运行<code>npm restart</code>命令前执行。</li><li><code>postrestart</code>：运行<code>npm restart</code>命令后执行。</li></ul><p>对于最后一个<code>npm restart</code>命令，如果没有设置<code>restart</code>脚本，<code>prerestart</code>和<code>postrestart</code>会依次执行stop和start脚本。</p><p>另外，不能在<code>pre</code>脚本之前再加<code>pre</code>，即<code>prepretest</code>脚本不起作用。</p><p>注意，即使Npm可以自动运行<code>pre</code>和<code>post</code>脚本，也可以手动执行它们。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> run prepublish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是<code>post install</code>的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;postinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node lib/post_install.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的这个命令，主要用于处理从Git仓库拉下来的源码。比如，有些源码是用TypeScript写的，可能需要转换一下。</p><p>下面是<code>publish</code>钩子的一个例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;dist:modules&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel ./src --out-dir ./dist-modules&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;gh-pages&quot;</span><span class="token operator">:</span> <span class="token string">&quot;webpack&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;gh-pages:deploy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gh-pages -d gh-pages&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;prepublish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run dist:modules&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;postpublish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run gh-pages &amp;&amp; npm run gh-pages:deploy&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令在运行<code>npm run publish</code>时，会先执行Babel编译，然后调用Webpack构建，最后发到Github Pages上面。</p>`,40),m={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},k=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> husky --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装以后，就能在<code>package.json</code>添加<code>precommit</code>、<code>prepush</code>等钩子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint yourJsFiles.js&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;precommit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run test &amp;&amp; npm run lint&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;prepush&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run test &amp;&amp; npm run lint&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;...&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似作用的模块还有<code>pre-commit</code>、<code>precommit-hook</code>等。</p><h3 id="内部变量" tabindex="-1"><a class="header-anchor" href="#内部变量" aria-hidden="true">#</a> 内部变量</h3><p>scripts字段可以使用一些内部变量，主要是package.json的各种字段。</p><p>比如，package.json的内容是<code>{&quot;name&quot;:&quot;foo&quot;, &quot;version&quot;:&quot;1.2.5&quot;}</code>，那么变量<code>npm_package_name</code>的值是foo，变量<code>npm_package_version</code>的值是1.2.5。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;bundle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mkdir -p build/$npm_package_version/&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行<code>npm run bundle</code>以后，将会生成<code>build/1.2.5/</code>子目录。</p><p><code>config</code>字段也可以用于设置内部字段。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fooproject&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;reporter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xunit&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mocha test/ --reporter $npm_package_config_reporter&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，变量<code>npm_package_config_reporter</code>对应的就是reporter。</p><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h3><p>npm 的通配符的规则如下。</p><ul><li><code>*</code> 匹配0个或多个字符</li><li><code>?</code> 匹配1个字符</li><li><code>[...]</code> 匹配某个范围的字符。如果该范围的第一个字符是<code>!</code>或<code>^</code>，则匹配不在该范围的字符。</li><li><code>!(pattern|pattern|pattern)</code> 匹配任何不符合给定的模式</li><li><code>?(pattern|pattern|pattern)</code> 匹配0个或1个给定的模式</li><li><code>+(pattern|pattern|pattern)</code> 匹配1个或多个给定的模式</li><li><code>*(a|b|c)</code> 匹配0个或多个给定的模式</li><li><code>@(pattern|pat*|pat?erN)</code> 只匹配给定模式之一</li><li><code>**</code> 如果出现在路径部分，表示0个或多个子目录。</li></ul>`,15);function b(g,q){const a=o("ExternalLinkIcon");return r(),i("div",null,[l,n("p",null,[s("上面命令启动服务，用的是"),n("a",d,[s("live-server"),t(a)]),s("模块，将服务启动在9090端口，展示"),u,s("子目录。")]),v,n("p",null,[s("以上都是npm相关操作的钩子，如果安装某些模块，还能支持Git相关的钩子。下面以"),n("a",m,[s("husky"),t(a)]),s("模块为例。")]),k])}const j=p(c,[["render",b],["__file","scripts.html.vue"]]);export{j as default};