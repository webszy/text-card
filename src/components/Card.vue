<script setup lang="ts">
// https://uiverse.io/JohnnyCSilva/jolly-elephant-67

</script>

<template>
<div class="card-container">
  <div class="title">
    <Editor from="title"/>
    <i class="icon"></i>
  </div>
  <div class="content"></div>
</div>
</template>

<style scoped>
.card-container{
  width:300px;
  height:98%;
  background: #fff;
  border-radius: 30px;
  box-shadow: 5px 5px 10px #bebebe,
  -5px -5px 10px #fff;
  transition: 0.2s ease-in-out;
}

.title {
  width: 100%;
  height: 30%;
  background: linear-gradient(180deg, rgba(230,100,101,1) 0%, rgba(145,152,229,1) 99%);
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-sizing: border-box;
  padding-top: 60px;
}
.title i{
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: #eee;
  display: flex;
  position: absolute;
  top:5%;
  right: 5%;
}
.content{
  height: 70%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.title:deep(input){
  width: 90%;
}
</style>
