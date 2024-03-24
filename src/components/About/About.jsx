import css from './About.module.css';
import crossDivide from '../../images/svg/add-sharp.svg';
import React from 'react';
// import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';
import aboutApeMobile1x from '../../images/mobile/AboutApe-mob1x-min.png';
import aboutApeMobile2x from '../../images/mobile/AboutApe-mob2x-min.png';
import aboutApeTablet1x from '../../images/tablet/AboutApe-tablet1x-min.png';
import aboutApeTablet2x from '../../images/tablet/AboutApe-tablet2x-min.png';
import aboutApeDesk1x from '../../images/desktop/AboutApe-desk1x-min.png';
import aboutApeDesk2x from '../../images/desktop/AboutApe-desk2x-min.png';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <section className={css.aboutSection}>
      <div className={css.aboutContainer}>
        <div className={css.aboutBigPositionWrapper}>
          <div className={css.aboutBigPosition}>
            {isMobile ? (
              <h1 className={css.aboutTitle}>
                a Story that
                <br /> started <br />
                with&nbsp;
                <span className={css.aboutTitleColored}>
                  one
                  <br />
                  simple
                  <br />
                  ape
                </span>
              </h1>
            ) : (
              <h1 className={css.aboutTitle}>
                a Story
                <br /> that
                <br /> started
                <br />
                with&nbsp;
                <span className={css.aboutTitleColored}>
                  one
                  <br />
                  simple ape
                </span>
              </h1>
            )}
            {isMobile ? (
              <p className={css.aboutDescr}>
                WHO GOT
                <br /> FED UP WITH BORING
                <br /> AND HYPOCRITIC
                <br /> COMMONPLACE THIS IS
                <br /> HOW THE IDEA OF
                <br /> ESCAPING AND DYNAMIC
                <br /> JOURNEY ON THE YACHT
              </p>
            ) : (
              <p className={css.aboutDescr}>
                WHO GOT FED UP WITH BORING
                <br /> AND HYPOCRITIC COMMONPLACE
                <br /> THIS IS HOW THE IDEA OF
                <br /> ESCAPING AND DYNAMIC
                <br /> JOURNEY ON THE
                <br /> YACHT
              </p>
            )}
          </div>
          <div className={css.aboutSecBigPosition}>
            <img
              className={css.crossDivider}
              src={crossDivide}
              alt="divider"
            ></img>
            <p className={css.aboutText}>
              EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS
              ARE RANDOMLY GENERATED BY USERS
            </p>
          </div>
        </div>
        <picture>
          <source
            srcSet={`${aboutApeDesk1x} 1x, ${aboutApeDesk2x} 2x`}
            media="(min-width: 1280px)"
          />

          <source
            srcSet={`${aboutApeTablet1x} 1x, ${aboutApeTablet2x} 2x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${aboutApeMobile1x} 1x, ${aboutApeMobile2x} 2x`}
            media="(max-width: 480px)"
          />
          <img
            className={css.aboutApeImage}
            src={aboutApeMobile1x}
            alt="Ape"
            loading="lazy"
          />
        </picture>
      </div>
      {/* 
      <div className={css.marqueeBlock}>
        <Marquee autoFill="true">
          <div className={css.marqueeContent}>
            <div className={css.marqueeText}>
              <div>HAVE NO LIMITS</div>
              <img className={css.marqueeCross} src={crossDivide} alt="cross" />
              <div>BREAK RULES</div>
              <img className={css.marqueeCross} src={crossDivide} alt="cross" />
              <div>DESTROY STEREOTYPES</div>
              <img className={css.marqueeCross} src={crossDivide} alt="cross" />
            </div>
          </div>
        </Marquee>
      </div> */}
    </section>
  );
};

export default About;
