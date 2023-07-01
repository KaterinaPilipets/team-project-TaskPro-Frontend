import { Formik } from 'formik';
import { bgs } from 'sourse/bgs';
import icon from 'sourse/sprite.svg';

import {
  FiltersTitle,
  BackgroundTitle,
  BackgroundContainer,
  InputField,
  BackgroundImg,
  LabelTitle,
  BackgroundImgCont,
  SvgIcon,
  NoImgCont,
  InputRadio,
  LabelShowAllCont,
  RadioButCont,
  RadioLabel,
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
        <form action="">
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
                <InputRadio
                  name="labelColor"
                  type="radio"
                  value={labels[0].value}
                />
              </label>
            </LabelShowAllCont>
            <RadioButCont>
              {labels.slice(1).map(({ name, value, color }) => (
                <RadioLabel>
                  <InputRadio
                    name="labelColor"
                    type="radio"
                    value={value}
                    style={{ backgroundColor: color }}
                  />
                  {name}
                </RadioLabel>
              ))}
            </RadioButCont>
          </div>
        </form>
      </Formik>
    </div>
  );
};
