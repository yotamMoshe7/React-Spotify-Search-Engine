import React from 'react';
import './ResultImage.css';
import Grid from '@material-ui/core/Grid';

export const ResultImage = ({ images }) => {
  return (
    <Grid container item justify='center' className='artist-image-wrapper'>
      <img
        src={images.length > 0 ? images[0].url : null}
        alt='result-icon'
        className='artist-image'
      />
    </Grid>
  );
};
