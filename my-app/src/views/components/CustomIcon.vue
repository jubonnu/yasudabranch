<template>
  <div class="icon-container">
    <div class="icon-wrapper" @click="handleEditClick"><el-icon><Edit /></el-icon></div>
    <div class="icon-wrapper" @click="handleSettingClick"><el-icon><Setting /></el-icon></div>
    <div class="icon-wrapper" @click="handleBellClick"><el-icon><Bell /></el-icon></div>
    <div class="icon-wrapper" @click="handleUserIconClick">
      <el-avatar :icon="UserFilled" />
    </div>
  </div>
</template>

<script setup>
import { Edit, Setting, Bell } from '@element-plus/icons-vue';
import { UserFilled } from '@element-plus/icons-vue';

const handleEditClick = () => {
  console.log('EditClick');
}

const handleSettingClick = () => {
  console.log('SettingClick');
}

const handleBellClick = () => {
  console.log('BellClick');
}

const handleUserIconClick = () => {
  console.log('USerIconClick');
}
</script>

<style scoped>
.icon-container {
  font-size: 24px;
  color: gray;
  display: flex;
  align-items: center;
}

.icon-wrapper {
  margin-right: 20px;
  display: flex;
}
</style>
