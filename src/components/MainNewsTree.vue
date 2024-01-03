<template>
    <div class="">
<div class="modal modal-sheet position-static d-block bg-body-secondary p-4" tabindex="-1" role="dialog" id="modalTour">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-body ">
        <h2 class="fw-bold mb-0"><i class="bi bi-award-fill"></i>VIP განცხადება</h2>

        <ul class="d-grid gap-4 my-5 list-unstyled small">
          <li class="d-flex gap-4">
            <i class="bi bi-amd"></i>
            <div class="tree_texts">
              <h5 class="mb-0">Tbilisi Marriott Hotel</h5>
              <p>უმცროსი ბუღალტერი - ანაზღაურებადი სტაჟირება.</p>
            </div>
          </li>
          <li class="d-flex gap-4">
            <i class="bi bi-apple"></i>
            <div class="tree_texts">
              <h5 class="mb-0">Tbilisi Marriott Hotel</h5>
              <p>უმცროსი ბუღალტერი - ანაზღაურებადი სტაჟირება.</p>
            </div>
          </li>
          <li class="d-flex gap-4">
            <i class="bi bi-bar-chart-fill"></i>
            <div class="tree_texts">
              <h5 class="mb-0">Tbilisi Marriott Hotel</h5>
              <p>უმცროსი ბუღალტერი - ანაზღაურებადი სტაჟირება.</p>
              <i class="bi bi-telephone"></i> ზარი მობილურზე
            </div>
            <i class="bi bi-arrow-up-right"></i>
          </li>
        </ul>
        <!--<button type="button" class="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Great, thanks!</button>-->
      </div>
    </div>
  </div>
</div>
    </div><!--end three news -->
</template>
<style scoped>
div#modalTour {
    background-color: rgb(13 110 253 / 0%) !important;
}
.modal-content.rounded-4.shadow {
   /* background: #a6ff3d;*/
  /* background-color: #060046;*/

}

li.d-flex.gap-4 {
    text-align: left;
}
li.d-flex >i.bi {
    font-size: 45px;
    color: black;
}
.tree_texts{
  padding-top: 5px;
}
li.d-flex.gap-4 {
    background: white;
    border-radius: 24px;
    padding: 11px;
    position: relative;
    border: 1px solid;
}
h2.fw-bold.mb-0{
  margin-top: 36px;
  color: #000;
}
i.bi.bi-arrow-up-right {
    font-size: 15px !important;
    position: absolute;
    right: 8px;
    top: 7px;
}
</style>