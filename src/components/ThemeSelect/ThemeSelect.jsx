import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { setTheme } from '../../redux/theme/theme-slice';
import {
  StyledSelectWrapper,
  StyledList,
  StyledItem,
  StyledTitle,
} from './ThemeSelect.styled';

import { updateTheme } from 'redux/auth/authOperations';
import { getTheme } from 'redux/auth/authSelectors';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Violet', value: 'violet' },
];

const ThemeSelect = () => {
  const currentTeme = useSelector(getTheme);
  const [selectedTheme, setSelectedTheme] = useState(currentTeme);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const toggleTheme = theme => {
    setSelectedTheme(theme);
    setIsThemeOpen(false);
    // dispatch(setTheme(theme));
    dispatch(updateTheme(theme));
  };

  return (
    <div>
      <StyledSelectWrapper onClick={() => setIsThemeOpen(!isThemeOpen)}>
        <StyledTitle>Theme</StyledTitle>
        <MdOutlineKeyboardArrowDown size={16} color="var(--themeText)" />

        {isThemeOpen && (
          <StyledList isOpen={isThemeOpen}>
            {themes.map(({ value, name }) => (
              <StyledItem key={value} onClick={() => toggleTheme(value)}>
                {name}
              </StyledItem>
            ))}
          </StyledList>
        )}
      </StyledSelectWrapper>
    </div>
  );
};

export default ThemeSelect;
