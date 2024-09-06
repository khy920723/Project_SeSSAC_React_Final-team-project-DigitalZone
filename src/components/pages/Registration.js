import React from 'react'
import Gnb from '../Gnb'
import { useState } from 'react';
import FileUpload from '../survey/FileUpload';
import MarketResearch from '../survey/MarketResearch';
import Register from '../survey/Register';
import Send from '../survey/Send';
import Survey from '../survey/Survey';
import SurveyModify from '../survey/SurveyModify';
import Transfer from '../survey/Transfer';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function Registration() {
  return (
    <div className="registration">
      <Gnb />
      <Survey />
    </div>
  )
}
