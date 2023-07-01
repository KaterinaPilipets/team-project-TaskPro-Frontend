import { Formik, Form, Field } from 'formik';
// import { useDispatch } from 'react-redux';
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
  // const dispatch = useDispatch();

  // const handleSubmit = dispatch();

  return (
    <div>
      <FiltersTitle>Filters</FiltersTitle>
      <Formik
        initialValues={{
          labelColor: '',
          background: '',
        }}
        // onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <BackgroundTitle>Background</BackgroundTitle>
            <BackgroundContainer>
              <label>
                <InputField name="background" type="radio" value="" />
                <NoImgCont>
                  <SvgIcon width="16" height="16">
                    <use xlinkHref={`${icon}#icon-bgplaceholder`}></use>
                  </SvgIcon>
                </NoImgCont>
              </label>
              {bgs.map(({ id, bgname, URL }) => (
                <label key={id}>
                  <InputField name="background" type="radio" value={id} />
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
                <input name="labelColor" type="radio" value={labels[0].value} />
              </label>
            </LabelShowAllCont>
            <RadioButCont>
              {labels.slice(1).map(({ name, value, color }) => (
                <div style={{ display: 'flex' }} key={value}>
                  <RadioLabel buttonColor={color} className="inputlabel">
                    <Field
                      buttonColor={color}
                      name="labelColor"
                      type="radio"
                      value={value}
                    />
                    <Checkmark buttonColor={color}></Checkmark>
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
