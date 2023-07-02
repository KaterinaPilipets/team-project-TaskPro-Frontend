import { useDispatch, useSelector } from 'react-redux';
import { columns, cards } from '../../../redux/board/boardSelector';
import {
  Wrapper,
  ColumnList,
  ColumnItem,
  ColumnTitle,
  ColumnIcon,
  ColumnChangerButton,
} from './ColumnChanger.styled';
import icon from '../../../sourse/sprite.svg';
import { editCard } from 'services/board-servises';

const ColumnChanger = ({ onClose, id }) => {
  const getColumns = useSelector(columns);
  const getCards = useSelector(cards);
  const columnId = getCards.find(cards => cards._id.includes(id)).cardOwner;
  const dispatch = useDispatch();

  const moveCard = columnId => {
    const value = { cardOwner: columnId };

    dispatch(editCard({ id }, value));
  };
  return (
    <>
      <Wrapper>
        <ColumnList>
          {getColumns
            .filter(column => column._id !== columnId)
            .map(({ _id, title }) => (
              <ColumnItem key={_id}>
                <ColumnChangerButton onClick={() => moveCard(_id)}>
                  <ColumnTitle>{title}</ColumnTitle>
                  <ColumnIcon width="16" height="16">
                    <use xlinkHref={`${icon}#${'icon-move'}`} />
                  </ColumnIcon>
                </ColumnChangerButton>
              </ColumnItem>
            ))}
        </ColumnList>
      </Wrapper>
    </>
  );
};

export default ColumnChanger;
