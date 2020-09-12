<template>
  <div id="recommend" class="page" :class="{active: showBgColor}">
    <app-scroll class="content" :change="handleScrollChange">
      <div class="wrap">
        <banner-list :data="banner" />
        <recommend-list :data="recommend" />
      </div>
    </app-scroll>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BannerList from "../components/recommend/banner-list";
import RecommendList from "../components/recommend/recommend-list";
export default {
  components: {
    BannerList,
    RecommendList,
  },
  data() {
    return {
      showBgColor: true,
    };
  },
  computed: {
    ...mapState({
      banner: (state) => state.recommend.banner,
      recommend: (state) => state.recommend.recommend,
    }),
    ...mapGetters({
      loading: 'recommend/loading'
    })
  },
  methods: {
    handleScrollChange(show) {
      this.showBgColor = show;
    },
  },
  created() {
    this.$store.dispatch("recommend/requestBannerList");
    this.$store.dispatch("recommend/requestRecommendList");
  },
};
</script>

<style lang="scss">
@import "../assets/global-style.scss";
#recommend {
  background-color: $background-color;
  &.active {
    background-color: $theme-color;
  }
  .content {
    width: 100%;
    height: 100%;
  }
  .wrap {
    background-color: $background-color;
  }
}
</style>