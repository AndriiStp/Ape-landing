import { useState } from 'react';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import SocialLinkButtons from '../SocialLinkButtons/SocialLinkButtons';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={css.headerContainer}>
      <header className={css.headerPos}>
        <Logo />
        <div className={css.navButtons}>
          <button
            type="button"
            className={css.menuButtonContent}
            onClick={handleToggleMenuOpen}
          >
            MENU
          </button>
          <SocialLinkButtons />
        </div>
        {isMenuOpen && (
          <BurgerMenu
            isOpenMenu={isMenuOpen}
            toggleMenu={handleToggleMenuOpen}
          />
        )}
      </header>
    </div>
  );
};

export default Header;
