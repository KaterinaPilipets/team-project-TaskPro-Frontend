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

const HelperBlock = () => {
  return (
    <Container>
      <HelpImgContainer>
        <HelpImage src={cactusImage[0].URL} />
      </HelpImgContainer>
      <Text>
        If you need help with <TextAccent>TaskPro</TextAccent>, check out our
        support resources or reach out to our customer support team.
      </Text>
      <Button>
        <HelpIcon />
        Need help?
      </Button>
    </Container>
  );
};

export default HelperBlock;
