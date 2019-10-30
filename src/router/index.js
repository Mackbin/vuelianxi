import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router'

Vue.use(VueRouter)
// 处理点击两次标签路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

let router = new VueRouter({
   ...routers
})
export default router