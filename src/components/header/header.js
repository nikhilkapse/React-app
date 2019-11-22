import React from "react";

const brand = {
  textAlign: "center",
  backgroundColor: "#26A69A",
  color: "#fff",
  lineHeight: "100px"
};
export const Header = () => (
  <div className="header">
    <div style={brand}>
      <i className="fa fa-comment-o fa-lg">Quotes</i>
    </div>
  </div>
);
