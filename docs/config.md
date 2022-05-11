---
title: 开发环境准备
date: 2022/05/09 22:30:59
---
## 开发环境准备

- JDK >= 1.8(推荐11版本)
- MySQL >= 8.0.24 (推荐8.0.24版本)
- Maven >= 3.5
- lombok 插件
- Redis >= 3.2
- Node Js >= 10.0
- Npm >= 5.6.0

```javascript
mysql5.6`以下存在`datetime(0)`无法导入的问题，可能需要自行替换`(0)->''
```
## 技术点

> 需要掌握的基础知识

| 序号 | 知识点                 | 资料                                                     |
| :--- | :------------------- | :------------------------------------------------------- |
| 1    | Node.js 入门          | http://www.runoob.com/nodejs/nodejs-tutorial.html        |
| 2    | Npm 命令              | http://www.runoob.com/nodejs/nodejs-npm.html             |
| 3    | Vue + Ant Design     | Webpack 、axios、Vue router、Vuex、Vue Loader、Vue cli、Ant Design  |
| 4    | Maven命令             |                                                          |
| 5    | Spring Boot          |                                                          |
| 6    | Mybatis-plus         | https://baomidou.com/
| 7    | OAuth 2.0            |
| 8    | Spring Cloud Alibaba Nacos  |       |
| 9    | Open Feign           |   微服务RPC调用框架    |
| 10   | GateWay              |   微服务网关    |

## 推荐IDE

- 后端使用 IntelliJ IDEA（`Lombok Plugin` 必装）
- 前端使用 IntelliJ IDEA 或 WebStorm


# 开发环境安装


## NodeJs前端环境安装

1. 安装node.js
   如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。
   **验证**

```
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v
```

1. 配置镜像仓库源

```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

## JAVA开发环境搭建

> 本地需要安装 Jdk8+、Maven、Redis、Mysql5.7+ 这些都是基础就不讲了，自己百度去。

需要了解：
- IDEA中Lombok插件的安装与使用
- IDEA自动生成类注释和方法注释

