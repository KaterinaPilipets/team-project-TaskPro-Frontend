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
  Row,
  BackgroundIcon,
  RadioField,
  RadioLabel,
} from './AddBoardModal.styled';
import backgrounds from 'sourse/bgs.json';

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
          background: null,
        }}
        validationSchema={BoardSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField name="title" placeholder="Title" />
            <ErrorText name="title" component="div" />

            <p>Background</p>
            <Row>
              <label>
                <RadioField name="background" type="radio" value={null} />
                <RadioLabel className="radio-label">
                  <BackgroundIcon alt={'no background'} src={''} />
                </RadioLabel>
              </label>

              {backgrounds.map(({ id, bgname, URL }) => (
                <label key={id}>
                  <RadioField name="background" type="radio" value={id} />
                  <RadioLabel className="radio-label">
                    <BackgroundIcon alt={bgname} src={URL.icon} />
                  </RadioLabel>
                </label>
              ))}
            </Row>
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
