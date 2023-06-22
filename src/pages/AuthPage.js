import { useParams } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm'
import LoginForm from '../components/LoginForm/LoginForm'

const AuthPage = () => {
  const { id } = useParams();
  return (
    <div>
      {id === 'login' && <LoginForm />}
      {id === 'register' && <RegisterForm /> }
    </div>
  );
};
export default AuthPage;