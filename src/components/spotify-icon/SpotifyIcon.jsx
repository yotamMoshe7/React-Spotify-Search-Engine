import React, { useContext } from 'react';
import './SpotifyIcon.css';
import Grid from '@material-ui/core/Grid';
import spotifyIcon from '../../assets/icons/spotifyIcon.png';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const SpotifyIcon = () => {
  const isMobile = useContext(IsMobileContext);
  return (
    <Grid item>
      <img
        src={spotifyIcon}
        alt='spotify-icon'
        className={isMobile ? 'mobile-spotify-icon' : 'spotify-icon'}
      />
    </Grid>
  );
};
