import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueMqtt from 'vue-mqtt';


Vue.config.productionTip = false

Vue.use(VueMqtt, 'ws://172.20.0.169:9001');

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
