import React from 'react';
import css from './Hero.module.css';
import { scroller } from 'react-scroll';

import apeImageMobile1x from '../../images/mobile/HeroApe-mob1x-min.png';
import apeImageMobile2x from '../../images/mobile/HeroApe-mob2x-min.png';
import apeImageTablet1x from '../../images/tablet/HeroApe-tab1x-min.png';
import apeImageTablet2x from '../../images/tablet/HeroApe-tab2x-min.png';
import apeImageDesk1x from '../../images/desktop/HeroApe-desk1x-min.png';
import apeImageDesk2x from '../../images/desktop/HeroApe-desk2x-min.png';

const Hero = () => {
  const scrollToMint = () => {
    scroller.scrollTo('mint', {
      duration: 1500,
      smooth: 'linear',
    });
  };

  return (
    <section className={css.heroSection}>
      <div className={css.heroContactWrapper}>
        <p className={css.heroPreTitle}>diD yOu seE iT ?</p>
        <h1 className={css.heroMainTitle}>
          <span>YACHT</span>
          <span> APES</span>
        </h1>
        <p className={css.heroPostTitle}>Apes aRe eveRywhere</p>
        <picture className={css.apeImage}>
          <source
            srcSet={`${apeImageDesk1x} 1x, ${apeImageDesk2x} 2x`}
            media="(min-width: 1280px)"
            sizes="min-width: 511px"
          />
          <source
            srcSet={`${apeImageTablet1x} 1x, ${apeImageTablet2x} 2x`}
            media="(min-width: 768px)"
            sizes="min-width: 283px"
          />
          <source
            srcSet={`${apeImageMobile1x} 1x, ${apeImageMobile2x} 2x`}
            media="(max-width: 480px)"
            sizes="max-width: 216px"
          />
          <img src={apeImageMobile1x} alt="Ape" loading="lazy" />
        </picture>
        <div className={css.tabletPosition}>
          <button
            className={css.buttonMeet}
            type="button"
            onClick={scrollToMint}
            aria-label="Scroll to Mint"
          >
            Meet Apes
          </button>
          <p className={css.heroDescr}>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
