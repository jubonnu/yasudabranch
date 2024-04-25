<template>
  <!-- 条件によって表示するボタンを切り替えるためのdivタグ -->
  <div>
    <!-- props.typeが'Default'の場合に表示するログインボタン -->
    <el-button
      v-if="props.type === 'Default'"
      class="button-primary"
      type="Default"
      @click="navigateToLogin"
      >ログイン</el-button
    >
    <!-- props.typeが'primary'の場合に表示する新規登録ボタン -->
    <el-button
      v-if="props.type === 'primary'"
      class="button-primary2"
      type="primary"
      @click="navigateToSignUp"
      >新規登録</el-button
    >
    <!-- props.typeが'danger'の場合に表示するアクションボタン -->
    <el-button
      v-if="props.type === 'danger'"
      class="button-primary3"
      type="danger"
      @click="navigateToSignUp"
      >今すぐ始める</el-button
    >
    <!-- props.typeが'orange'の場合に表示するアクションボタン -->
    <el-button
      v-if="props.type === 'orange'"
      class="button-primary4"
      type="orange"
      @click="navigateToSignUp"
      >今すぐ始める</el-button
    >

    <el-button
      v-if="props.type === 'mail'"
      class="button-primary5"
      type="mail"
      >メールアドレスで登録する</el-button
    >

    <el-button
      v-if="props.type === 'google'"
      class="button-primary6"
      type="google"
      >Googleアカウントで登録する</el-button
    >

    <el-button
      v-if="props.type === 'x'"
      class="button-primary7"
      type="x"
      >Xで登録する</el-button
    >

    <el-button
      v-if="props.type === 'facebook'"
      class="button-primary8"
      type="facebook"
      >Facebookで登録する</el-button
    >

    <el-button
      v-if="props.type === 'appleId'"
      class="button-primary9"
      type="appleId"
      >Apple IDで登録する</el-button
    >
  </div>
</template>

<script setup>
// Element Plus のボタンコンポーネントをインポート
import router from "@/router";
import { ElButton } from "element-plus";
// Element Plus のCSSをインポート
import "element-plus/theme-chalk/index.css";
// Vue 3 の Composition API から defineProps をインポート
import { defineProps } from "vue";

function navigateToSignUp() {
  router.push('signup')
}

function navigateToLogin() {
  router.push('login')
}

// propsの定義、typeプロパティがString型でデフォルトは'success'
const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
});
</script>

<style>
/* primaryタイプのボタンの基本スタイル */
.button-primary2 {
  background-color: #56c8cf;
  color: #ffffff !important;
  border: none;
}

/* primaryタイプのボタンのホバースタイル */
.button-primary2:hover {
  background-color: #3ba9ab;
  color: #ffffff;
}

/* dangerタイプのボタンの基本スタイル */
.button-primary3 {
  background-color: #56c8cf;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
}

/* dangerタイプのボタンのホバースタイル */
.button-primary3:hover {
  background-color: #3ba9ab;
  color: #ffffff;
}

/* orangeタイプのボタンの基本スタイル */
.button-primary4 {
  background-color: #f29c5d;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
}

/* orangeタイプのボタンのホバースタイル */
.button-primary4:hover {
  background-color: #f3a76d;
  color: #ffffff;
}

.button-primary5 {
  background-color: #56c8cf;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
}

.button-primary5:hover {
  background-color: #3ba9ab;
  color: #ffffff;
}

.button-primary6 {
  background-color: #ffffff;
  color: #000000 !important;
  height: 61px;
  width: 316px;
  margin-top: 1em;
}

.button-primary6:hover {
  background-color: #e9efe5;
  color: #ffffff;
}

.button-primary7 {
  background-color: #000000;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
  margin-top: 1em;
}

.button-primary7:hover {
  background-color: #232323;
  color: #ffffff;
}

.button-primary8 {
  background-color: #3b5998;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
  margin-top: 1em;
}

.button-primary8:hover {
  background-color: #2d4373;
  color: #ffffff;
}

.button-primary9 {
  background-color: #000000;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
  margin-top: 1em;
}

.button-primary9:hover {
  background-color: #232323;
  color: #ffffff;
}
</style>
