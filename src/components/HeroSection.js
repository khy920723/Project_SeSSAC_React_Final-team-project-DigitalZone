import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="video/video-2.mp4" autoPlay loop muted />
    
        <h1>설문조사로 해결책을 얻으세요!</h1>
        <p>
          편리한 설문조사 시스템을 이용해보세요.<br/>
          디지털존의 설문조사에서 실행
          가능한 통찰력과 신선한 관점을 확보할 수 있습니다.<br/>
          어려운 설문조사 양식
          등을 쉽게 만들고 발송 할 수 있습니다.
        </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--white-outline"
          buttonSize="btn--large"
        >
          <Link to="/sign-up">
          회원가입
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
