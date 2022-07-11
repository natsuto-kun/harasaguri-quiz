Welcome to this project!

### githubからプロジェクトをクローンする
```
git clone git@github.com:natsuto-kun/harasaguri-quiz.git
```

### プレビュー画面の表示
```
yarn dev
```

### 機能を作成したら
```
git add .
git commit -m "{変更を加えた内容}"
git push origin {現在のブランチ名}
```
で変更内容をリモートに上げる。

### コミットメッセージについて
```
コミットメッセージは、"add: footer-component"のように、
機能追加なら"add: "、修正なら"fix: "を接頭辞として付ける。
```

### ブランチの命名規則
```
(例)feature/#3_header
上記のように、feature/{issue番号}_{追加する機能、ページ名}で作成。
また、ブランチを作成したら、最初に空のコミットを作成してプッシュをする。
```

### gitコマンドについての参考
- https://qiita.com/uhooi/items/c26c7c1beb5b36e7418e
