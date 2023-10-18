import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a4f2a176.js";const f=JSON.parse('{"title":"闭包详解","description":"自己理解的闭包","frontmatter":{"title":"闭包详解","date":"2020-10-22T00:00:00.000Z","description":"自己理解的闭包","readMins":8,"tags":["JavaScript"]},"headers":[],"relativePath":"blog/js/闭包详解.md","filePath":"blog/js/闭包详解.md"}'),p={name:"blog/js/闭包详解.md"},o=l(`<h2 id="传统意义上的闭包" tabindex="-1">传统意义上的闭包 <a class="header-anchor" href="#传统意义上的闭包" aria-label="Permalink to &quot;传统意义上的闭包&quot;">​</a></h2><p>我们都知道示例的代码会形成闭包</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inner</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> inner;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> outer </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#B392F0;">outer</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inner</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> inner;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> outer </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6F42C1;">outer</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="必要条件一" tabindex="-1">必要条件一 <a class="header-anchor" href="#必要条件一" aria-label="Permalink to &quot;必要条件一&quot;">​</a></h2><p>在 outer 的执行上下文会形成闭包，因为 outer 引用了 fn 执行上下文的 inner 函数，inner 函数内部引用了 fn 函数的 a 变量，因此产生了闭包</p><p>总结：所以在 outer 函数执行的时候，<code>[[Scopes]]</code>里面会有一个<code>Closure (fn)</code>，证明形成了一个 fn 的闭包，闭包生成的第一个条件是<strong>外层执行上下文(此处为全局上下文)保留了对内层且已销毁的上下文(fn)内函数(inner)的引用</strong>，在执行该函数(inner)的时候，会产生闭包</p><p>我们再来看<code>Closure (fn)</code>里面有什么，其实<code>Closure (fn)</code>就是一个对象而已，里面只有一个<code>a:1</code></p><h2 id="必要条件二" tabindex="-1">必要条件二 <a class="header-anchor" href="#必要条件二" aria-label="Permalink to &quot;必要条件二&quot;">​</a></h2><p>再举个例子，我们把<code>console.log(a);</code>删掉，加上一个 debugger，此时我们运行到断点的时候，会发现，并没有<code>Closure (fn)</code>，</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">function fn() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  var a = 1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  function inner() {</span></span>
<span class="line"><span style="color:#FDAEB7;">-   console.log(a);</span></span>
<span class="line"><span style="color:#85E89D;">+   debugger;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  return inner;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">var outer = fn();</span></span>
<span class="line"><span style="color:#E1E4E8;">outer();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">function fn() {</span></span>
<span class="line"><span style="color:#24292E;">  var a = 1;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  function inner() {</span></span>
<span class="line"><span style="color:#B31D28;">-   console.log(a);</span></span>
<span class="line"><span style="color:#22863A;">+   debugger;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  return inner;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">var outer = fn();</span></span>
<span class="line"><span style="color:#24292E;">outer();</span></span></code></pre></div><p>所以闭包形成的第二个条件是<strong>内层且已销毁的上下文(fn)函数(inner)访问了 fn 内部的变量</strong>，便会把内部的所有变量打包到<code>Closure (fn)</code>并放入<code>[[Scopes]]</code>，形成闭包</p><h2 id="非传统意义的闭包" tabindex="-1">非传统意义的闭包 <a class="header-anchor" href="#非传统意义的闭包" aria-label="Permalink to &quot;非传统意义的闭包&quot;">​</a></h2><p>再看最后一个例子，我们在断点处查看，发现和第一个例子一样，<code>[[Scopes]]</code>上会有一个<code>Closure (fn)</code>，所以形成闭包的条件，<strong>并不一定需要把函数进行返回</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">inner</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">debugger</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(a);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">inner</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">inner</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">debugger</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(a);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">inner</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">();</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>在函数执行过程中，当前执行上下文内如果有访问了<strong>上层并且不是全局的执行上下文的变量</strong>的时候，会将访问到的变量所处的执行上下文内的所有变量放到一个对象里面，我们称这个对象为闭包，并且每个执行上下文都是一个单独的闭包。</p>`,16),e=[o];function c(r,t,E,i,y,d){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{f as __pageData,h as default};
