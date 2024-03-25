import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import css from './MindMap.module.css';

import svgArrov from '../../images/svg/Vector.svg';

const MindMap = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section id="#m-map" className={css.mindMap}>
      <h1 className={css.mindTitle}>Mind Map</h1>
      {isMobile ? (
        <Swiper
          modules={[Navigation]}
          className={css.mindSwiper}
          slidesPerView={1}
          spaceBetween={50}
          navigation={{
            nextEl: '.nextCard',
            prevEl: '.prevCard',
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
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
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
            <a
              href="https://drive.google.com/file/d/1FmPfC2Wk3vR0zIrSeupIbHSN34soUIjd/view?usp=sharing"
              className={css.mindCardRed}
            >
              <img className={css.mindCardArrow} src={svgArrov} alt="" />
              <h2 className={css.mindCardTitle}>
                Learn
                <br /> more
                <br /> in mind map
              </h2>
            </a>
          </SwiperSlide>
          <div className={css.sliderNavigation}>
            <div className="prevCard">
              <span className={css.sliderPrev}>Prev</span>
            </div>
            <div className="nextCard">
              <span className={css.sliderNext}>Next</span>
            </div>
          </div>
        </Swiper>
      ) : (
        <div className={css.gridContainer}>
          <article className={css.mindCard}>
            <p className={css.mindDescription}>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </p>
            <h2 className={css.mindCardTitle}>YAPE DROP</h2>
          </article>
          <article className={css.mindCard}>
            <p className={css.mindDescription}>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </p>
            <h2 className={css.mindCardTitle}>New Collection</h2>
          </article>
          <article className={css.mindCard}>
            <p className={css.mindDescription}>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </p>
            <h2 className={css.mindCardTitle}>YToken</h2>
          </article>
          <a
            href="https://drive.google.com/file/d/1FmPfC2Wk3vR0zIrSeupIbHSN34soUIjd/view?usp=sharing"
            className={css.mindCardRed}
          >
            <img className={css.mindCardArrow} src={svgArrov} alt="" />
            <h2 className={css.mindCardTitle}>
              Learn
              <br /> more
              <br /> in mind map
            </h2>
          </a>
        </div>
      )}
    </section>
  );
};

export default MindMap;
