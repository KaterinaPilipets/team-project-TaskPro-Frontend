import styled from '@emotion/styled';
import { breakpoints } from 'constants';

import { StyledIcon, Svg, StyledButton } from 'components/ButtonPrimary/ButtonPrimary.styled';

export const StyledMainContainer = styled.div`
 @media screen and (min-width: 320px) {
    display: flex;
    /* align-items: flex-start; */

    overflow-x: auto;
    padding-left: 20px;
    padding-right: 20px;
  }


@media screen and (min-width: ${breakpoints.M}) {

}

@media screen and (min-width: ${breakpoints.L}) {

}
`;

export const StyledList = styled.ul`
display: flex;
gap: 18px;
margin-right: 18px;

@media screen and (min-width: ${breakpoints.S}) {
 margin-bottom: 94px;
}

@media screen and (min-width: ${breakpoints.M}) {
 margin-bottom: 122px;
}

@media screen and (min-width: ${breakpoints.L}) {
 margin-bottom: 84px;
}
`;

export const StyledButtonAddColumn = styled(StyledButton)`
min-width: 334px;
max-height: 56px;
color: var(--buttonAddColumnColor);
background-color: var(--buttonAddColumnBgColor);
`;

export const StyledIconAddColumn = styled(StyledIcon)`
background-color: var(--buttonAddColumnIconBgColor);
`;

export const StyledSvgAddColumn = styled(Svg)`
stroke: var(--buttonAddColumnIconFill);
`;
