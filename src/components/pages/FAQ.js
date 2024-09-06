import React, { useState } from 'react'
import FaqCategory from '../FaqCategory';
import Gnb from '../Gnb';

export default function FAQ() {
  const [memberStat,setMemberStat]=useState(true);/* 회원(true)에게만 gnb 보임, 디폴트는 비회원(false) */
  return (
    <div className='FAQ'>
    { memberStat && <Gnb /> }
    <FaqCategory />
    </div>
  )
}
