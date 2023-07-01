import icon from '../../sourse/sprite.svg';

// import { Btn } from './EditPanel.Styled';
import { Btn } from './SvgBtn.styled';

export const SvgBtn = ({ idIcon, onClick }) => {
  return (
    <>
      <Btn onClick={onClick}>
        <svg width="16" height="16">
          <use xlinkHref={`${icon}#${idIcon}`} />
        </svg>
      </Btn>
    </>
  );
};
