// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from '@mui/material';
import css from './LoginForm.module.css';
import { logIn } from '../../services/auth-services';
import { useNavigate } from 'react-router-dom'
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import eyeOpen from '../../images/eye-open.svg'

function LoginPage() {
  const navigate = useNavigate()
  const [showPassword ] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  const handleSubmit = (event) => {

    event.preventDefault()
    const newUser = {
      // name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      avatar: 'https://res.cloudinary.com/dsqxw0541/image/upload/v1687407713/TaskProImages/iconimages/iconblock_taqjlq.png',
    }

    logIn(newUser)
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
          <input
              type="email"
              placeholder="Email"
          />
          <div className={css.passwordinput}>
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" />
            {/* <span className={`${css.togglepassword} ${css.toggleIcon}`} onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} width='18px' color='#737373'/>
                ) : (
                  <img src={eyeOpen} alt="Eye" />
                )}
            </span> */}
          </div>
        </div>
        <button className={css.registerbtn}>Log In Now</button>
      </div>
    </form>
  );
}

export default LoginPage;
