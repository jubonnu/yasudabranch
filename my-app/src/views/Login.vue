<template>
    <div>
    <div :class="{ header: true, 'is-top': isTop }">
        <h1 class="titleColor">Title</h1>
    </div>
    <div class="content">
    <h1>ログイン</h1>
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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

<style>
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
.content {
  margin-top: 60px; /* headerの高さに応じて調整 */
}
</style>