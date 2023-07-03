import { useDispatch } from 'react-redux';
import { openAddBoardModal } from 'redux/sidebar/sidebarSlice';

export const DefaultDashboard = () => {
  const dispatch = useDispatch();

  const open = () => {
    dispatch(openAddBoardModal());
  };

  return (
    <div
      style={{
        margin: '281px auto 349px auto',
        width: 486,
        height: 72,
        textAlign: 'center',
        fontSize: '14px',
      }}
    >
      <>
        <p>
          Before starting your project, it is essential{' '}
          <a href="#1" onClick={open} style={{ color: '#BEDBB0' }}>
            to create a board
          </a>{' '}
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
      </>
    </div>
  );
};
