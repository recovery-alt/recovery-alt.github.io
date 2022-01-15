import{_ as n,c as a,o as s,d as p}from"./app.0862cf8c.js";const g='{"title":"\u5C45\u4E2D\u65B9\u6848","description":"css\u5C45\u4E2D\u7684\u5404\u79CD\u65B9\u6848","frontmatter":{"title":"\u5C45\u4E2D\u65B9\u6848","date":"2020-07-02T00:00:00.000Z","description":"css\u5C45\u4E2D\u7684\u5404\u79CD\u65B9\u6848","disabled":true,"readMins":8,"tags":["CSS"]},"headers":[{"level":2,"title":"\u4E00\u3001\u5B9A\u5BBD\u9AD8","slug":"\u4E00\u3001\u5B9A\u5BBD\u9AD8"},{"level":3,"title":"\u6837\u677F html \u4EE3\u7801","slug":"\u6837\u677F-html-\u4EE3\u7801"},{"level":3,"title":"1. \u7EDD\u5BF9\u5B9A\u4F4D\u548C\u8D1F magin \u503C","slug":"_1-\u7EDD\u5BF9\u5B9A\u4F4D\u548C\u8D1F-magin-\u503C"},{"level":3,"title":"2. \u7EDD\u5BF9\u5B9A\u4F4D + transform","slug":"_2-\u7EDD\u5BF9\u5B9A\u4F4D-transform"},{"level":3,"title":"3. \u7EDD\u5BF9\u5B9A\u4F4D + left/right/bottom/top + margin","slug":"_3-\u7EDD\u5BF9\u5B9A\u4F4D-left-right-bottom-top-margin"},{"level":3,"title":"4. flex \u5E03\u5C40","slug":"_4-flex-\u5E03\u5C40"},{"level":3,"title":"5. grid \u5E03\u5C40","slug":"_5-grid-\u5E03\u5C40"},{"level":3,"title":"6. table-cell + vertical-align + inline-block/margin: auto","slug":"_6-table-cell-vertical-align-inline-block-margin-auto"},{"level":2,"title":"\u4E8C\u3001\u4E0D\u5B9A\u5BBD\u9AD8","slug":"\u4E8C\u3001\u4E0D\u5B9A\u5BBD\u9AD8"},{"level":3,"title":"\u6837\u677F html \u4EE3\u7801","slug":"\u6837\u677F-html-\u4EE3\u7801-1"},{"level":3,"title":"1. \u7EDD\u5BF9\u5B9A\u4F4D + transform","slug":"_1-\u7EDD\u5BF9\u5B9A\u4F4D-transform"},{"level":3,"title":"2. table-cell","slug":"_2-table-cell"},{"level":3,"title":"3. flex \u5E03\u5C40","slug":"_3-flex-\u5E03\u5C40"},{"level":3,"title":"4. flex \u53D8\u5F02\u5E03\u5C40","slug":"_4-flex-\u53D8\u5F02\u5E03\u5C40"},{"level":3,"title":"5. grid + flex \u5E03\u5C40","slug":"_5-grid-flex-\u5E03\u5C40"},{"level":3,"title":"6. gird + margin \u5E03\u5C40","slug":"_6-gird-margin-\u5E03\u5C40"},{"level":3,"title":"7. writing-mode \u5C5E\u6027\u5E03\u5C40","slug":"_7-writing-mode-\u5C5E\u6027\u5E03\u5C40"},{"level":2,"title":"\u4E09\u3001\u56FE\u7247\u5B9A\u9AD8|\u4E0D\u5B9A\u9AD8\u5C45\u4E2D","slug":"\u4E09\u3001\u56FE\u7247\u5B9A\u9AD8-\u4E0D\u5B9A\u9AD8\u5C45\u4E2D"},{"level":3,"title":"\u793A\u4F8B\u4EE3\u7801\u7247\u6BB5\u5982\u4E0B:","slug":"\u793A\u4F8B\u4EE3\u7801\u7247\u6BB5\u5982\u4E0B"},{"level":3,"title":"1. table-cell","slug":"_1-table-cell"},{"level":3,"title":"2. ::after / ::before","slug":"_2-after-before"},{"level":2,"title":"\u56DB\u3001\u603B\u7ED3","slug":"\u56DB\u3001\u603B\u7ED3"},{"level":3,"title":"1. \u5185\u8054\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40","slug":"_1-\u5185\u8054\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40"},{"level":3,"title":"2. \u5757\u7EA7\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40","slug":"_2-\u5757\u7EA7\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40"}],"relativePath":"blog/css/\u5C45\u4E2D\u65B9\u6848.md","lastUpdated":1642256342086}',t={},e=p(`<h2 id="\u4E00\u3001\u5B9A\u5BBD\u9AD8" tabindex="-1">\u4E00\u3001\u5B9A\u5BBD\u9AD8 <a class="header-anchor" href="#\u4E00\u3001\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a></h2><h3 id="\u6837\u677F-html-\u4EE3\u7801" tabindex="-1">\u6837\u677F html \u4EE3\u7801 <a class="header-anchor" href="#\u6837\u677F-html-\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>children-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_1-\u7EDD\u5BF9\u5B9A\u4F4D\u548C\u8D1F-magin-\u503C" tabindex="-1">1. \u7EDD\u5BF9\u5B9A\u4F4D\u548C\u8D1F magin \u503C <a class="header-anchor" href="#_1-\u7EDD\u5BF9\u5B9A\u4F4D\u548C\u8D1F-magin-\u503C" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-\u7EDD\u5BF9\u5B9A\u4F4D-transform" tabindex="-1">2. \u7EDD\u5BF9\u5B9A\u4F4D + transform <a class="header-anchor" href="#_2-\u7EDD\u5BF9\u5B9A\u4F4D-transform" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-\u7EDD\u5BF9\u5B9A\u4F4D-left-right-bottom-top-margin" tabindex="-1">3. \u7EDD\u5BF9\u5B9A\u4F4D + left/right/bottom/top + margin <a class="header-anchor" href="#_3-\u7EDD\u5BF9\u5B9A\u4F4D-left-right-bottom-top-margin" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-flex-\u5E03\u5C40" tabindex="-1">4. flex \u5E03\u5C40 <a class="header-anchor" href="#_4-flex-\u5E03\u5C40" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-grid-\u5E03\u5C40" tabindex="-1">5. grid \u5E03\u5C40 <a class="header-anchor" href="#_5-grid-\u5E03\u5C40" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-table-cell-vertical-align-inline-block-margin-auto" tabindex="-1">6. table-cell + vertical-align + inline-block/margin: auto <a class="header-anchor" href="#_6-table-cell-vertical-align-inline-block-margin-auto" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E8C\u3001\u4E0D\u5B9A\u5BBD\u9AD8" tabindex="-1">\u4E8C\u3001\u4E0D\u5B9A\u5BBD\u9AD8 <a class="header-anchor" href="#\u4E8C\u3001\u4E0D\u5B9A\u5BBD\u9AD8" aria-hidden="true">#</a></h2><h3 id="\u6837\u677F-html-\u4EE3\u7801-1" tabindex="-1">\u6837\u677F html \u4EE3\u7801 <a class="header-anchor" href="#\u6837\u677F-html-\u4EE3\u7801-1" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>children-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_1-\u7EDD\u5BF9\u5B9A\u4F4D-transform" tabindex="-1">1. \u7EDD\u5BF9\u5B9A\u4F4D + transform <a class="header-anchor" href="#_1-\u7EDD\u5BF9\u5B9A\u4F4D-transform" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-table-cell" tabindex="-1">2. table-cell <a class="header-anchor" href="#_2-table-cell" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-flex-\u5E03\u5C40" tabindex="-1">3. flex \u5E03\u5C40 <a class="header-anchor" href="#_3-flex-\u5E03\u5C40" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_4-flex-\u53D8\u5F02\u5E03\u5C40" tabindex="-1">4. flex \u53D8\u5F02\u5E03\u5C40 <a class="header-anchor" href="#_4-flex-\u53D8\u5F02\u5E03\u5C40" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-grid-flex-\u5E03\u5C40" tabindex="-1">5. grid + flex \u5E03\u5C40 <a class="header-anchor" href="#_5-grid-flex-\u5E03\u5C40" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">align-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-gird-margin-\u5E03\u5C40" tabindex="-1">6. gird + margin \u5E03\u5C40 <a class="header-anchor" href="#_6-gird-margin-\u5E03\u5C40" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_7-writing-mode-\u5C5E\u6027\u5E03\u5C40" tabindex="-1">7. writing-mode \u5C5E\u6027\u5E03\u5C40 <a class="header-anchor" href="#_7-writing-mode-\u5C5E\u6027\u5E03\u5C40" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.children-box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E09\u3001\u56FE\u7247\u5B9A\u9AD8-\u4E0D\u5B9A\u9AD8\u5C45\u4E2D" tabindex="-1">\u4E09\u3001\u56FE\u7247\u5B9A\u9AD8|\u4E0D\u5B9A\u9AD8\u5C45\u4E2D <a class="header-anchor" href="#\u4E09\u3001\u56FE\u7247\u5B9A\u9AD8-\u4E0D\u5B9A\u9AD8\u5C45\u4E2D" aria-hidden="true">#</a></h2><h3 id="\u793A\u4F8B\u4EE3\u7801\u7247\u6BB5\u5982\u4E0B" tabindex="-1">\u793A\u4F8B\u4EE3\u7801\u7247\u6BB5\u5982\u4E0B: <a class="header-anchor" href="#\u793A\u4F8B\u4EE3\u7801\u7247\u6BB5\u5982\u4E0B" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo.jpg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="_1-table-cell" tabindex="-1">1. table-cell <a class="header-anchor" href="#_1-table-cell" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_2-after-before" tabindex="-1">2. ::after / ::before <a class="header-anchor" href="#_2-after-before" aria-hidden="true">#</a></h3><div class="language-css"><pre><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">img</span> <span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u56DB\u3001\u603B\u7ED3" tabindex="-1">\u56DB\u3001\u603B\u7ED3 <a class="header-anchor" href="#\u56DB\u3001\u603B\u7ED3" aria-hidden="true">#</a></h2><h3 id="_1-\u5185\u8054\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40" tabindex="-1">1. \u5185\u8054\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40 <a class="header-anchor" href="#_1-\u5185\u8054\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40" aria-hidden="true">#</a></h3><p><code>a. \u6C34\u5E73\u5C45\u4E2D</code></p><ul><li>\u884C\u5185\u5143\u7D20\u53EF\u8BBE\u7F6E\uFF1Atext-align: center;</li><li>flex \u5E03\u5C40\u8BBE\u7F6E\u7236\u5143\u7D20\uFF1Adisplay: flex; justify-content: center;</li></ul><p><code>b. \u5782\u76F4\u5C45\u4E2D</code></p><ul><li>\u5355\u884C\u6587\u672C\u7236\u5143\u7D20\u786E\u8BA4\u9AD8\u5EA6\uFF1Aheight === line-height</li><li>\u591A\u884C\u6587\u672C\u7236\u5143\u7D20\u786E\u8BA4\u9AD8\u5EA6\uFF1Adisaply: table-cell; vertical-align: middle;</li></ul><h3 id="_2-\u5757\u7EA7\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40" tabindex="-1">2. \u5757\u7EA7\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40 <a class="header-anchor" href="#_2-\u5757\u7EA7\u5143\u7D20\u5C45\u4E2D\u5E03\u5C40" aria-hidden="true">#</a></h3><p><code>a. \u6C34\u5E73\u5C45\u4E2D</code></p><ul><li>\u5B9A\u5BBD: margin: 0 auto;</li><li>\u4E0D\u5B9A\u5BBD\uFF1A \u53C2\u8003\u4E0A\u8BC9\u4F8B\u5B50\u4E2D\u4E0D\u5B9A\u5BBD\u9AD8\u4F8B\u5B50\u3002</li></ul><p><code>b.\u5782\u76F4\u5C45\u4E2D</code></p><ul><li><p>position: absolute \u8BBE\u7F6E left\u3001top\u3001margin-left\u3001margin-to(\u5B9A\u9AD8)\uFF1B</p></li><li><p>position: fixed \u8BBE\u7F6E margin: auto(\u5B9A\u9AD8)\uFF1B</p></li><li><p>display: table-cell\uFF1B</p></li><li><p>transform: translate(x, y)\uFF1B</p></li><li><p>flex(\u4E0D\u5B9A\u9AD8\uFF0C\u4E0D\u5B9A\u5BBD)\uFF1B</p></li><li><p>grid(\u4E0D\u5B9A\u9AD8\uFF0C\u4E0D\u5B9A\u5BBD)\uFF0C\u517C\u5BB9\u6027\u76F8\u5BF9\u6BD4\u8F83\u5DEE\uFF1B</p><p>\u8F6C\u8F7D\u81EA\uFF1A<a href="https://juejin.im/post/5db706d5f265da4d31073959?utm_source=gold_browser_extension" target="_blank" rel="noopener noreferrer">\u8717\u725B\u7684\u5317\u6781\u661F\u4E4B\u65C5</a></p></li></ul>`,50),o=[e];function c(l,u,i,r,k,d){return s(),a("div",null,o)}var y=n(t,[["render",c]]);export{g as __pageData,y as default};
