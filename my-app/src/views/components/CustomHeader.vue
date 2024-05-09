<template>
  <div :class="{ header: true, 'is-top': isTop }">
    <h1 class="titleColor">Title</h1>
    <div class="centered-content">
      <CustomIcon v-if="showIcon"/>
    </div>
    <div class="buttons" v-if="showButtons">
      <custom-button type="Default" />
      <custom-button type="primary" />
    </div>
  </div>
</template>

<script setup props="props">
import { ref, onMounted, onUnmounted, defineProps } from "vue";
import CustomButton from "./CustomButton.vue";
import CustomIcon from "./CustomIcon.vue";
const props = defineProps({
  showButtons: Boolean,
  showIcon: Boolean
});
console.log(props);
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
  
  <style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 10px 10%;
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
    font-size: 32px;
  }
  .buttons {
    display: flex;
    gap: 20px;
  }
  .centered-content {
    text-align: center; 
  }


  </style>
