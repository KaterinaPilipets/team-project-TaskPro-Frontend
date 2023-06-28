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
import { useDispatch } from 'react-redux';
import { sendEmail } from 'services/help-services';

const CommentSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Comment is required'),
});

const HelpModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (value, { setSubmitting }) => {
    setSubmitting(true);

    await dispatch(sendEmail(value));

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TitleHelp>Need help</TitleHelp>
      <Formik
        initialValues={{
          email: '',
          message: '',
        }}
        validationSchema={CommentSchema}
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

            <Textarea name="message" as="textarea" placeholder="Comment" />
            <ErrorText name="message" component="div" />

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
