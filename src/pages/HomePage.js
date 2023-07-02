// import { Board } from 'components/Board/Board/Board';
import { DefaultDashboard } from 'components/Board/DefaultDashboard/DefaultDashboard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getTheme } from 'redux/auth/authSelectors';

const HomePage = () => {
  const boards = useSelector(state => state.boardsList.items);
  const theme = useSelector(getTheme);

  let isShow = true;
  if (boards.length === 0) {
    isShow = false;
  }
  console.log(isShow);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    } else {
      document.body.setAttribute('data-theme', 'dark');
    }
  }, [theme]);

  return (
    <div>
      {isShow && <DefaultDashboard />}
      <Outlet />
    </div>
  );
};
export default HomePage;
