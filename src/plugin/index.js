import VueLazyload from 'vue-lazyload';
import AppScroll from '../components/common/app-scroll.vue';
import AppScrollX from '../components/common/app-scrollX.vue';

export default{
  install(Vue){
    Vue.use(VueLazyload, {
      preLoad: 1.3,
      error: "/img/music.png",
      loading: "/img/music.png",
      attempt: 1,
    });
    
    Vue.component('app-scroll',AppScroll)
    Vue.component('app-scrollX',AppScrollX)
  }
}