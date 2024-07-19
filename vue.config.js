const PLUGIN_APPID = '"xxx"'
module.exports = {
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      args[0]['process.env'].PLUGIN_APPID = PLUGIN_APPID
      return args
    })
  },
}