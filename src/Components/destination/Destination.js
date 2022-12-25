import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import {
  BgSection,
  DestinationContainer,
  HeadingContainer,
  SliderCard,
  StarContainer,
} from "./Destination.style";
//swiper js slide import
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade } from "react-awesome-reveal";

//sedtination component
export default function Destination() {
  const [dest, setDest] = useState([]);
  useEffect(() => {
    fetch("./json/Destination.json")
      .then((res) => res.json())
      .then((data) => setDest(data));
  }, []);
  return (
    <BgSection style={{ overflow: "hidden" }}>
      <DestinationContainer>
        <Fade cascade direction="left" delay={500} triggerOnce={true}>
          <HeadingContainer>
            <span></span>
            <span></span>
            <span></span>
            <h2>
              Find the <span className="color">destination</span> you want
            </h2>
          </HeadingContainer>
          <p style={{ textAlign: "center", fontSize: "var(--fs-300)" }}>
            We provide travel and vacation services whith the ebst destinations.
          </p>
          {/* slider destination */}
        </Fade>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          style={{ marginTop: "80px" }}
          pagination={{ dynamicBullets: true, clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 2,
            },
            0: {
              width: 550,
              slidesPerView: 1,
            },
          }}
        >
          {dest.map((data) => {
            const { image, title, rating, location, price, tag, id } = data;
            return (
              <SwiperSlide key={id}>
                <SliderCard>
                  <div className="image-wrapper">
                    <div className="image-overlay"></div>
                    <img src={image} className="image" alt="" />
                  </div>
                  <a href="/" className="title">
                    {title}
                  </a>
                  <StarContainer>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <div className="rating">{rating}</div>
                    <div className="tag">{tag}</div>
                  </StarContainer>
                  <div className="card-bottom">
                    <div className="location">{location}</div>
                    <div className="price-content">
                      <span className="price">{price}</span> /person
                    </div>
                  </div>
                </SliderCard>
              </SwiperSlide>
            );
          })}
          {/* <button className="swiper-button-prev">prev</button> */}

          <div className="swiper-button-prev custom-prev">
            <HiArrowNarrowLeft />
          </div>
          <div className="swiper-button-next custom-next">
            <HiArrowNarrowRight />
          </div>
        </Swiper>
      </DestinationContainer>
    </BgSection>
  );
}
