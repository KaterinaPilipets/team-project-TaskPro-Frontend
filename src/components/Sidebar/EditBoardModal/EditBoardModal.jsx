import { useState } from 'react';
import { Modal } from 'components/Modal';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { editBoard } from 'services/boardslist-services';

import {
  TitleHelp,
  StyledForm,
  FormField,
  StyledField,
  ErrorText,
  Row,
  BackgroundIcon,
  DefaultBackgroundIconContainer,
  DefaultBackgroundIcon,
  RadioField,
  RadioLabel,
  IconContainer,
  Svg,
  BoardText,
  SubmitButton,
  ErrorMessageText,
} from './EditBoardModal.styled';

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

const EditBoardModal = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === id)
  );

  if (!board) {
    return null;
  }

  const handleSubmit = async (value, { setSubmitting }) => {
    setSubmitting(true);

    const response = await dispatch(editBoard({ id, value }));

    if (response.error) {
      setErrorMessage(response.payload);
    } else {
      toast.success('Board updated');
      onClose();
    }
  };

  return (
    <Modal onClose={onClose}>
      <TitleHelp>Edit board</TitleHelp>
      <Formik
        initialValues={{
          title: board.title,
          background: board.background,
          icon: board.icon,
        }}
        validationSchema={BoardSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <StyledForm onChange={() => setErrorMessage(null)}>
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
                  <DefaultBackgroundIconContainer>
                    <DefaultBackgroundIcon>
                      <use xlinkHref={`${icon}#icon-image`} />
                    </DefaultBackgroundIcon>
                  </DefaultBackgroundIconContainer>
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

            <SubmitButton disabled={isSubmitting}>Edit</SubmitButton>
            {errorMessage && (
              <ErrorMessageText>{errorMessage}</ErrorMessageText>
            )}
          </StyledForm>
        )}
      </Formik>
    </Modal>
  );
};

export default EditBoardModal;
