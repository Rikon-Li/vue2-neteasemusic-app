<template>
  <div class="scroll-view" ref="scroll">
    <div class="scroll-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    change: Function
  },
  mounted(){
    const scroll = new IScroll(this.$refs.scroll,{
      scrollX: true,
      tap:true,
      click: true,
      probeType: 3
    })
    scroll.on('beforeScrollStart',()=>{
      scroll.refresh();
    })
    this.change && scroll.on('scroll',()=>{
      if (scroll.y >= 0){
        this.change(true)
      }else{
        this.change(false)
      }
    })
  }
}
</script>

<style scoped>
.scroll-view{
  overflow: hidden;
  
}
.scroll-wrap{
  width: max-content;
}
</style>