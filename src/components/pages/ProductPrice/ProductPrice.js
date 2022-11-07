import React, { useEffect, useState } from 'react';
import './ProductPrice.css';
import { useParams } from 'react-router-dom';
// import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ProductPrice() {
  const params = useParams();
  const [datas, setData] = useState();
  const { id } = params;
  // var Carousel = require('react-responsive-carousel').Carousel;

  function fetchdata() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((datas) => setData(datas));
  }

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line
  }, []);
  // const settings = {
  //   dots: true,
  //   lazyLoad: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 2,
  // };
  // const settingss = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 5,
  // };

  return (
    <>
      <div className='container-fluid p-0 m-0 '>
        <div className='row  mt-3 side-thumnail'>
          <div className='col-lg-6  p-0 m-0  '>
            {/* <Slider {...settings}> */}
            <Carousel
              showThumbs={true}
              showStatus={false}
              infiniteLoop
              // emulateTouch
              // autoPlay
              useKeyboardArrows
              transitionTime={1000}
              // axis="vertical"
              // selectedItem={1}
              width='600px'
            >
              {datas?.images?.map((x, i) => {
                return <img key={i} src={x} alt='not-show' className='images images-themnail_2' />;
              })}
            </Carousel>
            {/* </Slider> */}
          </div>

          {/* </div> */}
          <div className='col-lg-5   p-0 m-0'>
            <p> {datas?.title}</p>
            <p>{datas?.price}</p>
            <p>{datas?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPrice;
