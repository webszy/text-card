<script setup lang="ts">
// https://uiverse.io/JohnnyCSilva/jolly-elephant-67
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import type {Options} from '@splidejs/splide'
const options:Options = {
  type:'loop',
  arrows:false,
  keyboard:'global',
  wheel:true
}
</script>

<template>
<Splide :options="options">
  <SplideSlide class="item">
    123
  </SplideSlide>
  <SplideSlide class="item">
    234
  </SplideSlide>
</Splide>
</template>

<style scoped>
.item{
  width:375px;
  height:480px;
  border:1px solid salmon;
}
</style>
