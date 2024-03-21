import css from "./CollectionSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ape1Mob1x from "../../../images/apeCollection/mob/Ape1mob1x-min.jpg";
import ape1Mob2x from "../../../images/apeCollection/mob/Ape1mob2x-min.jpg";
import ape2Mob1x from "../../../images/apeCollection/mob/Ape2mob1x-min.jpg";
import ape2Mob2x from "../../../images/apeCollection/mob/Ape2mob2x-min.jpg";
import ape3Mob1x from "../../../images/apeCollection/mob/Ape3mob1x-min.jpg";
import ape3Mob2x from "../../../images/apeCollection/mob/Ape3mob2x-min.jpg";
import ape4Mob1x from "../../../images/apeCollection/mob/Ape4mob1x-min.jpg";
import ape4Mob2x from "../../../images/apeCollection/mob/Ape4mob2x-min.jpg";
import ape5Mob1x from "../../../images/apeCollection/mob/Ape5mob1x-min.jpg";
import ape5Mob2x from "../../../images/apeCollection/mob/Ape5mob2x-min.jpg";
import ape6Mob1x from "../../../images/apeCollection/mob/Ape6mob1x-min.jpg";
import ape6Mob2x from "../../../images/apeCollection/mob/Ape6mob2x-min.jpg";
import ape7Mob1x from "../../../images/apeCollection/mob/Ape7mob1x-min.jpg";
import ape7Mob2x from "../../../images/apeCollection/mob/Ape7mob2x-min.jpg";
import ape8Mob1x from "../../../images/apeCollection/mob/Ape8mob1x-min.jpg";
import ape8Mob2x from "../../../images/apeCollection/mob/Ape8mob2x-min.jpg";

import Ape1Big1x from "../../../images/apeCollection/tab_desk/Ape1big1x-min.jpg";
import Ape1Big2x from "../../../images/apeCollection/tab_desk/Ape1big2x-min.jpg";
import Ape2Big1x from "../../../images/apeCollection/tab_desk/Ape2big1x-min.jpg";
import Ape2Big2x from "../../../images/apeCollection/tab_desk/Ape2big2x-min.jpg";
import Ape3Big1x from "../../../images/apeCollection/tab_desk/Ape3big1x-min.jpg";
import Ape3Big2x from "../../../images/apeCollection/tab_desk/Ape3big2x-min.jpg";
import Ape4Big1x from "../../../images/apeCollection/tab_desk/Ape4big1x-min.jpg";
import Ape4Big2x from "../../../images/apeCollection/tab_desk/Ape4big2x-min.jpg";
import Ape5Big1x from "../../../images/apeCollection/tab_desk/Ape5big1x-min.jpg";
import Ape5Big2x from "../../../images/apeCollection/tab_desk/Ape5big2x-min.jpg";
import Ape6Big1x from "../../../images/apeCollection/tab_desk/Ape6big1x-min.jpg";
import Ape6Big2x from "../../../images/apeCollection/tab_desk/Ape6big2x-min.jpg";
import Ape7Big1x from "../../../images/apeCollection/tab_desk/Ape7big1x-min.jpg";
import Ape7Big2x from "../../../images/apeCollection/tab_desk/Ape7big2x-min.jpg";
import Ape8Big1x from "../../../images/apeCollection/tab_desk/Ape8big1x-min.jpg";
import Ape8Big2x from "../../../images/apeCollection/tab_desk/Ape8big2x-min.jpg";

const CollectionSlider = () => {
  return (
    <>
      <Swiper>
        <SwiperSlide>
          <div className={css.slideItem}>
            <img src={ape1Mob1x} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slideItem}>
            <img src={ape2Mob1x} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slideItem}>
            <img src={ape3Mob1x} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slideItem}>
            <img src={ape4Mob1x} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={css.slideItem}>
            <img src={ape5Mob1x} alt="" />
          </div>
        </SwiperSlide>
        <div className={css.sliderNavigation}>
          <div className={css.sliderArrow}>Prev</div>
          <div className={css.sliderArrow}>Next</div>
        </div>
      </Swiper>
    </>
  );
};

export default CollectionSlider;
