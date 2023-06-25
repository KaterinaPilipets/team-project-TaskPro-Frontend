import React, { useState } from 'react';
import { Link } from '@mui/material';
import css from './LoginForm.module.css';
import { logIn } from '../../services/auth-services';
import { useNavigate } from 'react-router-dom';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sprite from '../../sourse/sprite.svg';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../redux/auth/authSlice';

function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword ] = useState(false);
  const dispatch = useDispatch();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   logIn({
  //     email: event.target.elements.email.value,
  //     password: event.target.elements.password.value,
  //   }).then(() => {console.log('Успішно залогінено')
  //   // Ось тут мені потрібно зберегти дані
  //   navigate('/home')})
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn({
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    })
      .then((response) => {
        console.log('Успішно залогінено');
        const { user, token } = response.data;
        dispatch(setUser(user));
        dispatch(setToken(token));
        navigate('/home');
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <div className={css.content}>
          <div className={css.menu}>
            <Link href="register" underline="none">Registration</Link>
            <Link href="login" underline="none">Login</Link>
          </div>
          <div className={css.inputs}>
            <input name='email' type="email" placeholder="Email" />
            <div className={css.passwordinput}>
              <input name='password' type={showPassword ? 'text' : 'password'} placeholder="Password" />
                <span className={`${css.togglePassword} ${css.toggleIcon}`} onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEyeSlash} width='18px' color='#737373' />
                  ) : (
                    <svg className={css.svg}><use xlinkHref={`${sprite}#icon-eye`} /></svg>
                  )}
                </span>
            </div>
          </div>
          <button className={css.registerbtn}>Log In Now</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
