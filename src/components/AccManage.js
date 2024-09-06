import React from "react";
import "./Acc.css";
import Gnb from "./Gnb";
import SearchBox from "./SearchBox";
import SupTab from "./SupTab";
import LocationBar from "./LocationBar";
import FadeIn from "react-fade-in/lib/FadeIn";

function AccManage() {
  return (
    <div className="account">
      <Gnb />
      <div className="manage">
        <LocationBar depth1="계정 설정" depth2="계정 관리" />
        <SupTab />
        <FadeIn>
          <SearchBox />
        </FadeIn>
      </div>
    </div>
  );
}

export default AccManage;
