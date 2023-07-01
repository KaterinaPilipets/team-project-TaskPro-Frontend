import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUserData } from 'redux/user/operations';
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

export const EditProfile = ({ stockAvatar }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData);
  }, [dispatch]);

  useEffect(() => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        setImageUrl(event.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  }, [selectedFile]);

  const userData = useSelector(state => state.user);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    const { name, email, password } = event.currentTarget.elements;
    console.log(name.value);
    if (name.value) {
      formData.append('name', name.value);
    }
    if (name.value) {
      formData.append('email', email.value);
    }
    if (name.value) {
      formData.append('password', password.value);
    }
    if (selectedFile) {
      formData.append('avatar', selectedFile);
    }
    dispatch(updateUserData(formData));
  };

  return (
    <WindowContaier>
      <ModalTitle>Edit Profile</ModalTitle>
      <AvatarWrapper>
        <AvatarImg
          src={imageUrl || stockAvatar}
          alt="avatar"
          width={68}
          height={68}
        />
        <FileInputWrapper>
          <FileInput type="file" onChange={handleFileChange} />+
        </FileInputWrapper>
      </AvatarWrapper>
      <ProfileForm onSubmit={handleSubmit}>
        <ProfileInput type="text" name="name" placeholder={userData.name} />
        <ProfileInput type="text" name="email" placeholder={userData.email} />
        <ProfileInput type="passward" name="password" placeholder="*******" />
        <StyledButton style={{ marginTop: '14px' }}>Send</StyledButton>
      </ProfileForm>
    </WindowContaier>
  );
};
