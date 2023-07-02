import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  top: -72px;
  right: 0;
  height: auto;
  min-width: 150px;
  padding: 18px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--inProgressBgColor);
  color: var(--inProgressColor);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;
export const ColumnList = styled.ul`
  width: 100%;
`;

export const ColumnItem = styled.li`
  display: flex;
  gap: 8px;
`;
export const ColumnChangerButton = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ColumnTitle = styled.span`
  display: block;

  font-size: var(--fontSize14);
  font-weight: var(--fontWeight400);
  line-height: normal;
  letter-spacing: -0.28px;
  text-align: left;
`;

export const ColumnIcon = styled.svg`
    margin-left: 8px;
  stroke: var(--iconDeadlineColor);
  /* align-self: flex-end; */
 
`;
