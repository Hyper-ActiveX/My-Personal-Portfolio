import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import blogapp from "../../img/blogapp.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import todoapp from "../../img/todoapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My Recent </span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={blogapp} alt="" />
          <span className="p-span">Blogapp</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <span className="p-span">Ecommerce</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={todoapp} alt="" />
          <span className="p-span">Todopp</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
          <span className="p-span">HOC</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
