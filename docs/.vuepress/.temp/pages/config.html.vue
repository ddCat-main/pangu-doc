<template><h2 id="开发环境准备" tabindex="-1"><a class="header-anchor" href="#开发环境准备" aria-hidden="true">#</a> 开发环境准备</h2>
<ul>
<li>JDK &gt;= 1.8(推荐11版本)</li>
<li>MySQL &gt;= 8.0.24 (推荐8.0.24版本)</li>
<li>Maven &gt;= 3.5</li>
<li>lombok 插件</li>
<li>Redis &gt;= 3.2</li>
<li>Node Js &gt;= 10.0</li>
<li>Npm &gt;= 5.6.0</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mysql5<span class="token punctuation">.</span><span class="token number">6</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">以下存在</span><span class="token template-punctuation string">`</span></span><span class="token function">datetime</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">无法导入的问题，可能需要自行替换</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token string">''</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="技术点" tabindex="-1"><a class="header-anchor" href="#技术点" aria-hidden="true">#</a> 技术点</h2>
<blockquote>
<p>需要掌握的基础知识</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">序号</th>
<th style="text-align:left">知识点</th>
<th style="text-align:left">资料</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">Node.js 入门</td>
<td style="text-align:left">http://www.runoob.com/nodejs/nodejs-tutorial.html</td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left">Npm 命令</td>
<td style="text-align:left">http://www.runoob.com/nodejs/nodejs-npm.html</td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">Vue + Ant Design</td>
<td style="text-align:left">Webpack 、axios、Vue router、Vuex、Vue Loader、Vue cli、Ant Design</td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">Maven命令</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">Spring Boot</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left">Mybatis-plus</td>
<td style="text-align:left">https://baomidou.com/</td>
</tr>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left">OAuth 2.0</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">8</td>
<td style="text-align:left">Spring Cloud Alibaba Nacos</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">9</td>
<td style="text-align:left">Open Feign</td>
<td style="text-align:left">微服务RPC调用框架</td>
</tr>
<tr>
<td style="text-align:left">10</td>
<td style="text-align:left">GateWay</td>
<td style="text-align:left">微服务网关</td>
</tr>
</tbody>
</table>
<h2 id="推荐ide" tabindex="-1"><a class="header-anchor" href="#推荐ide" aria-hidden="true">#</a> 推荐IDE</h2>
<ul>
<li>后端使用 IntelliJ IDEA（<code>Lombok Plugin</code> 必装）</li>
<li>前端使用 IntelliJ IDEA 或 WebStorm</li>
</ul>
<h1 id="开发环境安装" tabindex="-1"><a class="header-anchor" href="#开发环境安装" aria-hidden="true">#</a> 开发环境安装</h1>
<h2 id="nodejs前端环境安装" tabindex="-1"><a class="header-anchor" href="#nodejs前端环境安装" aria-hidden="true">#</a> NodeJs前端环境安装</h2>
<ol>
<li>安装node.js
如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a>，请安装它。
<strong>验证</strong></li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol>
<li>配置镜像仓库源</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="java开发环境搭建" tabindex="-1"><a class="header-anchor" href="#java开发环境搭建" aria-hidden="true">#</a> JAVA开发环境搭建</h2>
<blockquote>
<p>本地需要安装 Jdk8+、Maven、Redis、Mysql5.7+ 这些都是基础就不讲了，自己百度去。</p>
</blockquote>
<p>需要了解：</p>
<ul>
<li>IDEA中Lombok插件的安装与使用</li>
<li>IDEA自动生成类注释和方法注释</li>
</ul>
</template>
