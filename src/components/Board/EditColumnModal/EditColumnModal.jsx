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
  // const { close } = useToggleModal();
  const column = useSelector(state =>
    state.board.columns.find(item => item._id === columnId)
  );
  if (!column) {
    return null;
  }
  console.log(columnId);
  const handleSubmit = ({ title }, { setSubmitting }) => {
    setSubmitting(true);
    console.log(columnId);
    dispatch(patchColumn({ title, columnId }));
    onClose();
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
            <StyledFormField type="text" name="title" placeholder="Title" />
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
