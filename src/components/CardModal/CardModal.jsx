import { useState } from 'react';
import React from 'react';
import { Modal } from 'components/Modal';
import {
  TitleCard,
  StyledForm,
  StyledField,
  LabelTitle,
  Labels,
  LabelRadiobutton,
  // DedlineDataField,
  DedlineTitle,
  ButtonCard,
  Textarea,
  ErrorText,
  ErrorMessageText,
} from './CardModal.styled';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import TaskCalendar from 'components/Board/TaskCalendar/TaskCalendar';
// import { useDispatch } from 'react-redux';
import { addCard } from 'services/board-servises';

const CommentSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('Description is required'),
});

const CardModal = ({ isOpen, onClose, operationName, id }) => {
  const dispatch = useDispatch();
  const [errorMessage] = useState(null);
  const [date, setDate] = useState(new Date());

  if (!isOpen) {
    return null;
  }

  const onDateChange = selectDate => {
    console.log(selectDate);
    setDate(selectDate);
  };

  const handleSubmit = async (value, { setSubmitting }) => {
    value.deadline = date;
    setSubmitting(true);
    // console.log(value);
    dispatch(addCard({ id, value }));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TitleCard>{operationName} card</TitleCard>
      <Formik
        initialValues={{
          title: '',
          description: '',
          // deadline: '',
        }}
        validationSchema={CommentSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField name="title" type="text" placeholder="Title" />
            <ErrorText name="title" component="div" />

            <Textarea
              name="description"
              as="textarea"
              placeholder="Description"
            />
            <ErrorText name="description" component="div" />

            <LabelTitle>Label color</LabelTitle>
            <Labels>
              <LabelRadiobutton
                type="radio"
                name="label"
                value="Without priority"
              />
              <LabelRadiobutton type="radio" name="label" value="Low" />
              <LabelRadiobutton type="radio" name="label" value="Medium" />
              <LabelRadiobutton type="radio" name="label" value="High" />
            </Labels>

            <DedlineTitle>Deadline</DedlineTitle>
            <TaskCalendar dateChange={onDateChange} initialDate={date} />
            <ButtonCard type="submit" disabled={isSubmitting}>
              {operationName}
            </ButtonCard>
            {errorMessage && (
              <ErrorMessageText>{errorMessage}</ErrorMessageText>
            )}
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default CardModal;
