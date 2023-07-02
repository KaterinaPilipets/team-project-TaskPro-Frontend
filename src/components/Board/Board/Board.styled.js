import styled from '@emotion/styled';
import { bgs } from 'sourse/bgs';

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  flex-wrap: nowrap;

  /* background-image: url(${bgs[0].URL.desktop}); */

  //добавить изменение при смене разрешения экрана
  background-image: url(${props => props.backgroundImg.URL.desktop});

  background-origin: border-box;
  background-repeat: no-repeat;
  background-size: 100%;
  /* background-color: green; */
`;
