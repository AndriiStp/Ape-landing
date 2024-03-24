import css from './Logo.module.css';

import logoHeadermobilex from '../../images/svg/Frame.svg';

const Logo = () => {
  return (
    <div className={css.logo}>
      <a href="../../../public/index.html">
        <img src={logoHeadermobilex} alt="Made by Apes logo" />
      </a>
    </div>
  );
};

export default Logo;
