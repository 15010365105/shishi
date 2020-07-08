module.exports = {
    lintOnSave: false
    // npm i vue-bus -S
    // 在入口文件main.js中引入 使用Vue.use把bus挂载到Vue实例下（给Vue添加一个$bus的属性）
    // 通过事件执行this.$bus.$emit(name, 要发送的数据)
    // 在需要使用该数据的组件中接收 在生命周期中this.$bus.$on来接收 this.$bus.$on(name, function)
    // 在组件销毁前使用this.$bus.$off(name)来清除
}