<template>
    <LayoutWrapper>
      <template v-slot:header>
        <CustomHeader :showButtons="false" :showIcon="true" />
      </template>
      <el-main>
        <ButtonGrid />
      </el-main>
    </LayoutWrapper>
  </template>
  
  <script setup>
  import LayoutWrapper from './components/LayoutWrapper.vue';
  import CustomHeader from './components/CustomHeader.vue';
  import ButtonGrid from './components/ButtonGrid.vue';
  
  </script>
  
  <style>
  /* 必要に応じてスタイルを追加します */
  </style>
