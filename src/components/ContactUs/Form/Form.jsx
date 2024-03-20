import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Notiflix from "notiflix";
import css from "./Form.module.css";

import svgDiscord from "../../../images/svg/discord.svg";
import svgMetamask from "../../../images/svg/SVG_MetaMask_Icon_Color 1.svg";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    Notiflix.Notify.success("You are already MINT'ed");
    resetForm();
  };

  const initialValues = {
    discord: "",
    metamask: "",
  };

  let userSchema = yup.object({
    discord: yup
      .string()
      .min(6, "Too short")
      .max(16, "Too Long")
      .required("Wrong discord"),
    metamask: yup
      .string()
      .min(6, "Too short")
      .max(16, "Too Long")
      .required("Wrong ADDRESS"),
  });

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        initialValues={initialValues}
      >
        <Form autoComplete="off" className={css.contactForm}>
          <div className={css.inputWapper}>
            <div className={css.inputBefore}>
              <img
                src={svgDiscord}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <Field
              placeholder="@username"
              className={css.contactField}
              type="text"
              name="discord"
            ></Field>
          </div>
          <ErrorMessage
            className={css.contactError}
            name="discord"
            component="div"
          />
          <div className={css.inputWapper}>
            <div className={css.inputBefore}>
              <img
                style={{ width: "24px", height: "24px" }}
                src={svgMetamask}
                alt=""
              />
            </div>
            <Field
              placeholder="Wallet address"
              className={css.contactField}
              type="text"
              name="metamask"
            ></Field>
          </div>
          <ErrorMessage
            className={css.contactError}
            name="metamask"
            component="div"
          />

          <button className={css.contactSubmit} type="submit">
            Mint
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
