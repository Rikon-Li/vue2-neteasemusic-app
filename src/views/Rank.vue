<template>
  <div id="rank" class="page">
    <div class="official-rank">
      <p>官方榜</p>
    </div>
    <div class="global-rank">
      <p>全球榜</p>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch("rank/requestRankList");
  }
}
</script>

<style>

</style>