import React, { useContext } from 'react';
import './ResultFollowers.css';
import Grid from '@material-ui/core/Grid';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const ResultFollowers = ({ followers }) => {
  const isMobile = useContext(IsMobileContext);

  return (
    <Grid
      container
      item
      xs={6}
      direction='column'
      alignItems='center'
      className={isMobile ? 'mobile-followers' : 'followers'}
    >
      <Grid item>
        {followers !== null ? `Followers` : null}
        <br /> {followers !== null ? `${followers.total}` : null}
      </Grid>
    </Grid>
  );
};
