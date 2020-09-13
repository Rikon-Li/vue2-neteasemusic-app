<template>
  <div class="category-list">
    <app-scroll class="content" >
      <div class="category-title">
        <span class="title">分类(默认热门):</span>
        <span v-for="(item, index) in category" :key="index" >{{item}}</span>
      </div>
    </app-scroll>
    <div class="category-title">
      <span class="title">首字母:</span>
      <span v-for="(item, index) in initial" :key="index" >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: Array,
    initial: Array
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
  border: 1px solid #f00;
  .category-title{
    display: flex;
    justify-content: space-between;  
    overflow-x: auto;  
    // overflow: hidden;
    height: 30px;
    align-items: center;
    span{
      color: $font-color-desc;
      margin: 0 5px;
      font-size: $font-size-m;
      text-align: center;
      font-weight: 500;
      flex-shrink: 0;
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