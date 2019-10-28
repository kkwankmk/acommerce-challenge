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

export default ({ page, total = 2 }) => {
  const paginates = [];
  for (let i = 1; i <= total; i++) {
    paginates.push(
      <Button key={i} background={page === i && "#de564e"}>
        {i}
      </Button>
    );
  }

  return (
    <StyledPagination>
      {paginates}
      <Button background={"#d0d0d0"} color={"#ffffff"}>
        >
      </Button>
    </StyledPagination>
  );
};
