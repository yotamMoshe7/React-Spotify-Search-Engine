import React, { useContext } from 'react';
import './ResultGenre.css';
import Grid from '@material-ui/core/Grid';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

export const ResultGenre = ({ genres }) => {
  const isMobile = useContext(IsMobileContext);

  return (
    <Grid
      container
      item
      xs={6}
      justify='center'
      className={isMobile ? 'mobile-genre' : 'genre'}
    >
      <Grid item>
        {genres !== null && genres.length > 0
          ? genres[0].split(' ').map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))
          : null}
      </Grid>
    </Grid>
  );
};
