import styled from '@emotion/styled';
export const Container = styled.div`
  width: 100%;

  padding-left: 14px;
  padding-right: 14px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    display: flex;
  }
`;
