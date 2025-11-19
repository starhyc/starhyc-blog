# 我的个人博客

这是一个使用纯HTML、CSS和JavaScript构建的个人博客系统。

## 特性

- 响应式设计，适配各种设备
- 现代化的UI界面
- 文章列表和详情页
- 关于页面
- 搜索功能
- 加载更多文章功能

## 文件结构

```
blog/
├── index.html          # 首页
├── posts.html          # 文章列表页
├── about.html          # 关于页面
├── post1.html          # 示例文章页
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # JavaScript文件
├── images/             # 图片资源
└── server.js           # 本地服务器脚本
```

## 运行方式

### 方法一：使用Node.js服务器

1. 确保已安装Node.js
2. 在终端中进入博客目录：
   ```bash
   cd /workspace/blog
   ```
3. 启动服务器：
   ```bash
   node server.js
   ```
4. 在浏览器中访问 `http://localhost:8080`

### 方法二：直接在浏览器中打开

直接在浏览器中打开 `index.html` 文件即可查看（部分功能如JavaScript可能无法正常工作）。

## 自定义

你可以根据需要修改以下内容：

- 更换图片资源
- 修改样式文件
- 添加更多文章
- 更新个人信息

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- 响应式设计