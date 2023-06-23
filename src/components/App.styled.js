import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(3)};

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    padding-top: ${({ theme }) => theme.spacing(3.5)};
    padding-bottom: ${({ theme }) => theme.spacing(3.5)};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

export const Container = styled.div`
  width: 100%;

  padding-left: ${({ theme }) => theme.spacing(3.5)};
  padding-right: ${({ theme }) => theme.spacing(3.5)};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: ${({ theme }) => theme.breakpoints.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: ${({ theme }) => theme.breakpoints.m};
	padding-left: ${({ theme }) => theme.spacing(6)};
    padding-right: ${({ theme }) => theme.spacing(6)};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: ${({ theme }) => theme.breakpoints.l};
  }
`;



