<script setup>
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import '@splidejs/vue-splide/css';
const handleNewCard = ()=>{}
const options = {
  // type:'loop',
  arrows:false,
  keyboard:'global',
  wheel:true,
  autoWidth:true,
  perPage:2,
  gap:15,
  pagination:true,
  paginationDirection:'ttb'
}
const CardRefs = ref(null)
</script>

<template>
  <SHeader :add-card="handleNewCard"/>
  <main>
    <Splide :options="options">
      <SplideSlide v-for="k in 5">
        <Card ref="CardRefs"/>
      </SplideSlide>
    </Splide>
  </main>
</template>

<style scoped>

main{
  width: 100%;
  height: 600px;
}
:deep(.splide),
:deep(.splide__list),
:deep(.splide__slide),
:deep(.splide__track){
  height: 100%;
}
:deep(.splide__slide:first-child){
  margin-left: 15px;
}
:deep(.splide__pagination--ttb){
  right: auto;
  left:0;
}
/*
:deep(.splide__pagination button){
  background-color: rgba(145,152,229,1);
  border-radius: 0;
}

}*/
:deep(.splide__pagination .is-active){
 background: #535bf2;
}
</style>
