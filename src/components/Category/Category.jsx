import React from "react"
import "./category.css"
// import { category } from "../../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import {MdNavigateNext} from "react-icons/md";
import {GrFormPrevious} from "react-icons/gr";


import ca1 from "../../assets/images/category/ca1.png";
import ca2 from "../../assets/images/category/ca2.png";
import ca3 from "../../assets/images/category/ca3.png";
import ca4 from "../../assets/images/category/ca4.png";
import ca5 from "../../assets/images/category/ca5.png";
import ca6 from "../../assets/images/category/ca6.png";
import ca7 from "../../assets/images/category/ca7.png";
import ca8 from "../../assets/images/category/ca8.png";

 const category = [
    {
      id: 1,
      category: "Life",
      title: "Stay Calm And Surf",
      cover: ca1
    },
    {
      id: 2,
      category: "Fashion",
      title: "Becoming a Dragonfly",
      cover: ca2,
    },
    {
      id: 3,
      category: "Travel",
      title: "There's always light at the end of the tunnel",
      cover: ca3,
    },
    {
      id: 4,
      category: "Sport",
      title: "Stay Calm And Surf",
      cover: ca4,
    },
    {
      id: 5,
      category: "Fun",
      title: "There's always light at the end of the tunnel",
      cover: ca5,
    },
    {
      id: 6,
      category: "Health",
      title: "Becoming a Dragonfly",
      cover: ca6
    },
    {
      id: 7,
      category: "Business",
      title: "Stay Calm And Surf",
      cover: ca7,
    },
    {
      id: 8,
      category: "Technology",
      title: "There's always light at the end of the tunnel",
      cover: ca8,
    },
  ]


  const SampleNextArrow = (props) =>{
    const{onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <MdNavigateNext className='icon' />
            </button>
        </div>
    )
  }

  const SamplePrevArrow= (props) =>{
    const{onClick} = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <GrFormPrevious className='icon' />
            </button>
        </div>
    )
  }

export const Category = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
    }
  return (
    <>
        <section className='category'>
            <div className='content'>
            <Slider {...settings}>
            {category.map(({id, cover, category, title}) => (
              <div className='boxs'>
                <div className='box' key={id}>
                  <img src={cover} alt='cover' />
                  <div className='overlay'>
                    <h4>{category}</h4>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            ))}
            </Slider>
            </div>
        </section>
    </>
  )
}
