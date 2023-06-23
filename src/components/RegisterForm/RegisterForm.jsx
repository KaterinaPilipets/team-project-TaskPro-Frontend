// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from '@mui/material';
import css from './RegisterForm.module.css';
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import eyeOpen from '../../images/eye-open.svg'

function RegistrationPage() {
  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // }

  return (
    <div className={css.content}>
      <div className={css.menu}>
        <Link className={css.style} href="register" underline="none">
          Registration
        </Link>
        <Link className={css.style} href="login" underline="none">
          Login
        </Link>
      </div>
      <div className={css.inputs}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <div className={css.passwordinput}>
          <input
            // type={showPassword ? 'text' : 'password'}
            placeholder="Password"
          />
          {/* <span className={`${css.togglepassword} ${css.toggleIcon}`} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} width='18px' color='#737373'/>
              ) : (
                <img src={eyeOpen} alt="Eye" color="#737373"/>
              )}
          </span> */}
        </div>
      </div>
      <button className={css.registerbtn}>Register Now</button>
    </div>
  );
}

export default RegistrationPage;
