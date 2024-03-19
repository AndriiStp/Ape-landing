import React from "react";
import css from "./Header.module.css";

import logoHeadermobile1x from "../../images/mobile/logoHeader-mob1x.png";
import logoHeadermobile2x from "../../images/mobile/logoHeader-mob2x..png";

import svgTwitter from "../../images/svg/logoTwitter.svg";
import svgShip from "../../images/svg/ship.svg";
import svgDiscord from "../../images/svg/discord_black.svg";

const Header = () => {
  return (
    <header classList={css.headerPos}>
      <div>
        <a href="../../../public/index.html">
          <picture>
            <source
              srcSet={`${logoHeadermobile1x} 1x, ${logoHeadermobile2x} 2x`}
              media="(max-width: 480px)"
            ></source>
            <img
              src={logoHeadermobile1x}
              alt="Made by Apes logo"
              className={css.logo}
            />
          </picture>
        </a>
      </div>
      <div className={css.socialMenu}>
        <ul className={css.navList}>
          <li className={css.navButton}>
            <button className={css.menuButtonContent}>MENU</button>
          </li>
          <li className={css.navButton}>
            <a href="https://discord.com/">
              <img src={svgDiscord} alt="Discord" className={css.svgSocial} />
            </a>
          </li>
          <li className={css.navButton}>
            <a href="https://www.pinterest.com/">
              <img src={svgShip} alt="Ship" className={css.svgSocial} />
            </a>
          </li>
          <li className={css.navButton}>
            <a href="https://twitter.com/">
              <img src={svgTwitter} alt="Twitter" className={css.svgSocial} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
