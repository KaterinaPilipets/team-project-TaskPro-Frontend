import { MainDashboard } from '../MainDashboard/MainDashboard';
import { HeaderDashboard } from '../HeaderDashboard/HeaderDashboard';
import { BoardContainer } from './Board.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchBoard } from 'services/board-servises';
import { useSelector, useDispatch } from 'react-redux';

export const Board = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  useEffect(() => {
    if (!boardId) {
      return;
    }
    dispatch(fetchBoard({ boardId }));
  }, [boardId, dispatch]);

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );

  // console.log(board);

  return (
    <>
      {board ? (
        <BoardContainer>
          <HeaderDashboard boardId={boardId} />
          <MainDashboard />
        </BoardContainer>
      ) : (
        <div></div>
        // create board
      )}
    </>
  );
};
