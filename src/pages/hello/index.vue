<template>
  <view>This is uni plugin hello world
    <button @tap="handleJump">to list</button>
    <navigator :url="`plugin-private://${PLUGIN_APPID}/pages/list/index`">
       <!-- 可以跳转 -->
      <button>Go to pages/list!</button>
    </navigator>
  </view>
</template>

<script>
  const { PLUGIN_APPID } = process.env
  export default {
    data () {
      return {
        PLUGIN_APPID
      }
    },
    created() {
      console.log(requireMiniProgram().whoami)
    },
    methods: {
      handleJump() {
        // #ifdef MP-WEIXIN
        console.log('微信小程序')
        // 不支持
        wx.navigateTo({
          url: `plugin-private://${PLUGIN_APPID}/pages/list/index`,
          fail(res) {
            console.log(res)
          }
        })
        // #endif

      }
    }
  };
</script>

<style lang='scss' scoped>
</style>
