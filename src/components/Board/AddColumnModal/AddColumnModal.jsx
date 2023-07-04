import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { addColumn } from 'services/board-servises';

import {
  StyledTitle,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledFormField,
  ErrorMessageText,
} from './AddColumnModal.styled';
import { useParams } from 'react-router';
import { useState } from 'react';
import { toast } from 'react-toastify';

const initialValues = {
  title: '',
};

const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const AddColumnModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async ({ title }, { setSubmitting }) => {
    setSubmitting(true);

    const response = await dispatch(addColumn({ title, boardId }));
    if (response.error) {
      setErrorMessage(response.payload);
    } else {
      toast.success('Column created');
      onClose();
    }
  };

  return (
    <>
      <StyledTitle>Add column</StyledTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={columnSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledFormField type="text" name="title" placeholder="Title" />
            <StyledErrorMessage name="title" component="div" />
            <StyledButton type="submit" disabled={isSubmitting}>
              Add
            </StyledButton>
            {errorMessage && (
              <ErrorMessageText>{errorMessage}</ErrorMessageText>
            )}
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
