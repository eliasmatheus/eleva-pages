import React from 'react';
import PropTypes from 'prop-types';

// icons
import { BiSearchAlt } from 'react-icons/bi';
import filterIcon from '../../assets/images/icons/filter-icon.svg';
import bitwiseImg from '../../assets/images/icons/bitwise.svg';

import { Container } from './styles';

const SearchInput = ({ placeholder, fullWidth }) => {
  return (
    <Container fullWidth={fullWidth}>
      <form className="search-container">
        <button type="button">
          <img src={filterIcon} alt="Filtrar" />
          CATEGORIA
          <img src={bitwiseImg} alt="" />
        </button>
        <input type="text" placeholder={placeholder} />
        <button type="button" className="search-button">
          <BiSearchAlt size={20} />
        </button>
      </form>
    </Container>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

SearchInput.defaultTypes = {
  fullWidth: false,
};

export default SearchInput;