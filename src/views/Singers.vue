<template>
  <div id="singers" class="page">
    <category-list @passCategory="handleCategory" @passInitial="handleInitial" :category="category" :initials="initials"/>
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
      category: [
        {'name':'华语男','type':1,'area':7},
        {'name':'华语女','type':2,'area':7},
        {'name':'华语组合','type':3,'area':7},
        {'name':'欧美男','type':1,'area':96},
        {'name':'欧美女','type':2,'area':96},
        {'name':'欧美组合','type':3,'area':96},
        {'name':'日本男','type':1,'area':8},
        {'name':'日本女','type':2,'area':8},
        {'name':'日本组合','type':3,'area':8},
        {'name':'韩国男','type':1,'area':16},
        {'name':'韩国女','type':2,'area':16},
        {'name':'韩国组合','type':3,'area':16},
        {'name':'其他男歌手','type':1,'area':0},
        {'name':'其他女歌手','type':2,'area':0},
        {'name':'其他组合','type':3,'area':0}],
      initials: [{'initial':'A'}, {'initial':'B'}, {'initial':'C'}, {'initial':'D'}, {'initial':'E'}, {'initial':'F'}, {'initial':'G'}, {'initial':'H'}, {'initial':'I'}, {'initial':'J'}, {'initial':'K'}, {'initial':'L'}, {'initial':'M'}, {'initial':'N'}, {'initial':'O'}, {'initial':'P'}, {'initial':'Q'}, {'initial':'R'}, {'initial':'S'}, {'initial':'T'}, {'initial':'U'}, {'initial':'V'}, {'initial':'W'}, {'initial':'X'}, {'initial':'Y'}, {'initial':'Z'}],
      categorySelected: false,
      initialSelected: false,
      selectedObj:{}
    }
  },
  computed: {
    ...mapState({
      defaultList: (state)=> state.singers.defaultList,
    })
  },
  created(){
    this.$store.dispatch("singers/requestDefaultList");
  },
  methods:{
    handleCategory(index){
      Object.assign(this.selectedObj,this.category[index]);
      this.$store.dispatch("singers/requestDefaultList", this.selectedObj);
    },
    handleInitial(index){
      Object.assign(this.selectedObj,this.initials[index]);
      this.$store.dispatch("singers/requestDefaultList", this.selectedObj);
    },
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