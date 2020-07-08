<template>
  <div>
      <span v-if = "title == '正在进行' && !item.flag">
            <input v-model="item.flag" type="checkbox">
            {{ item.title }}
        </span>

        <span v-if = "title == '已经完成' && item.flag">
            <input v-model="item.flag" type="checkbox">
            {{ item.title }}
        </span>
  </div>
</template>

<script>
export default {
    props: ['item', 'title']
}
</script>

<style>

</style>