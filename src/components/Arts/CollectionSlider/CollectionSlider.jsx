// import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import apes from '../../../images/apeCollection/apeCollection.json';
import css from './CollectionSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

const CollectionSlider = ({ apes }) => {
  const swiperParams = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 50,
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
    <>
      <Swiper className={css.swiperController} {...swiperParams}>
        {apes.map(({ alt, apeMob1x, apeMob2x, apeBig1x, apeBig2x }, index) => (
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
              <img src={apeMob1x} alt={alt} loading="lazy" />
            </picture>
          </SwiperSlide>
        ))}
        <div className={css.sliderNavigation}>
          <div className="prev">
            <span className={css.sliderPrev}>Prev</span>
          </div>
          <div className="next">
            <span className={css.sliderNext}>Next</span>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default CollectionSlider;

/* <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape1Big2x} 1x, ${Ape1Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape1Big2x} 1x, ${Ape1Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape1Mob1x} 1x, ${ape1Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape1Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape2Big2x} 1x, ${Ape2Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape2Big2x} 1x, ${Ape2Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape2Mob1x} 1x, ${ape2Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape2Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape3Big2x} 1x, ${Ape3Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape3Big2x} 1x, ${Ape3Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape3Mob1x} 1x, ${ape3Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape3Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape4Big2x} 1x, ${Ape4Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape4Big2x} 1x, ${Ape4Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape4Mob1x} 1x, ${ape4Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape4Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape5Big2x} 1x, ${Ape5Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape5Big2x} 1x, ${Ape5Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape5Mob1x} 1x, ${ape5Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape5Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape6Big2x} 1x, ${Ape6Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape6Big2x} 1x, ${Ape6Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape6Mob1x} 1x, ${ape6Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape6Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape7Big2x} 1x, ${Ape7Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape7Big2x} 1x, ${Ape7Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape7Mob1x} 1x, ${ape7Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape7Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className={css.slideItem}>
          <picture>
            <source
              srcSet={`${Ape8Big2x} 1x, ${Ape8Big2x} 2x`}
              media="(min-width: 1280px)"
            />
            <source
              srcSet={`${Ape8Big2x} 1x, ${Ape8Big2x} 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${ape8Mob1x} 1x, ${ape8Mob2x} 2x`}
              media="(max-width: 480px)"
            />
            <img src={ape8Mob1x} alt="Ape" loading="lazy" />
          </picture>
        </SwiperSlide> */

// import ape1Mob1x from '../../../images/apeCollection/mob/Ape1mob1x-min.jpg';
// import ape1Mob2x from '../../../images/apeCollection/mob/Ape1mob2x-min.jpg';
// import ape2Mob1x from '../../../images/apeCollection/mob/Ape2mob1x-min.jpg';
// import ape2Mob2x from '../../../images/apeCollection/mob/Ape2mob2x-min.jpg';
// import ape3Mob1x from '../../../images/apeCollection/mob/Ape3mob1x-min.jpg';
// import ape3Mob2x from '../../../images/apeCollection/mob/Ape3mob2x-min.jpg';
// import ape4Mob1x from '../../../images/apeCollection/mob/Ape4mob1x-min.jpg';
// import ape4Mob2x from '../../../images/apeCollection/mob/Ape4mob2x-min.jpg';
// import ape5Mob1x from '../../../images/apeCollection/mob/Ape5mob1x-min.jpg';
// import ape5Mob2x from '../../../images/apeCollection/mob/Ape5mob2x-min.jpg';
// import ape6Mob1x from '../../../images/apeCollection/mob/Ape6mob1x-min.jpg';
// import ape6Mob2x from '../../../images/apeCollection/mob/Ape6mob2x-min.jpg';
// import ape7Mob1x from '../../../images/apeCollection/mob/Ape7mob1x-min.jpg';
// import ape7Mob2x from '../../../images/apeCollection/mob/Ape7mob2x-min.jpg';
// import ape8Mob1x from '../../../images/apeCollection/mob/Ape8mob1x-min.jpg';
// import ape8Mob2x from '../../../images/apeCollection/mob/Ape8mob2x-min.jpg';

// import Ape1Big1x from '../../../images/apeCollection/tab_desk/Ape1big1x-min.jpg';
// import Ape1Big2x from '../../../images/apeCollection/tab_desk/Ape1big2x-min.jpg';
// import Ape2Big1x from '../../../images/apeCollection/tab_desk/Ape2big1x-min.jpg';
// import Ape2Big2x from '../../../images/apeCollection/tab_desk/Ape2big2x-min.jpg';
// import Ape3Big1x from '../../../images/apeCollection/tab_desk/Ape3big1x-min.jpg';
// import Ape3Big2x from '../../../images/apeCollection/tab_desk/Ape3big2x-min.jpg';
// import Ape4Big1x from '../../../images/apeCollection/tab_desk/Ape4big1x-min.jpg';
// import Ape4Big2x from '../../../images/apeCollection/tab_desk/Ape4big2x-min.jpg';
// import Ape5Big1x from '../../../images/apeCollection/tab_desk/Ape5big1x-min.jpg';
// import Ape5Big2x from '../../../images/apeCollection/tab_desk/Ape5big2x-min.jpg';
// import Ape6Big1x from '../../../images/apeCollection/tab_desk/Ape6big1x-min.jpg';
// import Ape6Big2x from '../../../images/apeCollection/tab_desk/Ape6big2x-min.jpg';
// import Ape7Big1x from '../../../images/apeCollection/tab_desk/Ape7big1x-min.jpg';
// import Ape7Big2x from '../../../images/apeCollection/tab_desk/Ape7big2x-min.jpg';
// import Ape8Big1x from '../../../images/apeCollection/tab_desk/Ape8big1x-min.jpg';
// import Ape8Big2x from '../../../images/apeCollection/tab_desk/Ape8big2x-min.jpg';
