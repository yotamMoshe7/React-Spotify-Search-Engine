import React, { useContext } from 'react';
import './ResultTitle.css';
import Grid from '@material-ui/core/Grid';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const ResultTitle = ({ name }) => {
  const isMobile = useContext(IsMobileContext);

  return (
    <Grid item className={isMobile ? 'mobile-artist-name' : 'artist-name'}>
      <span className={isMobile ? 'mobile-span' : 'span'}>
        {' '}
        {name !== null ? name : null}
      </span>
    </Grid>
  );
};
