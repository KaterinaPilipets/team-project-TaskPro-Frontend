import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { patchColumn } from 'services/board-servises';
// import { Modal } from 'components/Modal';

import {
  StyledTitle,
  StyledButton,
  StyledErrorMessage,
  StyledForm,
  StyledFormField,
} from '../AddColumnModal/AddColumnModal.styled';
import { useToggleModal } from 'hooks';
import { useParams } from 'react-router';

const initialValues = {
  title: '',
};

const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const EditColumnModal = () => {
  const { close } = useToggleModal();
  const dispatch = useDispatch();
  console.log(useParams());
  const { boardId } = useParams();

  const handleSubmit = (value, { setSubmitting }) => {
    setSubmitting(true);
    dispatch(patchColumn(value, boardId));

    close();
  };

  return (
    <>
      <StyledTitle>Edit column</StyledTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={columnSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledFormField type="text" name="title" />
            <StyledErrorMessage name="title" component="div" />
            <StyledButton type="submit" disabled={isSubmitting}>
              Edit
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
