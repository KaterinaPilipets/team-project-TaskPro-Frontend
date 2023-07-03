import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  gap: 18px;
  //   margin-left: 24px;
`;
export const BoardContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto;

  padding-bottom: 16px;
  display: flex;
  align-items: flex-start;
  @media (min-width: 375px) {
    max-width: 768px;
  }
  @media (min-width: 768px) {
    max-width: 1440px;
  }
  @media (min-width: 1440px) {
    // height: 770px;
  }
`;
