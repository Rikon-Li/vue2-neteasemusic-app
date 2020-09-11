<template>
  <div class="home">
    <header>
      <span class="iconfont icon-caidan"></span>
      <span>云音乐</span>
      <span class="iconfont icon-41"></span>
    </header> 
    <nav>
      <li></li>
      <li></li>
      <li></li>
    </nav>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>