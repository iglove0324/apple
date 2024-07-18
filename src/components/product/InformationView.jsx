import React, { useState } from "react";
import styled from "styled-components";
import { CgAdd } from "react-icons/cg";
import { ImAppleinc } from "react-icons/im";

const InformationViewBlock = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  .box1 {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 5px;
    justify-content: left;
  }

  .title {
    color: gray;
  }

  .sell, .sell2 {
    margin-top: 30px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 30px;
    width: 450px;
    text-align: center;
    cursor: pointer;
  }

  .deinfo {
    text-align: left;
    
    background-color: #f3f3f3;
    border-radius: 20px;
    padding: 10px;
    width: 450px;
    font-size: 20px;
    align-content: right;
    float: right;
    margin-top:30px;
    height:100px;
  }

  .care {
    padding: 10px;
  }

  .box2 {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
    justify-content: left;
  }

  .care1, .care2 {
    border: 1px solid black;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    cursor: pointer;
    width: 450px;
  }

  .smalltitle {
    display: flex;
    align-items: center;
    border-bottom:1px solid gray;
  }

  .detail1 {
    position: relative;
    font-size: 30px;
    display: block;
    margin-left: 10px;
  }

  .icon2 {
    position: relative;
    display: flex;
    font-size: 30px;
    color: red;
  }

  .caredetail {
    
    background-color: #f3f3f3;
    color: black;
    border-radius: 20px;
    padding: 20px;
    text-align: left;
    width:450px;
    height:150px;
    margin-top:30px;
  }

  .word1 {
    font-size: 15px;
  }
  .word5{
    color: gray;
  }
  .word2{
    font-size:13px;
  }
`;

const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  input {
    display: none;
  }
  span {
    padding: 10px;
    border-radius: 10px;

  }
  span.detail1{
   
    width:20px;
  }
`;

const InformationView = () => {
  const [selectedSell, setSelectedSell] = useState(null);
  const [selectedCare, setSelectedCare] = useState(null);

  const handleSellChange = (value) => {
    setSelectedSell(value);
  };

  const handleCareChange = (value) => {
    setSelectedCare(value);
  };

  return (
    <InformationViewBlock>
      <div>
        <h2>
          Apple Trade In.
          <span className="title">
            새 iPhone 구입 시 사용할 수 있는 ￦400,000-￦950,000 상당의 크레딧을 얻는 법.**
          </span>
        </h2>
        <div className="box1">
          <RadioButton checked={selectedSell === 'sel1'}>
            <input
              type="radio"
              id="sel1"
              name="sell"
              value="sel1"
              onChange={() => handleSellChange('sel1')}
            />
            <span className="sell">
              <strong>iPhone 선택하기</strong>
              <br />
              몇 가지 질문에 답해주시면 예상 금액이 제시됩니다.
            </span>
          </RadioButton>
          <RadioButton checked={selectedSell === 'sel2'}>
            <input
              type="radio"
              id="sel2"
              name="sell"
              value="sel2"
              onChange={() => handleSellChange('sel2')}
            />
            <span className="sell2">보상 판매 없음</span>
          </RadioButton>
          <div className="deinfo">
          <span className="word1">
            <strong>보상 판매 과정을 알아볼까요?</strong>
          </span>
          <span className="icon1">
            <CgAdd />
          </span>
          <br />
          <span className="word2">
            보상 판매 과정을 단계별로 자세히 알아보세요.
          </span>
        </div>
        </div>
       
      </div>
      <div className="bigbox2">
        <h2>
          AppleCare+ 보증.<span className="word5">새로 구입한 iPhone을 보호하세요.</span>
        </h2>
        <div className="box2">
          <RadioButton checked={selectedCare === 'care1'}>
            <input
              type="radio"
              id="care1"
              name="care"
              value="care1"
              onChange={() => handleCareChange('care1')}
            />
            <div className="care1">
              <div className="smalltitle">
                <span className="icon2">
                  <ImAppleinc />
                </span>
                <span className="detail1">
                  <strong>AppleCare+</strong>
                </span>
              </div>
              <br />
              <span>
                ● 우발적인 손상에 대한 횟수 제한 없는 수리*
                <br />
                ● Apple 정품 부품으로 진행되는 Apple 인증 수리 서비스
                <br />● Apple 전문가의 우선 지원
              </span>
            </div>
          </RadioButton>
          <RadioButton checked={selectedCare === 'care2'}>
            <input
              type="radio"
              id="care2"
              name="care"
              value="care2"
              onChange={() => handleCareChange('care2')}
            />
            <div className="care2">
              <span>AppleCare+ 보증 추가 안함</span>
            </div>
          </RadioButton>
          <div className="caredetail">
          <span className="word1">
            <strong>AppleCare+의 혜택은 무엇인가요?</strong>
          </span>
          <span className="icon1">
            <CgAdd />
          </span>
          <br />
          <span className="word2">
            떨어뜨리거나 액체를 엎지르는 등의 우발적인 사고로부터
            <br />
            iPhone을 보호할 수 있습니다. 보장 내용을 살펴보세요.
          </span>
        </div>
        </div>
       
      </div>
    </InformationViewBlock>
  );
};

export default InformationView;