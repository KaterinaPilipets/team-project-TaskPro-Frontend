import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal';
import { addColumn } from 'services/board-servises';

import {
  StyledTitle,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledFormField,
} from './AddColumnModal.styled';
import { useParams } from 'react-router';

const initialValues = {
  title: '',
};

const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const AddColumnModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (value, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(addColumn(value, boardId));

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};
