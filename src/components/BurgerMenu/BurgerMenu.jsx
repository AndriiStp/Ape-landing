import { useEffect } from 'react';
import css from './BurgerMenu.module.css';
import { createPortal } from 'react-dom';
import Logo from '../Logo/Logo';
import SocialLinkButtons from '../SocialLinkButtons/SocialLinkButtons';

const rootBurger = document.querySelector('#root-burger');

export const BurgerMenu = ({ handleToggleMenuOpen, isMenuOpen }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape' && isMenuOpen) {
        handleToggleMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, handleToggleMenuOpen]);

  const handleMenuItemClick = (event, sectionId) => {
    event.preventDefault();
    handleToggleMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  };

  return createPortal(
    <nav className={`${css.mobileMenu} ${isMenuOpen ? css.openMenu : ''}`}>
      <div className={css.mobileBox}>
        <div
          style={{
            filter: 'invert(100%) brightness(200%)',
            marginLeft: '8px',
          }}
        >
          <Logo />
        </div>
        <div>
          <button
            type="button"
            aria-label="Close"
            className={css.btnMenu}
            onClick={handleToggleMenuOpen}
          >
            CLOSE
          </button>
          <SocialLinkButtons isOpenMenu={isMenuOpen} />
        </div>
      </div>
      <ul className={css.menuList}>
        <li>
          <a href="#about" onClick={e => handleMenuItemClick(e, '#about')}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#m-map" onClick={e => handleMenuItemClick(e, '#m-map')}>
            M-MAP
          </a>
        </li>
        <li>
          <a href="#faq" onClick={e => handleMenuItemClick(e, '#faq')}>
            FAQ
          </a>
        </li>
        <li>
          <a href="#arts" onClick={e => handleMenuItemClick(e, '#arts')}>
            ARTS
          </a>
        </li>
        <li>
          <a href="#mint" onClick={e => handleMenuItemClick(e, '#mint')}>
            MINT
          </a>
        </li>
      </ul>
      <p className={css.menuCopyright}>© Yacht ape 2024 all rights reserved</p>
    </nav>,
    rootBurger
  );
};

export default BurgerMenu;
