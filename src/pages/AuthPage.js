import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <div>
      {id === 'login' && <p>login</p>}
      {id === 'register' && <p>register</p>}
    </div>
  );
};
export default AuthPage;
