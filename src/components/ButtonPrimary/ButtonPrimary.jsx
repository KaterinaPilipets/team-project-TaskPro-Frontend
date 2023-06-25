import icon from '../../sourse/sprite.svg';

import { StyledButton, StyledIcon, Svg } from './ButtonPrimary.styled';

export const ButtonPrimary = ({
  type = 'submit',
  onClick,
  children,
  ...allyProps
}) => {
  return (
    <StyledButton type={type} onClick={onClick} {...allyProps}>
      <StyledIcon>
        <Svg width="14" height="14">
          <use xlinkHref={`${icon}#icon-plus`} />
        </Svg>
      </StyledIcon>
      {children}
    </StyledButton>
  );
};
