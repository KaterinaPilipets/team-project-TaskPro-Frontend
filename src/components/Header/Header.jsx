import { useToggleModal } from '../../hooks';
import { Modal } from 'components/Modal';
import { useSelector } from 'react-redux';
import ThemeSelect from 'components/ThemeSelect/ThemeSelect';
import userPlaceholder from '../../sourse/userPlaceholders.json';

import {
  BurgerBtn,
  BurgerIcon,
  ContainerStyled,
  HeaderBtnWrap,
  UserAvatar,
  UserInfoBox,
  UserName,
} from './Header.styled';
import { EditProfile } from 'components/EditProfile';
export const Header = () => {
  const { open, close, isOpen } = useToggleModal();
  const currentTheme = useSelector(state => state.theme);

  const stockAvatar = userPlaceholder.URL[currentTheme.themeColor];

  const username = 'Iveta';

  console.log(isOpen);
  return (
    <>
      <ContainerStyled>
        <BurgerBtn>
          <BurgerIcon color="#fff" />
        </BurgerBtn>
        <HeaderBtnWrap>
          {/* <p>Theme</p> */}
          <ThemeSelect />
          <UserInfoBox onClick={open}>
            <UserName>{username}</UserName>
            <UserAvatar
              src={stockAvatar}
              alt="User avatar"
              width={32}
              height={32}
            />
          </UserInfoBox>
        </HeaderBtnWrap>
      </ContainerStyled>
      {isOpen && (
        <Modal onClose={close}>
          <EditProfile stockAvatar={stockAvatar} />
        </Modal>
      )}
    </>
  );
};
