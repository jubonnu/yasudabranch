<template>
  <el-container class="common-layout">
    <el-header class="layout-header">
      <slot name="header"
        ><CustomHeader :showButtons="false" :showIcon="true"
      /></slot>
    </el-header>
    <el-container>
      <el-aside width="220px" class="layout-aside">
        <slot name="aside">
          <div class="menu">
            <div class="menu-section">
              <h3 class="section-title">相談する</h3>
              <ul>
                <li>
                  <el-icon class="menu-icon"><ChatRound /></el-icon>
                  メンターに相談
                </li>
              </ul>
            </div>
            <div class="menu-section">
              <h3 class="section-title">マイメニュー</h3>
              <ul>
                <li>
                  <el-icon class="menu-icon"><Coin /></el-icon>
                  取引管理
                </li>
                <li>
                  <el-icon class="menu-icon"><StarFilled /></el-icon>
                  お気に入り
                </li>
                <li>
                  <el-icon class="menu-icon"><Document /></el-icon>
                  投稿管理
                </li>
                <li>
                  <el-icon class="menu-icon"><Ticket /></el-icon>
                  クーポン
                </li>
                <li>
                  <el-icon class="menu-icon"><User /></el-icon>
                  友達紹介
                </li>
                <li>
                  <el-icon class="menu-icon"><Setting /></el-icon>
                  設定
                </li>
              </ul>
            </div>
            <div class="menu-section">
              <h3 class="section-title">ヘルプ</h3>
              <ul>
                <li>
                  <el-icon class="menu-icon"><Notebook /></el-icon>
                  契約までの流れ
                </li>
                <li>
                  <el-icon class="menu-icon"><Document /></el-icon>
                  ご利用ガイド
                </li>
              </ul>
            </div>
          </div>
        </slot>
      </el-aside>
      <el-main class="layout-main">
        <slot />
        <!-- デフォルトスロット：メインコンテンツ -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import CustomHeader from "./CustomHeader.vue";
import {
  ChatRound,
  Coin,
  StarFilled,
  Document,
  Ticket,
  User,
  Setting,
  Notebook,
} from "@element-plus/icons-vue";
</script>

<style scoped>
.common-layout {
  min-height: 100vh;
}

.layout-header {
  background-color: #f5f5f5;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.layout-aside {
  background-color: #2d2d2d;
  color: #ffffff;
  padding: 20px;
  min-height: 100%;
  border-right: 1px solid #ccc;
}

.layout-main {
  padding: 20px;
  background-color: #ffffff;
}

.menu {
  font-size: 16px;
}

.menu-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 8px;
  padding-left: 0px;
  margin-top: 20px;
}

.menu ul {
  list-style: none;
  padding-left: 0;
}

.menu li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  padding-left: 16px;
}

.menu li:hover {
  color: #13b1c0;
}

.menu-icon {
  margin-right: 10px; /* アイコンとテキストの間にスペースを追加 */
  font-size: 18px;
}
</style>
