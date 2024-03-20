import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, number, date, InferType } from "yup";
import React from "react";
import css from "./Form.module.css";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const initialValues = {
    discord: "",
    metamask: "",
  };

  let userSchema = object({
    discord: string().required(),
    metamask: number().required().positive().integer(),
  });

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form autoComplete="off" className={css.contactForm}>
          <Field
            placeholder="@username"
            className={css.contactField}
            type="text"
            name="discord"
          ></Field>
          <Field
            placeholder="Wallet address"
            className={css.contactField}
            type="text"
            name="metamask"
          ></Field>
          <button className={css.contactSubmit} type="submit">
            Mint
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
