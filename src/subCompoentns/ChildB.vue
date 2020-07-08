<template>
  <div>
      ChildB
      <h2>
          {{newNum}}
      </h2>
      <Son ref = "com"/>
      <button @click="newfn">点击执行子组件中的方法</button>
  </div>
</template>

<script>
import Son from './Son'
export default {
    components: {
        Son
    },
    data() {
        return {
            newNum: 0
        }
    },
    methods: {
        newfn() {
            this.$refs.com.fn()
        }
    },
    mounted() {
        // this.$refs.com.fn()
        // console.log(this.$refs.com)
        this.$bus.$on('sendnum', (data) => {
            this.newNum = data
        })
    },
    beforeDestroy() {
        this.$bus.$off('sendnum')
    }
}
</script>

<style>

</style>