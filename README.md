## 静态资源库存储

** 当前目录结构 **

|目录|注释|备注|
| ------------ | ------------ | ------------ |
| face  |表情包   ||
| font  |字体   ||
| images  |图片   ||
| javascript  |js脚本   ||
| layer  |插件   ||
| music  |音乐   ||
| stylesheet  |CSS样式文件   ||
| themes  |主题静态文件   ||

** 更多文件更新中 **

## 用法

需要将 ``[https://static.helingqi.com/](https://static.helingqi.com/)`` 替换为  ``[https://cdn.jsdelivr.net/gh/Vicshs/storage/](https://cdn.jsdelivr.net/gh/Vicshs/storage/)``

GitHub
------

加载任何GitHub版本，提交或分支：

```
/gh/user/repo@version/file
```

加载确切版本：


```
/gh/jquery/jquery@3.1.0/dist/jquery.min.js
/gh/jquery/jquery@32b00373b3f42e5cdcb709df53f3b08b7184a944/dist/jquery.min.js
```

使用版本范围而不是精确版本（仅适用于有效的semver版本）：


```
/gh/jquery/jquery@3/dist/jquery.min.js
/gh/jquery/jquery@3.1/dist/jquery.min.js
```

完全省略版本或使用“latest”加载最新版本（仅适用于有效的semver版本）:(仅限Dev环境）

```
/gh/jquery/jquery@latest/dist/jquery.min.js
/gh/jquery/jquery/dist/jquery.min.js
```

将“.min”添加到任何JS / CSS文件以获得缩小版本 - 如果不存在，我们将为您生成它。所有生成的文件都带有源映射，可以在开发过程中轻松使用：

```
/gh/sindresorhus/github-markdown-css@v2.4.1/github-markdown.min.css
```

获取目录列表：


```
/gh/jquery/jquery@3.1.0/
/gh/jquery/jquery@3.1.0/dist/
```

合并多个文件

----------------------

我们的组合端点具有以下格式：



```
/combine/url1,url2,url3
```

适用于单个文件的所有功能（版本范围，缩小，主要模块）也适用于此处。所有组合文件都带有源映射，可以在开发过程中轻松使用。

Examples:

```
/combine/gh/jquery/jquery@3.1/dist/jquery.min.js,gh/twbs/bootstrap@3.3/dist/js/bootstrap.min.js
/combine/npm/bootstrap@3.3/dist/css/bootstrap.min.css,npm/bootstrap@3.3/dist/css/bootstrap-theme.min.css
```

