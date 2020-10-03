import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

Vue.use(Element)
Vue.use(VueFilterDateFormat);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
