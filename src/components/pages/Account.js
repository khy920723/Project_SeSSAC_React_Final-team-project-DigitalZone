import React from "react";
import Gnb from "../Gnb";
import { useState } from "react";
import MyPage from "../MyPage";
import AccChange from "../AccChange";
import FadeIn from "react-fade-in/lib/FadeIn";

function Account() {
  const [managerStat, setManagerState] = useState(true);
  return (
    <div className="account">
      <Gnb />
      {managerStat ? (
        <>
        <AccChange/>
        </>
        
        ) : (
          <>
        <MyPage />
        </>
      )}
    </div>
  );
}

export default Account;
