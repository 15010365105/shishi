<template>
  <div>
      <div class="box">

      </div>
      <audio ref = "audio"  controls :src="require('../music/music.mp3')"></audio>
  </div>
</template>

<script>
export default {
    mounted() {
        // console.dir(this.$refs.audio)
        // this.$refs.audio.autoplay = true
    }
}
</script>

<style scoped>
    .box{
        width: 100px;
        height: 100px;
        background: orange
    }
</style>