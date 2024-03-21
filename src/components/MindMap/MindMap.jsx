import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import css from './MindMap.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

import svgArrov from '../../images/svg/Vector.svg';

const MindMap = () => {
  return (
    <section className={css.mindMap}>
      <h1 className={css.mindTitle}>Mind Map</h1>
      <Swiper
        modules={[Navigation]}
        className={css.mindSwiper}
        slidesPerView={1}
        spaceBetween={50}
        navigation={{
          nextEl: '.sliderNext',
          prevEl: '.sliderPrev',
        }}
      >
        <SwiperSlide>
          <article className={css.mindCard}>
            <p className={css.mindDescription}>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <h2 className={css.mindCardTitle}>YAPE DROP</h2>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={css.mindCard}>
            <p className={css.mindDescription}>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <h2 className={css.mindCardTitle}>New Collection</h2>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={css.mindCard}>
            <p className={css.mindDescription}>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <h2 className={css.mindCardTitle}>YToken</h2>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={css.mindCardRed}>
            <img className={css.mindCardArrow} src={svgArrov} alt="" />
            <h2 className={css.mindCardTitle}>
              Learn
              <br /> more
              <br /> in mind map
            </h2>
          </article>
        </SwiperSlide>
        <div className={css.sliderNavigation}>
          <div className={css.sliderPrev}>Prev</div>
          <div className={css.sliderNext}>Next</div>
        </div>
      </Swiper>
    </section>
  );
};

export default MindMap;
