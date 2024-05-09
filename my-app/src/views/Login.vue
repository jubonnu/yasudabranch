<template>
    <div>
        <CustomHeader :showButtons="false" />
    <div class="container">
        <div class="registration-card">
        <h2 class="title">ログイン</h2>
        <div class="input-group">
            <label for="email">メールアドレス</label>
            <input type="email" id="email" v-model="email" placeholder="メールアドレスを入力してください">
        </div>
        <div class="input-group">
        <label for="password">パスワード</label>
        <input type="password" id="password" v-model="password" placeholder="パスワードを入力してください">
    </div>
    <custom-button type="login" />
        <custom-button type="google" />
        <custom-button type="x" />
        <custom-button type="facebook" />
        <custom-button type="appleId" />
        <a href="/login" class="login-link">アカウントをお持ちの方はこちら</a>
        <a href="/login" class="password-link">パスワードをお忘れの方</a>
        </div>
    </div>
    </div>
</template>

<script setup>
import CustomButton from "./components/CustomButton.vue";
import { ref } from "vue";
import CustomHeader from './components/CustomHeader.vue';

const email = ref('');
const password = ref('');

// const login = () => {
//     ログイン処理を追加
// }
</script>

<style>

.container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh; 
    background-color: #F4F8FA; 
    overflow: auto;
}

.registration-card {
    background: #fff;
    margin-top: 8rem;
    padding: 3rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-height: 700px;
    width: 540px;
    text-align: center;
    border-radius: 8px;
}

.title {
    margin-bottom: 5px;
    color: #13b1c0;
}

.login-link {
    display: block;
    margin-top: 5px;
    color: #f29c5d;
    text-decoration: none;
    font-size: 0.9rem;
}

.password-link {
    display: block;
    margin-top: 5px;
    color: #555;
    text-decoration: none;
    font-size: 0.9rem;
}

.login-link:hover {
    text-decoration: underline;
}

.input-group {
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-bottom: 5px;
}

.input-group label {
    display: block;
    margin-top: .5rem;
    font-size: 1rem;
    color: #333;
    text-align: left; 
    width: 316px; 
    box-sizing: border-box; 
    font-size: 14px;
}

.input-group input[type="email"],
.input-group input[type="password"] {
    width: 316px;
    height: 44px;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 14px;
}

.input-group input[type="email"]:focus,
.input-group input[type="password"]:focus {
    border-color: #13b1c0;
    outline: none;
    box-shadow: 0 0 0 2px rgba(19, 177, 192, 0.5);
}
</style>