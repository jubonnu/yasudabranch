<template>
    <div class="homeContainer">
      <div class="button-grid">
        <CardButton
          v-for="button in buttons"
          :key="button.title"
          :title="button.title"
          :color="button.color"
          @click="handleClick(button.path)"
        />
      </div>
      <div class="description">
        <h2>自分の使いたい機能を選択しよう</h2>
        <div v-for="(item, index) in descriptions" :key="index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.descriptions }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import router from '@/router';
import CardButton from './CardButton.vue';
  
  const buttons = [
    { title: '自己分析', color: '#CDEFF3', path: '/self-analysis' },
    { title: '職業適合度診断', color: '#D95A6C', path: '/occupational-diagnosis' },
    { title: '面接対策', color: '#A9D69F', path: '/interview-preparation' },
    { title: 'キャリア目標設定', color: '#E4E8A1', path: '/career-goal-setting' },
    { title: '企業調査', color: '#D99C70', path: '/corporate-research' },
    { title: '進捗管理', color: '#D8C4E1', path: '/progress-management' },
    { title: '自己管理', color: '#A9BCE8', path: '/self-management' },
    { title: '面接対策レポート', color: '#D99CA7', path: '/interview-preparation-report' },
    { title: 'アフターサポート', color: '#A67A72', path: '/after-sales-support' },
  ];

  const descriptions = [
        { title: "スキル分析", descriptions: "＊簡単な説明" },
        { title: "経験分析", descriptions: "＊簡単な説明" },
        { title: "スキル分析", descriptions: "＊簡単な説明" },
        { title: "経験分析", descriptions: "＊簡単な説明" },
        { title: "スキル分析", descriptions: "＊簡単な説明" },
        { title: "経験分析", descriptions: "＊簡単な説明" },
      ]
  
  const handleClick = (path) => {
    router.push(path);
    console.log(`${path} button clicked`);
  };
  </script>
  
  <style scoped>
  .homeContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
    flex: 1;
    padding-left: 16px;
  }
  
  .button-grid .card {
    margin: 16px 0; 
  }

  .description {
    width: 220px;
    margin-left: 32px;
  }
  
  .description h2 {
    margin: 0 0 16px;
  }
  
  .description p {
    margin-bottom: 15px;
  }
  </style>
