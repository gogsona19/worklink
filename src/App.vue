<template>
<div class="darkmode"><button @click="darkmode" class="btn btn-primary"><i class="bi bi-moon-stars-fill"></i></button></div>
<div class="menu">
  <div class="menu_child">
    <div class="logobox">
      <router-link  class="nav-link" aria-current="page" to="/">
      <img alt="Vue logo" src="./assets/W.png" width="50">
        WorkLink
      </router-link>
    </div>
  </div>
  <div class="menu_child">
    <nav>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link  class="nav-link" aria-current="page" to="/">განცხადებები</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link"  to="/about">ჩვენს შესახებ</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"  to="/q&a">კითხვა-პასუხი</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link "  to="/contact">კონტაქტი</router-link>
      </li>
    </ul>
  </nav>
    <div class="main_top_options_box">
      <div class="main_auth_btn_bx">
        <div>
          
       <a href="/login" class="btn btn-outline-primary me-2 btn-sm">შესვლა</a>
          
        <a href="/register" class="btn btn-primary btn-sm">რეგისტრაცია</a>
      </div>
      </div>
      <div class="user_icon_bx">
        <span class="badge d-flex align-items-center p-1 pe-2 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill">
          <img class="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt="">Giorgi's
          
        </span>
      </div>
    </div>
  </div>
</div>
  <router-view/>
  <FooterView />
</template>
<script>

import FooterView from '@/components/FooterView.vue'
export default {
  components: {
      FooterView
     },
     data(){
      return{
        active : true
      }
     },

     methods:{
      darkmode(){
        //document.body.setAttribute('data-bs-theme','dark')
        //data-bs-theme="dark"
        document.body.classList.toggle("dark")
        }

      
     }
}
</script>

<style lang="scss">
*{
  font-family: "BPG Nateli", sans-serif;
  font-weight: bold;
  letter-spacing: 0.02em;
}
.bg-body-tertiary.border.rounded-3 {
    border-radius: 20px !important;
}

.darkmode {
        z-index: 1500;
        position: fixed;
        bottom: 10px;
        right: 10px;
}

.darkmode button.btn.btn-primary {
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: #712cf9;
}
.darkmode > button.btn.btn-primary:hover{
  background:#302c37 !important;
  border-color: #302c37;
}

.dark{
  background: #010116 !important;
}
.logobox{
  padding-top: 20px;
  float: left;
      padding-left: 11px;
  img{
    border-radius: 15px;
    transition: transform 0.2s ease-in-out;
  }
  .nav-link {
    font-family: auto;
    letter-spacing: 0.1em;
    float: left;
    
        //padding-top: 7px;
}

}
.logobox:hover.logobox img{
    transform: rotate(-5deg) scale(1.1);
}

nav a.router-link-exact-active {
    color: #8996ae!important;
    background: #f8f9fa !important;
    border: -1px !important;
    position: relative;
}
nav a.router-link-exact-active::before{
content: " ";
    position: absolute;
    bottom: -12px;
    left: -3px;
    width: 18px;
    height: 20px;
    transform: rotate(36deg);
    background: #f8f9fa;
    border-radius: 50%;
}
nav a.router-link-exact-active::after{
content: " ";
    position: absolute;
    bottom: -12px;
    right: 0px;
    width: 18px;
    height: 28px;
    transform: rotate(-36deg);
    background: #f8f9fa;
    border-radius: 50%;
}

a.nav-link {
  //#8996ae!important
  border: 0px !important;
  color: #2c3e50!important;
  border-radius: 20px 20px 0 0 !important;
}
.menu {
    grid-template-columns: 1fr 2fr !important;
    display: grid;
    .menu_child:nth-child(2){
       padding-left: 37px;
    }
    .main_top_options_box{
      width: 35%;
      height: 80px;
      float: right;
      display: grid;
      padding-right: 20px;
      grid-template-columns: 70% 30%;
      .user_icon_bx{
        padding: 20px 0;
      }
      .main_auth_btn_bx{
        padding: 20px 0;
      }
    }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background: linear-gradient(66deg, #e6fbfe 0%, #edddfb 100%) !important;
  //linear-gradient(66deg, #e6fbfe 0%, #edddfb 100%)
  //#d9dacd
}

.bg-body-tertiary.border.rounded-3 {
    border: 0px !important;
}
.bg-body-tertiary.border.rounded-3:first-child {
    background-color: #010116 !important;
}
nav {
  float: left;
margin: 41px auto 0 auto;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #272a37!important;
    }
  }
}
</style>
