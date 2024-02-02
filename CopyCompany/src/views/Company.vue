<!-- 公司 -->
<template>
  <div class="Company-root">
    <H5Header></H5Header>
    <H5Main>
    </H5Main>
    <H5Footer></H5Footer>
  </div>
</template>
<script>
  export default {
    name: 'Company',
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
  .Company-root{}
</style>
