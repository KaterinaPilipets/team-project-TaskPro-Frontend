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
// import { useToggleModal } from 'hooks';
// import { useParams } from 'react-router';

const initialValues = {
  title: '',
};

const columnSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

export const EditColumnModal = ({ id, onClose }) => {
  const dispatch = useDispatch();

  // const { boardId } = useParams();

  const handleSubmit = ({ title }, { setSubmitting }) => {
    setSubmitting(true);
    // console.log('из модалки', title);
    // console.log('из модалки', id);
    dispatch(patchColumn({ title, id }));

    onClose();
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
