import css from './SocialLinkButtons.module.css';
import svgTwitter from '../../images/svg/logoTwitter.svg';
import svgShip from '../../images/svg/ship.svg';
import svgDiscord from '../../images/svg/discord_black.svg';

const SocialLinkButtons = ({ isOpenMenu }) => {
  return (
    <ul className={css.navList}>
      <li className={isOpenMenu ? css.navButtonMobile : css.navButton}>
        <a href="https://discord.com/">
          <img src={svgDiscord} alt="Discord" className={css.svgSocial} />
        </a>
      </li>
      <li className={isOpenMenu ? css.navButtonMobile : css.navButton}>
        <a href="https://www.opensea.io/">
          <img src={svgShip} alt="OpenSea" className={css.svgSocial} />
        </a>
      </li>
      <li className={isOpenMenu ? css.navButtonMobile : css.navButton}>
        <a href="https://twitter.com/">
          <img src={svgTwitter} alt="Twitter" className={css.svgSocial} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinkButtons;
