import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  FILTER_MORE_THEN_HUNDRED_FOLLOWERS,
  FILTER_MORE_THEN_THOUSAND_FOLLOWERS,
  FILTER_MORE_THEN_TEN_THOUSAND_FOLLOWERS,
  FILTER_MORE_THEN_HUNDRED_THOUSAND_FOLLOWERS,
  FILTER_MORE_THEN_MILION_FOLLOWERS,
} from '../../utils/Constants';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

const useStyles = makeStyles(() => ({
  formControl: { width: (isMobile) => (isMobile ? '70px' : '200px') },
  inputLabel: {
    color: 'white',
    width: '100%',
    fontSize: '20px',
    '&.Mui-focused': { color: 'white' },
  },
  select: { height: '40px', color: 'white' },
}));

export const FilterResultsButton = ({ setFilterValue }) => {
  const isMobile = useContext(IsMobileContext);
  const classes = useStyles(isMobile);

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  const createFilterOption = (text) => {
    // First call, return empty element
    if (text === '') {
      return (
        <option style={{ color: 'black' }} value={text}>
          {text}
        </option>
      );
    } else
      return (
        <option style={{ color: 'black' }} value={text}>
          {`${text} Followers`}
        </option>
      );
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.inputLabel}>Filter</InputLabel>
      <Select className={classes.select} native onChange={handleChange}>
        {createFilterOption('')}
        {createFilterOption(FILTER_MORE_THEN_HUNDRED_FOLLOWERS)}
        {createFilterOption(FILTER_MORE_THEN_THOUSAND_FOLLOWERS)}
        {createFilterOption(FILTER_MORE_THEN_TEN_THOUSAND_FOLLOWERS)}
        {createFilterOption(FILTER_MORE_THEN_HUNDRED_THOUSAND_FOLLOWERS)}
        {createFilterOption(FILTER_MORE_THEN_MILION_FOLLOWERS)}
      </Select>
    </FormControl>
  );
};
