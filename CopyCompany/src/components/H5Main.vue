<!-- 主视图 -->
<template>
  <div class="H5Main-root">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'H5Main',
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
  .H5Main-root{flex: 1;overflow: auto;}
</style>
