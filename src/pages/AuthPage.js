import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


// import RegisterForm from '../components/RegisterForm/RegisterForm'
// import LoginForm from '../components/LoginForm/LoginForm'

const AuthPage = () => {
  const { id } = useParams();
  return (
    <div>
      {id === 'login' && <p>LOGIN</p>}
      {id === 'register' && <p>REGISTER</p> }
    </div>
  );
};
export default AuthPage;
