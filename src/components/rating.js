import React from "react";
import { Icon } from "antd";

export default ({ vote }) => {
  const rates = [];

  for (let i = 0; i < 5; i++) {
    rates.push(
      <Icon
        theme="filled"
        type="star"
        key={i}
        style={{ color: i < vote ? "#e93022" : "#cccccc", marginRight: "5px" }}
      />
    );
  }

  return rates;
};
