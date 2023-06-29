import { useToggleModal } from '../../hooks';
import { Modal } from 'components/Modal';
import ThemeSelect from 'components/ThemeSelect/ThemeSelect';
import {
  BurgerBtn,
  BurgerIcon,
  ContainerStyled,
  HeaderBtnWrap,
  UserAvatar,
  UserInfoBox,
  UserName,
} from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'redux/sidebar/sidebarSlice';
import { setName } from 'redux/auth/authSelectors';

export const Header = () => {
  const { open, close, isOpen } = useToggleModal();

  const dispatch = useDispatch();
  const username = useSelector(setName)

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const avatar =
    'https://res.cloudinary.com/dsqxw0541/image/upload/v1687678852/TaskProImages/placeholders/user-dark_jkv8qb.png';
  // const username = 'Ivetta';

  console.log(isOpen);
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
