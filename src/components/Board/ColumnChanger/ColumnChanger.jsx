import { useSelector } from 'react-redux';
import { columns } from '../../../redux/board/boardSelector';
import {
    Wrapper,
  ColumnList,
  ColumnItem,
  ColumnTitle,
  ColumnIcon,
  ColumnChangerButton,
  
} from './ColumnChanger.styled';
import icon from '../../../sourse/sprite.svg';

const ColumnChanger = ({onClose}) => {
  const getColumns = useSelector(columns);
  console.log(getColumns);

  return (
    <>
      <Wrapper>
        <ColumnList>
          {getColumns.map(({ _id, title }) => (
            <ColumnItem key={_id} onClick={() => {}}>
              <ColumnChangerButton>
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
