import React, { useState } from "react";
import styled from "styled-components";
import { CiCirclePlus } from "react-icons/ci";
const ColumnRightBlock = styled.div`
  width: 328px;
  height: 648px;
  overflow-y: auto;
  float: right;
  .btn {
    border-radius: 10px;
    border: 3px solid #000;
    background: #fff;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .btn.active {
    border-color: blue;
  }

  span {
    color: grey;
  }
  span.price1 {
    font-size: 10px;
    margin-left: 100px;
    text-align: center;
  }
  .group {
    text-align: left;
  }
  .detailinfo {
    border: 1px solid lightgray;
    margin-top: 20px;
    background-color: lightgray;
    border-radius: 10px;
  }
  .icon1 {
    color: black;
    margin-right: 10px;
  }
  .word1 {
    padding: 0 22px 0 0;
    font-size: 15px;
    color: black;
    text-align: left;
  }
  .word2 {
    text-align: center;
    font-size: 10px;
    margin-top: 10px;
    text-align: left;
  }
  .sto {
    margin-left: 10px;
    font-size: 20px;
  }
  .small {
    font-size: 10px;
  }
  .detailinfo1 {
    border: 1px solid lightgray;
    margin-top: 20px;
    background-color: lightgray;
    border-radius: 10px;
  }
  .word3 {
    font-size: 20px;
  }
  .word5 {
    font-size: 10px;
    color: lightgray;
    margin-left: 95px;
  }
`;

const Storage = styled.div`
  .btn2 {
    border: 3px solid black;
    border-radius: 10px;
    background-color: white;
    padding: 20px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .btn2.active {
    border-color: blue;
  }

  span.word4 {
    font-size: 10px;
    color: lightgray;
    margin-left: 70px;
  }
`;

const ColumnRight = () => {
  const [isActive, setIsActive] = useState(null);
  const [secondActive, setSecondActive] = useState(null);

  const promax = [
    { title: "iPhone 15 Pro", size: "15.5cm 디스플레이", price: 1550000 },
    { title: "iPhone 15 ProMax", size: "17.0cm 디스플레이", price: 1950000 },
  ];

  const storage1 = [
    { size: "128", unit: "GB", price: 1550000 },
    { size: "256", unit: "GB", price: 1900000 },
    { size: "512", unit: "GB", price: 2200000 },
    { size: "1", unit: "TB", price: 2500000 },
  ];

  const handleClick = (indexNo) => {
    setIsActive(indexNo);
  };

  const secondClick = (indexNo) => {
    setSecondActive(indexNo);
  };

  return (
    <ColumnRightBlock>
      <h2>
        모델.<span>당신에게 딱맞는 모델은?</span>
      </h2>
      <div className="promax">
        {promax.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`btn ${isActive === index ? "active" : ""}`}
          >
            <h3 style={{ fontSize: "25px" }}>
              <strong>{item.title}</strong>
            </h3>
            <span>{item.size}</span>
            <span className="price1">￦{item.price}부터</span>
          </button>
        ))}
      </div>

      <div className="detailinfo">
        <span className="word1">
          <strong>모델 선택에 도움이 필요하신가요?</strong>
        </span>
        <span className="icon1">
        <CiCirclePlus /> 
        </span>
        <br />
        <span className="word2">
          화면 크기와 배터리 사용 시간 등 차이점을 비교해보세요
        </span>
      </div>

      <div className="color">
        <h2>
          색상.<span>맘에드는 색상을 선택하세요</span>
        </h2>
        <h3>색상</h3>
        <div className="color1" style={{ display: "flex" }}>
          <div className="color2">
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-naturaltitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895385156"
              alt="color1"
            />
          </div>
          <div className="color3" style={{ marginLeft: "10px" }}>
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-bluetitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895385157"
              alt="color2"
            />
          </div>
          <div className="color4" style={{ marginLeft: "10px" }}>
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-whitetitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895385155"
              alt="color3"
            />
          </div>
          <div className="color5" style={{ marginLeft: "10px" }}>
            <img
              src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-pro-finish-blacktitanium-202309?wid=40&amp;hei=40&amp;fmt=jpeg&amp;qlt=90&amp;.v=1692895384718"
              alt="color4"
            />
          </div>
        </div>
        <div style={{ margin: "25px", textAlign: "left" }}>
          <div className="word3">
            <h2>
              저장용량.<span>당신에게 알맞은 저장 용량은?</span>
            </h2>
          </div>
          <Storage>
            {storage1.map((item, index) => (
              <div
                key={index}
                className={`btn2 ${secondActive === index ? "active" : ""}`}
                onClick={() => secondClick(index)}
              >
                <strong className="word3">{item.size}</strong>
                <span className="sto">{item.unit}</span>
                <sup style={{ fontSize: "10px" }}>2</sup>
                <span className="word4">￦{item.price}부터</span>
              </div>
            ))}
          </Storage>

          <div className="detailinfo1">
            <span className="word1">
              <strong>용량이 얼마나 필요할지 확실치 않으신가요?</strong>
            </span>
            <span className="icon1">
            <CiCirclePlus />
            </span>
            <br />
            <span className="word2">
              자신에게 어느 정도의 저장 용량이 필요할지 감 잡아보세요
            </span>
            <br />
          </div>
        </div>
      </div>
    </ColumnRightBlock>
  );
};

export default ColumnRight;
