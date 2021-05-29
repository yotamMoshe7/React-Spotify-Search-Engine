import React, { useContext } from 'react';
import './ResultElement.css';
import Grid from '@material-ui/core/Grid';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';
import { ResultTitle } from '../result-title/ResultTitle';
import { ResultImage } from '../result-image/ResultImage';
import { ResultGenre } from '../result-genre/ResultGenre';
import { ResultFollowers } from '../result-followers/ResultFollowers';
import { ResultPlaylistButton } from '../result-playlist-button/ResultPlaylistButton';

export const ResultElement = ({ artistData }) => {
  const isMobile = useContext(IsMobileContext);

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={4}
      lg={3}
      justify={isMobile ? 'center' : null}
      className={isMobile ? 'mobile-element-wrapper' : 'element-wrapper'}
    >
      <Grid
        container
        item
        xs={9}
        sm={7}
        md={10}
        lg={9}
        direction='column'
        className={
          isMobile ? 'mobile-element-sub-wrapper' : 'element-sub-wrapper'
        }
      >
        <ResultTitle name={artistData.name} />
        <ResultImage images={artistData.images} />
        <Grid container className='details-wrapper'>
          <ResultGenre genres={artistData.genres} />
          <ResultFollowers followers={artistData.followers} />
        </Grid>
        <ResultPlaylistButton url={artistData.external_urls.spotify} />
      </Grid>
    </Grid>
  );
};
