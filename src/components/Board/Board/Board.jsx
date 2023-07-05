import { MainDashboard } from '../MainDashboard/MainDashboard';
import { HeaderDashboard } from '../HeaderDashboard/HeaderDashboard';
import { BoardContainer } from './Board.styled';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchBoard } from 'services/board-servises';
import { useSelector, useDispatch } from 'react-redux';
import { bgs } from 'sourse/bgs';
import { patchBoard } from 'redux/auth/authOperations';
import { getActiveBoard } from 'redux/auth/authSelectors';

export const Board = () => {
  const dispatch = useDispatch();

  const { boardId } = useParams();
  const activeBoard = useSelector(getActiveBoard);

  useEffect(() => {
    if (activeBoard !== boardId) {
      dispatch(patchBoard({ boardId }));
      dispatch(fetchBoard({ boardId }));
    }
  }, [activeBoard, boardId, dispatch]);

  const board = useSelector(state =>
    state.boardsList.items.find(item => item._id === boardId)
  );

  const bkgImg = () => {
    if (board) {
      const result = bgs.find(bg => board.background === bg.id);
      return result;
    }
    return bgs[0];
  };

  return (
    <>
      {board && (
        <BoardContainer backgroundImg={bkgImg()}>
          <HeaderDashboard boardId={boardId} />
          <MainDashboard />
        </BoardContainer>
      )}
    </>
  );
};
