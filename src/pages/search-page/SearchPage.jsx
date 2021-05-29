import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import { getParamValues } from '../../utils/Utility';
import './SearchPage.css';
import Grid from '@material-ui/core/Grid';
import {
  WELCOME_PAGE_ROUTE,
  LOCAL_STORAGE_PARAMS,
  LOCAL_STORAGE_EXPIRE_TOKEN_TIME,
} from '../../utils/Constants';
import { SearchTitle } from '../../components/search-title/SearchTitle';
import { SearchField } from '../../components/search-field/SearchField';
import { useHistory } from 'react-router';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const SearchPage = () => {
  const isMobile = useContext(IsMobileContext);
  const history = useHistory();

  // Access the URL parameters and store them in local storage
  useEffect(() => {
    try {
      // Check if there is a token
      if (_.isEmpty(window.location.hash)) {
        return history.push('/');
      }
      const access_token = getParamValues(window.location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;

      // Save expire time and token in local storage
      localStorage.setItem(LOCAL_STORAGE_PARAMS, JSON.stringify(access_token));
      localStorage.setItem(LOCAL_STORAGE_EXPIRE_TOKEN_TIME, expiryTime);
    } catch (error) {
      history.push(WELCOME_PAGE_ROUTE);
    }
  }, [history]);

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className='search-page-wrapper'
    >
      <SearchTitle isMobile={isMobile} />
      <Grid item className={isMobile ? 'mobile-sub-title' : 'sub-title'}>
        Start search in Spotify
      </Grid>
      <Grid container justify='center'>
        <SearchField isMobile={isMobile} />
      </Grid>
    </Grid>
  );
};
