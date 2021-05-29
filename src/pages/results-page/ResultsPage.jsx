import React, { useState, useEffect, useContext } from 'react';
import './ResultsPage.css';
import Grid from '@material-ui/core/Grid';
import { NAME_CATEGORY, FOLLOWERS_CATEGORY } from '../../utils/Constants';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import {
  compareByName,
  compareByFollowers,
  checkTokenExpireTime,
} from '../../utils/Utility';
import { SpotifyIcon } from '../../components/spotify-icon/SpotifyIcon';
import { SearchField } from '../../components/search-field/SearchField';
import { ResultElement } from '../../components/result-element/ResultElement';
import { SortSelectButton } from '../../components/sort-select-button/SortSelectButton';
import { FilterResultsButton } from '../../components/filter-results-button/FilterResultsButton';

export const ResultsPage = () => {
  const isMobile = useContext(IsMobileContext);
  const location = useLocation();
  const history = useHistory();

  const [sortCtegory, setSortCategory] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [allData, setAllData] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState(null);

  // Get new fetching data
  useEffect(() => {
    // Check if token time has been expire
    if (!checkTokenExpireTime()) {
      return history.push('/');
    }

    if (location.state.serverResult.artists !== null) {
      setAllData(location.state.serverResult.artists.items);
      // Show all data in first initialize
      setDataToDisplay(location.state.serverResult.artists.items);
    }
  }, [location, history]);

  // Sort category ot filter has changed
  useEffect(() => {
    let tempDataArray = [...allData];

    // Sort category has chosen
    if (sortCtegory === NAME_CATEGORY) {
      tempDataArray = tempDataArray.sort(compareByName);
    } else if (sortCtegory === FOLLOWERS_CATEGORY) {
      tempDataArray = tempDataArray.sort(compareByFollowers);
    }

    // Filter data
    tempDataArray = tempDataArray.filter(
      (element) => parseInt(element.followers.total) > filterValue
    );
    setDataToDisplay(tempDataArray);
  }, [sortCtegory, filterValue, allData]);

  return (
    <Grid container>
      <Grid
        container
        direction='column'
        className={isMobile ? null : 'wrapper'}
      >
        <Grid
          container
          justify={isMobile ? 'center' : null}
          alignItems={isMobile ? 'center' : null}
          className={isMobile ? 'mobile-results-page-title' : 'title'}
        >
          <SpotifyIcon />
          <Grid item>Spotify Search App</Grid>
        </Grid>
        <Grid
          container
          className={
            isMobile ? 'mobile-search-field-wrapper' : 'search-field-wrapper'
          }
        >
          <Grid container item justify={isMobile ? 'center' : null}>
            <SearchField setDataToDisplay={setDataToDisplay} />
          </Grid>
        </Grid>

        <Grid
          container
          className='sort-filter-wrapper'
          justify={isMobile ? 'center' : null}
        >
          <SortSelectButton setSortCategory={setSortCategory} />
          <FilterResultsButton setFilterValue={setFilterValue} />
        </Grid>

        <Grid container className='results-wrapper'>
          {dataToDisplay !== null
            ? dataToDisplay.map((artistData, index) => (
                <ResultElement key={index} artistData={artistData} />
              ))
            : null}
        </Grid>
      </Grid>
    </Grid>
  );
};
