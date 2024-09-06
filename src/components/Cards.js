import React from "react";
import "./Cards.css";
import CardItem from "./CardItem.js";

function Cards() {
  return (
    <div className="cards">
      <h1>설문 발송 순서</h1>
      <p>편리한 설문조사 시스템을 이용해보세요.</p>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="img/box-ico_01.jpg"
              text="신규 설문 등록"
              path="/services"
            />
            <CardItem
              src="img/box-ico_02.jpg"
              text="설문발송"
              path="/services"
            />
            <CardItem
              src="img/box-ico_03.jpg"
              text="포인트 차감"
              path="/services"
            />
            <CardItem
              src="img/box-ico_04.png"
              text="포인트 추가 차감"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
