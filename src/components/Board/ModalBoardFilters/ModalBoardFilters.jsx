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
import { setFilter } from 'redux/board/filterSlice';

export const ModalBoardFilters = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );

  const handleSubmit = async e => {
    const value = { title: board.title, background: e.target.value };
    await dispatch(editBoard({ id: board._id, value }));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
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
                onChange={handleSubmit}
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
                  onChange={handleSubmit}
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
                onChange={changeFilter}
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
                  onChange={changeFilter}
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
                  onChange={changeFilter}
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
                  onChange={changeFilter}
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
                  onChange={changeFilter}
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
