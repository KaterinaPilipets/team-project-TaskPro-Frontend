import { useState } from 'react';
import React from 'react';
import { Modal } from 'components/Modal';
import {
  TitleCard,
  StyledForm,
  StyledField,
  LabelTitle,
  Labels,
  RadioLabel,
  LabelRadiobutton,
  Checkmark,
  DedlineTitle,
  ButtonCard,
  Textarea,
  ErrorText,
  ErrorMessageText,
} from './EditCard.styled';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import TaskCalendar from 'components/Board/TaskCalendar/TaskCalendar';
import { cards } from 'redux/board/boardSelector';

import { formatISO } from 'date-fns';
import { editCard } from 'services/board-servises';

const labels = [
  { value: 'without', color: '#FFFFFF4D' },
  { value: 'low', color: '#8FA1D0' },
  { value: 'medium', color: '#E09CB5' },
  { value: 'high', color: '#BEDBB0' },
];

const CommentSchema = Yup.object().shape({
  title: Yup.string().required('title is required'),
  description: Yup.string().required('Description is required'),
});

const EditCard = ({ isOpen, onClose, operationName, id }) => {
  const dispatch = useDispatch();
  const cardsArray = useSelector(cards);

  const cardState = cardsArray.find(({ _id }) => _id === id);

  const [errorMessage, setErrorMessage] = useState(null);
  const [date, setDate] = useState(Date.parse(cardState.deadline));

  if (!isOpen) {
    return null;
  }

  const onDateChange = selectDate => {
    setDate(selectDate);
  };

  const handleSubmit = async (value, { setSubmitting }) => {
    const isoDate = formatISO(date);

    value.deadline = isoDate;

    setSubmitting(true);
    try {
      dispatch(editCard({ id, value }));
      onClose();
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TitleCard>{operationName} card</TitleCard>
      <Formik
        initialValues={{
          title: cardState.title,
          description: cardState.description,
          label: cardState.label,
        }}
        validationSchema={CommentSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <StyledField
              autoFocus
              name="title"
              type="text"
              placeholder="Title"
            />
            <ErrorText name="title" component="div" />

            <Textarea
              name="description"
              as="textarea"
              placeholder="Description"
            />
            <ErrorText name="description" component="div" />

            <LabelTitle>Label color</LabelTitle>
            <Labels>
              {labels.slice().map(({ name, value, color }) => (
                <div style={{ display: 'flex' }} key={value}>
                  <RadioLabel buttoncolor={color} className="inputlabel">
                    <LabelRadiobutton
                      buttoncolor={color}
                      name="label"
                      type="radio"
                      value={value}
                    />
                    <Checkmark buttoncolor={color}></Checkmark>
                  </RadioLabel>
                  <p style={{ fontSize: 'var(--fontSize12)' }}>{name}</p>
                </div>
              ))}
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

export { EditCard };
