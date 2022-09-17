const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

// Proxy
//      1. 방화벽 기능
//      2. 웹 필터 기능
//      3. cash 데이터, 공유 데이터 제공 기능
