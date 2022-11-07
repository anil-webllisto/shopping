import React from 'react';
import image1 from '../../../images/image1.jpg';
import './Banner.css';

function Banner() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row  '>
          <div className='col-md-12' style={{ padding: '0px' }}>
            <img src={image1} className='images' alt='none-image' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
