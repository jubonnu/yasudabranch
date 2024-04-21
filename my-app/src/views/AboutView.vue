<template>
  <div>
    <div class="header">
      <h1 class="titleColor">Title</h1>
      <div class="buttons">
        <custom-button type="Default" />
        <custom-button type="primary" />
      </div>
    </div>
    <div class="headerSecond">
      <div class="text-content">
      <h5>あなたのキャリアを次のレベルへと導く、画期的な自己分析ツールへようこそ。</h5>
      <h1>自己分析の新しい時代</h1>
      <p>自己分析が難しく、就職や転職活動が停滞していませんか？文章作成に自信がなく、面接準備に困っている方は多いです。でも、もう心配はいりません。当サービスが、あなたのキャリアを飛躍させるサポートを提供します。</p>
      <h2>Title</h2>
      <custom-button type="danger" />
    </div>
      <img src="@/assets/headerimg.png" class="headerImg" alt="Header Image" />
      </div>
  </div>
</template>

<script setup>
import CustomButton from "./components/CustomButton.vue";
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
}

 /* タイトルのテキスト色 */
.titleColor {
  color: #13b1c0;
}

/* ボタンの位置 */
.buttons {
  display: flex;
  gap: 20px;
}

/* ヘッダー第二セクションのスタイリング */
.headerSecond {
  margin-top: 2em;
  background-color: #D1EEF0; /* 白い背景 */
  padding: 20px 200px; /* 余白の設定 */
  text-align: left; /* テキストを左揃えに */
  display: flex;
  gap: 100px;
}

.headerSecond h5 {
  color: #333;
  font-weight: normal;
  margin-bottom: 0.5em; /* 下のマージンを設定 */
}

.headerSecond h1 {
  color: #333;
  margin-top: 0; /* 上のマージンを削除 */
}

.headerSecond p {
  color: #666; /* テキストの色を設定 */
  line-height: 1.6; /* 行の高さを設定 */
  margin-top: 2em;
}

.headerSecond h2 {
  color: #13b1c0;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.headerImg {
  width: 500px; /* または他の固定値 */
  height: auto; /* 高さを幅に基づいて自動調整 */
}

</style>
