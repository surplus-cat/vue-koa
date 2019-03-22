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
        target: 'http://localhost:8889',
        ws: true,
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:8889',
        changeOrigin: true
      }
    }, // 设置代理
    before: app => {}
  }
}
