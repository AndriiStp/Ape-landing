import CollectionSlider from './CollectionSlider/CollectionSlider';
import css from './Arts.module.css';
const Arts = ({ apes }) => {
  return (
    <section className={css.artsSection}>
      <h1 className={css.artsTitle}>COLLECTION</h1>
      <CollectionSlider apes={apes} />
    </section>
  );
};

export default Arts;
