<template>
  <div>
      <h4>{{ title }}</h4>
      <ul>
          <li v-for="(item, index) in data" :key="index">
              <Task :title = "title" :item = "item"/>
          </li>
      </ul>
  </div>
</template>

<script>
import Task from './Task'
export default {
    props: ['data', 'title'],
    components: {
        Task
    }
}
</script>

<style>

</style>