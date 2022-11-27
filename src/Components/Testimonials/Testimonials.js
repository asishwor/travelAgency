import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Container } from "../Container.style";
import {
  SwiperContainer,
  TestimonialsCard,
  TestimonialsHeader,
} from "./Testimonials.style";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

function Testimonials() {
  const [testimonials, setTetimonials] = useState([]);

  useEffect(() => {
    fetch("../json/testimonia.json")
      .then((res) => res.json())
      .then((data) => setTetimonials(data))
      .catch((err) => console.log(err.message));
  });
  return (
    <Container>
      <TestimonialsHeader className="testimonials">
        <div className="header">
          <h2>What they say about GoOut</h2>
          <p>
            What they experience and feel while together GoOUt as a drean comer
            vacation.
          </p>
        </div>
      </TestimonialsHeader>
      <SwiperContainer>
        <Fade
          triggerOnce={true}
          cascade
          direction="left"
          duration={1000}
          delay={500}
        >
          <Swiper
            navigation={true}
            slidesPerView={3}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={30}
            loop={true}
            style={{ paddingTop: "60px" }}
          >
            {testimonials.map((elm) => {
              const { image, id, name, Content } = elm;
              return (
                <SwiperSlide key={id}>
                  <TestimonialsCard>
                    <FaQuoteLeft />
                    <p>{Content}</p>
                    <div className="name-container">
                      <img src={image} alt="profile" />
                      <div>
                        <p className="name">{name}</p>
                        <p>Traveller</p>
                      </div>
                    </div>
                  </TestimonialsCard>
                </SwiperSlide>
              );
            })}
            <div className="buttonContainer">
              <button className="testimonials-prev">
                <HiArrowLeft style={{ lineHeight: "0" }} />
              </button>
              <button className="testimonials-next">
                <HiArrowRight style={{ lineHeight: "0" }} />
              </button>
            </div>
          </Swiper>
        </Fade>
      </SwiperContainer>
    </Container>
  );
}

export default Testimonials;
