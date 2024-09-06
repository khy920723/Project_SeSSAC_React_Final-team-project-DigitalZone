import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./fade.css";


function Fade() {
    useEffect(() => {
        AOS.init();
      })
    return (
        <div>
        {/* 
            <h1>AOS Animate On Scroll Library</h1>
            <h1>FADE</h1>
            <div className="item" data-aos="fade-up" data-aos-anchor-placement="top-center">fade-up</div>
            <div className="item" data-aos="fade-down">fade-down</div>
            <div className="item" data-aos="fade-right">fade-right</div>
            <div className="item" data-aos="fade-left">fade-left</div>
            <div className="item" data-aos="fade-up-right">fade-up-right</div>
            <div className="item" data-aos="fade-up-left">fade-up-left</div>
            <div className="item" data-aos="fade-down-right">fade-down-right</div>
            <div className="item" data-aos="fade-down-left">fade-down-left</div>

            <h1>FLIP</h1>
            <div className="item" data-aos="flip-left">flip-left</div>
            <div className="item" data-aos="flip-right">flip-right</div>
            <div className="item" data-aos="flip-up">flip-up</div>
            <div className="item" data-aos="flip-down">flip-down</div>

            <h1>ZOOM</h1>
            <div className="item" data-aos="zoom-in">zoom-in</div>
            <div className="item" data-aos="zoom-in-up">zoom-in-up</div>
            <div className="item" data-aos="zoom-in-down">zoom-in-down</div>
            <div className="item" data-aos="zoom-in-left">zoom-in-left</div>
            <div className="item" data-aos="zoom-in-right">zoom-in-right</div>
            <div className="item" data-aos="zoom-out">zoom-out</div>
            <div className="item" data-aos="zoom-out-up">zoom-out-up</div>
            <div className="item" data-aos="zoom-out-down">zoom-out-down</div>
            <div className="item" data-aos="zoom-out-right">zoom-out-right</div>
            <div className="item" data-aos="zoom-out-left">zoom-out-left</div>

            <h1>DIFFERENT SETTINGS EXAMPLES</h1>
            <div className="item" data-aos="fade-up" data-aos-duration="3000">fade-up</div>
            <div className="item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">fade-down linear</div>
            <div className="item" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">fade-right</div>
            <div className="item" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">fade-left</div>
            <div className="item" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">fade-zoom-in</div>
            <div className="item" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">flip-left</div>

            <h1>ANCHOR PLACEMENT</h1>
            <div className="item" data-aos="fade-up" data-aos-anchor-placement="top-bottom">fade-up top-bottom</div>
            <div className="item" data-aos="fade-up" data-aos-anchor-placement="center-bottom">fade-up center-bottom</div>
            <div className="item" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">fade-up bottom-bottom</div>
            <div className="item" data-aos="fade-up" data-aos-anchor-placement="top-center">fade-up top-center</div>
            <div className="item" data-aos="fade-up" data-aos-anchor-placement="center-center">fade-up center-center</div>
            <div className="item" data-aos="fade-up" data-aos-anchor-placement="bottom-center">fade-up bottom-center</div>
            */}
        </div>
);
}

export default Fade;