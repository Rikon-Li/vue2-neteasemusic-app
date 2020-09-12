<template>
  <div class="category-list">
    <div class="category-title">
      <li>分类(默认热门)</li>
      <li v-for="(item, index) in data" :key="index" >
        {{item}}
      </li>
    </div>
    <div class="initial-title">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  },
  mounted(){
    console.log(this.data);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
.category-list{
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  padding: 5px;
  .category-title{
    height: 100%;
    // overflow: hidden;
    li{
      float: left;
    }
  }
  .initial-title{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>