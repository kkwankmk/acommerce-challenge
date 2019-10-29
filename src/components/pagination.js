import React from "react";
import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;
  display: inline-block;
  background: ${props => props.background || "#fae1e2"};
  margin-right: 5px;
  padding: 3px 8px;
  text-align: center;
  color: ${props => props.color || "inherit"};
`;

const StyledPagination = styled.div`
  text-align: center;
`;

const itemRender = ({ type, onPageChange }) => {
  const symbol = type === "prev" ? "<" : ">";

  return (
    <Button
      background={"#d0d0d0"}
      color={"#ffffff"}
      onClick={() => onPageChange()}
    >
      {symbol}
    </Button>
  );
};

export default ({ page, total, onPageChange }) => {
  const paginates = [];
  for (let i = 1; i <= total; i++) {
    paginates.push(
      <Button
        key={i}
        background={page === i && "#de564e"}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <StyledPagination>
      {page !== 1 &&
        total !== 1 &&
        itemRender({
          type: "prev",
          onPageChange: () => onPageChange(page - 1)
        })}
      {paginates}
      {total !== page &&
        itemRender({
          type: "next",
          onPageChange: () => onPageChange(page + 1)
        })}
    </StyledPagination>
  );
};
