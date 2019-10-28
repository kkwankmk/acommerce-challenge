import React from "react";
import moment from "moment";
import numeral from "numeral";
import { Row, Col, Card } from "antd";
import styled from "styled-components";

import Rating from "./rating";

const { Meta } = Card;

const StyledDescription = styled.div`
  color: #4a4a4a;
`;

const StyledTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledPrice = styled.div`
  font-weight: 600;
  margin-top: 10px;
`;

const StyledCol = styled(Col)`
  margin-bottom: 8px;
`;

const renderDescription = list => (
  <StyledDescription>
    <StyledTitle>{list.title}</StyledTitle>
    <div>{moment(list.created_at).fromNow()}</div>
    <Rating vote={list.vote} />
    <StyledPrice>฿{numeral(list.price).format("0,0.00")}</StyledPrice>
  </StyledDescription>
);

export default ({ lists }) => {
  return (
    <Row type="flex">
      {lists.map(list => (
        <StyledCol xs={24} md={6} key={list.title}>
          <Card
            hoverable={true}
            bordered={false}
            cover={<img alt={list.title} src={list.image_url} />}
          >
            <Meta description={renderDescription(list)} />
          </Card>
        </StyledCol>
      ))}
    </Row>
  );
};
