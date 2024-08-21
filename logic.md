### したいこと

- カードを 5 組 2 枚ずつ用意する
- HTML で表示する

### ロジック的なところ

セッション = クリック回数、1、2 回の該当 id、name を格納

- カードクリック
  - セッションスタート
  - 1 回目のクリック
    - クリック回数 + 1
    - 1 回目の該当 id, name を格納
  - 2 回目のクリック
    - クリック回数 + 1 = 2
    - 2 回目の該当 id, name を格納
  - 1 回目と 2 回目の値を比較
    - 同じであれば該当の id の isMatched を true に変更
    - ちがければ、そのまま（のちに CSS ロジックを追加する）
  - セッションをリセット

### HTML

- 開いたら、ひらいたカードを強調させたい（赤色で囲むとかとりあえず）
- 1番目に開いたものをどうやって検知するか？
- cards.mapの過程で、sessonInfoのはじめのidと合致するものにclass属性を付与する感じにしようか...

```jsx
let isSelected = false;
if (sessionInfo.card[0].id === id) {
  isSelected = true;
}

<Card name={card.name} key={card.id} id={card.id} onUpdate={updateSessionInfo} isMatched={card.isMatched} isSelected={isSelected}/>
```

で、selectedがtrueだったら、クラスを付与する。おっけい

それをするにあたり、まずはHTMLをととのえよう。

### 将来的なところ

- 時間をはかる
  - 最初のクリックから isMatched が全部揃った時までの時間を計測する
- 何回セッションを繰り返したかを測定する
  - セッション回数を記録
  - 新しいセッションがはじまるたびに追加する
