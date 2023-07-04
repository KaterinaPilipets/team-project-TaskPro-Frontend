import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sprite from '../../sourse/sprite.svg';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { register } from 'redux/auth/authOperations';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux'; // useSelector
import * as Yup from 'yup';
import {
  ErrorText,
  PasswordToggle,
  Menu,
  Inputs,
  Container,
  PasswordInput,
  PasswordIcon,
  Content,
  Svg,
  RegisterBtn,
  StyledRegistrationLink,
  StyledLink,
} from './RegisterForm.styled';
// import { getError } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .min(6, 'Email must be at least 6 characters')
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function RegistrationPage() {
  const navigate = useNavigate();
  // const errorMessage = useSelector(getError);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    const response = await dispatch(register(newUser));

    if (response.error) {
      toast(response.payload);
    } else {
      navigate('/home');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
        >
          <Content>
            <Menu>
              <StyledRegistrationLink href="register" underline="none">
                Registration
              </StyledRegistrationLink>
              <StyledLink href="login" underline="none">
                Log In
              </StyledLink>
            </Menu>
            <Inputs>
              <Field name="name" type="text" placeholder="Name" />
              <ErrorText name="name" component="div" />
              <Field name="email" type="email" placeholder="Email" />
              <ErrorText name="email" component="div" />
              <PasswordInput>
                <Field
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <ErrorText name="password" component="div" />
                <PasswordToggle
                  className={`${PasswordToggle} ${PasswordIcon}`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <PasswordIcon icon={faEyeSlash} width="18px" />
                  ) : (
                    <Svg>
                      <use stroke="gray" xlinkHref={`${sprite}#icon-eye`} />
                    </Svg>
                  )}
                </PasswordToggle>
              </PasswordInput>
            </Inputs>
            <RegisterBtn type="submit">Register Now</RegisterBtn>
          </Content>
        </Formik>
      </form>
    </Container>
  );
}

export default RegistrationPage;
