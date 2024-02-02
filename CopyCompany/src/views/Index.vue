<!-- 首页 -->
<template>
  <div class="Index-root">
    <H5Header></H5Header>
    <H5Main>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </H5Main>
    <H5Footer></H5Footer>
  </div>
</template>
<script>
  export default {
    name: 'Index',
  };
</script>
<script setup>
  import { onMounted, getCurrentInstance, onActivated, reactive } from 'vue';

  // $this: 在setup模板中当vue2的this用
  const $this = getCurrentInstance().proxy;
  const props = defineProps({});
  const emit = defineEmits([]);

  console.log('route', $this.$route);
  console.log('router', $this.$router);
  /**
   * 生命周期
   */
  onMounted(() => {

  });
  onActivated(() => {

  });
</script>
<style scoped lang="scss">
  .Index-root{}
  .van-swipe .van-swipe-item{
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
