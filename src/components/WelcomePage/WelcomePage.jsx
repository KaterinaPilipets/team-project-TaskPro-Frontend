import React from 'react';
// import { NavLink } from 'react-router-dom';
import css from './WelcomePage.module.css';
// import logo from '../../images/logo.png';
// import icon from '../../images/icon.svg';
import { Button, Link } from '@mui/material';
import { styled } from '@mui/system';

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
    <div className={css.content}>
      <div className={css.logo}>
        {/* <img className={css.size} src={logo} /> */}
        <div className={css.logocontainer}>
          {/* <img className={css.photo} src={icon} /> */}
          <p className={css.name}>TASK PRO</p>
        </div>
        <p className={css.text}>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
      </div>
      <div className={css.registration}>
        <div>
          {/* <NavLink className={css.registerBtn} href="/auth/register">Registration</NavLink > */}
          {/* <Button href='/auth/registration' variant="contained" className={classes.customButton}>Registration</Button>*/}
          <CustomButton
            href="team-project-TaskPro-Frontend/auth/register"
            variant="contained"
          >
            Registration
          </CustomButton>
        </div>
        <div>
          {/* <NavLink className={css.loginBtn} to="/auth/login">Log In</NavLink > */}
          {/* <Button href='/auth/login' variant="text" style={{ color: "black", textTransform: 'none' }}>Log In</Button> */}
          <Link
            className={css.style}
            href="team-project-TaskPro-Frontend/auth/login"
            underline="none"
            color={{ color: '#161616' }}
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
