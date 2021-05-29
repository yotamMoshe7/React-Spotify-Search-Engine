import React, { useState, useContext } from 'react';
import './SearchField.css';
import {
  SPOTIFY_URL,
  RESULTS_PAGE_ROUTE,
  SEARCH_QUERY,
} from '../../utils/Constants';
import { useHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { setAuthHeader, checkTokenExpireTime } from '../../utils/Utility';
import axios from 'axios';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const SearchField = () => {
  const [searchInputField, setSearchInputField] = useState('');
  const isMobile = useContext(IsMobileContext);

  // Hook for url processing
  const history = useHistory();

  // Styling search field and search icon
  const styleForIcon = { width: '100%', height: '100%' };
  const styleForMobileIcon = { width: '4vh', height: '6vh' };
  const styleForSearchInput = {
    fontSize: '70%',
    color: 'Black',
    fontFamily: 'Bebas Neue, cursive',
    width: '100%',
  };
  const styleForMobileSearchInput = { fontSize: '3vh', color: 'Black' };

  // Search button clicked
  const handleClick = async () => {
    // Check if token time has been expire
    if (!checkTokenExpireTime()) {
      return history.push('/');
    }

    // Add access_token in the Authorization Header
    setAuthHeader();

    try {
      const API_URL = `${SPOTIFY_URL}${encodeURIComponent(
        searchInputField
      )}${SEARCH_QUERY}`;
      const result = await axios.get(API_URL);

      // Nevigate to results page, and save state in session history
      history.push({
        pathname: RESULTS_PAGE_ROUTE,
        state: { serverResult: result.data },
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  // When user enter input to search field
  const handleChange = (event) => {
    setSearchInputField(event.target.value);
  };

  return (
    <Grid container item xs={7} md={2} className='search-field-wrapper'>
      <Grid
        container
        item
        xs={2}
        sm={1}
        className={
          isMobile ? 'mobile-search-icon-wrapper' : 'search-icon-wrapper'
        }
        onClick={handleClick}
      >
        <SearchIcon style={isMobile ? styleForMobileIcon : styleForIcon} />
      </Grid>
      <Grid
        container
        item
        xs={10}
        className={isMobile ? 'mobile-search-field' : 'search-field'}
      >
        <InputBase
          placeholder='Search for artist...'
          onChange={handleChange}
          style={isMobile ? styleForMobileSearchInput : styleForSearchInput}
        />
      </Grid>
    </Grid>
  );
};
