<script setup>
const props = defineProps({
  addCard:{
    type:Function,
    required:true
  }
})
</script>

<template>
  <header>
    <n-button type="primary" @click="addCard">新建卡片</n-button>
    <n-button type="primary">导出</n-button>
  </header>
</template>

<style scoped>
header{
  display: flex;
  padding-bottom: 20px;
}
header:deep(.n-button){
  margin-right: 5px;
}
</style>
