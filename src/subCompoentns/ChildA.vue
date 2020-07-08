<template>
  <div>
      ChildA
      <button @click="sendnum">+</button>
      <!-- <button>+</button> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            num: 98765
        }
    },
    created() {
        // console.log(this.$bus)
    },
    methods: {
        sendnum() {
            this.num += 1
            this.$bus.$emit('sendnum', this.num)
        }
    }
}
</script>

<style>

</style>