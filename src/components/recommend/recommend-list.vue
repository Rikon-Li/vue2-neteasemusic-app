<template>
  <div class="recommond-list">
    <h3 class="title">推荐歌单</h3>
    <ul class="list">
      <li v-for="item in data" :key="item.id" class="item">
        <div class="image">
          <img v-lazy="item.picUrl" alt="music-list" class="img" />
          <p class="cover"></p>
          <p class="info">
            <span class="iconfont icon-headset"></span>
            <span>{{item.playCount | formatter}}</span>
          </p>
        </div>
        <h4 class="name">{{item.name}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  filters: {
    formatter(count) {
      // console.log(count);
      if (count < 10000) {
        return count;
      } else if (count < 10000 * 10000) {
        return Math.floor(count / 10000) + "万";
      } else {
        return Math.floor(count / 10000 / 10000) + "亿";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
.recommond-list {
  width: 100%;
}
.title {
  font-size: $font-size-m;
  font-weight: 700;
  line-height: 60px;
  width: 98%;
  margin: 0 auto;
}
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .item {
    width: 32%;
    .image {
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      .img {
        width: 100%;
      }
      .info {
        position: absolute;
        top: 6px;
        right: 4px;
        color: $font-color-light;
        font-size: $font-size-s;
        display: flex;
        align-items: center;
        .iconfont{
          font-size: $font-size-l;
        }
      }
      .cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background: linear-gradient(rgba(110, 110, 110, 0.4), rgba(255, 255, 255, 0));
      }
    }
    .name{
      width: 100%;
      font-size: $font-size-s;
      font-weight: normal;
      line-height: 18px;
    }
  }
}
</style>