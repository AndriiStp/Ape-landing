import React from "react";
import css from "./Hero.module.css";
import ButtonMeetApes from "./ButtonMeetApes";
import apeImageMobile1x from "../../images/mobile/HeroApe-mob1x-min.png";
import apeImageMobile2x from "../../images/mobile/HeroApe-mob2x-min.png";
import apeImageTablet1x from "../../images/tablet/HeroApe-tab1x-min.png";
import apeImageTablet2x from "../../images/tablet/HeroApe-tab2x-min.png";
import apeImageDesk1x from "../../images/desktop/HeroApe-desk1x-min.png";
import apeImageDesk2x from "../../images/desktop/HeroApe-desk2x-min.png";

const Hero = () => {
  return (
    <>
      <section className={css.heroSection}>
        <p>diD yOu seE iT ?</p>
        <h1>YACHT APES</h1>
        <p>Apes aRe eveRywhere</p>
        <picture>
          <source
            srcSet={`${apeImageDesk1x} 1x, ${apeImageDesk2x} 2x`}
            media="(min-width: 1440px)"
            sizes="min-width: 150px"
          />

          <source
            srcSet={`${apeImageTablet1x} 1x, ${apeImageTablet2x} 2x`}
            media="(min-width: 768px)"
            sizes="min-width: 150px"
          />
          <source
            srcSet={`${apeImageMobile1x} 1x, ${apeImageMobile2x} 2x`}
            media="(max-width: 767px)"
            sizes="150px"
          />
          <img
            className={css.gooseImage}
            src={apeImageMobile1x}
            alt="Ape"
            loading="lazy"
          />
        </picture>
        <ButtonMeetApes />
      </section>
    </>
  );
};

export default Hero;
