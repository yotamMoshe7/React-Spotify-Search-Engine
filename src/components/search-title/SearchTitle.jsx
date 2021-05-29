import React, { useContext } from 'react';
import './SearchTitle.css';
import Grid from '@material-ui/core/Grid';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';
import { SpotifyIcon } from '../spotify-icon/SpotifyIcon';

export const SearchTitle = () => {
  const isMobile = useContext(IsMobileContext);
  return (
    <Grid container item justify='center'>
      <SpotifyIcon />
      <Grid item className={isMobile ? 'mobile-title' : 'title'}>
        Spotify Search App
      </Grid>
    </Grid>
  );
};
