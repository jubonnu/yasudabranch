<template>
    <div>
        <input type="checkbox" id="checkbox" v-model="isChecked" />
        <label for="checkbox">チェックボックス</label>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isChecked =ref(false);
</script>
