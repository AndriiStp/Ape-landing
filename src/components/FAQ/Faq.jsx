import React from 'react';
import useToggle from '../hooks/useToggle';
import css from './Faq.module.css';

const Faq = () => {
  const [open1, setOpen1] = useToggle(true);
  const [open2, setOpen2] = useToggle(false);
  const [open3, setOpen3] = useToggle(false);
  const [open4, setOpen4] = useToggle(false);

  return (
    <section className={css.faqSection}>
      <h1 className={css.faqTitle}>FAQ</h1>
      <ul className={css.faqList}>
        <li
          className={`${css.faqItem} ${open1 ? css.open : ''} ${css.cardPos}`}
          onClick={setOpen1}
        >
          <p className={css.cardMarker}>[1]</p>
          <div>
            <h2 className={css.cardTitle}>WHAT IS AN NFT COLLECTION?</h2>
            {open1 && (
              <p className={css.cardContent}>
                An NFT collection is a group of unique digital assets, each
                represented by a non-fungible token, typically created around a
                specific theme or style.
              </p>
            )}
          </div>
        </li>
        <li
          className={`${css.faqItem} ${open2 ? css.open : ''} ${css.cardPos}`}
          onClick={setOpen2}
        >
          <p className={css.cardMarker}>[2]</p>
          <div>
            <h2 className={css.cardTitle}>
              HOW DO I PURCHASE NFTS FROM A COLLECTION?
            </h2>
            {open2 && (
              <p className={css.cardContent}>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it.
              </p>
            )}
          </div>
        </li>
        <li
          className={`${css.faqItem} ${open3 ? css.open : ''} ${css.cardPos}`}
          onClick={setOpen3}
        >
          <p className={css.cardMarker}>[3]</p>
          <div>
            <h2 className={css.cardTitle}>
              CAN I SELL OR TRADE NFTS FROM A COLLECTION?
            </h2>
            {open3 && (
              <p className={css.cardContent}>
                Yes, you can sell or trade NFTs from a collection like you would
                other digital assets.
              </p>
            )}
          </div>
        </li>
        <li
          className={`${css.faqItem} ${open4 ? css.open : ''} ${css.cardPos}`}
          onClick={setOpen4}
        >
          <p className={css.cardMarker}>[4]</p>
          <div>
            <h2 className={css.cardTitle}>
              WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?
            </h2>
            {open4 && (
              <p className={css.cardContent}>
                As an NFT owner, you can own, transfer, potentially access
                exclusive content, resell, but don't automatically get copyright
                or intellectual property rights.
              </p>
            )}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Faq;
