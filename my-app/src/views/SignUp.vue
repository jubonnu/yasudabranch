<template>
  <div>
    <div :class="{ header: true, 'is-top': isTop }">
      <h1 class="titleColor">Title</h1>
    </div>
    <div class="container">
      <div class="registration-card">
        <h2 class="title">新規登録</h2>
        <custom-button type="mail" />
        <custom-button type="google" />
        <custom-button type="x" />
        <custom-button type="facebook" />
        <custom-button type="appleId" />
        <a href="/login" class="login-link">アカウントをお持ちの方はこちら</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "./components/CustomButton.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isTop = ref(true);

const handleScroll = () => {
  isTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>；
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px 100px;
  text-align: center;
  border-bottom: 1px solid #bbb;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s;
}

.is-top {
  position: absolute;
}

.titleColor {
  color: #13b1c0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 画面の高さ全体を使う */
  background-color: #D1EEF0; /* 背景色 */
}

.registration-card {
  background: #fff;
  margin-top: 4rem;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 600px;
  width: 540px;
  text-align: center;
  border-radius: 8px;
}

.title {
  margin-bottom: 2rem;
  color: #13b1c0;
}

.login-link {
  display: block;
  margin-top: 3rem;
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
