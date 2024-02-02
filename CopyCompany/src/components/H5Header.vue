<!-- 顶部导航 -->
<template>
  <div class="H5Header-root">
    <van-nav-bar>
      <template #left>
        <van-button style="min-width:50px;" size="small" @click="onClickLeft">返回</van-button>
      </template>
      <template #title>{{ $route.meta.title }}</template>
      <template #right>
        <van-button style="min-width:50px;" size="small" @click="onOpenMenu">菜单</van-button>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
  export default {
    name: 'H5Header',
  };
</script>
<script setup>
  import { onMounted, getCurrentInstance, onActivated, reactive } from 'vue';
  import { _console } from 'hp-shared/base';

  // $this: 在setup模板中当vue2的this用
  const $this = getCurrentInstance().proxy;
  const props = defineProps({});
  const emit = defineEmits([]);

  function onClickLeft() {
    _console.log('onClickLeft');
    $this.$router.back();
  }
  function onOpenMenu() {
    _console.log('onOpenMenu');
  }
  /**
   * 生命周期
   */
  onMounted(() => {

  });
  onActivated(() => {

  });
</script>
<style scoped lang="scss">
  .H5Header-root{}
</style>
