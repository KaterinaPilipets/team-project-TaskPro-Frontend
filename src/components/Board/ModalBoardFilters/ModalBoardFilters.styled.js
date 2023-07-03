import styled from '@emotion/styled';

export const FiltersTitle = styled.h3`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize18);
  margin-bottom: 14px;
`;

export const BackgroundTitle = styled.h4`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize14);
  margin-top: 14px;
`;

export const LabelTitle = styled.h4`
  color: var(--filtersTitleColor);
  font-size: var(--fontSize14);
  margin-top: 24px;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  width: calc(8 * 28px + 7 * 4px);
  margin-bottom: 14px;
  & label {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition-property: outline;
    transition-duration: 0.25s;
    &:hover,
    &:focus,
    &:active {
      outline: 2px solid var(--iconDeadlineColor);
    }
  }
`;

export const SvgIcon = styled.svg`
  --color1: var(--createBoardIconsFill);
`;

export const Line = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background-color: var(--lineColor);
`;

export const InputField = styled.input`
  position: fixed;
  opacity: 0;
  pointer-events: none;
`;

export const RadioLabelShowAll = styled.label`
  font-size: var(--fontSize12);
  color: var(--filtersTextColor);
  text-decoration-line: underline;
  cursor: pointer;
  transition-property: color;
  transition-duration: 0.25s;
  &:hover,
  &:focus {
    color: var(--filtersTitleColor);
  }
  & input {
    display: none;
  }
`;

export const RadioLabel = styled.label`
  font-size: var(--fontSize12);
  color: var(--filtersTextColor);
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: color;
  transition-duration: 0.25s;
  cursor: pointer;
  &:hover,
  &:focus {
    color: var(--filtersTitleColor);
  }
  & input {
    display: none;
  }
  & input:checked + span::before {
    opacity: 1;
  }
`;

export const RadioButCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelCont = styled.div`
  display: flex;
`;

export const Checkmark = styled.span`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  opacity: 1;
  transition: opacity 0.25s ease;
  position: relative;
  background-color: ${props => {
    if (props.value === 'without') {
      return 'var(--defaultPriorityColor)';
    } else if (props.value === 'low') {
      return 'var(--lowPriorityColor)';
    } else if (props.value === 'medium') {
      return 'var(--mediumPriorityColor)';
    } else if (props.value === 'high') {
      return 'var(--highPriorityColor)';
    }
  }};

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid var(--boardBgColor);
    opacity: 0;
  }
`;

export const BackgroundImgCont = styled.div`
  cursor: pointer;
`;

export const NoImgCont = styled.div`
  cursor: pointer;
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
