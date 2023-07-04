// import { Board } from 'components/Board/Board/Board';
import { DefaultDashboard } from 'components/Board/DefaultDashboard/DefaultDashboard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getTheme } from 'redux/auth/authSelectors';

const HomePage = () => {
  // const boards = useSelector(state => state.boardsList.items);
  // const activeBoard = useSelector(getActiveBoard);
  const theme = useSelector(getTheme);

  // let isShow = false;
  // if (boards.length === 0) {
  //   isShow = true;
  // }

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  }, [theme]);

  return (
    <div>
      {/* {isShow && <DefaultDashboard />}  эта траница показывается пока не выбрана/создана доска*/}
      <DefaultDashboard />
      <Outlet />
    </div>
  );
};
export default HomePage;
