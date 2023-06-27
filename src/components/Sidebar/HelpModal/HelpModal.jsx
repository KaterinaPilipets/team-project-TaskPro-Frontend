import React from 'react';
import { Modal } from 'components/Modal';
import {
  TitleHelp,
  StyledForm,
  StyledField,
  ButtonHelp,
  Textarea,
  ErrorText,
} from './HelpModal.styled';

import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string().required('Comment is required'),
});

const HelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (value, { setSubmitting }) => {
    // Отправка запроса на бэкенд
    // Закрытие модального окна
    setSubmitting(true);

    await new Promise(res => {
      setTimeout(res, 2000);
    }); // TODO add request

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TitleHelp>Need help</TitleHelp>
      <Formik
        initialValues={{
          email: '',
          comment: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField
              name="email"
              type="email"
              placeholder="Email address"
            />
            <ErrorText name="email" component="div" />

            <Textarea name="comment" as="textarea" placeholder="Comment" />
            <ErrorText name="comment" component="div" />

            <ButtonHelp type="submit" disabled={isSubmitting}>
              Send
            </ButtonHelp>
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default HelpModal;
