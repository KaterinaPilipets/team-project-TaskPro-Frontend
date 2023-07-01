import * as React from 'react';

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
        <HelpIcon />
        Need help?
      </Button>

      <HelpModal isOpen={isOpen} onClose={close} />
    </Container>
  );
};

export default HelperBlock;
