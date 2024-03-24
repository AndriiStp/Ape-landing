// import { useState } from 'react';
import css from './Header.module.css';

import logoHeadermobilex from '../../images/svg/Frame.svg';

import svgTwitter from '../../images/svg/logoTwitter.svg';
import svgShip from '../../images/svg/ship.svg';
import svgDiscord from '../../images/svg/discord_black.svg';

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleToggleMenuOpen = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <header className={css.headerPos}>
      <div className={css.logo}>
        <a href="../../../public/index.html">
          <img src={logoHeadermobilex} alt="Made by Apes logo" />
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
            <a href="https://www.opensea.io/">
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
