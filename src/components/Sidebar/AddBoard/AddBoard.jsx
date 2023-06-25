import * as React from 'react';

import { Container, Text, AddButton, AddButtonIcon } from './AddBoard.styled';

const AddBoard = () => {
  return (
    <Container>
      <Text>Create a new board</Text>
      <AddButton>
        <AddButtonIcon />
      </AddButton>
    </Container>
  );
};

export default AddBoard;
