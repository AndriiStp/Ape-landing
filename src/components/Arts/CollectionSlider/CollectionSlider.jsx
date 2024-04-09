import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import css from './CollectionSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { apesItems } from '../../../style/const/apeCollection';
import SwiperController from '../../SwiperController/SwiperController';

const CollectionSlider = ({ apes }) => {
  const swiperParams = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: { nextEl: '.next', prevEl: '.prev' },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  };

  return (
    <Swiper className={css.swiperModule} {...swiperParams}>
      {apesItems.map(
        ({ alt, apeMob1x, apeMob2x, apeBig1x, apeBig2x }, index) => (
          <SwiperSlide className={css.slideItem} key={index}>
            <picture>
              <source
                srcSet={`${apeBig1x} 1x, ${apeBig2x} 2x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${apeBig1x} 1x, ${apeBig2x} 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${apeMob1x} 1x, ${apeMob2x} 2x`}
                media="(max-width: 480px)"
              />
              <img
                className={css.imageSizing}
                src={apeMob1x}
                alt={alt}
                loading="lazy"
              />
            </picture>
          </SwiperSlide>
        )
      )}
      <SwiperController />
    </Swiper>
  );
};

export default CollectionSlider;
