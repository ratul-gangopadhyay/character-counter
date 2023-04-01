import React from 'react';
import { StyledSearchbar } from '../styled/Searchbar/Searchbar.styles';

const Searchbar = ({ entry, handleChange }) => {
  return (
    <StyledSearchbar
      onChange={handleChange}
      value={entry}
      placeholder='Type something here'
    />
  );
};

export default Searchbar;
