import * as React from 'react';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import { Container, LogoContainer, AppName } from './LogoComponent.styled';

const LogoComponent = () => {
  return (
    <div>
      <Container>
        <LogoContainer>
          <BoltSharpIcon />
        </LogoContainer>
        <AppName>Task Pro</AppName>
      </Container>
    </div>
  );
};

export default LogoComponent;
