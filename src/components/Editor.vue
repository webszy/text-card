<script setup>
const text = ref('')
const { from } = definePropsRefs({
  from: {
    type: String,
    validator: (value) => ['title','content'].includes(value)
  }
})
</script>

<template>
  <div v-if="from === 'title'">
    <input v-model="text"/>
    <h1></h1>
  </div>
</template>

<style scoped>
  input{
    border-bottom: 1px solid #fff;
  }

</style>
