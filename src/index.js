import React from "react";
import ReactDom from "react-dom";

// 関数を使って画面の要素（コンポーネント）を表現する

// 引数を受け取らず、戻り値でnullを返すApp関数を作成
const App = () => {
  return <h1>test</h1>;
};

// Appコンポーネントを画面に反映する
// コンポーネントを画面に反映するためにはReactDom（ライブラリ）の中のRender関数を使用する
ReactDom.render(<App />, document.getElementById("root"));// index.htmlのrootタグに描画