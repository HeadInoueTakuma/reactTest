import React, { useEffect, useState } from "react";
// propsに特定の名刺をつけて渡す方法
import {ColorfulMessage} from "./components/ColorfulMessage";
// propsのChildrenを使用して渡す方法
import ColorfulChildrenMessage from "./components/ColorfulChildrenMessage";

// 関数を使って画面の要素（コンポーネント）を表現する
const App = () => {
  // useStateを扱う
  // setNum関数を使ってnum変数の値を変更できる
  const [num, setNum] = useState(0);

  // ボタンを押したらflgを表示する処理
  const [showFlg, setShowFlg] = useState(true);

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showFlg || setShowFlg(true);
      } else {
        showFlg && setShowFlg(false);
      }
    }
  }, [num]);

  // ボタンを押した時にアラートを表示する
  // onClickButton関数を定義して、ボタンをされたらアラートを出す
  const onClickButton = () => {
    setNum(num + 1);
  };

  // ボタンが押された時にsetShowFlgと反対の値を返す
  const onClickSwitchShowFlg = () => {
    setShowFlg(!showFlg);
  };

  // 変数を定義してスタイルを当てる方法（キャメルケースで書く）
  const contentStyle = {
    color: "blue",
    fontSize: "30px",
  };

  return (
    <>
      {/* JavaScriptのオブジェクトに直接スタイルを当てる方法 */}
      <h1 style={{ color: "red" }}>test h1</h1>
      <p style={contentStyle}>こんにちは</p>

      {/* ColorfulMessageコンポーネントを呼び出す */}
      {/* propsを渡す方の処理 */}
      {/* 渡したいprops（今回はcolorとmessage）をタグ内に記述 */}
      <ColorfulMessage color="green" message="渡したい文字列1_こんにちは" />
      <ColorfulMessage color="pink" message="渡したい文字列2_こんにちは" />
      <ColorfulChildrenMessage color="red">
        チルドレンのメッセージ
      </ColorfulChildrenMessage>
      {/* ボタンにイベントを振るときはキャメルケースでイベントを記載 */}
      {/* 波括弧を書くと中にJavaScriptを記載できる */}
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <br />
      {/* ボタンが押された時にonClickSwitchShowFlg関数を実行する */}
      <button onClick={onClickSwitchShowFlg}>on/off</button>

      {/* showFlgがtrueの場合は右を返す */}
      {showFlg && <p>flg</p>}
    </>
  );
};

// Appコンポーネントを他のファイルからでも使用できるように宣言
export default App;
