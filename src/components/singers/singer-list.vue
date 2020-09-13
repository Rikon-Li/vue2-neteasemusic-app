<template>
  <div id="singer-list">
    <ul class="list">
      <li v-for="item in data" :key="item.id" class="item">
        <div class="image">
          <img :src="item.picUrl" alt="singer-list" class="img">
        </div>
        <h4 class="name">{{item.name}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
#singer-list{
  width: 100%;
  .list{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 5px;
    .item{
      width: 100%;
      height: 60px;
      display: flex;
      border-bottom: 1px solid #eee;
      align-items: center;
      .img{
        width: 50px;
        height: 50px;
        border-radius: 3px ;
      }
      .name{
        color: $font-color-desc;
        font-size: $font-size-m;
        font-weight: 500;
        padding-left: 20px;
      }
    }
  }
}
</style>