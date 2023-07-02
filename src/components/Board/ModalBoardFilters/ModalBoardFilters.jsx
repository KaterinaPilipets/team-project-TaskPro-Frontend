import { Formik, Form, Field } from 'formik';
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editBoard } from 'services/boardslist-services';
import { bgs } from 'sourse/bgs';
import icon from 'sourse/sprite.svg';

import {
  FiltersTitle,
  BackgroundTitle,
  BackgroundContainer,
  InputField,
  // InputField2,
  BackgroundImg,
  LabelTitle,
  BackgroundImgCont,
  SvgIcon,
  NoImgCont,
  // InputRadio,
  LabelShowAllCont,
  RadioButCont,
  RadioLabel,
  Checkmark,
} from './ModalBoardFilters.styled';

// const showAll = 'showAll';
// const labels = ['withoutPriority', 'low', 'medium', 'hight'];

// #1616164D для светлой темы
const labels = [
  { name: 'Show all', value: 'showAll', color: '' },
  { name: 'Without priority', value: 'withoutPriority', color: '#FFFFFF4D' },
  { name: 'Low', value: 'low', color: '#8FA1D0' },
  { name: 'Medium ', value: 'medium', color: '#E09CB5' },
  { name: 'Hight ', value: 'hight', color: '#BEDBB0' },
];

export const ModalBoardFilters = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );
  // console.log(board);

  // const [labelColor, setlabel] = useState('');
  // const [background, setbackground] = useState('');

  // const value = { background };

  const handleSubmit = async background => {
    const value = { title: board.title, background };
    // console.log(boardId, value);

    await dispatch(editBoard({ id: board._id, value }));
  };

  return (
    <div>
      <FiltersTitle>Filters</FiltersTitle>
      <Formik
        initialValues={
          {
            // title: board.title,
            // background: '',
          }
        }
        // onChange={handleSubmit}
      >
        <Form>
          <div>
            <BackgroundTitle>Background</BackgroundTitle>
            <BackgroundContainer>
              <label>
                <InputField
                  name="background"
                  type="radio"
                  value="empty"
                  onChange={e => handleSubmit(e.target.value)}
                />
                <NoImgCont>
                  <SvgIcon width="16" height="16">
                    <use xlinkHref={`${icon}#icon-bgplaceholder`}></use>
                  </SvgIcon>
                </NoImgCont>
              </label>
              {bgs.slice(1).map(({ id, bgname, URL }) => (
                <label key={id}>
                  <InputField
                    name="background"
                    type="radio"
                    value={id}
                    onChange={e => handleSubmit(e.target.value)}
                  />
                  <BackgroundImgCont>
                    <BackgroundImg alt={bgname} src={URL.icon} />
                  </BackgroundImgCont>
                </label>
              ))}
            </BackgroundContainer>
          </div>
          <div>
            <LabelShowAllCont>
              <LabelTitle>Label color</LabelTitle>
              <label htmlFor="">
                <Field
                  name="labelColor"
                  type="radio"
                  value={labels[0].value}
                  // onChange={e =>
                  //   handleSubmit(board._id, board.title, e.target.value)
                  // }
                />
              </label>
            </LabelShowAllCont>
            <RadioButCont>
              {labels.slice(1).map(({ name, value, color }) => (
                <div style={{ display: 'flex' }} key={value}>
                  <RadioLabel buttoncolor={color} className="inputlabel">
                    <Field
                      buttoncolor={color}
                      name="labelColor"
                      type="radio"
                      value={value}
                      // onChange={e => setlabel(e.target.value)}
                    />
                    <Checkmark buttoncolor={color}></Checkmark>
                  </RadioLabel>
                  <p style={{ fontSize: 'var(--fontSize12)' }}>{name}</p>
                </div>
              ))}
            </RadioButCont>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
