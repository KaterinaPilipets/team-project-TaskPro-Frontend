import * as React from 'react';
import { Modal } from 'components/Modal';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { createBoard } from 'services/boardslist-services';

import {
  TitleHelp,
  StyledForm,
  StyledField,
  ButtonHelp,
  ErrorText,
} from './AddBoardModal.styled';

const BoardSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const AddBoardModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (value, { setSubmitting }) => {
    setSubmitting(true);

    await dispatch(createBoard(value));

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TitleHelp>New board</TitleHelp>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={BoardSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField name="title" placeholder="Title" />
            <ErrorText name="title" component="div" />

            <ButtonHelp type="submit" disabled={isSubmitting}>
              Create
            </ButtonHelp>
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default AddBoardModal;
