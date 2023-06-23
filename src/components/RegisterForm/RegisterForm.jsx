// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from '@mui/material';
import css from './RegisterForm.module.css';
import { singUp } from '../../services/auth-services';
import { useNavigate } from 'react-router-dom'
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import eyeOpen from '../../images/eye-open.svg'

function RegistrationPage() {
  const navigate = useNavigate()

  // const [showPassword ] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // }

  const handleSubmit = (event) => {

    event.preventDefault()
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      avatar: 'https://res.cloudinary.com/dsqxw0541/image/upload/v1687407713/TaskProImages/iconimages/iconblock_taqjlq.png',
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
          <Link className={css.style} href="register" underline="none">Registration</Link>
          <Link className={css.style} href="login" underline="none">Login</Link>
        </div>
        <div className={css.inputs}>
          <input name='name' type="text" placeholder="Name" />
          <input name='email' type="email" placeholder="Email" />
          <div className={css.passwordinput}>
          <input name='password' type='password' placeholder="Password" />
          {/* type={showPassword ? 'text' : 'password'} */}
          {/* <span className={`${css.togglepassword} ${css.toggleIcon}`} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} width='18px' color='#737373'/>
                ) : (
                  <img src={eyeOpen} alt="Eye" color="#737373"/>
                )}
            </span> */}
          </div>
        </div>
        <button className={css.registerbtn} >Register Now</button>
      </div>
    </form>
  );
}

export default RegistrationPage;
