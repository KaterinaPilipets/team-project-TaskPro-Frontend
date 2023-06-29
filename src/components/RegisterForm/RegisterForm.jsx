import React, { useState } from 'react';
// import { singUp } from '../../services/auth-services';
import { useNavigate } from 'react-router-dom'
import sprite from '../../sourse/sprite.svg';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { PasswordToggle, PasswordInputField, Menu, Inputs, Container, PasswordInput, PasswordIcon, Content, Svg, RegisterBtn, StyledRegistrationLink, StyledLink } from "./RegisterForm.styled"

function RegistrationPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [showPassword, setShowPassword ] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const newUser = {
  //     name: event.target.elements.name.value,
  //     email: event.target.elements.email.value,
  //     password: event.target.elements.password.value,
  //   }

  //   singUp(newUser)
  //     .then(() => {console.log('Все відправлено на Бекенд')
  //     navigate('/home')})
  //     .catch((error) => console.log(error))
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    if (newUser) {
      dispatch(register(newUser));
      navigate('/home');
    } else {
      console.log("Error")
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Content>
          <Menu>
            <StyledRegistrationLink href="register" underline="none">Registration</StyledRegistrationLink>
            <StyledLink href="login" underline="none">Log In</StyledLink>
          </Menu>
          <Inputs>
            <input name='name' type="text" placeholder="Name" />
            <input name='email' type="email" placeholder="Email" />
            <PasswordInput>
            <PasswordInputField name='password' type={showPassword ? 'text' : 'password'} placeholder="Password" />
              <PasswordToggle className={`${PasswordToggle} ${PasswordIcon}`} onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <PasswordIcon icon={faEyeSlash} width='18px' />
                ) : (
                  <Svg><use xlinkHref={`${sprite}#icon-eye`} /></Svg>
                )}
              </PasswordToggle>
            </PasswordInput>
          </Inputs>
          <RegisterBtn>Register Now</RegisterBtn>
        </Content>
      </form>
    </Container>
  );
}

export default RegistrationPage;
