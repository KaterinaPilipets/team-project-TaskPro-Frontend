import { useParams } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LoginForm from '../components/LoginForm/LoginForm'
import { ToastContainer } from 'react-toastify';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <div>
      {id === 'login' && <LoginForm />}
      {id === 'register' && <RegisterForm /> }
      <ToastContainer />
    </div>
  );
};
export default AuthPage;