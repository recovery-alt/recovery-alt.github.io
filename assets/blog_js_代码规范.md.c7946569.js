import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a4f2a176.js";const A=JSON.parse('{"title":"代码规范","description":"基于AirBnb整理的代码规范，包括prettier和eslint的整合方式，还有git-hooks的配置","frontmatter":{"title":"代码规范","date":"2020-12-04T00:00:00.000Z","description":"基于AirBnb整理的代码规范，包括prettier和eslint的整合方式，还有git-hooks的配置","readMins":8,"tags":["ESLint"]},"headers":[],"relativePath":"blog/js/代码规范.md","filePath":"blog/js/代码规范.md"}'),p={name:"blog/js/代码规范.md"},o=l(`<h2 id="_1-变量声明-declare" tabindex="-1">1. 变量声明（declare） <a class="header-anchor" href="#_1-变量声明-declare" aria-label="Permalink to &quot;1. 变量声明（declare）&quot;">​</a></h2><h3 id="_1-1-采用最小权限原则" tabindex="-1">1.1 采用最小权限原则 <a class="header-anchor" href="#_1-1-采用最小权限原则" aria-label="Permalink to &quot;1.1 采用最小权限原则&quot;">​</a></h3><ul><li>尽量使用<code>const</code></li><li>需要重新赋值的使用<code>let</code></li><li>不要使用<code>var</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> foo </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">foo </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">singleton</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Admin</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> foo </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">foo </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">singleton</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Admin</span><span style="color:#24292E;">();</span></span></code></pre></div><h3 id="_1-2-尽量使用驼峰命名" tabindex="-1">1.2 尽量使用驼峰命名 <a class="header-anchor" href="#_1-2-尽量使用驼峰命名" aria-label="Permalink to &quot;1.2 尽量使用驼峰命名&quot;">​</a></h3><ul><li>类的话首字母大写</li><li>变量首字母小写</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FirstName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Kitty&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">secondName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Aarn&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">teacher</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Teacher</span><span style="color:#E1E4E8;"> {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FirstName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Kitty&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">secondName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Aarn&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">teacher</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Teacher</span><span style="color:#24292E;"> {}</span></span></code></pre></div><h3 id="_1-3-声明数组或者对象" tabindex="-1">1.3 声明数组或者对象 <a class="header-anchor" href="#_1-3-声明数组或者对象" aria-label="Permalink to &quot;1.3 声明数组或者对象&quot;">​</a></h3><blockquote><p>使用<code>{}</code>和<code>[]</code>，而不是对应的构造函数</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Array</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Array</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [];</span></span></code></pre></div><h3 id="_1-4-声明函数" tabindex="-1">1.4 声明函数 <a class="header-anchor" href="#_1-4-声明函数" aria-label="Permalink to &quot;1.4 声明函数&quot;">​</a></h3><ul><li>可以选择<code>function</code>或者赋值一个箭头函数的形式</li><li>不要使用<code>Function</code>构造函数</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Function</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;return a + b&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Function</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;return a + b&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_1-5-声明正则" tabindex="-1">1.5 声明正则 <a class="header-anchor" href="#_1-5-声明正则" aria-label="Permalink to &quot;1.5 声明正则&quot;">​</a></h3><ul><li>尽量不要使用构造函数</li><li>如果需要传入变量可以使用构造函数</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">reg</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RegExp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.*&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">reg</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#79B8FF;">.</span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;some key value&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">reg</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RegExp</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">}?\`</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">reg</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RegExp</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.*&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">reg</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> /</span><span style="color:#005CC5;">.</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">/</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;some key value&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">reg</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RegExp</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">value</span><span style="color:#032F62;">}?\`</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="_1-6-声明symbol" tabindex="-1">1.6 声明<code>Symbol</code> <a class="header-anchor" href="#_1-6-声明symbol" aria-label="Permalink to &quot;1.6 声明\`Symbol\`&quot;">​</a></h3><ul><li>需要考虑低版本浏览器兼容问题</li><li>而且不要使用<code>new</code>关键字</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad 会报错</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">symbol</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">symbol</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad 会报错</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">symbol</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">symbol</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">();</span></span></code></pre></div><h3 id="_1-7-一次多个变量" tabindex="-1">1.7 一次多个变量 <a class="header-anchor" href="#_1-7-一次多个变量" aria-label="Permalink to &quot;1.7 一次多个变量&quot;">​</a></h3><ul><li>不要使用<code>,</code>连接，单独赋值用<code>;</code>分割</li><li>将未赋初始值的变量放在一起（一般是开头或者结尾）</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> c;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> a;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> c;</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> c;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> a;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> c;</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="_1-8-禁止使用-0-1-来标识状态" tabindex="-1">1.8 禁止使用 0,1 来标识状态 <a class="header-anchor" href="#_1-8-禁止使用-0-1-来标识状态" aria-label="Permalink to &quot;1.8 禁止使用 0,1 来标识状态&quot;">​</a></h3><ul><li>不要使用纯数字来标识状态，用静态常量来表达</li><li>如果是<code>ts</code>可以使用枚举来表达</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// success</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// not-found</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SUCCESS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NOT_FOUND</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SUCCESS</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// success</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">NOT_FOUND</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// not-found</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// use ts</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">StatusEnum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">SUCCESS</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">NOT_FOUND</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> StatusEnum.</span><span style="color:#79B8FF;">SUCCESS</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// success</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> StatusEnum.</span><span style="color:#79B8FF;">NOT_FOUND</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// not-found</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// success</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// not-found</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SUCCESS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NOT_FOUND</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SUCCESS</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// success</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">NOT_FOUND</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// not-found</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// use ts</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">StatusEnum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">SUCCESS</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">NOT_FOUND</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> StatusEnum.</span><span style="color:#005CC5;">SUCCESS</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// success</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> StatusEnum.</span><span style="color:#005CC5;">NOT_FOUND</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// not-found</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_2-对象-object" tabindex="-1">2. 对象（object） <a class="header-anchor" href="#_2-对象-object" aria-label="Permalink to &quot;2. 对象（object）&quot;">​</a></h2><h3 id="_2-1-初始化对象" tabindex="-1">2.1 初始化对象 <a class="header-anchor" href="#_2-1-初始化对象" aria-label="Permalink to &quot;2.1 初始化对象&quot;">​</a></h3><blockquote><p>尽量放在<code>{}</code>之中，可以更加直观看到对象的元素</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { key: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#E1E4E8;">options.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { key: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, value: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { key: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#24292E;">options.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { key: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, value: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> };</span></span></code></pre></div><h3 id="_2-2-有缩写的情况" tabindex="-1">2.2 有缩写的情况 <a class="header-anchor" href="#_2-2-有缩写的情况" aria-label="Permalink to &quot;2.2 有缩写的情况&quot;">​</a></h3><ul><li>尽量使用缩写</li><li>而且缩写放在最前面</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { key: key };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { key };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { key, name: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, value };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { key, value, name: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { key: key };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { key };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { key, name: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, value };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { key, value, name: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> };</span></span></code></pre></div><h3 id="_2-3-key值" tabindex="-1">2.3 <code>key</code>值 <a class="header-anchor" href="#_2-3-key值" aria-label="Permalink to &quot;2.3 \`key\`值&quot;">​</a></h3><ul><li>不要用引号</li><li>有特殊符号使用单引号</li><li><code>key</code>为变量或者<code>Symbol</code>的话使用<code>[]</code>包裹</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#9ECBFF;">&#39;key&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { key: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#9ECBFF;">&#39;key-prop&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { [</span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">()]: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#032F62;">&#39;key&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { key: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#032F62;">&#39;key-prop&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { [</span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">()]: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> };</span></span></code></pre></div><h3 id="_2-4-对象方法" tabindex="-1">2.4 对象方法 <a class="header-anchor" href="#_2-4-对象方法" aria-label="Permalink to &quot;2.4 对象方法&quot;">​</a></h3><ul><li>要简写</li><li>如果不需要绑定<code>this</code>，可以使用箭头函数</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">addValue</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {} };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">addValue</span><span style="color:#E1E4E8;">() {} };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#B392F0;">addValue</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {} };</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#6F42C1;">addValue</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {} };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#6F42C1;">addValue</span><span style="color:#24292E;">() {} };</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#6F42C1;">addValue</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {} };</span></span></code></pre></div><h3 id="_2-5-对象内容有多行" tabindex="-1">2.5 对象内容有多行 <a class="header-anchor" href="#_2-5-对象内容有多行" aria-label="Permalink to &quot;2.5 对象内容有多行&quot;">​</a></h3><ul><li>最后一个值需要使用逗号</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyA: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyB: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyC: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyD: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyE: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyF: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyG: </span><span style="color:#79B8FF;">7</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyA: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyB: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyC: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyD: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyE: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyF: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  keyG: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  keyA: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyB: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyC: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyD: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyE: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyF: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyG: </span><span style="color:#005CC5;">7</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  keyA: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyB: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyC: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyD: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyE: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyF: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  keyG: </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="_2-6-对象取值" tabindex="-1">2.6 对象取值 <a class="header-anchor" href="#_2-6-对象取值" aria-label="Permalink to &quot;2.6 对象取值&quot;">​</a></h3><ul><li>取值的时候尽量使用<code>.</code>而不是<code>[]</code></li><li>尽量使用对象解构取值</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { keyA: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, keyB: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, keyC: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">options[</span><span style="color:#9ECBFF;">&#39;keyA&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">options.keyA;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">keyA</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options.keyA;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">keyA</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { keyA: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, keyB: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, keyC: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">options[</span><span style="color:#032F62;">&#39;keyA&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">options.keyA;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">keyA</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options.keyA;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">keyA</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options;</span></span></code></pre></div><h3 id="_2-7-对象析构" tabindex="-1">2.7 对象析构 <a class="header-anchor" href="#_2-7-对象析构" aria-label="Permalink to &quot;2.7 对象析构&quot;">​</a></h3><ul><li>对象析构尽量使用扩展运算符 <ol><li>对象浅拷贝不使用 Object.assign</li><li>剩余参数</li></ol></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">newOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">({}, options);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">newOptions</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">keyA</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">newOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">({}, options);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">newOptions</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">keyA</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options;</span></span></code></pre></div><h2 id="_3-数组-array" tabindex="-1">3. 数组（Array） <a class="header-anchor" href="#_3-数组-array" aria-label="Permalink to &quot;3. 数组（Array）&quot;">​</a></h2><h3 id="_3-1-map、foreach、for" tabindex="-1">3.1 map、forEach、for <a class="header-anchor" href="#_3-1-map、foreach、for" aria-label="Permalink to &quot;3.1 map、forEach、for&quot;">​</a></h3><ul><li>需要返回值的情况使用<code>map</code></li><li>不需要返回值使用<code>forEach</code></li><li>需要提前中断循环的使用<code>for</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要返回值</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">newArr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> val);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不需要返回值</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  sum </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要中断循环</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, len </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> len; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (arr[i] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要返回值</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">newArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> val </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> val);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不需要返回值</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(</span><span style="color:#E36209;">val</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  sum </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要中断循环</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> len; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (arr[i] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_3-2-array-from" tabindex="-1">3.2 Array.from <a class="header-anchor" href="#_3-2-array-from" aria-label="Permalink to &quot;3.2 Array.from&quot;">​</a></h3><ul><li>使用<code>Array.from</code>或者扩展运算符去转换一个可迭代的类数组对象(原型上有<code>Symbol(Symbol.iterator)</code>)</li><li>使用<code>Array.form</code>转换一个类数组对象</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dom</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> document.</span><span style="color:#B392F0;">querySelectorAll</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;.selector&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">domArr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.slice.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(dom);</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">domArr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [].slice.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(dom);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">domArr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(dom);</span></span>
<span class="line"><span style="color:#6A737D;">// best</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">domArr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">dom];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arrLike</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;baz&#39;</span><span style="color:#E1E4E8;">, length: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Array</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.slice.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(arrlike);</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [].slice.</span><span style="color:#B392F0;">call</span><span style="color:#E1E4E8;">(arrLike);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Array.</span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;">(arrLike);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dom</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> document.</span><span style="color:#6F42C1;">querySelectorAll</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;.selector&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">domArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(dom);</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">domArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(dom);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">domArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(dom);</span></span>
<span class="line"><span style="color:#6A737D;">// best</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">domArr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">dom];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arrLike</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;baz&#39;</span><span style="color:#24292E;">, length: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Array</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(arrlike);</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [].slice.</span><span style="color:#6F42C1;">call</span><span style="color:#24292E;">(arrLike);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Array.</span><span style="color:#6F42C1;">from</span><span style="color:#24292E;">(arrLike);</span></span></code></pre></div><h3 id="_3-3-array-prototype-reduce" tabindex="-1">3.3 Array.prototype.reduce <a class="header-anchor" href="#_3-3-array-prototype-reduce" aria-label="Permalink to &quot;3.3 Array.prototype.reduce&quot;">​</a></h3><blockquote><p>需要给一个初始值</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">total</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">acc</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> acc </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">total</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">].</span><span style="color:#B392F0;">reduce</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">acc</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> acc </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> val, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">total</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">acc</span><span style="color:#24292E;">, </span><span style="color:#E36209;">val</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> acc </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> val);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">total</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">].</span><span style="color:#6F42C1;">reduce</span><span style="color:#24292E;">((</span><span style="color:#E36209;">acc</span><span style="color:#24292E;">, </span><span style="color:#E36209;">val</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> acc </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> val, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="_3-4-数组排版" tabindex="-1">3.4 数组排版 <a class="header-anchor" href="#_3-4-数组排版" aria-label="Permalink to &quot;3.4 数组排版&quot;">​</a></h3><ul><li>一行摆不下的情况，另起一行，每行一个变量</li><li>数组项为对象时，如果一行摆不下，另起一行，<code>[</code>、<code>{</code>以及<code>]</code>、<code>}</code>单独占一行</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;d&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;e&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;f&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;g&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;h&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;i&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;j&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;k&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;l&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;m&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;n&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;d&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;e&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;f&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;g&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;h&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;i&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;j&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;k&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;l&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;m&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;n&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  [</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">objectInArray</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [{</span></span>
<span class="line"><span style="color:#E1E4E8;">  id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">}, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  id: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">}];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">objectInArray</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { id: </span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">objectInArray</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;d&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;e&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;f&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;g&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;h&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;i&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;j&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;k&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;l&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;m&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;n&#39;</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;d&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;e&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;f&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;g&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;h&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;i&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;j&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;k&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;l&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;m&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;n&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  [</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">objectInArray</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [{</span></span>
<span class="line"><span style="color:#24292E;">  id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">}, {</span></span>
<span class="line"><span style="color:#24292E;">  id: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">}];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">objectInArray</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">4</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { id: </span><span style="color:#005CC5;">6</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">objectInArray</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">];</span></span></code></pre></div><h2 id="_4-字符串-string" tabindex="-1">4. 字符串（string） <a class="header-anchor" href="#_4-字符串-string" aria-label="Permalink to &quot;4. 字符串（string）&quot;">​</a></h2><ul><li>尽量使用单引号 <ol><li>如果字符串包含单引号，可以使用双引号</li><li>没必要使用\`\`\`不要强行用</li></ol></li><li>涉及字符串拼接或者多行字符串使用模板字符串</li><li>非常长的字符串不要使用<code>+</code>拼接</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Kitty&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`Kitty\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;Kitty&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;&#39;name&#39;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">greeting</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hello &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">greeting</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`hello \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`hello world </span></span>
<span class="line"><span style="color:#9ECBFF;">               for javascript\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">errorMessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;This is a super long error that was thrown because of Batman. When you stop to think&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39; about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">errorMessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&#39;This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Kitty&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`Kitty\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;Kitty&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;&#39;name&#39;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">greeting</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hello &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">greeting</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`hello \${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`hello world </span></span>
<span class="line"><span style="color:#032F62;">               for javascript\`</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">errorMessage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;This is a super long error that was thrown because of Batman. When you stop to think&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39; about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">errorMessage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&#39;This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="_5-函数-function" tabindex="-1">5. 函数（function） <a class="header-anchor" href="#_5-函数-function" aria-label="Permalink to &quot;5. 函数（function）&quot;">​</a></h2><h3 id="_5-1-命名" tabindex="-1">5.1 命名 <a class="header-anchor" href="#_5-1-命名" aria-label="Permalink to &quot;5.1 命名&quot;">​</a></h3><ul><li>命名采用驼峰命名法，首字母小写</li><li>如果遇到需要体现继承关系的函数，请使用<code>class</code>关键字</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SayHi</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SayHi</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {}</span></span></code></pre></div><h3 id="_5-2-函数声明" tabindex="-1">5.2 函数声明 <a class="header-anchor" href="#_5-2-函数声明" aria-label="Permalink to &quot;5.2 函数声明&quot;">​</a></h3><ul><li>使用<code>function</code>或者箭头函数声明</li><li>如果在条件语句中声明请使用赋值的方式（有可能会覆盖执行作用域外的函数）</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> sayHi;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (condition) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">() {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {};</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> sayHi;</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (condition) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {};</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_5-3-函数参数" tabindex="-1">5.3 函数参数 <a class="header-anchor" href="#_5-3-函数参数" aria-label="Permalink to &quot;5.3 函数参数&quot;">​</a></h3><ul><li>函数参数不宜过多，超过 4 个及以上建议使用对象</li><li>使用函数的参数默认值</li><li>包含默认值的参数放在最后</li><li>箭头函数只有一个参数时，省略括号</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">d</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ({ </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">d</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> c </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> b </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sum</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> a </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`hi, \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`hi, \${</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">, </span><span style="color:#E36209;">d</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ({ </span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">, </span><span style="color:#E36209;">d</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> c </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> d;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> b </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#E36209;">a</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sum</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">a</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> a </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`hi, \${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`hi, \${</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="_5-4-箭头函数" tabindex="-1">5.4 箭头函数 <a class="header-anchor" href="#_5-4-箭头函数" aria-label="Permalink to &quot;5.4 箭头函数&quot;">​</a></h3><ul><li>如果不需要绑定<code>this</code>，请尽量使用箭头函数</li><li>箭头函数返回值时一个对象是需要用一个<code>()</code>包住</li><li>返回值如果是一个值或是一个表达式，不要使用<code>()</code>包住</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// not-recommended</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad 会报错</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">topic</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;hi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ topic: </span><span style="color:#9ECBFF;">&#39;hi&#39;</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;hi&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hi&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// not-recommended</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;">(</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hi&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad 会报错</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">topic</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;hi&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({ topic: </span><span style="color:#032F62;">&#39;hi&#39;</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;hi&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hi&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="_6-类-class" tabindex="-1">6. 类（class） <a class="header-anchor" href="#_6-类-class" aria-label="Permalink to &quot;6. 类（class）&quot;">​</a></h2><blockquote><p>尽量使用类来表达对一类事物的抽象而不是<code>prototype</code></p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Queue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">contents</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">contents];</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#79B8FF;">Queue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Queue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">contents</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">contents];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> value;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Queue</span><span style="color:#24292E;">(</span><span style="color:#E36209;">contents</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">contents];</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#005CC5;">Queue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Queue</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;">(</span><span style="color:#E36209;">contents</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">contents];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> value;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>使用<code>extends</code>关键字来继承</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">inherits</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;inherits&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeekableQueue</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">contents</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  Queue.</span><span style="color:#B392F0;">apply</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, contents);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">inherits</span><span style="color:#E1E4E8;">(PeekableQueue, Queue);</span></span>
<span class="line"><span style="color:#79B8FF;">PeekableQueue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">peek</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PeekableQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Queue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">peek</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.queue[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">inherits</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;inherits&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeekableQueue</span><span style="color:#24292E;">(</span><span style="color:#E36209;">contents</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  Queue.</span><span style="color:#6F42C1;">apply</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, contents);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">inherits</span><span style="color:#24292E;">(PeekableQueue, Queue);</span></span>
<span class="line"><span style="color:#005CC5;">PeekableQueue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">peek</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PeekableQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Queue</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">peek</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.queue[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_7-模块-module" tabindex="-1">7. 模块（module） <a class="header-anchor" href="#_7-模块-module" aria-label="Permalink to &quot;7. 模块（module）&quot;">​</a></h2><h3 id="_7-1-合理使用规范" tabindex="-1">7.1 合理使用规范 <a class="header-anchor" href="#_7-1-合理使用规范" aria-label="Permalink to &quot;7.1 合理使用规范&quot;">​</a></h3><ul><li>前端代码使用<code>ES Module</code>规范</li><li><code>nodejs</code>使用<code>commonsJS</code>规范</li><li>使用<code>ts</code>的话，使用<code>ES Module</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">moduleA</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./moduleA&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> moduleA;</span></span>
<span class="line"><span style="color:#6A737D;">// ok</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> moduleA </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./moduleA&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> moduleA;</span></span>
<span class="line"><span style="color:#6A737D;">// best</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { es6 } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./moduleA&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> es6;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">moduleA</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./moduleA&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> moduleA;</span></span>
<span class="line"><span style="color:#6A737D;">// ok</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> moduleA </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./moduleA&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> moduleA;</span></span>
<span class="line"><span style="color:#6A737D;">// best</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { es6 } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./moduleA&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> es6;</span></span></code></pre></div><h3 id="_7-2-合理导出代码" tabindex="-1">7.2 合理导出代码 <a class="header-anchor" href="#_7-2-合理导出代码" aria-label="Permalink to &quot;7.2 合理导出代码&quot;">​</a></h3><ul><li>单一导出的模块使用<code>export default</code></li><li>可以文件多个变量导出使用<code>export</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayHi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hi&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueComponent</span><span style="color:#E1E4E8;"> {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayHi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hi&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueComponent</span><span style="color:#24292E;"> {}</span></span></code></pre></div><h3 id="_7-3-import-相关" tabindex="-1">7.3 import 相关 <a class="header-anchor" href="#_7-3-import-相关" aria-label="Permalink to &quot;7.3 import 相关&quot;">​</a></h3><ul><li>同一路径<code>import</code>，不要拆分</li><li><code>import</code>放在代码最前面</li><li>引用的变量间需空格</li><li>变量太多出现换行，最后一行需要添加<code>,</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { one } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { two } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">doSomthing</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { one } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { one, two } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {one,two,three} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { one, two, three } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  one,</span></span>
<span class="line"><span style="color:#E1E4E8;">  two,</span></span>
<span class="line"><span style="color:#E1E4E8;">  three,</span></span>
<span class="line"><span style="color:#E1E4E8;">  four,</span></span>
<span class="line"><span style="color:#E1E4E8;">  five,</span></span>
<span class="line"><span style="color:#E1E4E8;">  six,</span></span>
<span class="line"><span style="color:#E1E4E8;">  seven,</span></span>
<span class="line"><span style="color:#E1E4E8;">  eight,</span></span>
<span class="line"><span style="color:#E1E4E8;">  nine,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ten</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  one,</span></span>
<span class="line"><span style="color:#E1E4E8;">  two,</span></span>
<span class="line"><span style="color:#E1E4E8;">  three,</span></span>
<span class="line"><span style="color:#E1E4E8;">  four,</span></span>
<span class="line"><span style="color:#E1E4E8;">  five,</span></span>
<span class="line"><span style="color:#E1E4E8;">  six,</span></span>
<span class="line"><span style="color:#E1E4E8;">  seven,</span></span>
<span class="line"><span style="color:#E1E4E8;">  eight,</span></span>
<span class="line"><span style="color:#E1E4E8;">  nine,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ten,</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;module&#39;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { one } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { two } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">doSomthing</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { one } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { one, two } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {one,two,three} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { one, two, three } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  one,</span></span>
<span class="line"><span style="color:#24292E;">  two,</span></span>
<span class="line"><span style="color:#24292E;">  three,</span></span>
<span class="line"><span style="color:#24292E;">  four,</span></span>
<span class="line"><span style="color:#24292E;">  five,</span></span>
<span class="line"><span style="color:#24292E;">  six,</span></span>
<span class="line"><span style="color:#24292E;">  seven,</span></span>
<span class="line"><span style="color:#24292E;">  eight,</span></span>
<span class="line"><span style="color:#24292E;">  nine,</span></span>
<span class="line"><span style="color:#24292E;">  ten</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  one,</span></span>
<span class="line"><span style="color:#24292E;">  two,</span></span>
<span class="line"><span style="color:#24292E;">  three,</span></span>
<span class="line"><span style="color:#24292E;">  four,</span></span>
<span class="line"><span style="color:#24292E;">  five,</span></span>
<span class="line"><span style="color:#24292E;">  six,</span></span>
<span class="line"><span style="color:#24292E;">  seven,</span></span>
<span class="line"><span style="color:#24292E;">  eight,</span></span>
<span class="line"><span style="color:#24292E;">  nine,</span></span>
<span class="line"><span style="color:#24292E;">  ten,</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;module&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="_8-条件控制-if-statement" tabindex="-1">8. 条件控制（if statement） <a class="header-anchor" href="#_8-条件控制-if-statement" aria-label="Permalink to &quot;8. 条件控制（if statement）&quot;">​</a></h2><h3 id="_8-1-多个条件的判断必须要有else" tabindex="-1">8.1 多个条件的判断必须要有<code>else</code> <a class="header-anchor" href="#_8-1-多个条件的判断必须要有else" aria-label="Permalink to &quot;8.1 多个条件的判断必须要有\`else\`&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (conditionA) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> {conditionB} {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">//good</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (conditionA) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> {conditionB} {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (conditionA) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> {conditionB} {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">//good</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (conditionA) {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> {conditionB} {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_8-2-多个条件" tabindex="-1">8.2 多个条件 <a class="header-anchor" href="#_8-2-多个条件" aria-label="Permalink to &quot;8.2 多个条件&quot;">​</a></h3><ul><li>如果一行展示不下 <ol><li>第一个条件另起一行</li><li>条件或、条件与放在条件的右侧</li><li>最后一个括号另起一行</li></ol></li><li>使用必要的<code>()</code>来保证逻辑的正确</li><li>多个逻辑或可以进行合并</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (conditionA </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> conditionB </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionC </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionD </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionE </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionF) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionA </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionB </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionC </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionD </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionE </span><span style="color:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="color:#E1E4E8;">  conditionF</span></span>
<span class="line"><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (conditionA </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> conditionB </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> conditionC) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> ((conditionA </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> conditionB) </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> conditionC) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> status </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">arr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (arr.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(status)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (conditionA </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> conditionB </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionC </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionD </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionE </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionF) {</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">  conditionA </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionB </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionC </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionD </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionE </span><span style="color:#D73A49;">&amp;&amp;</span></span>
<span class="line"><span style="color:#24292E;">  conditionF</span></span>
<span class="line"><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (conditionA </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> conditionB </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> conditionC) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> ((conditionA </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> conditionB) </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> conditionC) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> status </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">arr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (arr.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(status)) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_8-3-switch-case" tabindex="-1">8.3 <code>switch case</code> <a class="header-anchor" href="#_8-3-switch-case" aria-label="Permalink to &quot;8.3 \`switch case\`&quot;">​</a></h3><ul><li>必须要用<code>default</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (key) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (key) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">case</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (key) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (key) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">case</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_8-4-合理return" tabindex="-1">8.4 合理<code>return</code> <a class="header-anchor" href="#_8-4-合理return" aria-label="Permalink to &quot;8.4 合理\`return\`&quot;">​</a></h3><ul><li>通过<code>return</code>合理减少<code>{}</code>的层级</li><li>使逻辑更加清晰</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// not-recommended</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">judge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (num </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;负数&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (num </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;小于10的整数&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;大于等于10的整数&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">judge</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里可以写注释</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (num </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;负数&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里可以写注释</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (num </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;小于10的整数&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;大于等于10的整数&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// not-recommended</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">judge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (num </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;负数&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (num </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;小于10的整数&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;大于等于10的整数&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">judge</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里可以写注释</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (num </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;负数&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里可以写注释</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (num </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;小于10的整数&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;大于等于10的整数&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="_8-5-条件判断" tabindex="-1">8.5 条件判断 <a class="header-anchor" href="#_8-5-条件判断" aria-label="Permalink to &quot;8.5 条件判断&quot;">​</a></h3><ul><li>避免不必要的三目运算符</li><li>并且不要套用三目运算符</li><li>不要使用<code>==</code>做判断，使用<code>===</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isPositive</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (num </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">//good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">isPositive</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">num</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">isA </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doA</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> isB </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doB</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doC</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (isA) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">doA</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  isB </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doB</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doC</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (name </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (name </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isPositive</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> (num </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">//good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">isPositive</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">isA </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doA</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> isB </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doB</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doC</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (isA) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">doA</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  isB </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doB</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doC</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (name </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (name </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_9-注释-comments" tabindex="-1">9. 注释（Comments） <a class="header-anchor" href="#_9-注释-comments" aria-label="Permalink to &quot;9. 注释（Comments）&quot;">​</a></h2><h3 id="_9-1-单行注释" tabindex="-1">9.1 单行注释 <a class="header-anchor" href="#_9-1-单行注释" aria-label="Permalink to &quot;9.1 单行注释&quot;">​</a></h3><ul><li>基本规则是放在需要注释的变量或者函数上方</li><li>注释内容需要与<code>//</code>用一个空格隔开</li><li>注释如果不是在第一行，需要留一个空行</li><li>写<code>todo</code>统一格式为<code>TODO: content</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// bad 注释在同行</span></span>
<span class="line"><span style="color:#6A737D;">//bad 注释没有空格，且上方没有空一行</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad todo</span></span>
<span class="line"><span style="color:#6A737D;">// bad todo: need a global constant</span></span>
<span class="line"><span style="color:#6A737D;">// good TODO: need a global constant</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// bad 注释在同行</span></span>
<span class="line"><span style="color:#6A737D;">//bad 注释没有空格，且上方没有空一行</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad todo</span></span>
<span class="line"><span style="color:#6A737D;">// bad todo: need a global constant</span></span>
<span class="line"><span style="color:#6A737D;">// good TODO: need a global constant</span></span></code></pre></div><h3 id="_9-2-多行注释" tabindex="-1">9.2 多行注释 <a class="header-anchor" href="#_9-2-多行注释" aria-label="Permalink to &quot;9.2 多行注释&quot;">​</a></h3><ul><li>基本格式是<code>/** ... */</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6A737D;">// make() returns a new element</span></span>
<span class="line"><span style="color:#6A737D;">// based on the passed in tag name</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// @param {String} tag</span></span>
<span class="line"><span style="color:#6A737D;">// @return {Element} element</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tag</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> element;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * make() returns a new element</span></span>
<span class="line"><span style="color:#6A737D;"> * based on the passed-in tag name</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">tag</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> element;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6A737D;">// make() returns a new element</span></span>
<span class="line"><span style="color:#6A737D;">// based on the passed in tag name</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// @param {String} tag</span></span>
<span class="line"><span style="color:#6A737D;">// @return {Element} element</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">(</span><span style="color:#E36209;">tag</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> element;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * make() returns a new element</span></span>
<span class="line"><span style="color:#6A737D;"> * based on the passed-in tag name</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">make</span><span style="color:#24292E;">(</span><span style="color:#E36209;">tag</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> element;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_10-html-相关" tabindex="-1">10. html 相关 <a class="header-anchor" href="#_10-html-相关" aria-label="Permalink to &quot;10. html 相关&quot;">​</a></h2><h3 id="_10-1-doctype声明" tabindex="-1">10.1 <code>DOCTYPE</code>声明 <a class="header-anchor" href="#_10-1-doctype声明" aria-label="Permalink to &quot;10.1 \`DOCTYPE\`声明&quot;">​</a></h3><blockquote><p>确保每个页面都有<code>DOCTYPE</code>声明</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Test&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">&gt;This is only a test.&lt;/</span><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;Test&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">&gt;This is only a test.&lt;/</span><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">article</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Test&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">article</span><span style="color:#24292E;">&gt;This is only a test.&lt;/</span><span style="color:#22863A;">article</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;Test&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">article</span><span style="color:#24292E;">&gt;This is only a test.&lt;/</span><span style="color:#22863A;">article</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">article</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="_10-2-代码风格约定" tabindex="-1">10.2 代码风格约定 <a class="header-anchor" href="#_10-2-代码风格约定" aria-label="Permalink to &quot;10.2 代码风格约定&quot;">​</a></h3><ul><li>统一缩进为两个空格</li><li>属性不要大写</li><li>多用语义化标签，不要只用<code>div</code></li><li>统一使用<code>&quot;</code>，不要使用<code>&#39;</code></li><li>标签内部没有内容必须使用自闭合标签</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HREF</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://www.baidu.com&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://www.baidu.com&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">main</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;https://www.baidu.com&#39;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://www.baidu.com&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-table-column</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HREF</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://www.baidu.com&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://www.baidu.com&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">main</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;https://www.baidu.com&#39;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">a</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://www.baidu.com&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">a</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-table-column</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><h3 id="_10-3-资源引用" tabindex="-1">10.3 资源引用 <a class="header-anchor" href="#_10-3-资源引用" aria-label="Permalink to &quot;10.3 资源引用&quot;">​</a></h3><ul><li><code>link</code>标签<code>type=&quot;text/css&quot;</code>不写</li><li><code>script</code>标签<code>type=&quot;text/javascript&quot;</code>不写</li><li>引用的资源不要带<code>http</code>或<code>https</code></li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text/css&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;//unpkg.com/element-plus/lib/theme-chalk/index.css&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;//unpkg.com/element-plus/lib/theme-chalk/index.css&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text/javascript&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://unpkg.com/element-plus/lib/index.full.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://unpkg.com/element-plus/lib/index.full.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://unpkg.com/element-plus/lib/index.full.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;//unpkg.com/element-plus/lib/index.full.js&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text/css&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;//unpkg.com/element-plus/lib/theme-chalk/index.css&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;//unpkg.com/element-plus/lib/theme-chalk/index.css&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text/javascript&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/element-plus/lib/index.full.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/element-plus/lib/index.full.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://unpkg.com/element-plus/lib/index.full.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;//unpkg.com/element-plus/lib/index.full.js&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_11-样式相关" tabindex="-1">11. 样式相关 <a class="header-anchor" href="#_11-样式相关" aria-label="Permalink to &quot;11. 样式相关&quot;">​</a></h2><h3 id="_11-1-代码风格约定" tabindex="-1">11.1 代码风格约定 <a class="header-anchor" href="#_11-1-代码风格约定" aria-label="Permalink to &quot;11.1 代码风格约定&quot;">​</a></h3><ul><li>缩进空行空格 <ol><li>块级代码需要缩进，缩进为 2 个空格</li><li>声明新的样式需要空一行</li><li>不要将样式写在一行</li><li>属性和值之间需要空格，选择器和<code>{</code>之间需要空格</li></ol></li><li>数值 <ol><li>0 不添加单位</li><li>颜色 16 进制表示，如果可以缩写尽量缩写，不要使用大写</li></ol></li><li>基础规范 <ol><li>不要使用大写</li><li>尽量使用<code>class</code>选择器，如果表示唯一元素可以是用<code>id</code>选择器</li><li><code>scss/less</code>注释使用<code>//</code>，<code>css</code>使用<code>/* */</code></li><li>多个选择器的话，分行展示</li><li>引用的地址不需要使用引号包裹，如果有需要使用引号的地方，统一使用<code>&#39;</code></li></ol></li></ul><h4 id="缩进空行空格" tabindex="-1">缩进空行空格 <a class="header-anchor" href="#缩进空行空格" aria-label="Permalink to &quot;缩进空行空格&quot;">​</a></h4><ul><li>块级代码需要缩进，缩进为 2 个空格</li><li>声明新的样式需要空一行</li><li>不要将样式写在一行</li><li>属性和值之间需要空格，选择器和<code>{</code>之间需要空格</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">.tab</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.menu</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">.tab</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.menu</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">.tab</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.menu</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">.tab</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.menu</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="数值" tabindex="-1">数值 <a class="header-anchor" href="#数值" aria-label="Permalink to &quot;数值&quot;">​</a></h4><ul><li>0 不添加单位</li><li>颜色 16 进制表示，如果可以缩写尽量缩写，不要使用大写</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">rgb</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">255</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0.5</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ffffff7f</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#ffffff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">body</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">rgb</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">255</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0.5</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ffffff7f</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#ffffff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="基础规范" tabindex="-1">基础规范 <a class="header-anchor" href="#基础规范" aria-label="Permalink to &quot;基础规范&quot;">​</a></h4><ul><li>不要使用大写</li><li>尽量使用<code>class</code>选择器，如果表示唯一元素可以是用<code>id</code>选择器</li><li><code>scss/less</code>注释使用<code>//</code>，<code>css</code>使用<code>/* */</code></li><li>多个选择器的话，分行展示</li><li>引用的地址不需要使用引号包裹，如果有需要使用引号的地方，统一使用<code>&#39;</code></li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">.HEADER</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#FFF</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">#header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">#app</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在scss/less中使用</span></span>
<span class="line"><span style="color:#6A737D;">/* 在css中使用 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">.a</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.b</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">.c</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#B392F0;">.a</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.b</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#B392F0;">.c</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.img</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./path&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">./path</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;open sans&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">arial</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-family</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;open sans&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">arial</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">sans-serif</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">.HEADER</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#FFF</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">#header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">#app</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 在scss/less中使用</span></span>
<span class="line"><span style="color:#6A737D;">/* 在css中使用 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">.a</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.b</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">.c</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6F42C1;">.a</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.b</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#6F42C1;">.c</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.img</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./path&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#E36209;">./path</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;open sans&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">arial</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">sans-serif</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-family</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;open sans&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">arial</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">sans-serif</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="_11-2-样式命名规范" tabindex="-1">11.2 样式命名规范 <a class="header-anchor" href="#_11-2-样式命名规范" aria-label="Permalink to &quot;11.2 样式命名规范&quot;">​</a></h3><p>写样式的时候有以下注意事项：</p><ul><li>嵌套不宜太深（ 样式权重太大，渲染的时候解析时间会增加）</li><li>尽量不要使用<code>*</code></li><li>尽量少用标签选择器</li><li>省略不必要的选择器</li><li>在<a href="https://cn.vuejs.org/v2/guide/single-file-components.html" target="_blank" rel="noreferrer">sfc</a>中的<code>scoped</code>里面想覆盖第三方组件库样式的话，建议使用深度选择器</li></ul><p>推荐以下两个规范（可以重点学习一下<code>BEM</code>的思想）</p><ul><li><a href="http://getbem.com/" target="_blank" rel="noreferrer">BEM 规范</a></li><li><a href="http://nec.netease.com/" target="_blank" rel="noreferrer">网易 NEC 规范</a></li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.menu</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">.item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">.active</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6A737D;">// block</span></span>
<span class="line"><span style="color:#B392F0;">.header</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// block</span></span>
<span class="line"><span style="color:#B392F0;">.menu</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// element</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">-item</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// modify</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#FFAB70;">--active</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 深度选择器</span></span>
<span class="line"><span style="color:#B392F0;">.outer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  ::v</span><span style="color:#79B8FF;">-</span><span style="color:#E1E4E8;">deep {</span></span>
<span class="line"><span style="color:#E1E4E8;">    .el</span><span style="color:#79B8FF;">-</span><span style="color:#E1E4E8;">menu {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.menu</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">.item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">.active</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#6A737D;">// block</span></span>
<span class="line"><span style="color:#6F42C1;">.header</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// block</span></span>
<span class="line"><span style="color:#6F42C1;">.menu</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// element</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">-item</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// modify</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#E36209;">--active</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 深度选择器</span></span>
<span class="line"><span style="color:#6F42C1;">.outer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  ::v</span><span style="color:#005CC5;">-</span><span style="color:#24292E;">deep {</span></span>
<span class="line"><span style="color:#24292E;">    .el</span><span style="color:#005CC5;">-</span><span style="color:#24292E;">menu {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_12-vue-代码" tabindex="-1">12. vue 代码 <a class="header-anchor" href="#_12-vue-代码" aria-label="Permalink to &quot;12. vue 代码&quot;">​</a></h2><p>写<code>vue</code>组件时，需遵循<a href="https://cn.vuejs.org/v2/style-guide/" target="_blank" rel="noreferrer">vue 风格指南</a>，在此处列举几项必要规范：</p><ul><li>组件名命名 <ol><li>不易与<code>html5</code>标签冲突</li><li>多单词组件名需要使用驼峰或者<code>kebab-case</code>命名</li></ol></li><li><code>data</code>和<code>props</code>声明 <ol><li><code>data</code>必须使用函数</li><li><code>props</code>必须注明类型</li></ol></li><li><code>v-for</code>和<code>v-if</code>规范 <ol><li><code>v-for</code>必须设置键名，且不能以数组索引作为<code>key</code></li><li><code>v-if</code>和<code>v-for</code>不能在同一组件上使用，可以使用<code>&lt;template&gt;</code></li></ol></li><li>业务样式尽量使用<code>scoped</code>，避免污染全局样式</li></ul><blockquote><p>组件名不易与<code>html5</code>标签冲突，多单词组件名需要使用驼峰或者<code>kebab-case</code>命名</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Button&#39;</span><span style="color:#E1E4E8;">, {});</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gtbutton&#39;</span><span style="color:#E1E4E8;">, {});</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;gt-button&#39;</span><span style="color:#E1E4E8;">, {});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Button&#39;</span><span style="color:#24292E;">, {});</span></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;gtbutton&#39;</span><span style="color:#24292E;">, {});</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;gt-button&#39;</span><span style="color:#24292E;">, {});</span></span></code></pre></div><blockquote><p>data 使用函数，props 必须注明类型</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    foo: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      foo: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: [</span><span style="color:#9ECBFF;">&#39;foo&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    foo: { type: String },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  data: {</span></span>
<span class="line"><span style="color:#24292E;">    foo: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      foo: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// bad</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  props: [</span><span style="color:#032F62;">&#39;foo&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#6A737D;">// good</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    foo: { type: String },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><blockquote><p><code>v-for</code>使用<code>key</code>值，<code>v-if</code>和<code>v-for</code>不能在一个组件上使用</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user in users&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user.isActive&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ user.name }}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">select</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user in users&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">option</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;user.isActive&quot;</span><span style="color:#E1E4E8;">&gt;{{ user.name }}&lt;/</span><span style="color:#85E89D;">option</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">option</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-else</span><span style="color:#E1E4E8;">&gt;{{ user.text }}&lt;/</span><span style="color:#85E89D;">option</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">select</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;user in users&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;user.isActive&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;user.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  {{ user.name }}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">select</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;user in users&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">option</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;user.isActive&quot;</span><span style="color:#24292E;">&gt;{{ user.name }}&lt;/</span><span style="color:#22863A;">option</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">option</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-else</span><span style="color:#24292E;">&gt;{{ user.text }}&lt;/</span><span style="color:#22863A;">option</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">select</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><blockquote><p>业务样式尽量使用<code>scoped</code>，避免污染全局样式</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- bad --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- good --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="_13-全局约定" tabindex="-1">13. 全局约定 <a class="header-anchor" href="#_13-全局约定" aria-label="Permalink to &quot;13. 全局约定&quot;">​</a></h2><p>推荐统一使用<a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noreferrer">prettier</a>作为格式刷，<a href="https://eslint.bootcss.com/" target="_blank" rel="noreferrer">eslint</a>作为规范检验，可以规避上述规范中一些格式上的问题，<code>eslint</code>的配置在网站上比较齐全，这里就不多做赘述，遇到配置问题，可以自行查阅。在开发过程中有一些比较重要的约定如下：</p><ul><li>文件命名推荐使用<code>kebab-case</code>的形式</li><li>代码提交的时候中不应该出现<code>console.log</code>、<code>debugger</code>等调试代码</li><li>函数/变量取名时需要赋予一定的语义，而不是<code>temp1</code></li><li>代码缩进为两个空格,<code>&quot;editor.tabSize&quot;: 2</code></li><li>设置换行符格式为<code>LF</code>,<code>&quot;files.eol&quot;: &quot;\\n&quot;</code></li><li>文件首行不空行，可以写对应文件注释或者直接写代码</li><li>文件尾行空一行</li><li>未使用的变量要记得删除</li></ul><h2 id="_14-提交代码" tabindex="-1">14. 提交代码 <a class="header-anchor" href="#_14-提交代码" aria-label="Permalink to &quot;14. 提交代码&quot;">​</a></h2><p>提交内容遵循<code>angular</code>规范，如下：</p><ul><li>build: 构建打包</li><li>ci: 持续集成相关</li><li>chore: 修改工具相关（包括但不限于文档、代码生成等, 比如修改了 README，webpack 配置文件等等）</li><li>docs: 修改文档</li><li>feat: 新功能</li><li>fix: 修复问题</li><li>perf: 提升页面性能</li><li>refactor: 重构代码(fix bug 或增加新功能不属于此范围)</li><li>revert: 回滚版本</li><li>style: 修改代码格式(不影响逻辑功能，比如格式化、补充分号等等)</li><li>test: 增加/修改测试用例</li></ul><h2 id="参考文献" tabindex="-1">参考文献 <a class="header-anchor" href="#参考文献" aria-label="Permalink to &quot;参考文献&quot;">​</a></h2><ul><li><a href="https://github.com/lin-123/javascript/blob/cn/README.md" target="_blank" rel="noreferrer">Airbnb JavaScript 风格指南</a></li><li><a href="https://google.github.io/styleguide/htmlcssguide.html" target="_blank" rel="noreferrer">google 样式规范</a></li><li><a href="http://getbem.com/" target="_blank" rel="noreferrer">BEM 规范</a></li><li><a href="http://nec.netease.com/" target="_blank" rel="noreferrer">网易 NEC 规范</a></li><li><a href="https://eslint.bootcss.com/" target="_blank" rel="noreferrer">eslint 官网</a></li><li><a href="https://eslint.vuejs.org/rules/" target="_blank" rel="noreferrer">eslint-plugin-vue</a></li><li><a href="https://cn.vuejs.org/v2/style-guide/" target="_blank" rel="noreferrer">vue 风格指南</a></li><li><a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noreferrer">prettier 配置手册</a></li><li><a href="https://github.com/typescript-eslint/typescript-eslint#readme" target="_blank" rel="noreferrer">Typescript ESLint</a></li></ul>`,160),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{A as __pageData,u as default};
