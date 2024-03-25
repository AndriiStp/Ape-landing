import CollectionSlider from './CollectionSlider/CollectionSlider';
import css from './Arts.module.css';
const Arts = () => {
  return (
    <section id="#arts" className={css.artsSection}>
      <h1 className={css.artsTitle}>COLLECTION</h1>
      <CollectionSlider />
    </section>
  );
};

export default Arts;
