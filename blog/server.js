const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

// MIME类型映射
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  console.log(`收到请求: ${req.method} ${req.url}`);
  
  // 处理根路径
  let filePath = req.url === '/' ? '/index.html' : req.url;
  
  // 解析文件扩展名
  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // 构建文件路径
  filePath = path.join(process.cwd(), filePath);
  
  // 检查文件是否存在
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // 文件不存在，返回404
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>404 - 页面未找到</title>
            <style>
              body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
              h1 { color: #333; }
            </style>
          </head>
          <body>
            <h1>404 - 页面未找到</h1>
            <p>抱歉，您访问的页面不存在。</p>
            <a href="/">返回首页</a>
          </body>
        </html>
      `);
      return;
    }
    
    // 读取文件
    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404);
          res.end('404 Not Found');
        } else {
          res.writeHead(500);
          res.end(`服务器错误: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log(`个人博客服务器运行在 http://${HOST}:${PORT}`);
  console.log('按 Ctrl+C 停止服务器');
});