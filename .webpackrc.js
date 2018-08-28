module.exports = {
  "/api": {
    //"target": "http://192.168.31.119:5000",
    "target":"http://42.159.86.241:5000",
    // "target": "http://localhost:4040",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "/" },
    "proxyTimeout": 7200000,
    onProxyReq: function(proxyReq, req, res) {
      // console.log(proxyReq)
      // throw new Error();
      let bodyData = JSON.stringify(req.body);
      // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
      proxyReq.setHeader('Content-Type','application/json');
      proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
      // stream the content
      proxyReq.write(bodyData);
      console.log(proxyReq.method, proxyReq.path)
    }
  }
}