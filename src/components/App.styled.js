import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 12px;
  padding-bottom: 12px;

  @media (min-width: 375px) {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  @media (min-width: 768px) {
    padding-top:24px;
    padding-bottom: 24px;
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: 14px;
  padding-right: 14px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width:  375px) {
    width:  375px;
  }
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
