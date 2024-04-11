# ベースイメージとしてNode.jsの公式イメージを使用
FROM node:latest

# アプリケーションディレクトリを作成
WORKDIR /app

# アプリケーションの依存関係をインストール
# package.json と package-lock.json をコピー
COPY package*.json ./

# npm install を実行
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# アプリをホストするためにポート3000を開放
EXPOSE 3000

# コンテナ起動時にアプリケーションを起動
CMD [ "npm", "run", "serve" ]