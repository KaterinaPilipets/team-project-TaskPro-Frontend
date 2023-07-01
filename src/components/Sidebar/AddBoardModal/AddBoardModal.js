import * as React from 'react';
import { Modal } from 'components/Modal';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { createBoard } from 'services/boardslist-services';

import {
  TitleHelp,
  StyledForm,
  FormField,
  StyledField,
  ErrorText,
  Row,
  BackgroundIcon,
  RadioField,
  RadioLabel,
  IconContainer,
  Svg,
  BoardText,
  SubmitButton,
} from './AddBoardModal.styled';
// import backgrounds from 'sourse/bgs.json';
import { bgs } from 'sourse/bgs';
import icon from 'sourse/sprite.svg';

const BoardSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const BOARD_ICONS = [
  'icon-four-circles',
  'icon-star',
  'icon-yo-yo',
  'icon-puzzle-piece',
  'icon-box',
  'icon-lightning-small',
  'icon-three-circles',
  'icon-circle-box',
];

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
          background: 'empty',
          icon: BOARD_ICONS[0],
        }}
        validationSchema={BoardSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <FormField>
              <StyledField name="title" placeholder="Title" />
              <ErrorText name="title" component="div" />
            </FormField>
            <BoardText>Icons</BoardText>
            <Row>
              {BOARD_ICONS.map(id => (
                <label key={id} title={id}>
                  <RadioField name="icon" type="radio" value={id} />
                  <IconContainer className="icon-label">
                    <Svg>
                      <use xlinkHref={`${icon}#${id}`} />
                    </Svg>
                  </IconContainer>
                </label>
              ))}
            </Row>

            <BoardText>Background</BoardText>
            <Row>
              <label>
                <RadioField name="background" type="radio" value="empty" />
                <RadioLabel className="background-label">
                  <BackgroundIcon alt={'no background'} src={''} />
                </RadioLabel>
              </label>

              {bgs.map(({ id, alt, URL }) => (
                <label key={id}>
                  <RadioField name="background" type="radio" value={id} />
                  <RadioLabel className="background-label">
                    <BackgroundIcon alt={alt} src={URL.icon} />
                  </RadioLabel>
                </label>
              ))}
            </Row>

            <SubmitButton disabled={isSubmitting}>Create</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default AddBoardModal;
