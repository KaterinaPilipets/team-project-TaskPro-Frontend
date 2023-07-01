import {
  Container,
  Text,
  TextAccent,
  Button,
  HelpIcon,
  HelpImgContainer,
  HelpImage,
} from './HelperBlock.styled';

import cactusImage from 'sourse/help.json';
import { useToggleModal } from 'hooks';
import HelpModal from '../HelpModal';
import icon from 'sourse/sprite.svg';

const HelperBlock = () => {
  const { open, close, isOpen } = useToggleModal();

  return (
    <Container>
      <HelpImgContainer>
        <HelpImage src={cactusImage[0].URL} />
      </HelpImgContainer>
      <Text>
        If you need help with <TextAccent>TaskPro</TextAccent>, check out our
        support resources or reach out to our customer support team.
      </Text>
      <Button onClick={open}>
        <HelpIcon>
          <use xlinkHref={`${icon}#icon-question`} />
        </HelpIcon>
        <span>Need help?</span>
      </Button>

      {isOpen && <HelpModal onClose={close} />}
    </Container>
  );
};

export default HelperBlock;
