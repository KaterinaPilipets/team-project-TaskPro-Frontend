import React from 'react';
import css from './WelcomePage.module.css';
import { Button, Link } from '@mui/material';
import { styled } from '@mui/system';
import sprite from '../../sourse/sprite.svg';

const CustomButton = styled(Button)(({ theme }) => ({
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '21px',
  textAlign: 'center',
  letterSpacing: '-0.02em',
  padding: '14px 131px 14px 130px',
  background: '#161616',
  borderRadius: 8,
  color: 'white',
  cursor: 'pointer',
  textTransform: 'none',
  '&:hover': {
    background: '#161616', // Змініть на потрібний колір при наведенні
  },
  [theme.breakpoints.down('sm')]: {
    padding: '14px 126px 14px 126px',
  },
}));

function WelcomePage() {
  return (
    <div className={css.container}>
      <div>
        <div className={css.centeredContainer}>
          <div className={css.logo}/>
        </div>
        <div className={css.logoContainer}>
          <svg className={css.svg}><use xlinkHref={`${sprite}#icon-welcome`} /></svg>
          <p className={css.title}>TASK PRO</p>
        </div>
        <p className={css.text}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
      </div>
      <div className={css.registration}>
        <div>
          {/* <NavLink className={css.registerBtn} to="/auth/register">Registration</NavLink > */}
          {/* <Button href='auth/registration' variant="contained" className={css.customButton}>Registration</Button> */}
          <CustomButton href='auth/register' variant="contained">Registration</CustomButton>
        </div>
        <div>
          {/* <NavLink className={css.loginBtn} to="/auth/login">Log In</NavLink > */}
          {/* <Button href='/auth/login' variant="text" style={{ color: "black", textTransform: 'none' }}>Log In</Button> */}
          <Link className={css.style} href="auth/login" underline="none" color={{ color: '#161616' }}>Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
