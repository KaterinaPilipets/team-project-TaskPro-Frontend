// import { Board } from 'components/Board/Board/Board';
import { DefaultDashboard } from 'components/Board/DefaultDashboard/DefaultDashboard';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  const boards = useSelector(state => state.boardsList.items);

  let isShow = true;
  if (boards.length === 0) {
    isShow = false;
  }
  console.log(isShow);
  return (
    <div>
      {isShow && <DefaultDashboard />}
      <Outlet />
    </div>
  );
};
export default HomePage;
