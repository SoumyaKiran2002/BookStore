import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

import list from "../../public/list.json"

function Freebook() {
    const filterData = list.filter((data)=>data.category ==="free");
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
            <div>
            <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad odit esse est sequi eveniet, unde maxime tenetur architecto nobis quia a odio sint dolor ut, voluptas commodi omnis nihil accusamus dolorum aut earum corrupti mollitia? Velit, aliquam tenetur laborum voluptate, alias quis aspernatur beatae libero repudiandae, voluptatum quibusdam cupiditate.</p>
            </div>
        
        <div>
            <Slider {...settings}>
                {filterData.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))}
            </Slider>
        </div>
   </div>
    </>
  )
}

export default Freebook
