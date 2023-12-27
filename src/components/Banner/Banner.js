import React from 'react';
import imageBannerLeft from '../../assets/img/image-banner-left.png';
import imageBannerRightTop from '../../assets/img/image-banner-right-top.png';
import imageBannerRightBottom from '../../assets/img/image-banner-right-bottom.png';

import './style.css';

const Banner = () => {
  return (
    <div className='banner'>
      <img src={imageBannerLeft} alt='Most Popular Burger' />
      <img src={imageBannerRightTop} alt='More Fun More Taste' />
      <img src={imageBannerRightBottom} alt='Fresh & Chili' />
    </div>
  );
};

export default Banner;
