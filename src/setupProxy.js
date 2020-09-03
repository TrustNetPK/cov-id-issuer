const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/connections',
        createProxyMiddleware({
            target: 'http://issueragent.trustnetpk.com:2052',
            changeOrigin: true,
        })
    );

    app.use(
        '/issue-credential',
        createProxyMiddleware({
            target: 'http://issueragent.trustnetpk.com:2052',
            changeOrigin: true,
        })
    );

    app.use(
        '/credential-definitions',
        createProxyMiddleware({
            target: 'http://issueragent.trustnetpk.com:2052',
            changeOrigin: true,
        })
    );
};