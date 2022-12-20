import React from "react";

{
  /* propsを受け取る方の処理 */
}
export const ColorfulMessage = (props) => {
    const { color , message} = props;
  const contentLedyStyle = {
    color,
    fontSize: "30px",
  };

  return <p style={contentLedyStyle}>{message}</p>;
};


