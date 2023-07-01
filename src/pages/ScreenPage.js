import { Board } from 'components/Board/Board/Board';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBoard } from 'services/board-servises';

export const ScreenPage = () => {
  const { boardId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(boardId);
    if (boardId) {
      dispatch(fetchBoard(boardId));
    }
  }, [dispatch, boardId]);
  return (
    <>
      <Board />
    </>
  );
};
