import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.use(ElementUI);

new Vue({
  el: '#app',
	router,
	store,
  render: h => h(App)
})

(function () {
        var  styleN = document.createElement("style");
        var width = document.documentElement.clientWidth/16;
        styleN.innerHTML = 'html{font-size:'+width+'px!important}';
        document.head.appendChild(styleN);
    })();
app.style.height=window.screen.height
