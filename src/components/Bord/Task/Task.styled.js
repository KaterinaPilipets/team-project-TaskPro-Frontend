import styled from '@emotion/styled';

export const ListItem = styled.li`
  border-left: 4px solid teal;
  border-radius: 8px;
  width: 100%;
  height: 154px;
  padding: 14px 24px;
  background-color: var(--bgColor);
  color: var(--textColor);
`;
export const Title = styled.p`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  margin-bottom: 8px;
  color: var(--titleColor);
`;
export const SubTitle = styled.p`
  color: var(--subTitleColor);
  font-size: var(--fontSize8);
`;
export const SubText = styled.p`
  color: var(--subTextColor);
  font-size: var(--fontSize10);
`;
export const TextHidden = styled.p`
  font-size: var(--fontSize12);
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Span = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background-color: var(--lineColor);
  margin: 14px 0;
`;
export const Wrap = styled.div`
  display: flex;
  justify-contact: center;
  aling-items: center;
  gap: 14px;
`;
// [
//   {
//     name: 'Without priority',
//     color: '--defaultPriorityColor',
//   },
//   {
//     name: 'Low',
//     color: '--lowPriorityColor',
//   },
//   {
//     name: 'Medium',
//     color: '--mediumPriorityColor',
//   },
// ];
