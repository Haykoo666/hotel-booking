import React from 'react';
import { Carousel } from 'antd';
import Search from './../Search';

const contentStyle = {
  height: '93vh',
  width: "100%",
  color: '#fff',
  background: '#364d79',
  
};

const HomeBanner = () => {
  return (
    <>
      <Carousel  autoplay autoplaySpeed={ 4000 } draggable  className='carousel'>
        <div style={{height: "93vh"}}>
          <img src="./img/banner1.png.webp" alt="" style={ contentStyle }/>
        </div>
        <div>
          <img src="./img/banner-2.webp" alt="" style={ contentStyle }/>
        </div>
        <div>
          <img src="./img/banner-3.webp" alt="" style={ contentStyle }/>
        </div>
        <div>
          <img src="./img/banner-4-australia.webp" alt="" style={ contentStyle } loading="lazy"/>
        </div>
        <div>
          <img src="./img/banner-1.jpg" alt="" style={ contentStyle }/>
        </div>
      </Carousel>
      <Search />
    </>
  );
};

export default HomeBanner;
