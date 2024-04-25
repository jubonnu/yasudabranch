<template>
  <div>
    <!-- ヘッダーのdiv要素。'header'クラスは常に適用され、'is-top'クラスはisTopがtrueの場合に適用されます。 -->
    <div :class="{'header': true, 'is-top': isTop}">
      <!-- タイトル表示部分 -->
      <h1 class="titleColor">Title</h1>
      <!-- ボタンを含むセクション -->
      <div class="buttons">
        <!-- カスタムボタンコンポーネント（ログイン用） -->
        <custom-button type="Default" />
        <!-- カスタムボタンコンポーネント（新規登録用） -->
        <custom-button type="primary" />
      </div>
    </div>
    <!-- サブヘッダーセクション -->
    <div class="headerSecond">
      <div class="text-content">
        <!-- イントロダクトリーの文章表示部分 -->
        <h5>
          あなたのキャリアを次のレベルへと導く、画期的な自己分析ツールへようこそ。
        </h5>
        <h1>自己分析の新しい時代</h1>
        <p>
          自己分析が難しく、就職や転職活動が停滞していませんか？文章作成に自信がなく、面接準備に困っている方は多いです。でも、もう心配はいりません。当サービスが、あなたのキャリアを飛躍させるサポートを提供します。
        </p>
        <h2>Title</h2>
        <!-- アクションボタン -->
        <custom-button type="danger" />
      </div>
      <!-- ヘッダーイメージ -->
      <img src="@/assets/headerimg.png" class="headerImg" alt="Header Image" />
    </div>

    <!-- メインコンテンツ部分 -->
    <div class="body">
      <h4>サービスの主な特徴</h4>
      <!-- サービス特徴をリスト表示するコンテナ -->
      <div class="services-container">
        <div
          class="service-row"
          v-for="(serviceRow, rowIndex) in services"
          :key="`row-${rowIndex}`"
        >
          <!-- 各サービス特徴の詳細 -->
          <div
            class="service-item"
            v-for="(service, columnIndex) in serviceRow"
            :key="`column-${columnIndex}`"
          >
            <div class="icon-background">
              <!-- サービスアイコン -->
              <img
                :src="service.icon"
                :alt="`サービスアイコン${columnIndex}`"
                class="service-icon"
              />
            </div>
            <h3 class="service-title">{{ service.descriptionTitle }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
      <!-- ユーザーの課題を説明するセクション -->
      <div class="center-content">
        <h3>ユーザーが抱える課題</h3>
        <p>キャリア選択の道は、しばしば不確実性に満ちています。...</p>
      </div>
      <!-- その他のサービス情報 -->
      <div class="end-content">
        <div
          class="service-item-row"
          v-for="(item, index) in items"
          :key="`item-${index}`"
        >
          <img :src="item.imageUrl" :alt="item.title" class="service-image" />
          <div class="service-content">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
            <div
              v-for="(point, pIndex) in item.points"
              :key="`point-${index}-${pIndex}`"
            >
              {{ point }}
            </div>
          </div>
        </div>
      </div>
      <!-- 料金体制の説明 -->
      <h2>料金体制</h2>
      <div class="price-content">
        <h3>サブスク型</h3>
        <p>
          ベーシックプラン: 無料<br />
          基本的な自己分析機能と履歴書テンプレートへのアクセスを提供します。<br />
          プレミアムプラン: 月額$10<br />
          上級の自己分析ツール、高度な履歴書カスタマイズオプション、無制限の面接対策セッションへのアクセスを提供します。
        </p>
      </div>
      <!-- フッターの呼びかけ文 -->
      <h3 class="footer-announcement">まずは無料登録</h3>
      <!-- 登録用のカスタムボタン -->
      <custom-button type="orange" />
      <!-- フッターのナビゲーション部分 -->
      <div class="footer">
        <div class="footer-top">
          <h3>Title</h3>
          <nav>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Links</a></li>
            </ul>
          </nav>
        </div>
        <h2 class="footer-end">
          当サービスは、あなたのキャリア発展を支援するために開発された、次世代の自己分析ツールです。<br>
          私たちは、技術の力を活用して、あなたが自分自身を深く理解し、キャリアの可能性を最大限に引き出すことを目指しています。<br>
          あなたのキャリア選択に関する不確実性を解消し、あなたが自信を持って次のステップへと進めるようサポートします。
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import CustomButton from "./components/CustomButton.vue";
import { reactive } from "vue";
import { ref, onMounted, onUnmounted } from 'vue';
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";
import icon5 from "@/assets/icon5.png";
import icon6 from "@/assets/icon6.png";

// 各サービス項目のデータをreactiveオブジェクトで管理
const services = reactive([
  [
    {
      icon: icon1,
      descriptionTitle: "全方位的なあなただけの自己分析",
      description:
        "あなたのスキル、経験、性格、価値観、キャリア目標職業適性を深掘りします。各要素を網羅的に分析し、あなたの強みと改善点を明らかにします。",
    },
    {
      icon: icon2,
      descriptionTitle: "選択式＋テキスト入力",
      description:
        "簡単な質問に答えることで、ChatGPT APIを通じてあなた専用の分析を実施します。利用者に合わせた柔軟な分析方法で、より深い自己理解をサポートします。",
    },
    {
      icon: icon3,
      descriptionTitle: "即時のプロフェッショナルなフィードバック",
      description:
        "APIからのレスポンスを基に、履歴書や職務経歴書、面接対策に直接活用可能です。専門家のアドバイスをリアルタイムで提供し、あなたのキャリアを前進させます。",
    },
  ],
  [
    {
      icon: icon4,
      descriptionTitle: "時間と労力の大幅削減",
      description:
        "文章作成の手間を省き、効率的な就職・転職活動を実現します。煩雑なプロセスをシンプルにし、あなたの貴重な時間を節約します。",
    },
    {
      icon: icon5,
      descriptionTitle: "インタラクティブなキャリアプランニングツール",
      description:
        "あなたの分析結果に基づいて、最適なキャリアパスを提案します。理想の職種や業界を見つけるための具体的なガイドラインを提供します。",
    },
    {
      icon: icon6,
      descriptionTitle: "パーソナライズされたキャリアパスの提案",
      description:
        "目標設定から達成までをサポートするインタラクティブなプランニングツールを提供します。キャリアの目標を設定し、それを達成するためのステップバイステップのアクションプランを作成します。",
    },
  ],
]);

// さらにユーザーに提供する項目の情報
const items = reactive([
  {
    imageUrl: icon1,
    title: "カレンダーに関わる自分自身の予定",
    description:
      "カレンダーに貯めた自分自身の経歴を瞬時に履歴書、職務経歴書に変換",
    points: ["作業効率が大幅UP"],
  },
  {
    imageUrl: icon2,
    title: "カレンダーに関わる自分自身の予定",
    description:
      "カレンダーに貯めた自分自身の経歴を瞬時に履歴書、職務経歴書に変換",
    points: ["作業効率が大幅UP"],
  },
  {
    imageUrl: icon3,
    title: "カレンダーに関わる自分自身の予定",
    description:
      "カレンダーに貯めた自分自身の経歴を瞬時に履歴書、職務経歴書に変換",
    points: ["作業効率が大幅UP"],
  },
  {
    imageUrl: icon4,
    title: "カレンダーに関わる自分自身の予定",
    description:
      "カレンダーに貯めた自分自身の経歴を瞬時に履歴書、職務経歴書に変換",
    points: ["作業効率が大幅UP"],
  },
  {
    imageUrl: icon5,
    title: "カレンダーに関わる自分自身の予定",
    description:
      "カレンダーに貯めた自分自身の経歴を瞬時に履歴書、職務経歴書に変換",
    points: ["作業効率が大幅UP"],
  },
  {
    imageUrl: icon6,
    title: "カレンダーに関わる自分自身の予定",
    description:
      "カレンダーに貯めた自分自身の経歴を瞬時に履歴書、職務経歴書に変換",
    points: ["作業効率が大幅UP"],
  },
]);

// isTopはリアクティブな参照で、初期値はtrueです。これはヘッダーが最上部にあるかどうかを追跡します。
const isTop = ref(true);

// handleScrollはスクロールイベントに対するハンドラー関数です。
// もしwindowのscrollYプロパティが0なら、ユーザーはページの最上部にいると見なし、isTopをtrueに設定します。
const handleScroll = () => {
  isTop.value = window.scrollY === 0;
};

// コンポーネントがマウントされたときに、スクロールイベントリスナーを追加します。
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// コンポーネントがアンマウントされたときに、スクロールイベントリスナーを削除します。
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.header {
  display: flex; /* 横並びに要素を配置 */
  align-items: center; /* 中央揃えに */
  justify-content: space-between; /* 要素間に均等なスペースを確保 */
  background-color: white; /* 背景色を白に設定 */
  padding: 10px 100px; /* 上下に10px、左右に100pxのパディングを追加 */
  text-align: center; /* テキストを中央揃えに */
  border-bottom: 1px solid #bbb; /* 下部に1pxの境界線を設定 */
  position: fixed; /* 要素を固定位置に配置 */
  top: 0; /* トップから0pxの位置 */
  left: 0; /* 左から0pxの位置 */
  width: 100%; /* 幅を全体に設定 */
  z-index: 1000; /* z-indexでレイヤーの優先順位を設定 */
  transition: top 0.3s;
}

.is-top {
  position: absolute; /* 要素をページの通常のフローから取り除き、位置を親要素に対して相対的に設定 */
  /* このスタイルが適用されると、ヘッダーは固定されず、スクロール時に画面上で動くようになります。
     これはページが最上部にあるときにのみ適用され、ページをスクロールするとヘッダーが固定位置に留まるように設定されています。 */
}

/* タイトルのテキスト色を指定 */
.titleColor {
  color: #13b1c0; /* ターコイズブルー */
}

/* ボタンの位置調整 */
.buttons {
  display: flex; /* 横並びに配置 */
  gap: 20px; /* 各ボタン間に20pxの隙間 */
}

/* ヘッダー第二セクションのスタイル指定 */
.headerSecond {
  margin-top: 6em; /* 上に6emのマージン */
  background-color: #d1eef0; /* 薄い青色の背景 */
  padding: 20px 200px; /* 内側に20px上下、200px左右のパディング */
  text-align: left; /* テキストを左揃え */
  display: flex; /* 子要素を横並びに配置 */
  gap: 100px; /* 子要素間に100pxのスペース */
}

/* ヘッダー第二セクション内の小見出しとパラグラフのスタイル */
.headerSecond h5 {
  color: #333; /* 濃いグレー色 */
  font-weight: normal; /* 通常のフォントウェイト */
  margin-bottom: 0.5em; /* 下に0.5emのマージン */
}

.headerSecond h1 {
  color: #333; /* 濃いグレー色 */
  margin-top: 0; /* 上のマージンなし */
}

.headerSecond p {
  color: #666; /* 中間グレー色 */
  line-height: 1.6; /* 行間隔を1.6に設定 */
  margin-top: 2em; /* 上に2emのマージン */
}

.headerSecond h2 {
  color: #13b1c0; /* ターコイズブルー */
  margin-top: 0.5em; /* 上に0.5emのマージン */
  margin-bottom: 0.5em; /* 下に0.5emのマージン */
}

.headerImg {
  width: 500px; /* 幅を500pxに設定 */
  height: auto; /* 高さを自動調整 */
}

.body h4 {
  margin-top: 20px; /* 上に20pxのマージン */
  color: #13b1c0; /* ターコイズブルー */
}

.services-container {
  display: flex; /* 子要素を横並びに配置 */
  flex-wrap: wrap; /* 要素がコンテナの幅を超える場合に折り返し */
  justify-content: space-around; /* 子要素間に均等なスペースを配置 */
  align-content: space-around; /* 縦方向にも均等なスペースを配置 */
  margin-top: 50px; /* 上に50pxのマージンを設定 */
}

.service-row {
  width: 100%; /* 幅を100%に設定 */
  display: flex; /* 横並びに要素を配置 */
  justify-content: space-around; /* 子要素間に均等なスペースを配置 */
}

.service-item {
  width: 30%; /* 幅を全体の30%に設定 */
  display: flex; /* 横並びに要素を配置 */
  flex-direction: column; /* 縦方向に要素を積み重ねる */
  align-items: center; /* 中央揃えに */
  margin-bottom: 20px; /* 下に20pxのマージン */
}

.icon-background {
  display: flex; /* 横並びに要素を配置 */
  justify-content: center; /* 中央揃えに */
  align-items: center; /* 中央揃えに */
  width: 200px; /* 幅を200pxに設定 */
  height: 200px; /* 高さを200pxに設定 */
  border-radius: 50%; /* 円形に */
  background-color: #d1eef0; /* 薄い青色の背景 */
  margin-bottom: 10px; /* 下に10pxのマージン */
}

.service-description {
  text-align: center; /* テキストを中央揃えに */
  font-size: 14px; /* フォントサイズを14pxに設定 */
  margin: 10px; /* 周りに10pxのマージン */
}

.service-icon {
  width: 300px; /* 幅を300pxに設定 */
  height: auto; /* 高さを自動調整 */
}

.service-title {
  margin-top: 15px; /* 上に15pxのマージン */
}

.center-content {
  background-color: #d1eef0; /* 薄い青色の背景 */
  margin-top: 3em; /* 上に3emのマージン */
  padding: 100px 200px; /* 内側に上下100px、左右200pxのパディング */
}

.center-content h3 {
  margin-bottom: 20px; /* 下に20pxのマージン */
}

.end-content {
  display: flex; /* 横並びに要素を配置 */
  flex-direction: column; /* 縦方向に要素を積み重ねる */
  align-items: center; /* 中央揃えに */
  margin-top: 30px; /* 上に30pxのマージン */
}

.service-item-row {
  display: flex; /* 横並びに要素を配置 */
  flex-direction: row; /* 横方向に要素を積み重ねる */
  align-items: center; /* 中央揃えに */
  justify-content: center; /* 中央揃えに */
  width: 80%; /* 幅を全体の80%に設定 */
  margin-bottom: 40px; /* 下に40pxのマージン */
  gap: 100px; /* 各要素間に100pxのスペース */
}

.service-image {
  width: 400px; /* 幅を400pxに設定 */
  height: auto; /* 高さを自動調整 */
}

.price-content {
  background-color: #d1eef0; /* 薄い青色の背景 */
  margin-top: 1em; /* 上に1emのマージン */
  padding: 50px 200px; /* 内側に上下50px、左右200pxのパディング */
}

.footer-announcement {
  margin-top: 3em; /* 上に3emのマージン */
  margin-bottom: 1em; /* 下に1emのマージン */
}

.footer {
  background-color: #2b546a; /* 濃い青色の背景 */
  padding: 100px 200px; /* 内側に上下50px、左右200pxのパディング */
  color: white; /* テキストカラーを白に */
  margin-top: 4em;
}

.footer-top {
  display: flex; /* 子要素を横並びに配置 */
  justify-content: space-between; /* 子要素間にスペースを最大限に配置 */
  align-items: center; /* 要素を中央揃えに */
  margin-bottom: 30px; /* 下に30pxのマージン */
}

.footer h3 {
  font-size: 36px; /* フォントサイズを36pxに設定 */
  color: #13b1c0; /* ターコイズブルー */
}

nav ul {
  display: flex; /* 子要素を横並びに配置 */
  gap: 200px; /* 子要素間に20pxのスペース */
  padding-right: 300px;
}

nav ul li {
  list-style: none; /* リストマーカーを非表示に */
}

nav ul li a {
  text-decoration: none; /* テキストの下線を消す */
  font-size: 24px; /* フォントサイズを18pxに設定 */
  color: white;
}

.footer-end {
  font-size: 15px; /* フォントサイズを18pxに設定 */
  text-align: left; /* テキストを中央揃えに */
  max-width: 2000px; /* 最大幅を800pxに設定 */
  margin: auto; /* 左右のマージンを自動調整 */
  margin-top: 5em;
}
</style>
