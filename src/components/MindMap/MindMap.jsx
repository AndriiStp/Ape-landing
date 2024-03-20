import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "./MindMap.module.css";
import "swiper/css";
// import image from "../../images/mobile/AboutApe-mob1x-min.png";

const MindMap = () => {
  return (
    <section className={css.mindMap}>
      <h1 className={css.mindTitle}>Mind Map</h1>
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MindMap;

//   <article className={css.mindCard}>
//     <p className={css.mindDescription}>
//       All owners of APE NFTs and all future collections will receive a
//       percentage of sales based on the number of NFTs they own
//     </p>
//     <h2 className={css.mindCardTitle}>YAPE DROP</h2>
//   </article>;
