import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { patchColumn } from 'services/board-servises';
// import { Modal } from 'components/Modal';

import {
  StyledTitle,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledFormField,
} from '../AddColumnModal/AddColumnModal.styled';
import { useState } from 'react';
import { ErrorMessageText } from './EditColumnModal.styled';
// import { useToggleModal } from 'hooks';
// import { useParams } from 'react-router';

// const initialValues = {
//   title: '',
// };

const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const EditColumnModal = ({ columnId, onClose }) => {
  const dispatch = useDispatch();

  const column = useSelector(state =>
    state.board.columns.find(item => item._id === columnId)
  );
  const [errorMessage, setErrorMessage] = useState(null);

  if (!column) {
    return null;
  }

  const handleSubmit = async ({ title }, { setSubmitting }) => {
    setSubmitting(true);

    const response = await dispatch(patchColumn({ title, columnId }));

    if (response.error) {
      setErrorMessage(response.payload);
    } else {
      onClose();
    }
  };

  return (
    <>
      <StyledTitle>Edit column</StyledTitle>
      <Formik
        initialValues={{ title: column.title }}
        validationSchema={columnSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledFormField
              autoFocus
              type="text"
              name="title"
              placeholder="Title"
            />
            <StyledErrorMessage name="title" component="div" />
            <StyledButton type="submit" disabled={isSubmitting}>
              Edit
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
