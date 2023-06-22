// import PropTypes from "prop-types";

import { StyledButton } from "./Button.styled";

export const Button = ({
  type = "submit",
  onClick,
  children,
  ...allyProps
}) => {
  return (
    <StyledButton type={type} onClick={onClick} {...allyProps}>
      {children}
    </StyledButton>
  );
};

// Button.propTypes = {
//   onClick: PropTypes.func,
//   children: PropTypes.node,
//   "aria-label": PropTypes.string.isRequired,
// };
