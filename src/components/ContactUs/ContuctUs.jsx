import css from './ContactUs.module.css';
import crossDivider from '../../images/svg/add-sharp.svg';
import ContactForm from './Form/Form';

const ContactUs = () => {
  return (
    <section name="mint" className={css.contactUs}>
      <h1 className={css.contactUsTitle}>Are you in?</h1>
      <img className={css.contactUsDivider} src={crossDivider} alt="" />
      <p className={css.contactUsDescription}>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </p>
      <ContactForm />
    </section>
  );
};

export default ContactUs;
