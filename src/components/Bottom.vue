<template>
  <div>
      <!--  -->
      <Item title = "正在进行" :data = "sendval"/>
       
      <!--  -->
      <Item title = "已经完成" :data = "sendval"/>

  </div>
</template>

<script>
import Item from './Item'
export default {
    props: ['sendval'],
    components: {
        Item
    }
}
</script>

<style>

</style>