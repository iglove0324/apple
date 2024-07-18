import React from "react";
import styled from "styled-components";
import { GoPlusCircle } from "react-icons/go";
const Iphone15proBlock = styled.div`
display:flex;
.smalltitle{
  margin-left:600px;
  padding:10px;
  background-color:#f3f3f3;
  border-radius:20px;
  width:370px;
  text-align:center;
}
.smalltitle2{
  padding:10px;
  margin-top:10px;
  margin-left:800px;
  background-color:#f3f3f3;
  border-radius:20px;
  width:170px;
  text-align:center;
}
h1{
  font-size:40px;
  width:550px;
}
.word1{
  margin-top:30px;
}

`;

const Iphone15pro = () => {
  return (
    <Iphone15proBlock>
      <div>
      <h1>iPhone 15Pro 구입하기</h1>
      <p className="word1">￦1,550,000부터</p>
      </div>
      <div className="bigtitle">
      <div className="smalltitle">
        <p>보상판매료￦40,000-￦950,000 더 저렴하게**<GoPlusCircle /></p>
      </div>
      <div className="smalltitle2">신용카드 할부<GoPlusCircle /></div>
      </div>
    </Iphone15proBlock>
  );
};

export default Iphone15pro;
