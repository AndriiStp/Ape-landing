import css from './SwiperController.module.css';

const SwiperController = () => {
  return (
    <div className={css.sliderNavigation}>
      <div className="prev">
        <span className={css.sliderPrev}>Prev</span>
      </div>
      <div className="next">
        <span className={css.sliderNext}>Next</span>
      </div>
    </div>
  );
};

export default SwiperController;
