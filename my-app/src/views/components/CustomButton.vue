<template>
  <div>
    <el-button v-if="props.type === 'Default'" class="button-primary" type="Default">ログイン</el-button>
    <el-button v-if="props.type === 'primary'" class="button-primary2" type="primary">新規登録</el-button>
    <el-button v-if="props.type === 'danger'" class="button-primary3" type="danger">今すぐ始める</el-button>
  </div>
</template>

<script setup>
import { ElButton } from "element-plus";
import "element-plus/theme-chalk/index.css";
import { defineProps } from "vue";

// プロパティを直接definePropsで取得
const props = defineProps({
  type: {
    type: String,
    default: 'success'
  }
});
</script>
<style>


.button-primary2 {
  background-color: #56C8CF; /* ボタンの背景色 */
  color: #ffffff !important; /* ボタンのテキスト色 */
  border: none; /* 枠線を無くす */
  /* その他のスタイリングもここに追加 */
}

.button-primary2:hover {
  /* ホバー時のスタイル */
  background-color: #0e7a8a; /* ホバー時の背景色 */
  color: #ffffff; /* ホバー時のテキスト色 */
}

.button-primary3 {
  background-color: #56C8CF; /* ボタンの背景色 */
  color: #ffffff !important; /* ボタンのテキスト色 */
  border: none; /* 枠線を無くす */
  height: 61px;
  width: 316px;
}

.button-primary3:hover {
  /* ホバー時のスタイル */
  background-color: #0e7a8a; /* ホバー時の背景色 */
  color: #ffffff; /* ホバー時のテキスト色 */
}
</style>
