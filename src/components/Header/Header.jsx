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
export const Header = () => {
  const { open, close, isOpen } = useToggleModal();

  const avatar =
    'https://res.cloudinary.com/dsqxw0541/image/upload/v1687678852/TaskProImages/placeholders/user-dark_jkv8qb.png';
  const username = 'Iveta';

  console.log(isOpen);
  return (
    <>
      <ContainerStyled>
        <BurgerBtn>
          <BurgerIcon color="#fff" />
        </BurgerBtn>
        <HeaderBtnWrap>
          <p>Theme</p>
          {/* <ThemeSelect /> */}
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
