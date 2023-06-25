import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';

export const Container = styled.div`
  border: 1px solid var(--inputBorder);
  border-left-width: 0;
  border-right-width: 0;
  display: flex;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const Text = styled.p`
  margin: 0;
  line-height: 1.5;
  color: var(--sidebarPrimaryTextColor);
  width: 76px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const AddButton = styled.button`
  width: 40px;
  height: 36px;
  margin-left: auto;
  border-radius: 6px;
  background-color: var(--buttonPlusBgColor);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddButtonIcon = styled(AddIcon)`
  color: var(--buttonPlusFill);
`;
