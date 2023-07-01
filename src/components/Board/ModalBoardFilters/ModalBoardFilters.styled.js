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

export const InputRadio = styled(Field)`
  margin-right: 8px;
  appearance: none;
  /* padding: 10px; */
  /* background-color: yellow; */
  border-radius: 14px;
  width: 14px;
  height: 14px;

  /* &:checked {
    appearance: auto;
    background-color: blue;
    outline: 1px solid var(blue);
  } */
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

export const RadioButCont = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 8px;
`;

export const RadioLabel = styled.label`
  font-size: var(--fontSize12);
  color: var(--filtersTextColor);
  display: flex;
  align-items: center;
`;

// export const  = styled.a`
//   width: 28px;
//   height: 28px;
// `;
