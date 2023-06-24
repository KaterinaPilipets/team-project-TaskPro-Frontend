import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { setTheme } from '../../redux/theme/theme-slice';
import {} from './ThemeSelect.styled';

const themes = [
  { name: 'Dark', value: 'dark' },
  { name: 'Light', value: 'light' },
  { name: 'Violet', value: 'violet' },
];

const ThemeSelect = () => {
  const dispatch = useDispatch();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  const toggleTheme = theme => {
    dispatch(setTheme(theme));
    setSelectedTheme(theme);
    setIsThemeOpen(false);
  };

  return (
    <div isOpen={isThemeOpen}>
      <div onClick={() => setIsThemeOpen(!setIsThemeOpen)}>
        <p>Theme</p>
        {/* <MdOutlineKeyboardArrowDown size={16} color="var(--themeText)" /> */}
        <span size={16} color="var(--themeText)" />
      </div>
      <ul isOpen={setIsThemeOpen}>
        {themes.map(({ value, name }) => (
          <li key={value} onClick={() => toggleTheme(value)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelect;
