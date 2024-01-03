<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 0.8fr 2fr;">
      <div class="bg-body-tertiary border rounded-3">
        <MainNewsView />
        <br><br><br><br><br><br><br><br><br><br>
      </div>
      <div class="bg-body-tertiary border rounded-3">
        <br>
        <PostView />
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
label {
    float: left;
}
</style>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import PostView from '@/components/PostView.vue'
import MainNewsView from '@/components/MainNewsView.vue'
//import FilterView from '@/components/FilterView.vue'
export default {
  name: 'HomeView',
  components: {
      PostView,
      MainNewsView,
      
     },
     data(){
      return{

      }
     },
computed: {

  },
  methods: {

  },
  created(){

  }
}
</script>
