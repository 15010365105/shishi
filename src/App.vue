<template>
  <div id="app">
    <!-- <Father/> -->
    <Mp/>
  </div>
</template>

<script>
import Father from './subCompoentns/Father'
import Mp from './subCompoentns/Mp'
export default {
  name: 'app',
  components: {
    Father,
    Mp
  },
  data() {
    return {
      arr: []
    }
  },
  methods: {
    fn(data) {
      this.arr.push({
        title: data,
        flag: false
      })
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
