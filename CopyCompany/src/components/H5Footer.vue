<!-- 底部导航 -->
<template>
  <div class="H5Footer-root">
    <van-tabbar v-model="tabbarInfo.current">
      <van-tabbar-item name="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="/company" icon="search">公司</van-tabbar-item>
      <van-tabbar-item name="/product" icon="friends-o">产品</van-tabbar-item>
      <van-tabbar-item name="/about" icon="setting-o">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    name: 'H5Footer',
  };
</script>
<script setup>
  import { onMounted, getCurrentInstance, onActivated, reactive } from 'vue';

  // $this: 在setup模板中当vue2的this用
  const $this = getCurrentInstance().proxy;
  const props = defineProps({});
  const emit = defineEmits([]);

  const tabbarInfo = reactive({
    get current() {
      return $this.$route.path;
    },
    set current(value) {
      $this.$router.push({path: value});
    },
  });
  /**
   * 生命周期
   */
  onMounted(() => {

  });
  onActivated(() => {

  });
</script>
<style scoped lang="scss">
  .H5Footer-root{}
</style>
