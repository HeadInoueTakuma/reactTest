import React from "react";

const ColorfulChildrenMessage = (props) => {
    // console.log("カラフル");
    const {color, children} = props;
  const contentChildrenStyle = {
    color,
    fontSize: "30px",
  };

  return <p style={contentChildrenStyle}>{children}</p>;
};

export default ColorfulChildrenMessage;
