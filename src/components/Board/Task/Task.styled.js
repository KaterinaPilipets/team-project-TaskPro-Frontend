import styled from '@emotion/styled';

// export const CardDescription = styled.div`
//   border-bottom: 1px solid var(--borderBottomColor);

//   margin-bottom: 14px;
// `;

// export const CardText = styled.p`
//
//   color: var(--borderTopColor); // ПОМЕНЯТЬ ЦВЕТ ТЕКСТА!!!!
//   position: relative;
//   font-family: var(--poppinsFont);
//   text-overflow: ellipsis;
//   overflow: hidden;
//
//
//   display: flex;
//   width: 290;
//   height: 38px;
//   flex-direction: column;
// `;

// export const CardBottom = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// export const CardBottomGrop = styled.div`
//   display: flex;
//   gap: 14px;
//   align-items: baseline;
// `;

// export const CardPriority = styled.div`
//   width: 56px;
//   height: 31px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const CardSubtitle = styled.p`
//   color: var(--borderTopColor); // ПОМЕНЯТЬ ЦВЕТ ТЕКСТА!!!!
//   font-size: var(--fontSize8);
//   font-family: var(--poppinsFont);
//   letter-spacing: -0.16px;
// `;

// export const Circle = styled.div`
//   display: flex;
//   gap: 4px;
//   align-items: flex-end;
// `;

// export const Priority = styled.p`
//   position: relative;
//   color: var(--titleColor);
//   font-size: var(--fontSize10);
//   font-family: var(--poppinsFont);
//   letter-spacing: -0.2px;
// `;

// export const CardDeadline = styled.div`
//   width: 53px;
//   height: 31px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// export const Deadline = styled.p`
//   position: relative;
//   color: var(--titleColor);
//   height: 12px;
//   font-size: var(--fontSize10);
//   font-family: var(--poppinsFont);
//   letter-spacing: -0.2px;
// `;

// export const CardBtnGrope = styled.div`
//   display: flex;
//   gap: 8px;
//   flex-direction: row;
//   align-items: flex-end;
// `;

// export const CardBtn = styled.button`
//   width: 16px;
//   height: 16px;
//   padding: 0;
//   display: flex;

//   border: none;
//   background-color: transparent;
//   cursor: pointer;
// `;

// export const CardIcon = styled.svg`
//   stroke: var(--borderTopColor); // ПОМЕНЯТЬ ЦВЕТ!!!
//   width: 16px;
//   height: 16px;
//   fill: none;
// `;

export const ListItem = styled.li`
  border-left: 4px solid teal;
  border-radius: 8px;
  width: 100%;
  height: 154px;
  padding: 14px 24px;
  background-color: var(--bgColor);
  color: var(--textColor);
`;

//   width: 334px;

//   overflow: hidden;

export const Title = styled.p`
  font-size: var(--fontSize14);
  font-weight: var(--fontWeight500);
  margin-bottom: 8px;
  letter-spacing: -0.28px;
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
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 2; // количество строк
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.14;
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
