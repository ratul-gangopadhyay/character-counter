import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { StyledNavbar } from '../styled/Navbar/Navbar.styles';
import logo from '../../assets/letter-c.png';

const Navbar = ({ toggleDarkMode, theme }) => {
  return (
    <StyledNavbar>
      <img id='app-logo' alt='Home' src={logo} onClick={() => window.location.reload()}/>
      {theme.darkMode ? (
        <IconButton onClick={toggleDarkMode}>
          <LightModeOutlinedIcon sx={theme.darkModeIconStyle} />
        </IconButton>
      ) : (
        <IconButton onClick={toggleDarkMode}>
          <DarkModeOutlinedIcon sx={theme.darkModeIconStyle} />
        </IconButton>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
