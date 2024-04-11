<template>
    <div class="app">
    <header class="header">
        <img src="@/assets/mentakun_head.svg" alt="Logo" class="logo" />
        <div class="search-bar">
        <input type="text" placeholder="カテゴリから探す" />
        <button type="submit">検索</button>
        </div>
        <div class="user-controls">
        <button @click="login">ログイン</button>
        <button @click="register">無料登録</button>
        </div>
    </header>

    <main class="main-content">
        <div class="column mentor">
        <h2>MENTOR</h2>
        <p>教えたい人</p>
        <img src="@/assets/mentor_blue.svg" alt="Mentor" />
        <button @click="becomeMentor">メンター登録</button>
        </div>
        <div class="column mentee">
        <h2>MENTEE</h2>
        <p>学びたい人</p>
        <img src="@/assets/mentee_yellow.svg" alt="Mentee" />
        <button @click="becomeMentee">メンティー登録</button>
        </div>
    </main>

    <footer class="footer">
        <p>
        メンターは実践的なスキルをパートナーシップとスタックで教えてくれる存在
        </p>
    </footer>
    </div>
</template>

<script>
export default {
    methods: {
    login() {
      // ログイン処理
    },
    register() {
      // 登録処理
    },
    becomeMentor() {
      // メンター登録処理
    },
    becomeMentee() {
      // メンティー登録処理
    },
    },
};
</script>

<style scoped>
.header {
  /* ヘッダーのスタイリング */
}

.logo {
  /* ロゴのスタイリング */
}

.search-bar input,
.search-bar button {
  /* 検索バーのスタイリング */
}

.user-controls button {
  /* ログイン、登録ボタンのスタイリング */
}

.main-content {
  /* メインコンテンツのスタイリング */
    display: flex;
}

.column {
  /* カラム共通のスタイリング */
    flex: 1;
}

.mentor,
.mentee {
  /* メンター、メンティーカラムのスタイリング */
}

.footer {
  /* フッターのスタイリング */
}
</style>
