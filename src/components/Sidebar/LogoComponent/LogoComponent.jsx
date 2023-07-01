import {
  Container,
  LogoContainer,
  AppName,
  BoltSharpIcon,
} from './LogoComponent.styled';
import icon from 'sourse/sprite.svg';

const LogoComponent = () => {
  return (
    <div>
      <Container>
        <LogoContainer>
          <BoltSharpIcon>
            <use xlinkHref={`${icon}#icon-logo`} />
          </BoltSharpIcon>
        </LogoContainer>
        <AppName>Task Pro</AppName>
      </Container>
    </div>
  );
};

export default LogoComponent;
