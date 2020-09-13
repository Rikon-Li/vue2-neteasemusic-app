<template>
  <div id="singers" class="page">
    <category-list :category="category" :initial="initial"/>
    <div class="singer-list-wrap">
      <app-scroll class="content" >
        <singer-list :data=defaultList></singer-list>
      </app-scroll>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import CategoryList from '../components/singers/category-list';
import SingerList from '../components/singers/singer-list';
export default {
  components: {
    CategoryList,
    SingerList
  },
  data(){
    return{
      category: ['华语男','华语女','华语组合','欧美男','欧美女','欧美组合','日本男','日本女','日本组合','韩国男','韩国女','韩国组合','其他男歌手','其他女歌手','其他组合'],
      initial: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    }
  },
  computed: {
    ...mapState({
      defaultList: (state)=> state.singers.defaultList,
    })
  },
  created(){
    this.$store.dispatch("singers/requestDefaultList");
  }
}

</script>


<style>
.singer-list-wrap{
  width: 100%;
  height: calc(100% - 70px);
}
  .content {
    width: 100%;
    /* height: calc(100% - 70px); */
    height: 100%;
  }
</style>