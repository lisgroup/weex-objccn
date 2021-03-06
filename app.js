// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-default/index.css';


import Layout from './src/components/layout.vue';
import * as uiv from 'uiv';
// import cordova from './mobile-index'  // 打开此行代码的注释可以打 cordova 的包

Vue.use(uiv);
// Vue.use(ElementUI);

Vue.config.productionTip = false;

// cordova.onDeviceReady = () => {  // 打开此行代码的注释可以打 cordova 的包
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Layout/>',
  components: {
    Layout
  }
  //  render: h => h(App)
});
// }

// cordova.initialize() // 打开此行代码的注释可以打 cordova 的包
