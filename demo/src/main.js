// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from "./router/index";
import "./until/flexble";
import "./fonts/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/until/e-alert";
Vue.use(ElementUI);
import store from "./store.js";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
})
