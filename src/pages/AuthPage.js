import { useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LoginForm from '../components/LoginForm/LoginForm'

const AuthPage = () => {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      {id === 'login' && <LoginForm />}
      {id === 'register' && <RegisterForm /> }
      <Suspense>
      <Outlet />
    </Suspense>
    </div>
  );
};
export default AuthPage;