import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import { foo, sayHello, getAppId } from './index'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()


/**
 * 要输出给第三方小程序使用的自定义组件,必须声明全局组件
 * 如果只是单纯的引入,不声明全局组件,build模式会无法正常输出组件
 * 补充：需要在src下自己添加组件目录
 */
import customButton from './components/CustomButton/index'
Vue.component('custom-button', customButton)


// 插件接口输出使用特殊的API 
// 或者在 plugin.json 中直接导出整个文件
// 但是 uniapp2wxpack 经过处理只能通过下面的进行导出
// 用来给引用的小程序使用的 
__uniPluginExports = {
  foo,
  sayHello,
  getAppId
}