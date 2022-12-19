import React from "react";
import ReactDom from "react-dom";
// コンポーネントAppを使用できるようにインポートする
import App from "./app.jsx";

// コンポーネント化したAppコンポーネントを画面に反映する
// コンポーネントを画面に反映するためにはReactDom（ライブラリ）の中のRender関数を使用する
ReactDom.render(<App />, document.getElementById("root")); // index.htmlのrootタグに描画
