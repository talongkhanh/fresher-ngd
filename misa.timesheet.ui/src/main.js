import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import './globalComponents.js';
import '@/styles/root.css'
import 'vue2-datepicker/index.css';

const EventBus = new Vue()
export default EventBus

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')