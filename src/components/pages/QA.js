import React, { useState } from "react";
import Gnb from "../Gnb";
import Logined_qna_article from "../Logined_qna_article";
import Logined_qna_board from "../Logined_qna_board";
import Logined_qna_regist from "../Logined_qna_regist";


export default function QA() {
  const [memberStat,setMemberStat]=useState(true);/* 회원(true)에게만 gnb 보임, 디폴트는 비회원(false) */
  return (
    <div className="QA">
      { memberStat && <Gnb /> }
      <Logined_qna_board />
    </div>
  );
}
