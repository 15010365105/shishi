<template>
  <div>
      <ChildA/>
      <ChildB/>
  </div>
</template>

<script>
import ChildA from './ChildA'
import ChildB from './ChildB'
export default {
    components: {
        ChildA,
        ChildB
    }
}
</script>

<style>

</style>