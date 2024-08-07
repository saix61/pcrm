import { createProxyMiddleware } from 'http-proxy-middleware';
console.log('setupProxy.js is loaded');
export default function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
}