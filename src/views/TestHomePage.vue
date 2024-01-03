<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr;">
      <div class="bg-body-tertiary border rounded-3">
       <PostView />
        <br><br><br><br><br><br><br><br><br><br>
      </div>
      <div class="bg-body-tertiary border rounded-3">
        <br>
        
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
label {
    float: left;
}
.bg-body-tertiary.border.rounded-3:first-child{
    background-color: white !important;
}
</style>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import PostView from '@/components/PostView.vue'

//import FilterView from '@/components/FilterView.vue'
export default {
  name: 'HomeView',
  components: {
      PostView,      
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
