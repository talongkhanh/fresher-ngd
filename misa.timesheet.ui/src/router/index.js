import Vue from 'vue'
import Router from 'vue-router'
import RequestUpdateWorking from '@/views/timesheet/managementRequest/RequestUpdateWorking'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/timesheet/management-request/request-update-working', component: RequestUpdateWorking, name: 'RequestUpdateWorking' },
    ]
})