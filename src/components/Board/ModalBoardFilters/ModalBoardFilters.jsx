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
  RadioLabelShowAll,
  Line,
} from './ModalBoardFilters.styled';

// #1616164D для светлой темы
const labels = [
  { name: 'Show all', value: '', color: '' },
  { name: 'Without priority', value: 'without', color: '#FFFFFF4D' },
  { name: 'Low', value: 'low', color: '#8FA1D0' },
  { name: 'Medium ', value: 'medium', color: '#E09CB5' },
  { name: 'Hight ', value: 'high', color: '#BEDBB0' },
];

export const ModalBoardFilters = ({ handleFilterChange }) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );

  const handleSubmit = async background => {
    const value = { title: board.title, background };
    await dispatch(editBoard({ id: board._id, value }));
  };

  return (
    <div>
      <FiltersTitle>Filters</FiltersTitle>
      <Line></Line>
      <form>
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
          <Line></Line>
        </div>
        <div>
          <LabelShowAllCont>
            <LabelTitle>Label color</LabelTitle>
            <RadioLabelShowAll>
              <input
                name="labelColor"
                type="radio"
                value={labels[0].value}
                onChange={e => handleFilterChange(e.target.value)}
              />
              Show all
            </RadioLabelShowAll>
          </LabelShowAllCont>
          <RadioButCont>
            {labels.slice(1).map(({ name, value, color }) => (
              <div style={{ display: 'flex' }} key={value}>
                <RadioLabel buttoncolor={color} className="inputlabel">
                  <input
                    buttoncolor={color}
                    name="labelColor"
                    type="radio"
                    value={value}
                    onChange={e => handleFilterChange(e.target.value)}
                  />
                  <Checkmark buttoncolor={color}></Checkmark>
                </RadioLabel>
                <p style={{ fontSize: 'var(--fontSize12)' }}>{name}</p>
              </div>
            ))}
          </RadioButCont>
        </div>
      </form>
    </div>
  );
};
