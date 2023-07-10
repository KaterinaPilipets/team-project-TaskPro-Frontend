import { useState } from 'react';
import { Modal } from 'components/Modal';
import {
  TitleHelp,
  StyledForm,
  StyledField,
  ButtonHelp,
  Textarea,
  ErrorText,
  ErrorMessageText,
} from './HelpModal.styled';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { sendEmail } from 'services/help-services';
import { toast } from 'react-toastify';

const CommentSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string()
    .required('Comment is required')
    .min(10, 'Please write more details'),
});

const HelpModal = ({ onClose }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (value, { setSubmitting }) => {
    setSubmitting(true);

    try {
      await sendEmail(value);
      toast.success('Email send');
      onClose();
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Modal onClose={onClose}>
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
          <StyledForm onChange={() => setErrorMessage(null)}>
            <StyledField
              autoFocus
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
            {errorMessage && (
              <ErrorMessageText>{errorMessage}</ErrorMessageText>
            )}
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default HelpModal;
