<template>
  <div>
    <el-button
      v-if="props.type === 'Default'"
      class="button-primary"
      type="Default"
      @click="navigateToLogin"
      >ログイン</el-button
    >
    <el-button
      v-if="props.type === 'primary'"
      class="button-primary2"
      type="primary"
      @click="navigateToSignUp"
      >新規登録</el-button
    >
    <el-button
      v-if="props.type === 'danger'"
      class="button-primary3"
      type="danger"
      @click="navigateToSignUp"
      >今すぐ始める</el-button
    >
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

    <el-button
      v-if="props.type === 'login'"
      class="button-primary10"
      type="login"
      @click="navigateToHome"
      >ログイン</el-button
    >
  </div>
</template>

<script setup>
import router from "@/router";
import { ElButton } from "element-plus";
import "element-plus/theme-chalk/index.css";
import { defineProps } from "vue";

function navigateToSignUp() {
  router.push('signup')
}

function navigateToLogin() {
  router.push('login')
}

function navigateToHome() {
  router.push('home')
}

const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
});
</script>

<style>
.button-primary2 {
  background-color: #56c8cf;
  color: #ffffff !important;
  border: none;
}

.button-primary2:hover {
  background-color: #3ba9ab;
  color: #ffffff;
}

.button-primary3 {
  background-color: #56c8cf;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
}

.button-primary3:hover {
  background-color: #3ba9ab;
  color: #ffffff;
}

.button-primary4 {
  background-color: #f29c5d;
  color: #ffffff !important;
  border: none;
  height: 61px;
  width: 316px;
}

.button-primary4:hover {
  background-color: #f3a76d;
  color: #ffffff;
}

.button-primary5 {
  background-color: #56c8cf;
  color: #ffffff !important;
  border: none;
  height: 48px;
  width: 316px;
  margin-top: 3em;
}

.button-primary5:hover {
  background-color: #3ba9ab;
  color: #ffffff;
}

.button-primary6 {
  background-color: #ffffff;
  color: #000000 !important;
  height: 48px;
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
  height: 48px;
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
  height: 48px;
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
  height: 48px;
  width: 316px;
  margin-top: 1em;
}

.button-primary9:hover {
  background-color: #232323;
  color: #ffffff;
}

.button-primary10 {
  background-color: #56c8cf;
  color: #ffffff !important;
  border: none;
  height: 48px;
  width: 316px;
  margin-top: 5px;
}

.button-primary10:hover {
  background-color: #3ba9ab;
  color: #ffffff;
}
</style>
