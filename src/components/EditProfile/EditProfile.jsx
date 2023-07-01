import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { useToggleModal } from '../../hooks';
import {
  AvatarImg,
  AvatarWrapper,
  FileInput,
  FileInputWrapper,
  ModalTitle,
  ProfileForm,
  ProfileInput,
  WindowContaier,
} from './EditProfile.styled';
import { StyledButton } from 'components/ButtonPrimary/ButtonPrimary.styled';
import { updateUserData } from 'redux/auth/authOperations';

export const EditProfile = ({ stockAvatar, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        setImageUrl(event.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const userData = useSelector(state => state.auth.user);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    const { name, email, password } = event.currentTarget.elements;
    if (name.value) {
      formData.append('name', name.value);
    } else {
      formData.append('name', userData.name);
    }
    if (email.value) {
      formData.append('email', email.value);
    }

    if (password.value) {
      formData.append('password', password.value);
    }
    if (selectedFile) {
      formData.append('avatar', selectedFile);
    }

    dispatch(updateUserData(formData));
    onClose();
  };

  return (
    <WindowContaier>
      <ModalTitle>Edit Profile</ModalTitle>
      <AvatarWrapper>
        <AvatarImg
          src={imageUrl || userData.avatarURL || stockAvatar}
          alt="avatar"
          width={68}
          height={68}
        />
        <FileInputWrapper>
          <FileInput
            type="file"
            onChange={handleFileChange}
            accept="image/jpeg, image/png, image/gif"
          />
          +
        </FileInputWrapper>
      </AvatarWrapper>
      <ProfileForm onSubmit={handleSubmit}>
        <ProfileInput
          type="text"
          name="name"
          placeholder={userData.name}
          required
        />
        <ProfileInput
          type="text"
          name="email"
          placeholder={userData.email}
          required
        />
        <ProfileInput type="passward" name="password" placeholder="*******" />
        <StyledButton style={{ marginTop: '14px' }}>Send</StyledButton>
      </ProfileForm>
    </WindowContaier>
  );
};