---
title: 启动项目
date: 2022/05/10 22:55:00
---
# 通过IDEA启动项目

> 采用IDEA讲解如何启动前后端项目。
> 前提： 前后端的开发环境已经安装完成，尚未安装的参考 [开发环境准备](/docs/config.html)

## 一、启动JAVA项目

### （1）初始化数据库
```
> 执行Sql脚本：`/附件/mysql/cloud-platform.sql`、`/附件/mysql/common_area.sql`
> 脚本工作：自动创建库`cloud-platform`, 并初始化数据
```

### （2）配置 Nacos
- 启动Ncos
- 创建cloud命名空间 命名ID：`2ca68225-5afe-4d5d-bc39-7d0a00b1e28c` 
![修改命名空间](http://150.158.35.58/ddcat/img/image-20220510232014261.png)
> 如果不相使用该命名空间，则需要到代码中更改你自己的命名空间ID。  
相关文件：`/platform-gateway`、`/platform-authority`、`/platform-tools`  
项目中的`/src/main/resources/bootstrap.yml`
![修改bootstrap.yml](http://150.158.35.58/ddcat/img/image-20220510233516509.png)
- 导入Nacos配置文件
```
找到项目根目录`/附件/nacos/nacos_config_export_20220510231614.zip` 配置文件
导入到步骤2的cloud命名空间
```
- 导入后
```
platform-tools.properties、platform-authority.properties、platform-gateway.properties
修改上面三个配置文件的mysql配置和redis配置信息
- 1. 数据库配置(连接和账号密码)
- 2. Redis配置（配置redis的host和port）
```

### （3）修改项目配置

```

```

### （4）启动项目&访问

以上配置完成后，即可启动后台项目

- 找到类 `***Application.java` 右键执行启动。
- 启动顺序：gateway -> authority -> tools
> 访问后台项目的swagger地址：  
>> platform-authority：通过 `http://127.0.0.1:5002/swagger-ui.html`  
>> platform-tools：通过 `http://127.0.0.1:5001/swagger-ui.html`

### （5）项目结构说明
```
项目结构
├─pangu（父POM： 项目依赖、modules组织）
│  ├─platform-dependencies（平台包版本管理）
│  ├─platform-framework（共通模块： 工具类、db多租户配置、config、权限、查询过滤器、注解、接口等）
│  ├─platform-gateway （微服务）（Gateway网关）
│  ├─platform-authority （微服务）（系统管理权限等功能）
│  ├─platform-tools （微服务）（tools 工具）
```

## 二、启动前端项目

### （1）执行命令下载依赖
> 前提完成安装Node.js

到·`platform-ui`·前端目录下，执行命令`npm install`进行安装插件

### （2）配置后台接口

- 修改接口地址 .env.development

```
VITE_PROXY = [["/api","http://localhost:9000"],["/upload","http://localhost:9000/tools/files/upload"]]

http://localhost:900 为gateway网关端口
```

### （3）启动前端项目

```
执行：npm run dev
```
看到如下日志 则启动成功

通过 `http://localhost:3000` 访问前端项目，默认账号密码： `admin/123456`