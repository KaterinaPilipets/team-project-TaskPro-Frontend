import * as React from 'react';
import { Container, Button, Icon } from './Logout.styled';
import { useDispatch } from 'react-redux';
import { clearToken } from '../../../redux/auth/authSlice';
import { logOut } from '../../../services/auth-services';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const history = useHistory();

  const handleLogout = () => {
    dispatch(clearToken());
    logOut();
    navigate('/welcome');
  };


  return (
    <Container>
      <Button onClick={handleLogout}>
        <Icon />
        Log out
      </Button>
    </Container>
  );
};

export default Logout;
