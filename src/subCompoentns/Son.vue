<template>
  <div>
      Son
      <!-- <h1>
          {{ str }}
      </h1> -->
      <!-- <input ref = "input" type="text"> -->
      <!-- <p id = "abc">我的一个dom节点</p> -->
      <!-- <p ref = "abc">我的一个dom节点</p> -->
      <!-- <p ref = "def">我的一个dom节点</p> -->
      <p class="ppppp" ref = "qwer">
          我是一个dom节点
      </p>

      <p class="ccccc" ref = "two">
          我是第二个dom节点
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            str: 999999
        }
    },
    created() {
        
        this.$bus.$on('sendnum', (data) => {
            this.str = data
        })
    },
    beforeDestroy() {
        this.$bus.$off('sendnum')
    },
    methods: {
        fn() {
            alert(123456789)
        }
    },
    // dom节点加载完毕
    mounted() {
        // this.fn()
        // console.log(this.str)
    //    console.dir(this.$refs.two)
    }
}
</script>

<style>

</style>