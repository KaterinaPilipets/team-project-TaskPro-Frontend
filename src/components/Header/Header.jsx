import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useToggleModal } from '../../hooks';
import { Modal } from 'components/Modal';
import ThemeSelect from 'components/ThemeSelect/ThemeSelect';
import {
  BurgerBtn,
  ContainerStyled,
  HeaderBtnWrap,
  UserAvatar,
  UserInfoBox,
} from './Header.styled';
export const Header = () => {
  const { open, close, isOpen } = useToggleModal();
  const [theme, setTheme] = useState('dark');
  const avatar =
    'https://res.cloudinary.com/dsqxw0541/image/upload/v1687678852/TaskProImages/placeholders/user-dark_jkv8qb.png';
  const username = 'Iveta';

  console.log(isOpen);
  return (
    <>
      <ContainerStyled>
        <BurgerBtn>
          <MenuIcon />
        </BurgerBtn>
        <HeaderBtnWrap>
          <p>Theme</p>
          {/* <ThemeSelect /> */}
          <UserInfoBox onClick={open}>
            <p>{username}</p>
            <UserAvatar src={avatar} alt="User avatar" width={32} height={32} />
          </UserInfoBox>
        </HeaderBtnWrap>
      </ContainerStyled>
      {isOpen && (
        <Modal onClose={close}>
          <p>ModalEditProfile</p>
        </Modal>
      )}
    </>
  );
};
