import styled from '@emotion/styled';
import { breakpoints } from 'constants';

export const WindowContaier = styled.div`
  background-color: var(--profileBgColor);

  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.M}) {
    width: 400px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: var(--profileInputTextFocus);
  margin-bottom: 24px;
  align-self: flex-start;
`;
export const AvatarWrapper = styled.div`
  width: 68px;
  height: 68px;
  position: relative;
  margin-bottom: 25px;
`;
export const AvatarImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 10px;
`;
export const FileInputWrapper = styled.label`
  display: inline-block;
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 20%;
  background-color: var(--profileIconBgColor);
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const ProfileInput = styled.input`
  height: 49px;
  width: 287px;
  border-radius: 8px;
  border: 1px solid var(--profileInputBorderColor);
  background-color: transparent;
  color: var(--profileInputTextFocus);
  font-size: 14px;
  font-weight: 400;
  padding: 14px 0px 14px 18px;
  outline: none;
  &:focus {
    border-color: var(--profileInputBorderFocus);
  }
  &::placeholder {
    color: var(--profileInputTextColor);
  }
  &:last-child {
    margin-top: 14px;
  }
  @media screen and (min-width: ${breakpoints.M}) {
    width: 352px;
  }
`;
