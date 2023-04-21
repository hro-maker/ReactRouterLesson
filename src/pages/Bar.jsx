

import React from 'react'
import Img from "../slider.svg";
export  function Bar({children,persend}) {
  return (
    <div className="circle__top">
    <img src={Img} alt="" />
    <div className="circle__wrapper" style={{ 'transform': `rotate(${(-45 + (persend *1.8))+'deg'})`, left:persend >=50 ? '25px' :'21px'}}>
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13" cy="13.7957" r="10" fill="white" stroke="#010334" stroke-width="6"/>
</svg>

    </div>
  </div>
  )
}
