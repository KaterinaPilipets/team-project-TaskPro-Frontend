import * as React from 'react';

import {
  Container,
  Text,
  TextAccent,
  Button,
  HelpIcon,
} from './HelperBlock.styled';

const HelperBlock = () => {
  return (
    <Container>
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
