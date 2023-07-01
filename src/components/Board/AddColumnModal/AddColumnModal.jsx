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
} from './AddColumnModal.styled';
import { useParams } from 'react-router';

const initialValues = {
  title: '',
};

const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const AddColumnModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const handleSubmit = ({ title }, { setSubmitting }) => {
    setSubmitting(true);

    dispatch(addColumn({ title, boardId }));

    onClose();
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
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
