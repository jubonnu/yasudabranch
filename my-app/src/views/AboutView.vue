<template>
  <div>
    <div class="header">
      <h1>Title</h1>
      <div class="buttons">
        <button class="login-button" @click="login">ログイン</button>
        <button @click="register">新規登録</button>
      </div>
    </div>
    <div class="content-below-header">
      <div class="logo1">
        <img src="@/assets/loga.png" />
      </div>
    </div>
    <div>
      <h1>チェックボックス</h1>
      <customCheckbox />
    </div>
  </div>
</template>

<script setup>
import customCheckbox from './components/CustomCheckbox.vue';

</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white; /* ヘッダーの背景色 */
  color: #13b1c0; /* ヘッダーの文字色 */
  padding: 10px 100px; /* 左右に40pxのパディング */
  text-align: center; /* テキストの中央揃え */
  border-bottom: 1px solid #bbb;
}

.content-below-header {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.logo1 img {
  width: 150px;
  height: auto;
}

.buttons button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #13b1c0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button {
  background-color: white;
  color: #13b1c0;
}

.buttons button:hover {
  background-color: #0f8d9b;
}
</style>
