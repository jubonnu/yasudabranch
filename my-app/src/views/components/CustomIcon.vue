<template>
  <div class="icon-container">
    <div class="icon-wrapper" @click="handleEditClick"><el-icon><Edit /></el-icon></div>
    <div class="icon-wrapper" @click="handleSettingClick"><el-icon><Setting /></el-icon></div>
    <div class="icon-wrapper" @click="handleBellClick"><el-icon><Bell /></el-icon></div>
  </div>
</template>

<script setup>
import { Edit } from '@element-plus/icons-vue';
import { Setting } from '@element-plus/icons-vue';
import { Bell } from '@element-plus/icons-vue';

const handleEditClick = () => {
  console.log('EditClick');
}

const handleSettingClick = () => {
  console.log('SettingClick');
}

const handleBellClick = () => {
  console.log('BellClick');
}

</script>

<style scoped>
.icon-container {
  font-size: 24px;
  color: gray;
  display: flex;
}

.icon-wrapper {
  margin-right: 20px;
  margin-top: 10px;
}
</style>
