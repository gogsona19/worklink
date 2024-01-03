<template>
  <div class="q_and_a">
   <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr ">
     <!-- <div class="bg-body-tertiary border rounded-3">
        <br><br><br><br><br><br><br><br><br><br>
      </div>-->
      <div class="bg-body-tertiary border rounded-3">
        <h4><i class="bi bi-house-fill"></i> <a href="/">მთავარი</a> / რეგისტრაცია</h4>
        <hr/>
        
        <div class="modal modal-sheet  d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">რეგისტრაცია</h1>
        <a href="/" class="btn-close" ></a>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">@მეილი</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatcompany" placeholder="კომპანიის დასახელება">
            <label for="floatcompany">კომპანიის დასახელება</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatcompanyid" placeholder="კომპანიის ID">
            <label for="floatcompanyid">კომპანიის ID</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floataddress" placeholder="კომპანიის მისამართი">
            <label for="floataddress">კომპანიის მისამართი</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floattel" placeholder="კომპანიის tel:">
            <label for="floattel">კომპანიის Tel:</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatname" placeholder="თქვენი სახელი">
            <label for="floatname">თქვენი სახელი</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatlastname" placeholder="თქვენი გვარი">
            <label for="floatlastname">თქვენი გვარი</label>
          </div>  
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatpersonid" placeholder="თქვენი ID">
            <label for="floatpersonid">თქვენი ID</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatpersonposition" placeholder="თქვენი პოზიცია კომპანიაში">
            <label for="floatpersonposition">თქვენი პოზიცია კომპანიაში</label>
          </div>                              
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">პაროლი</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">რეგისტრაცია</button>
          <small class="text-body-secondary">ღილაკზე დაკლიკებისას შენ ეთანხმები საიტის წესებს.</small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">ან გამოიყენე სოციალური ქსელები</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"></use></svg>
            Sign up with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"></use></svg>
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
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
div#modalSignin {
    background: linear-gradient(66deg, #e6fbfe 0%, #edddfb 100%) !important;
}
</style>
<script>
export default {
}
</script>