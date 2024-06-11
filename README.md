# bear-clone

Markdown 記法のメモアプリ『Bear』のクローン作成用リポジトリ。

## 目次

- [使用技術について](#technology-used)
- [環境構築手順](#environment-construction-rocedure)
- [npm コマンドについて](#about-npm-command)
- [Git での運用について](#about-git-flow)

<h2 id="technology-used">使用技術について</h2>

### node バージョン

- node v20.11.1
- npm v10.2.4

### フロント

- [Angular](https://angular.jp/docs) 17.0.0
- [typescript](https://www.typescriptlang.org/) 5.4.2

### スタイル

- [TailwindCSS](https://tailwindcss.com/docs/installation)

### テスト関連

- [Jest](https://jestjs.io/ja/)

<h2 id="environment-construction-rocedure">環境構築手順</h2>

### Dev Container(リモートコンテナ)の利用について

下記理由により Dev Container(リモートコンテナ)の利用を推奨しますが、
事情があり使用できない場合はホストマシン上で構築を進めてください。

※ホストマシン上で構築する場合は、『[ローカル環境の立ち上げまで](#setting-up)』手順を飛ばして構いません。

#### 1. ローカル環境を汚さない

複数のプロジェクトで開発する内に、ローカルマシンにはそのための様々なアプリ・設定が導入されていきます。
この状態には以下のような欠点があります。

- 導入されたアプリや設定が膨大になって管理しきれなくなり、何のために導入されたか、変更してよい設定なのかが分からなくなる
- 異なるプロジェクトで必要な設定・アプリ同士が衝突し、開発に支障をきたす

コンテナ機能を用いてプロジェクトごとに異なるコンテナ内で開発することで、以上の問題は解消されます。

#### 2. 開発環境構築が容易で、再現性が高い

開発に必要なアプリ・設定がコンテナの形でまとめられているので、少ない労力で何度でも開発環境を再現できます。

たとえばローカル上で直接開発している場合、以前の開発環境で作成したビルドを再現したいのに、
現在の開発環境だと差分が発生してしまってうまくいかないことがあります。

開発環境をコード管理・バージョン管理することで、開発環境の再現が容易になります。

#### 3. 開発者間での開発環境の差異が生まれにくい

開発者間で開発環境が異なっているとチームでの開発や運用に支障をきたすことがあります。
例えば以下のようなケースが想定されます。

- 開発者Ａと開発者Ｂでビルド生成物に差異が出る
- 開発者Ａの環境で通ったテストが開発者Ｂの環境で通らない
- CI 環境と開発者の手元環境でテストが通るかどうかが異なる

開発環境をコンテナ化することで、複数の開発者が同じ開発環境で開発でき、
なおかつ開発環境の変更を明示的にコード履歴に含めることができます。

### Dev Container(リモートコンテナ)を使用する場合

1. VSCode の拡張機能『Remote Development』をインストール

   - https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

1. VSCode 左下の『><マーク』をクリック。
1. VSCode 上部に選択肢がいくつか出てくるので、その中の『コンテナーで再度開く』をクリック。
1. リモートコンテナ側の VSCode とコンテナ環境が起動すれば、『[ローカル環境の立ち上げまで](#setting-up)』の手順を進めてください。

![](./public//images/startup-devcontainer.gif)

<h3 id="setting-up">ローカル環境の立ち上げまで</h3>

```
# 環境変数ファイルの作成 (.envの中の値は管理者に確認)
$ cp .env.development .env.local

# パッケージのインストール
$ npm install

# ローカル環境の立ち上げ
$ ng serve
    or
$ ng s
```

下記のローカル環境にアクセスできれば環境構築完了です。<br>
http://localhost:4200/<br>

※ npm install 時にエラーが出る場合

- node のバージョンが異なる可能性があるので下記を参考にバージョンを変えてください。

[node.js のバージョンを変更する](https://qiita.com/k3ntar0/items/322e668468716641aa5c)

<h2 id="about-npm-command">npmコマンドについて</h2>

### コマンドと機能一覧

| コマンド           | 機能                                 |
| ------------------ | ------------------------------------ |
| `npm run lint-fix` | リンター(Prettier)でのコード自動修正 |

<h2 id="about-git-flow">Gitでの運用について</h2>

### ブランチについて

devlop ブランチが開発環境で main が本番環境です。

| ブランチ名    | 役割                             | 派生元  | マージ先      |
| ------------- | -------------------------------- | ------- | ------------- |
| main          | 公開するものを置くブランチ       |         |               |
| develop       | 開発中のものを置くブランチ       | main    | main          |
| issue${id}-\* | 新機能開発中に使うブランチ       | develop | develop       |
| hotfix-\*     | 公開中のもののバグ修正用ブランチ | main    | develop, main |

※${id}の箇所は『Issue 番号』を入れてください。

### コミットメッセージの記法

```
feat    ：機能の追加や変更
docs    ：ドキュメントの更新
fix     ：バグ修正
refactor：リファクタリング
test    ：テストコードの追加や修正
chore   ：ビルドツールの導入や依存関係を更新など
```

※記法については[こちら](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)を参考にしています。
