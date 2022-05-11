<template><h1 id="通过idea启动项目" tabindex="-1"><a class="header-anchor" href="#通过idea启动项目" aria-hidden="true">#</a> 通过IDEA启动项目</h1>
<blockquote>
<p>采用IDEA讲解如何启动前后端项目。
前提： 前后端的开发环境已经安装完成，尚未安装的参考 <RouterLink to="/docs/config.html">开发环境准备</RouterLink></p>
</blockquote>
<h2 id="一、启动java项目" tabindex="-1"><a class="header-anchor" href="#一、启动java项目" aria-hidden="true">#</a> 一、启动JAVA项目</h2>
<h3 id="_1-初始化数据库" tabindex="-1"><a class="header-anchor" href="#_1-初始化数据库" aria-hidden="true">#</a> （1）初始化数据库</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> 执行Sql脚本：`/附件/mysql/cloud-platform.sql`、`/附件/mysql/common_area.sql`
> 脚本工作：自动创建库`cloud-platform`, 并初始化数据
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2-配置-nacos" tabindex="-1"><a class="header-anchor" href="#_2-配置-nacos" aria-hidden="true">#</a> （2）配置 Nacos</h3>
<ul>
<li>启动Ncos</li>
<li>创建cloud命名空间 命名ID：<code>2ca68225-5afe-4d5d-bc39-7d0a00b1e28c</code>
<img src="http://150.158.35.58/ddcat/img/image-20220510232014261.png" alt="修改命名空间"></li>
</ul>
<blockquote>
<p>如果不相使用该命名空间，则需要到代码中更改你自己的命名空间ID。<br>
相关文件：<code>/platform-gateway</code>、<code>/platform-authority</code>、<code>/platform-tools</code><br>
项目中的<code>/src/main/resources/bootstrap.yml</code>
<img src="http://150.158.35.58/ddcat/img/image-20220510233516509.png" alt="修改bootstrap.yml"></p>
</blockquote>
<ul>
<li>导入Nacos配置文件</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>找到项目根目录`/附件/nacos/nacos_config_export_20220510231614.zip` 配置文件
导入到步骤2的cloud命名空间
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>导入后</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>platform-tools.properties、platform-authority.properties、platform-gateway.properties
修改上面三个配置文件的mysql配置和redis配置信息
- 1. 数据库配置(连接和账号密码)
- 2. Redis配置（配置redis的host和port）
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-修改项目配置" tabindex="-1"><a class="header-anchor" href="#_3-修改项目配置" aria-hidden="true">#</a> （3）修改项目配置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-启动项目-访问" tabindex="-1"><a class="header-anchor" href="#_4-启动项目-访问" aria-hidden="true">#</a> （4）启动项目&amp;访问</h3>
<p>以上配置完成后，即可启动后台项目</p>
<ul>
<li>找到类 <code>***Application.java</code> 右键执行启动。</li>
<li>启动顺序：gateway -&gt; authority -&gt; tools</li>
</ul>
<blockquote>
<p>访问后台项目的swagger地址：</p>
<blockquote>
<p>platform-authority：通过 <code>http://127.0.0.1:5002/swagger-ui.html</code><br>
platform-tools：通过 <code>http://127.0.0.1:5001/swagger-ui.html</code></p>
</blockquote>
</blockquote>
<h3 id="_5-项目结构说明" tabindex="-1"><a class="header-anchor" href="#_5-项目结构说明" aria-hidden="true">#</a> （5）项目结构说明</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>项目结构
├─pangu（父POM： 项目依赖、modules组织）
│  ├─platform-dependencies（平台包版本管理）
│  ├─platform-framework（共通模块： 工具类、db多租户配置、config、权限、查询过滤器、注解、接口等）
│  ├─platform-gateway （微服务）（Gateway网关）
│  ├─platform-authority （微服务）（系统管理权限等功能）
│  ├─platform-tools （微服务）（tools 工具）
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="二、启动前端项目" tabindex="-1"><a class="header-anchor" href="#二、启动前端项目" aria-hidden="true">#</a> 二、启动前端项目</h2>
<h3 id="_1-执行命令下载依赖" tabindex="-1"><a class="header-anchor" href="#_1-执行命令下载依赖" aria-hidden="true">#</a> （1）执行命令下载依赖</h3>
<blockquote>
<p>前提完成安装Node.js</p>
</blockquote>
<p>到·<code>platform-ui</code>·前端目录下，执行命令<code>npm install</code>进行安装插件</p>
<h3 id="_2-配置后台接口" tabindex="-1"><a class="header-anchor" href="#_2-配置后台接口" aria-hidden="true">#</a> （2）配置后台接口</h3>
<ul>
<li>修改接口地址 .env.development</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>VITE_PROXY = [["/api","http://localhost:9000"],["/upload","http://localhost:9000/tools/files/upload"]]

http://localhost:900 为gateway网关端口
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-启动前端项目" tabindex="-1"><a class="header-anchor" href="#_3-启动前端项目" aria-hidden="true">#</a> （3）启动前端项目</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>执行：npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>看到如下日志 则启动成功</p>
<p>通过 <code>http://localhost:3000</code> 访问前端项目，默认账号密码： <code>admin/123456</code></p>
</template>
