import React, { useState } from 'react';
import { Link } from '@mui/material';
import css from './RegisterForm.module.css';
import { singUp } from '../../services/auth-services';
import { useNavigate } from 'react-router-dom'
import sprite from '../../sourse/sprite.svg';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RegistrationPage() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword ] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    }

    singUp(newUser)
      .then(() => {console.log('Все відправлено на Бекенд')
      navigate('/home')})
      .catch((error) => console.log(error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.content}>
        <div className={css.menu}>
          <Link href="register" underline="none">Registration</Link>
          <Link href="login" underline="none">Login</Link>
        </div>
        <div className={css.inputs}>
          <input name='name' type="text" placeholder="Name" />
          <input name='email' type="email" placeholder="Email" />
          <div className={css.passwordInput}>
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
        <button className={css.registerbtn} >Register Now</button>
      </div>
    </form>
  );
}

export default RegistrationPage;
