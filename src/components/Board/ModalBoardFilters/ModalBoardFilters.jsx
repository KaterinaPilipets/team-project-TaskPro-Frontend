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
  BackgroundImg,
  LabelTitle,
  BackgroundImgCont,
  SvgIcon,
  NoImgCont,
  LabelShowAllCont,
  RadioButCont,
  RadioLabel,
  Checkmark,
  RadioLabelShowAll,
  Line,
  LabelCont,
} from './ModalBoardFilters.styled';

export const ModalBoardFilters = ({ handleFilterChange, filter }) => {
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
                value=""
                onChange={e => handleFilterChange(e.target.value)}
                checked={filter === ''}
              />
              Show all
            </RadioLabelShowAll>
          </LabelShowAllCont>
          <RadioButCont>
            <LabelCont>
              <RadioLabel>
                <input
                  name="labelColor"
                  type="radio"
                  value="without"
                  onChange={e => handleFilterChange(e.target.value)}
                  checked={filter === 'without'}
                />
                <Checkmark value="without"></Checkmark>
                Without priority
              </RadioLabel>
            </LabelCont>
            <LabelCont>
              <RadioLabel>
                <input
                  name="labelColor"
                  type="radio"
                  value="low"
                  onChange={e => handleFilterChange(e.target.value)}
                  checked={filter === 'low'}
                />
                <Checkmark value="low"></Checkmark>
                Low
              </RadioLabel>
            </LabelCont>
            <LabelCont>
              <RadioLabel>
                <input
                  name="labelColor"
                  type="radio"
                  value="medium"
                  onChange={e => handleFilterChange(e.target.value)}
                  checked={filter === 'medium'}
                />
                <Checkmark value="medium"></Checkmark>
                Medium
              </RadioLabel>
            </LabelCont>
            <LabelCont>
              <RadioLabel>
                <input
                  name="labelColor"
                  type="radio"
                  value="high"
                  onChange={e => handleFilterChange(e.target.value)}
                  checked={filter === 'high'}
                />
                <Checkmark value="high"></Checkmark>
                Hight
              </RadioLabel>
            </LabelCont>
          </RadioButCont>
        </div>
      </form>
    </div>
  );
};
