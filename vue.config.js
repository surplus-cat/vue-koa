let port = process.env.PORT

module.exports = {
  lintOnSave: false,
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 5555,
    https: false,
    hotOnly: false,
    proxy: {
      '/auth': {
        target: `http://localhost:${port}`,
        //ws: true,
        changeOrigin: true
      },
      '/api': {
        target: `http://localhost:${port}`,
        changeOrigin: true
      }
    }, // 设置代理
    before: app => {}
  }
}
