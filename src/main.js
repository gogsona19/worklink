import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bpg-nateli/css/bpg-nateli.min.css'



createApp(App).use(store).use(router).mount('#app')
