import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

function Slider() {
    
    return (
        <div>
  <StyleRoot>
    <Coverflow
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 900px)': {
          width: '600px',
          height: '300px'
        },
        '@media (min-width: 900px)': {
          width: '960px',
          height: '600px'
        }
      }}
    >
      <img src='images/album-1.png' alt='Album one' data-action="https://facebook.github.io/react/"/>
      <img src='images/album-2.png' alt='Album two' data-action="http://passer.cc"/>
      <img src='images/album-3.png' alt='Album three' data-action="https://doce.cc/"/>
      <img src='images/album-4.png' alt='Album four' data-action="http://tw.yahoo.com"/>
    </Coverflow>
  </StyleRoot>
</div>
);
}

export default Slider