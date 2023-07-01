import { Container, Button, Icon } from './Logout.styled';
import { logout } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
// import { clearToken } from '../../../redux/auth/authSlice';
// import { logout } from '../../../services/auth-services';
import { useNavigate } from 'react-router-dom';
import icon from 'sourse/sprite.svg';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // // const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/welcome');
  };

  return (
    <Container>
      <Button onClick={handleLogout}>
        <Icon>
          <use xlinkHref={`${icon}#icon-login-big`} />
        </Icon>
        Log out
      </Button>
    </Container>
  );
};

export default Logout;
