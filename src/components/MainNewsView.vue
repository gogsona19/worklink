<template>
    <div>
      <MainNewsFirst />
      <MainNewsSec />
      <MainNewsTree /> 
      <BitcoinView /> 
      <TagcloudView />
    </div>
</template>

<style scoped>

</style>


<script>
import MainNewsFirst from './MainNewsFirst.vue'
import MainNewsSec from './MainNewsSec.vue'
import MainNewsTree from './MainNewsTree.vue'
import BitcoinView from './BitcoinView.vue'
import TagcloudView from './TagcloudView.vue'
export default {
  components: {
      MainNewsFirst,
      MainNewsSec,
      MainNewsTree,
      BitcoinView,
      TagcloudView,
     }
}
</script>