import VueLazyload from 'vue-lazyload';
import AppScroll from '../components/common/app-scroll.vue';

export default{
  install(Vue){
    Vue.use(VueLazyload, {
      preLoad: 1.3,
      error: "/img/music.png",
      loading: "/img/music.png",
      attempt: 1,
    });
    
    Vue.component('app-scroll',AppScroll)
  }
}


