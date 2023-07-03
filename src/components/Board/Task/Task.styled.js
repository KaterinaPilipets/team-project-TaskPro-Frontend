import styled from '@emotion/styled';

export const ListItem = styled.li`
  border-left: 4px solid;
  border-radius: 8px;
  width: 334px;
  height: 154px;
  padding: 14px 24px;
  background-color: var(--bgColor);
  color: var(--textColor);

  ${({ color }) => `
    border-color: ${color};
  `}
`;

//   width: 334px;

//   overflow: hidden;

export const Title = styled.p`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight600);
  line-height: 1.5;
  margin-bottom: 8px;
  letter-spacing: -0.28px;
  color: var(--titleColor);
`;
export const SubTitle = styled.p`
  color: var(--subTitleColor);
  font-weight: var(--fontWeight400);
  font-size: var(--fontSize8);
  line-height: 1.5;
  margin-bottom: 4px;
`;
export const SubText = styled.p`
  color: var(--subTextColor);
  font-weight: var(--fontWeight400);

  font-size: var(--fontSize10);
`;
export const TextHidden = styled.p`
  font-size: var(--fontSize12);
  line-height: 1.33;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 2; // количество строк
  -webkit-box-orient: vertical;
  overflow: hidden;

  margin-top: 8 px;
  height: 34px;
  width: 290px;
`;
export const Span = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background-color: var(--lineColor);
  margin: 21px 0 14px 0;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: auto;
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
export const PriorityWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PriorityIndicator = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  margin-right: 4px;
  ${({ color }) => `
    background-color: ${color};
  `}
`;
