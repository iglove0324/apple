import React from "react";
import styled from "styled-components";
import Slider1 from "@/components/product/Slider1";

const ColumnLeftBlock = styled.div`
  float: left;
  width: calc(100% - 408px);
  margin-right: 80px;
`;

const ColumnLeft = () => {
  return (
    <ColumnLeftBlock>
      <Slider1 />
    </ColumnLeftBlock>
  );
};

export default ColumnLeft;
