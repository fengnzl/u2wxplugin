<template>
  <view>
    <text>this is custom button</text>
    <button @click="handleClick">custom plugin button</button>
  </view>
</template>

<script>
export default {
  name: "CustomButton",
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log('plugin click')
    }
  }
};
</script>

<style lang='scss' scoped>
</style>