import { useToggleModal } from '../../hooks';
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

import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'redux/sidebar/sidebarSlice';
import { setName } from 'redux/auth/authSelectors';
import { Modal } from 'components/Modal';

export const Header = () => {
  const { open, close, isOpen } = useToggleModal();

  const currentTheme = useSelector(state => state.theme);
  const username = useSelector(setName);
  const userAvatar = useSelector(state => state.auth.user.avatarURL);
  const dispatch = useDispatch();

  const stockAvatar = userPlaceholder.URL[currentTheme.themeColor];
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  // console.log(isOpen);
  return (
    <>
      <ContainerStyled>
        <BurgerBtn onClick={handleToggleSidebar}>
          <BurgerIcon color="#fff" />
        </BurgerBtn>
        <HeaderBtnWrap>
          {/* <p>Theme</p> */}
          <ThemeSelect />
          <UserInfoBox onClick={open}>
            <UserName>{username}</UserName>
            <UserAvatar
              src={userAvatar || stockAvatar}
              alt="User avatar"
              width={32}
              height={32}
            />
          </UserInfoBox>
        </HeaderBtnWrap>
      </ContainerStyled>
      {isOpen && (
        <Modal onClose={close}>
          <EditProfile onClose={close} stockAvatar={stockAvatar} />
        </Modal>
      )}
    </>
  );
};
