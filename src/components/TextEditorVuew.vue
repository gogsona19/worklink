<template>
    <div class="createpost">
        <h5>შექმენი</h5>
        <form>
        <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">განცხადების დასახელება</label>
        </div>
        <div class="col">
            <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>განცხადების კატეგორია</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div class="col">
            <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>ქვე კატეგორია</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div class="col">
            <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>რეგიონი</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div class="col">
            <select class="form-select form-select-lg mb-3" aria-label="Large select example">
            <option selected>სამუშაო განაკვეთი</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div class="col">
            <div class="input-group mb-3 ">
            <input type="text" class="form-control form-select-lg " placeholder="მინიმუმი" aria-label="Username">
            <span class="input-group-text"> ₾ ანაზღაურება ₾</span>
            <input type="text" class="form-control form-select-lg " placeholder="მაქსიმუმი" aria-label="Server">
            </div>
        </div>
        <QuillEditor theme="snow" :tolbar="custom-toolbar" >
            <template #toolbar>
                <div id="custom-toolbar" hidden>
                    <button class="ql-bold">B</button>
                    <button class="ql-italic">I</button>
                    <button class="ql-underline">U</button>
                    <button class="ql-strike">ST</button>
                    <button class="ql-bold">Y</button>
                </div>
            </template>
        </QuillEditor>
        <br>
        <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">აირჩიე კომპანიის ლოგო</label>
        <input type="file" class="form-control" id="inputGroupFile01">
        </div>
        <br>
        <button type="button" class="btn btn-primary btn-lg">განათავსე</button>
        </form>
    </div>
</template>
<script setup>

import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

</script>
<style scoped>
.createpost{
    width: 700px;
    border: 1px solid #ebe2fb;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 22px;
    h5{
        text-align:left;
    }
}
.ql-toolbar.ql-snow + .ql-container.ql-snow{
    padding:60px !important;
}

</style>