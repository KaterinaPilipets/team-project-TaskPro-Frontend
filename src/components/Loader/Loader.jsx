import React from 'react';
import { GridLoader } from 'react-spinners';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <StyledLoader>
      <GridLoader
        color="#1F1F1F"
        margin={2}
        size={18}
        speedMultiplier={1}
        width={2}
      />
    </StyledLoader>
  );
};
