import styled from '@emotion/styled';
import { Field } from 'formik';

export const FiltersTitle = styled.h3`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize18);
`;

export const BackgroundTitle = styled.h4`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize14);
`;

export const LabelTitle = styled.h4`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize14);
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: calc(8 * 28px + 7 * 4px);
`;

export const SvgIcon = styled.svg`
  --color1: var(--createBoardIconsFill);
`;

export const InputField = styled(Field)`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`;

export const RadioLabel = styled.label`
  /* font-size: var(--fontSize12); */
  /* color: var(--filtersTextColor); */
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border: 2px solid ${props => props.buttonColor};
  /* background-color: ${props => props.buttonColor}; */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & input {
    display: none;
  }
  /* & input[type='radio']:checked + label {
    background-color: transparent;
    border: 2px solid ${props => props.buttonColor};
  } */
  & input:checked + span {
    opacity: 1;
  }
`;

// export const InputField2 = styled.input`
//   &:checked + label {
//     background-color: transparent;
//     border: 2px solid ${props => props.buttonColor};
//   }
// `;

// .labelColor:checked + .inputlabel {
//     background-color: transparent;
//     border: 2px solid ${props => props.buttonColor};
//   }

export const RadioButCont = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 8px;
`;

export const Checkmark = styled.span`
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 50%;
  background-color: ${props => props.buttonColor};
  display: inline-block;
  opacity: 0;
  transition: opacity 0.25s ease;
`;

export const BackgroundImgCont = styled.div`
  cursor: pointer;
`;

export const NoImgCont = styled.div`
  padding: 6px;
`;

export const BackgroundImg = styled.img`
  width: 28px;
  height: 28px;
`;

export const LabelShowAllCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// export const  = styled.a`
//   width: 28px;
//   height: 28px;
// `;
