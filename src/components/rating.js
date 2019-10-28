import React from "react";
import { Icon } from "antd";

export default ({ vote }) => {
  const rates = [];

  for (let i = 0; i < vote; i++) {
    rates.push(
      <Icon
        theme="filled"
        type="star"
        key={i}
        style={{ color: "#e93022", marginRight: "5px" }}
      />
    );
  }

  return rates;
};
