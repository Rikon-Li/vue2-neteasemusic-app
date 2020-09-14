<template>
  <div class="category-list">
    <app-scrollX class="content" >
      <div class="category-title">
        <span class="title">分类(默认热门):</span>
        <span v-for="(item, index) in category" :key="index" @click="selectCategory(index)" :class="{selected: cate == index}" >{{item.name}} </span>
      </div>
    </app-scrollX>
    <app-scrollX class="content" >
      <div class="category-title">
        <span class="title">首字母:</span>
        <span v-for="(item, index) in initials" :key="index" @click="selectInitial(index)" :class="{selected: init == index}">{{item.initial}}</span>
      </div>
    </app-scrollX>
  </div>
</template>

<script>
export default {
  props: {
    category: Array,
    initials: Array
  },
  data(){
    return{
      cate:-1,
      init:-1
    }
  },
  methods: {
    selectCategory(index){
      // console.log(index);
      this.$emit('passCategory',index);
      this.cate = index;
      // console.log(index);
      // console.log(this.a);
    },
    selectInitial(index){
      // console.log(index);
      this.$emit('passInitial',index);
      this.init = index;
      // console.log(index);
    }

  },
  mounted(){
    // console.log(this.data);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
.category-list{
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 5px;
  // border: 1px solid #f00;
  .category-title{
    display: flex;
    justify-content: space-between;  
    // overflow-x: auto;  
    overflow: hidden;
    height: 30px;
    align-items: center;
    span{
      box-sizing: border-box;
      color: $font-color-desc;
      margin: 0;
      font-size: $font-size-m;
      text-align: center;
      font-weight: 500;
      flex-shrink: 0;
      line-height: 24px;
      padding: 0 5px;
      border-radius: 10px;
      border: 1px solid transparent;
    }
    .selected{
      color: $theme-color;
      border: 1px solid $theme-color;
    }
    .title{
      color: #808080;
    }
  }
}
.content{
  width: 100%;
}

</style>