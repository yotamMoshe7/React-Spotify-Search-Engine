import React, { useContext } from 'react';
import './WelcomePage.css';
import Grid from '@material-ui/core/Grid';
import spotifyIcon from '../../assets/icons/spotifyIcon.png';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const WelcomePage = () => {
  const isMobile = useContext(IsMobileContext);

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_LOCAL_HOST_URL,
    REACT_APP_GITHUB_PAGES_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    // Check if app running locally
    const spotifyRedirectURL =
      window.location.hostname === 'localhost'
        ? REACT_APP_REDIRECT_LOCAL_HOST_URL
        : REACT_APP_GITHUB_PAGES_REDIRECT_URL;

    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${spotifyRedirectURL}&response_type=token&show_dialog=true`;
  };

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      direction='column'
      className='welcome-page-wrapper'
      onClick={handleLogin}
    >
      <div className={isMobile ? 'mobile-welcome-title' : 'welcome-title'}>
        Press Spotify Logo
      </div>
      <div>
        <img
          src={spotifyIcon}
          alt='spotify-icon'
          className={
            isMobile ? 'mobile-welcome-spotify-icon' : 'welcome-spotify-icon'
          }
        />
      </div>
    </Grid>
  );
};
