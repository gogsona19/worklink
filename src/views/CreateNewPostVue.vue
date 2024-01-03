<template>
  <div class="createnewpost">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr ">
     <!-- <div class="bg-body-tertiary border rounded-3">
        <br><br><br><br><br><br><br><br><br><br>
      </div>-->
      <div class="bg-body-tertiary border rounded-3">
        <h4><i class="bi bi-house-fill"></i> <a href="/">მთავარი</a> / ახალი განცხადება</h4>
        <hr/>
        <select class="form-select" v-model="myops" aria-label="Default select example">
            <option :value="null" selected>აირჩიე პაკეტი</option>
            <option value="1" >პაკეტი 1</option>
            <option value="2">პაკეტი 2</option>
            <option value="3">პაკეტი 3</option>
        </select>
        <div class="form-check form-switch" >
        <input class="form-check-input"  v-model="myops" value="1" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>
        <TextEditorVuew  v-if="myops === true"/>
        <br><br><br><br><br><br><br><br><br><br>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import TextEditorVuew from '@/components/TextEditorVuew.vue'
export default {
    components: {
      TextEditorVuew,
     },
     data(){
        return{
            myops: null,
        }
     },
     watch: {
        myops(newVal) {
        console.log('Selected option value:', newVal);
    }
  }
}
</script>

<style scoped>
.bg-body-tertiary.border.rounded-3:first-child{
  background-color: #f8f9fa !important;
}
h4{
    text-align: left;
    padding:20px 20px 0 20px;
}
.bg-body-tertiary.border.rounded-3 a {
    text-decoration: none;
}
</style>