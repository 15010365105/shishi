<template>
  <div>
      <input v-model="val" @keydown.enter="sendVal" type="text">
  </div>
</template>

<script>
export default {
    data() {
        return {
            val: '',
            newStr: this.msg
        }
    },
    methods: {
        sendVal() {
            // this.msg = 123456
            this.$emit('sendval', this.val)
        }
    }
}
</script>

<style>

</style>