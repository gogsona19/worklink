<template>
  <div class="about">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr ">
     <!-- <div class="bg-body-tertiary border rounded-3">
        <br><br><br><br><br><br><br><br><br><br>
      </div>-->
      <div class="bg-body-tertiary border rounded-3">
        <h4><i class="bi bi-house-fill"></i> <a href="/">მთავარი</a> / ჩემი კომპანია</h4>
        <hr/>

        <div class="form-check form-switch" >
        <input class="form-check-input" v-model="test"  value="1" type="checkbox" role="switch"  id="flexSwitchCheckDefault">
        <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
        </div>
        <hr v-if="test" />
        {{test}}
            <div class="container text-center">
            <div class="row">
                <div class="col-sm-8 maincontonprof">
                    <div class="options_box"><H6>THIS IS OPTIONS</H6>
                        <div class="row optsorw">
                            <div class="col">
                            <button type="button" @click="btn01++" class="btn btn-light">Click {{btn01}}</button>
                            </div>
                            <div class="col">
                            <button type="button"  @click="btn02++" class="btn btn-light">Click {{btn02}}</button>
                            </div>
                            <div class="col">
                            <button type="button" class="btn btn-light">Click</button>
                            </div>
                            <div class="col">
                            <button type="button" class="btn btn-light">Click</button>
                            </div>
                        </div>
                        <CompPostView />
                    </div>
                </div>
                <div class="col-sm-4">
                      <div class="row">
                        <div class="col-sm-8 ">
                        <h6>#Tbilisi Marriott Hotel</h6>
                        </div>
                        <div class="col-sm-4 ">
                        <span class="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle rounded-pill">
                            <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt="">
                            MR.Profile
                            <span class="vr mx-2"></span>
                            <a href="#"><i class="bi bi-qr-code-scan"></i></a>
                        </span>
                        </div>
                      </div>
                </div>
            </div>
            </div>
        <br><br><br><br><br><br><br><br><br><br>
      </div>
    </div>
  </div>
  </div>
</template>
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
.col-sm-4 h6{
    text-align: left;
    line-height: 36px;
    border-bottom: 1px solid silver;
}
.maincontonprof{
    border: 1px solid silver;
    text-align: left;
    .options_box{
        background: red;
        margin:10px 0;
        .optsorw{
            padding: 10px;
            background:white;
            border: 1px solid silver;
        }
    }
}
</style>
<script>
import CompPostView from '@/components/CompPostView.vue'
export default {
      components: {
        CompPostView,
      },
     data(){
        return{
           test: null,
           btn01 : null,
           btn02 : null
        }
     }

  }

</script>