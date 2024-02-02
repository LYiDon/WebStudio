<!-- 登录 -->
<template>
  <div class="Login-root">
    Login
  </div>
</template>
<script>
  export default {
    name: 'Login',
  };
</script>
<script setup>
  import { onMounted, getCurrentInstance, onActivated, reactive } from 'vue';

  // $this: 在setup模板中当vue2的this用
  const $this = getCurrentInstance().proxy;
  const props = defineProps({});
  const emit = defineEmits([]);
  /**
   * 生命周期
   */
  onMounted(() => {

  });
  onActivated(() => {

  });
</script>
<style scoped lang="scss">
  .Login-root{}
</style>
