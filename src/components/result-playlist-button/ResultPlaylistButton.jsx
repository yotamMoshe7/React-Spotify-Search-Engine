import React, { useContext } from 'react';
import './ResultPlaylistButton.css';
import Grid from '@material-ui/core/Grid';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const ResultPlaylistButton = ({ url }) => {
  const isMobile = useContext(IsMobileContext);

  return (
    <Grid
      container
      className={
        isMobile ? 'mobile-playlist-button-wrapper' : 'playlist-button-wrapper'
      }
      alignItems='center'
      justify='center'
    >
      <button
        className='playlist-button'
        onClick={() => window.open(url, '_blank')}
      >
        Go To Playlist
      </button>
    </Grid>
  );
};
