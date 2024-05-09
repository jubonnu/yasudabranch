<template>
    <div class="card" @click="handleClick">
      <div class="card-top" :style="{ backgroundColor: color }"></div>
      <div class="card-bottom">
        <h3>{{ title }}</h3>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  /* eslint-disable no-unused-vars */
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  });
  /* eslint-enable no-unused-vars */
  
  const emit = defineEmits(['click']);
  
  const handleClick = () => {
    emit('click');
  };
  </script>
  
  <style scoped>
  .card {
    width: 180px;
    height: 220px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .card-top {
    flex: 1;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  
  .card-bottom {
    padding: 16px;
    background-color: white;
  }
  
  h3 {
    font-size: 16px;
    color: #333;
    margin: 0;
    text-align: center;
  }
  </style>