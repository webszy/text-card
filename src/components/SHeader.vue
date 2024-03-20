<script setup>
const store = useAppStore()
const props = defineProps({
  addCard:{
    type:Function,
    required:true
  }
})
const exportImage = async () => {
}
</script>

<template>
  <header>
    <n-button type="primary" @click="addCard">新建卡片</n-button>
    <n-button type="primary" @click="exportImage">导出</n-button>
  </header>
</template>

<style scoped>
header{
  display: flex;
  padding: 10px 30px  30px;
}
header:deep(.n-button){
  margin-right: 5px;
}
</style>
